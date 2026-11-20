import {
  Building2, Handshake, Home, Map, MapPin, MessageSquare, ShieldCheck, Tag, Target, TrendingUp,
  Search, FileText, KeyRound, Camera, Megaphone, Users, ClipboardList, BadgeDollarSign, Sparkles,
} from 'lucide-react'

import { IMG, u, resize } from './images'

export const IMAGES = {
  hero: resize(IMG.ext1, 2200),
  about: u('photo-1560518883-ce09059eeffa', 1400),
  team: u('photo-1600585154340-be6161a56a0c', 2000),
  buy: u('photo-1568605114967-8130f3a36994', 1400),
  sell: u('photo-1600596542815-ffad4c1539a9', 1400),
  photography: u('photo-1600607687939-ce8a6c25118c', 1400),
  cta: u('photo-1512917774080-9991f1c4c750', 2000),
}

export const SERVICES = [
  { icon: Home, title: 'Buyer Representation', text: 'Guidance from first search to closing day, with clear communication at every step.' },
  { icon: Tag, title: 'Seller Marketing', text: 'Strategic pricing and polished presentation designed to attract qualified buyers.' },
  { icon: TrendingUp, title: 'Property Valuation', text: 'Market-informed pricing conversations so you can make confident decisions.' },
  { icon: Map, title: 'Relocation Support', text: 'Neighborhood insight and planning help for moving to a new city.' },
  { icon: Building2, title: 'Investment Guidance', text: 'Support for evaluating residential investment opportunities.' },
  { icon: Handshake, title: 'Negotiation & Closing', text: 'Skilled advocacy through offers, inspections and the final paperwork.' },
]

export const WHY = [
  { icon: MapPin, title: 'Local Market Insight', text: 'Neighborhood-level knowledge to help you choose well.' },
  { icon: MessageSquare, title: 'Clear Communication', text: 'Honest, timely updates so you always know what comes next.' },
  { icon: Target, title: 'Tailored Strategy', text: 'A plan built around your goals, budget and timeline.' },
  { icon: ShieldCheck, title: 'Full-Service Support', text: 'A coordinated team behind you from start to finish.' },
]

export const NEIGHBORHOODS = [
  { name: 'Austin', location: 'Austin, TX', image: u('photo-1564013799919-ab600027ffc6', 900), blurb: 'Creative energy, lakes and growing communities.' },
  { name: 'Nashville', location: 'Nashville, TN', image: u('photo-1502672260266-1c1ef2d93688', 900), blurb: 'Vibrant city living with a welcoming spirit.' },
  { name: 'Scottsdale', location: 'Scottsdale, AZ', image: u('photo-1600585154340-be6161a56a0c', 900), blurb: 'Desert views, modern design and outdoor living.' },
  { name: 'Charlotte', location: 'Charlotte, NC', image: u('photo-1583608205776-bfd35f0d9f83', 900), blurb: 'Tree-lined streets and walkable neighborhoods.' },
]

// Placeholder testimonials — replace with real, permissioned client feedback
export const TESTIMONIALS = [
  { name: 'Sample Client A', role: 'Home Buyer', text: 'Placeholder testimonial: the team made our search feel organized and stress-free from the very first conversation.' },
  { name: 'Sample Client B', role: 'Home Seller', text: 'Placeholder testimonial: clear communication and a thoughtful marketing plan helped us feel confident the whole way.' },
  { name: 'Sample Client C', role: 'Relocating Family', text: 'Placeholder testimonial: moving to a new city was easier with such helpful neighborhood guidance.' },
]

export const BUY_STEPS = [
  { icon: Users, title: 'Discovery Call', text: 'Share your goals, must-haves, budget and timeline.' },
  { icon: BadgeDollarSign, title: 'Financial Readiness', text: 'Review financing options and get pre-approved with a lender.' },
  { icon: Search, title: 'Search & Tours', text: 'Receive curated listings and tour the homes that fit.' },
  { icon: FileText, title: 'Offer & Negotiation', text: 'Craft a competitive offer and negotiate the terms.' },
  { icon: KeyRound, title: 'Inspection to Closing', text: 'Coordinate inspections, appraisal and final paperwork, then get your keys.' },
]

export const SELL_STEPS = [
  { icon: Users, title: 'Consultation', text: 'Discuss your goals, timing and the condition of your home.' },
  { icon: ClipboardList, title: 'Valuation & Pricing', text: 'Review comparable sales and agree on a pricing strategy.' },
  { icon: Sparkles, title: 'Prepare & Stage', text: 'Make smart improvements and present your home at its best.' },
  { icon: Megaphone, title: 'Market & Show', text: 'Launch marketing, host showings and gather feedback.' },
  { icon: Handshake, title: 'Negotiate & Close', text: 'Evaluate offers, manage the contract and close with confidence.' },
]

export const MARKETING = [
  { icon: Camera, title: 'Professional Visuals', text: 'High-quality photography and presentation.' },
  { icon: Megaphone, title: 'Multi-Channel Promotion', text: 'Online listing exposure and social media campaigns.' },
  { icon: Users, title: 'Network Outreach', text: 'Sharing your home with agents and buyers in our network.' },
  { icon: Target, title: 'Targeted Strategy', text: 'Messaging tailored to the most likely buyers.' },
]

// Placeholder team — replace names, roles and add `photo` URLs
export const TEAM = [
  { name: 'Agent Name 01', role: 'Role Title (placeholder)', bio: 'Editable placeholder bio. Add a short, accurate introduction for this team member.' },
  { name: 'Agent Name 02', role: 'Role Title (placeholder)', bio: 'Editable placeholder bio. Add a short, accurate introduction for this team member.' },
  { name: 'Agent Name 03', role: 'Role Title (placeholder)', bio: 'Editable placeholder bio. Add a short, accurate introduction for this team member.' },
  { name: 'Agent Name 04', role: 'Role Title (placeholder)', bio: 'Editable placeholder bio. Add a short, accurate introduction for this team member.' },
]
