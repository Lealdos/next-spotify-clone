import { Stripe } from "stripe";

export interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  avatarUrl?: string;
  billingAddress?: Stripe.Address;
  paymentMethod?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}

export interface Product {
  id: string;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Stripe.Metadata;
}

export interface Price {
  id: string;
  product_id?: string;
  active?: boolean;
  description?: string;
  unitAmount?: number;
  currency?: string;
  type?: Stripe.Price.Type;
  interval?: Stripe.Price.Recurring.Interval;
  interval_count?: number;
  trialPeriodDays?: number | null;
  metadata?: Stripe.Metadata;
  products?: Product;
}

export interface Subscription {
  id: string;
  userId: string;
  status?: Stripe.Subscription.Status;
  metadata?: Stripe.Metadata;
  princeId?: string;
  quantity?: number;
  CancelAtPeriodEnd?: boolean;
  created: string;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  endedAt?: string;
  cancel_at?: string;
  canceled_at?: string;
  trialStart?: string;
  trialEnd?: string;
  prices?: Price;
}
