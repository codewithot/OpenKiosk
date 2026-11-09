import React, { useState } from 'react'
import {
  ShoppingBag,
  Sparkles,
  Layout,
  Star,
  Layers,
  Lock,
  CheckCircle2,
  Plus,
  Check,
  RotateCcw,
  Sliders,
  ArrowRight,
  Zap,
} from 'lucide-react'

export interface StoreBuilderPreviewProps {
  className?: string
}

type ThemeKey = 'amber' | 'slate' | 'matcha' | 'terracotta'
type SectionKey = 'header' | 'hero' | 'featured' | 'reviews'
type CategoryKey = 'all' | 'coffee' | 'iced' | 'pastries'

interface ProductItem {
  id: number
  name: string
  category: 'coffee' | 'iced' | 'pastries'
  price: number
  formattedPrice: string
  rating: number
  badge: string
  badgeColor: string
  desc: string
  image: string
  fallbackEmoji: string
}

const defaultProducts: ProductItem[] = [
  {
    id: 1,
    name: 'Iced Spanish Latte',
    category: 'iced',
    price: 4800,
    formattedPrice: '₦4,800',
    rating: 4.9,
    badge: 'BESTSELLER',
    badgeColor: 'bg-amber-500 text-slate-950 font-bold',
    desc: 'Double espresso, condensed milk, chilled rich cream.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=80',
    fallbackEmoji: '🥤',
  },
  {
    id: 2,
    name: 'Ethiopia Yirgacheffe (250g)',
    category: 'coffee',
    price: 8500,
    formattedPrice: '₦8,500',
    rating: 5.0,
    badge: 'FRESH ROAST',
    badgeColor: 'bg-blue-600 text-white font-bold',
    desc: 'Single origin roasted weekly in Lekki. Floral peach & dark cocoa.',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=300&q=80',
    fallbackEmoji: '☕',
  },
  {
    id: 3,
    name: 'Butter Almond Croissant',
    category: 'pastries',
    price: 3500,
    formattedPrice: '₦3,500',
    rating: 4.8,
    badge: 'OVEN FRESH',
    badgeColor: 'bg-emerald-600 text-white font-bold',
    desc: '48-hour French laminated pastry with frangipane.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80',
    fallbackEmoji: '🥐',
  },
]

const headlinePresets = [
  { label: 'Artisan Roast', text: 'Artisan coffee, roasted fresh weekly in Lagos' },
  { label: '15m Delivery', text: 'Hot specialty coffee & pastries ready in 15 mins' },
  { label: 'Lagos Favorite', text: "Lagos' favorite artisan cafe & cold brew bar" },
]

