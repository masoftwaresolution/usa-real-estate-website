import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

// ---- EDIT ME: all business info below is a placeholder ----
export const BRAND = { line1: 'USA REAL ESTATE TEAM', line2: 'AT LPT REALTY' }

export const CONTACT = {
  phone: '[Phone number — placeholder]',
  email: '[Email address — placeholder]',
  address: '[Office address — placeholder]',
  hours: '[Business hours — placeholder]',
}

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/properties', label: 'Properties' },
  { to: '/buy', label: 'Buy' },
  { to: '/sell', label: 'Sell' },
  { to: '/team', label: 'Our Team' },
]

// Placeholder social links — replace with the team's real profile URLs
export const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: Youtube },
]

export const PRICE_RANGES = [
  { value: '', label: 'Any Price' },
  { value: '0-500000', label: 'Under $500K' },
  { value: '500000-1000000', label: '$500K – $1M' },
  { value: '1000000-2000000', label: '$1M – $2M' },
  { value: '2000000-', label: '$2M+' },
]

export const BED_OPTIONS = [
  { value: '', label: 'Any Beds' },
  { value: '1', label: '1+ Beds' },
  { value: '2', label: '2+ Beds' },
  { value: '3', label: '3+ Beds' },
  { value: '4', label: '4+ Beds' },
  { value: '5', label: '5+ Beds' },
]

export const DISCLAIMER =
  'This website is an independent redesign concept and is not officially affiliated with or approved by LPT Realty. All listings, testimonials and team details are sample placeholder content.'
