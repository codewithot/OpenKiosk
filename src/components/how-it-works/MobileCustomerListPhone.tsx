import React from 'react'
import {
  Search,
  Plus,
  Users,
  ShoppingBag,
  Store,
  Settings,
  MoreVertical,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react'

export const MobileCustomerListPhone: React.FC<{ className?: string }> = ({ className = '' }) => {
  const customers = [
    {
      name: 'Amina Bello',
      avatarBg: 'bg-emerald-100 text-emerald-800',
      initials: 'AB',
      tag: 'VIP Buyer',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200/80',
      orders: '12 orders',
      spent: '₦342,000',
      lastSeen: 'Today, 2:15 PM',
      phone: '+234 803 ••• 4912',
    },
    {
      name: 'Emeka Nwosu',
      avatarBg: 'bg-blue-100 text-blue-800',
      initials: 'EN',
      tag: 'Repeat',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200/80',
      orders: '6 orders',
      spent: '₦128,500',
      lastSeen: 'Yesterday',
      phone: '+234 812 ••• 8821',
    },
    {
      name: 'Zainab Aliyu',
      avatarBg: 'bg-purple-100 text-purple-800',
      initials: 'ZA',
      tag: 'New',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      orders: '1 order',
      spent: '₦45,000',
      lastSeen: '2 days ago',
      phone: '+234 905 ••• 3310',
    },
    {
      name: 'Tunde Bakare',
      avatarBg: 'bg-amber-100 text-amber-800',
      initials: 'TB',
      tag: 'Repeat',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200/80',
      orders: '4 orders',
      spent: '₦94,200',
      lastSeen: '3 days ago',
      phone: '+234 708 ••• 1928',
    },
  ]

  return (
    <div className={`relative mx-auto select-none ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/70 via-indigo-50/50 to-amber-50/60 rounded-full blur-2xl -z-10" />

      {/* Floating Badge: Live Sync */}
      <div className="absolute -top-3 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-md flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[11px] font-semibold text-slate-800">Obinna's Kiosk · Live</span>
      </div>

      {/* Floating Badge: Growth Stats */}
      <div className="absolute -bottom-4 -left-2 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 shadow-lg flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
          <TrendingUp className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-medium">Customer Growth</div>
          <div className="text-xs font-bold text-slate-900">+18% this month</div>
        </div>
      </div>

      {/* Physical Phone Frame */}
      <div className="w-[280px] sm:w-[310px] bg-slate-950 p-2.5 sm:p-3 rounded-[44px] shadow-2xl border-4 border-slate-800 ring-1 ring-slate-900/40">
        {/* Dynamic Island / Speaker Notch */}
        <div className="relative pt-2 pb-1 bg-white rounded-t-[34px] text-center border-b border-slate-100">
          <div className="w-20 h-4 bg-slate-950 rounded-full mx-auto flex items-center justify-end pr-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
          </div>
          {/* Status bar: Time & Battery */}
          <div className="flex items-center justify-between px-5 pt-1 text-[10px] font-semibold text-slate-800">
            <span>9:41</span>
            <div className="flex items-center gap-1 text-[9px]">
              <span>5G</span>
              <span className="w-4 h-2 rounded-xs border border-slate-800 inline-block p-0.2">
                <span className="w-2.5 h-1 bg-slate-800 block rounded-2xs" />
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Screen Content */}
        <div className="bg-slate-50 text-slate-900 overflow-hidden flex flex-col justify-between text-left h-[440px]">
          {/* App Header */}
          <div className="bg-white px-3.5 py-2.5 border-b border-slate-100 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                  O
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 leading-none">
                    Obinna's Store
                  </h3>
                  <span className="text-[9px] text-slate-400 font-mono">
                    obinna.openkiosk.app
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"
              >
                <MoreVertical className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Title & Add Button */}
            <div className="flex items-center justify-between pt-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-extrabold text-slate-900">Customers</span>
                <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded-full">
                  142
                </span>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-1 bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-2xs"
              >
                <Plus className="w-2.5 h-2.5" />
                <span>New</span>
              </button>
            </div>

            {/* Search Input Box */}
            <div className="relative">
              <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-2" />
              <div className="w-full bg-slate-50 border border-slate-200/80 rounded-md py-1 pl-7 pr-2 text-[10px] text-slate-500">
                Search by name, phone...
              </div>
            </div>
          </div>

          {/* Customers Scroll Area */}
          <div className="p-2 space-y-1.5 overflow-hidden flex-1">
            {customers.map((c) => (
              <div
                key={c.name}
                className="bg-white p-2 rounded-xl border border-slate-200/70 shadow-2xs space-y-1"
              >
                <div className="flex items-start justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full ${c.avatarBg} font-bold text-[10px] flex items-center justify-center shrink-0`}
                    >
                      {c.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-[11px] font-bold text-slate-900 leading-tight">
                          {c.name}
                        </span>
                        <CheckCircle2 className="w-2.5 h-2.5 text-blue-500 shrink-0" />
                      </div>
                      <span className="text-[9px] text-slate-400 font-mono block">
                        {c.phone}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-extrabold text-slate-900 block leading-tight">
                      {c.spent}
                    </span>
                    <span className="text-[9px] text-slate-400">{c.orders}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-0.5 text-[9px] border-t border-slate-50">
                  <span
                    className={`font-semibold px-1.5 py-0.2 rounded border text-[8px] ${c.tagColor}`}
                  >
                    {c.tag}
                  </span>
                  <span className="text-slate-400">{c.lastSeen}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="bg-white border-t border-slate-200/80 px-4 py-2 flex items-center justify-between rounded-b-[34px]">
            <div className="flex flex-col items-center gap-0.5 text-slate-400">
              <Store className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium">Store</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 text-slate-400">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium">Orders</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 text-blue-600">
              <Users className="w-3.5 h-3.5" />
              <span className="text-[8px] font-bold">Customers</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 text-slate-400">
              <Settings className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium">Settings</span>
            </div>
          </div>
        </div>

        {/* Home Indicator Bar */}
        <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
      </div>
    </div>
  )
}

export default MobileCustomerListPhone

