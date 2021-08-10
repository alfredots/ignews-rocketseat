import { loadStripe } from '@stripe/stripe-js'

export async function getStripeJs() {
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
  return stripe
}