export const StoreBuilderPreview: React.FC<StoreBuilderPreviewProps> = ({ className = '' }) => {
  // Live editable tenant landing page states
  const [storeName, setStoreName] = useState("Folake's Cafe")
  const [headline, setHeadline] = useState('Artisan coffee, roasted fresh weekly in Lagos')
  const [subheadline, setSubheadline] = useState('Single-origin beans, iced Spanish lattes & oven-fresh croissants delivered across Lagos.')
  const [buttonText, setButtonText] = useState('Order for pickup')
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>('amber')
  const [activeSection, setActiveSection] = useState<SectionKey>('hero')
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')
  const [showAnnouncement, setShowAnnouncement] = useState(true)
  const [announcementText, setAnnouncementText] = useState('⚡ 10% off your first order · Free delivery over ₦15,000')
  const [cartCount, setCartCount] = useState(2)
  const [lastAddedId, setLastAddedId] = useState<number | null>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  const themeConfig = {
    amber: {
      name: 'Espresso Amber',
      swatch: 'bg-amber-600',
      heroBg: 'bg-gradient-to-br from-amber-950 via-stone-900 to-neutral-950 text-white',
      accentText: 'text-amber-400',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      ctaBtn: 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold',
      cartBadge: 'bg-amber-500 text-slate-950',
      activeRing: 'ring-amber-500',
    },
    slate: {
      name: 'Modern Slate',
      swatch: 'bg-slate-900',
      heroBg: 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white',
      accentText: 'text-blue-400',
      badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      ctaBtn: 'bg-blue-600 hover:bg-blue-500 text-white font-bold',
      cartBadge: 'bg-blue-600 text-white',
      activeRing: 'ring-blue-500',
    },
    matcha: {
      name: 'Matcha Forest',
      swatch: 'bg-emerald-700',
      heroBg: 'bg-gradient-to-br from-emerald-950 via-stone-900 to-neutral-950 text-white',
      accentText: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      ctaBtn: 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold',
      cartBadge: 'bg-emerald-500 text-slate-950',
      activeRing: 'ring-emerald-500',
    },
    terracotta: {
      name: 'Warm Terracotta',
      swatch: 'bg-orange-600',
      heroBg: 'bg-gradient-to-br from-orange-950 via-stone-900 to-neutral-950 text-white',
      accentText: 'text-orange-400',
      badgeBg: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      ctaBtn: 'bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold',
      cartBadge: 'bg-orange-500 text-slate-950',
      activeRing: 'ring-orange-500',
    },
  }

  const currentTheme = themeConfig[selectedTheme]

  const handleAddToCart = (id: number) => {
    setCartCount((prev) => prev + 1)
    setLastAddedId(id)
    setHasInteracted(true)
    setTimeout(() => setLastAddedId(null), 1200)
  }

  const handleResetDefaults = () => {
    setStoreName("Folake's Cafe")
    setHeadline('Artisan coffee, roasted fresh weekly in Lagos')
    setSubheadline('Single-origin beans, iced Spanish lattes & oven-fresh croissants delivered across Lagos.')
    setButtonText('Order for pickup')
    setSelectedTheme('amber')
    setActiveSection('hero')
    setActiveCategory('all')
    setShowAnnouncement(true)
    setCartCount(2)
  }

  const filteredProducts =
    activeCategory === 'all'
      ? defaultProducts
      : defaultProducts.filter((p) => p.category === activeCategory)

  return (
    <div className={`relative mx-auto w-full max-w-5xl select-none ${className}`}>
      {/* "Try It Now" Banner positioned where the previous demo pill was */}
      <div className="flex items-center mb-3 px-1">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="font-bold text-slate-900">Try it now:</span>
          <span>Pick themes, change copy & add items live!</span>
        </div>
      </div>

      {/* Outer ambient glow and frame container */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-amber-100/50 via-blue-50/40 to-indigo-100/40 rounded-[32px] blur-xl opacity-80 -z-10" />

      {/* Top Floating Pill Badge - Palremit Style */}
      <div className="hidden sm:inline-flex absolute -top-4 -right-2 sm:right-4 bg-slate-950 text-white px-3.5 py-1.5 rounded-full shadow-lg border border-slate-800 items-center gap-2 text-xs font-medium z-30">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono text-[11px] text-slate-200">folakescafe.openkiosk.app</span>
        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/60">
          LIVE
        </span>
      </div>

      {/* Browser Window Frame */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden text-left">
        {/* Top Browser Bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-100 bg-slate-50/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400/90 inline-block shadow-2xs" />
            <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block shadow-2xs" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/90 inline-block shadow-2xs" />
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-1 bg-white border border-slate-200/80 rounded-lg text-xs font-mono text-slate-600 shadow-2xs">
            <Lock className="w-3 h-3 text-slate-400" />
            <span>admin.openkiosk.app / store / editor</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setHasInteracted(true)
                setSelectedTheme((prev) => (prev === 'amber' ? 'slate' : prev === 'slate' ? 'matcha' : 'amber'))
              }}
              className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow-xs cursor-pointer transition-transform active:scale-95"
              title="Click to test live customization"
            >
              <Zap className="w-3 h-3 text-amber-300" />
              <span>Try theme</span>
            </button>
            <div className="hidden md:flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
              <CheckCircle2 className="w-3 h-3" />
              <span>{hasInteracted ? 'Customized' : 'Live sync'}</span>
            </div>
          </div>
        </div>

        {/* 3-Column Editor Layout */}
        <div className="grid grid-cols-12 min-h-[460px] lg:min-h-[500px] xl:min-h-[540px] bg-slate-50/40">
          {/* Left Column: Sections Tree */}
          <div className="hidden sm:block sm:col-span-3 border-r border-slate-100 p-3.5 bg-white/70 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                  Sections
                </p>
                <Layers className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="space-y-1">
                {[
                  { id: 'header', label: 'Header & Logo', icon: Layout },
                  { id: 'hero', label: 'Hero banner', icon: Sparkles },
                  { id: 'featured', label: 'Menu & Products', icon: ShoppingBag },
                  { id: 'reviews', label: 'Customer Reviews', icon: Star },
                ].map((item) => {
                  const isActive = activeSection === item.id
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveSection(item.id as SectionKey)
                        setHasInteracted(true)
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 shadow-2xs font-semibold border border-blue-100'
                          : 'text-slate-600 hover:bg-slate-100/80'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">edit</span>
                    </button>
                  )
                })}
              </div>

              {/* Live Status indicator */}
              <div className="mt-4 p-2.5 bg-blue-50/60 rounded-xl border border-blue-100/80 text-[11px] text-blue-800 space-y-1">
                <div className="font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  <span>Instant visual editor</span>
                </div>
                <p className="text-[10px] text-blue-600/90 leading-tight">
                  Changes save to tenant subdomain immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Live Tenant Store Canvas */}
          <div className="col-span-12 sm:col-span-6 p-3 sm:p-4 flex flex-col justify-between">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col">
              {/* Optional Store Announcement Bar */}
              {showAnnouncement && (
                <div className="bg-slate-900 text-white text-[10px] sm:text-[11px] font-medium py-1 px-3 text-center flex items-center justify-center gap-1.5 border-b border-slate-800">
                  <span className="truncate">{announcementText}</span>
                </div>
              )}

              {/* Store Navbar Preview */}
              <div className="px-3.5 py-2.5 border-b border-slate-100 flex items-center justify-between bg-white">
                <div>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
                    <span className="text-base">☕</span>
                    <span>{storeName}</span>
                  </span>
                  <span className="text-[9px] text-slate-400 hidden sm:block">
                    Artisan Roastery & Bakery · Lagos
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] shrink-0">
                  <span className="hidden sm:inline text-slate-500 font-medium">Menu</span>
                  <span className="hidden sm:inline text-slate-500 font-medium">Reviews</span>
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[11px] font-bold shadow-2xs transition-all shrink-0 cursor-pointer ${currentTheme.cartBadge}`}
                    title="Cart"
                  >
                    <span className="text-xs">🛒</span>
                    <span>({cartCount})</span>
                  </button>
                </div>
              </div>

              {/* Store Hero Banner */}
              <div className={`p-4 sm:p-5 transition-all duration-300 relative overflow-hidden ${currentTheme.heroBg}`}>
                {/* Background accent ring */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border backdrop-blur-xs ${currentTheme.badgeBg}`}>
                      <Star className="w-2.5 h-2.5 fill-current" />
                      <span>4.9 · Lagos Specialty Roast</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg xl:text-xl font-extrabold tracking-tight leading-snug max-w-sm">
                    {headline}
                  </h3>

                  <p className="text-[11px] opacity-80 leading-relaxed max-w-xs font-normal">
                    {subheadline}
                  </p>

                  <div className="flex items-center gap-2 pt-1.5">
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-sm transition-transform active:scale-95 cursor-pointer ${currentTheme.ctaBtn}`}
                    >
                      <span>{buttonText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <span className="text-[10px] text-slate-300 font-medium px-2">
                      Ready in 15 mins
                    </span>
                  </div>
                </div>
              </div>

              {/* Category Pills Bar inside Store */}
              <div className="px-3 pt-3 pb-1 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {[
                  { id: 'all', label: 'All Menu (3)' },
                  { id: 'iced', label: '🧊 Iced Drinks' },
                  { id: 'coffee', label: '☕ Hot Brews' },
                  { id: 'pastries', label: '🥐 Bakery' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id as CategoryKey)
                      setHasInteracted(true)
                    }}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-semibold transition-colors shrink-0 cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Real Menu / Product Grid */}
              <div className="p-3 grid grid-cols-3 gap-2">
                {filteredProducts.map((product) => {
                  const wasJustAdded = lastAddedId === product.id
                  return (
                    <div
                      key={product.id}
                      className="group bg-slate-50/80 rounded-xl border border-slate-200/80 p-2 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
                    >
                      <div className="space-y-1.5">
                        {/* Product Image Container */}
                        <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-200">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <span className={`absolute top-1 right-1 text-[8px] font-bold px-1.5 py-0.5 rounded shadow-2xs ${product.badgeColor}`}>
                            {product.badge}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <div>
                          <h4 className="text-[11px] font-bold text-slate-900 leading-tight truncate" title={product.name}>
                            {product.name}
                          </h4>
                          <p className="text-[9px] text-slate-500 line-clamp-1 leading-tight">
                            {product.desc}
                          </p>
                        </div>
                      </div>

                      {/* Price & Add Button */}
                      <div className="pt-2 flex items-center justify-between border-t border-slate-100/90 mt-1.5">
                        <span className="text-[11px] font-extrabold text-slate-900">
                          {product.formattedPrice}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleAddToCart(product.id)}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all flex items-center gap-0.5 cursor-pointer ${
                            wasJustAdded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-900 hover:bg-slate-800 text-white'
                          }`}
                        >
                          {wasJustAdded ? (
                            <>
                              <Check className="w-2.5 h-2.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-2.5 h-2.5" />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Lagos Customer Review Snippet */}
              <div className="px-3 py-2 bg-amber-50/60 border-t border-amber-100/80 flex items-center gap-2">
                <span className="text-xs">💬</span>
                <p className="text-[10px] text-amber-900 leading-tight truncate">
                  <span className="font-bold">“Best iced latte in Lekki!”</span> — Verified customer review on OpenKiosk
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Live Inspector Controls */}
          <div className="hidden sm:block sm:col-span-3 border-l border-slate-100 p-3.5 bg-white/70 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  <Sliders className="w-3.5 h-3.5 text-blue-600" />
                  <span>Customize Store</span>
                </div>
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="text-[10px] text-slate-400 hover:text-slate-600 flex items-center gap-0.5 cursor-pointer"
                  title="Reset to default preview"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Theme Palette Switcher */}
              <div className="space-y-1.5 mb-3.5 p-2 bg-slate-50/80 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-slate-700">Theme Palette</label>
                  <span className="text-[10px] text-slate-500 font-medium">{currentTheme.name}</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  {(Object.keys(themeConfig) as ThemeKey[]).map((key) => {
                    const theme = themeConfig[key]
                    const isSelected = selectedTheme === key
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setSelectedTheme(key)
                          setHasInteracted(true)
                        }}
                        className={`w-6 h-6 rounded-full ${theme.swatch} transition-all cursor-pointer ${
                          isSelected ? `ring-2 ring-offset-2 ${theme.activeRing} scale-110 shadow-xs` : 'hover:scale-105'
                        }`}
                        title={theme.name}
                      />
                    )
                  })}
                </div>
              </div>

              {/* Dynamic Controls based on selected section */}
              <div className="space-y-3">
                {/* Store Name Input */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block">Store Name</label>
                  <input
                    type="text"
                    value={storeName}
                    onChange={(e) => {
                      setStoreName(e.target.value)
                      setHasInteracted(true)
                    }}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-2xs"
                    placeholder="Enter store name..."
                  />
                </div>

                {/* Headline Input & Quick Presets */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold text-slate-700">Hero Headline</label>
                    <span className="text-[9px] text-blue-600 font-medium">live update</span>
                  </div>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e) => {
                      setHeadline(e.target.value)
                      setHasInteracted(true)
                    }}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-2xs font-medium"
                    placeholder="Write headline..."
                  />

                  {/* 1-Click Presets */}
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {headlinePresets.map((preset) => (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => {
                          setHeadline(preset.text)
                          setHasInteracted(true)
                        }}
                        className="text-[9px] font-semibold px-2 py-0.5 rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 transition-colors cursor-pointer"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Button Text Input */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block">CTA Button</label>
                  <input
                    type="text"
                    value={buttonText}
                    onChange={(e) => {
                      setButtonText(e.target.value)
                      setHasInteracted(true)
                    }}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-2xs font-medium"
                    placeholder="Button label..."
                  />
                </div>

                {/* Announcement Bar Toggle & Input */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-700">Top Promo Bar</span>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAnnouncement(!showAnnouncement)
                        setHasInteracted(true)
                      }}
                      className={`w-8 h-4 rounded-full transition-colors p-0.5 cursor-pointer ${
                        showAnnouncement ? 'bg-blue-600' : 'bg-slate-300'
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full bg-white transition-transform ${
                          showAnnouncement ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                  {showAnnouncement && (
                    <input
                      type="text"
                      value={announcementText}
                      onChange={(e) => {
                        setAnnouncementText(e.target.value)
                        setHasInteracted(true)
                      }}
                      className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-[11px] text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-2xs font-normal"
                      placeholder="Promo banner copy..."
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Order Notification Card - Palremit Style! */}
      <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-200/90 flex items-center gap-3.5 z-30 max-w-[280px] sm:max-w-[320px]">
        <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 shadow-2xs">
          <ShoppingBag className="w-5 h-5 text-emerald-600" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
              Live Order · Just now
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
            Iced Spanish Latte (x2) · ₦9,600
          </p>
          <p className="text-[10px] text-slate-500">
            Paid via Paystack · Victoria Island, Lagos
          </p>
        </div>
      </div>
    </div>
  )
}

export default StoreBuilderPreview

