export type StoreSectionType = 
  | 'announcement'
  | 'hero'
  | 'featured-products'
  | 'image-text'
  | 'reviews'
  | 'newsletter'
  | 'footer';

export interface StoreSection {
  id: string;
  type: StoreSectionType;
  title: string;
  isVisible: boolean;
  settings: Record<string, any>;
}

export interface StoreTheme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: 'sans' | 'serif' | 'mono';
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
  headerStyle: 'standard' | 'minimal' | 'centered';
}

export interface TenantSettings {
  currency: string;
  taxRate: number;
  freeShippingThreshold: number;
  stripeConnected: boolean;
  supportEmail: string;
  customDomain?: string;
}

export interface Tenant {
  id: string;
  slug: string; // Used for routing: /store/{slug} or {slug}.yourplatform.com
  name: string;
  tagline: string;
  logoUrl?: string;
  createdAt: string;
  plan: 'free' | 'growth' | 'enterprise';
  theme: StoreTheme;
  sections: StoreSection[];
  settings: TenantSettings;
}

export interface Product {
  id: string;
  tenantId: string;
  title: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  stock: number;
  sku: string;
  imageUrl: string;
  isPublished: boolean;
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface Order {
  id: string;
  tenantId: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  shippingAddress: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  paymentStatus: 'paid' | 'pending' | 'failed' | 'refunded';
  fulfillmentStatus: 'unfulfilled' | 'fulfilled' | 'shipped' | 'cancelled';
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

