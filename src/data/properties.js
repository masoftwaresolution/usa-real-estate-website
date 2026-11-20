// Centralized DEMO listing data. These are sample listings only — NOT real LPT Realty listings.
import { IMG } from './images'

export const properties = [
  {
    id: 'lakeview-family-estate',
    title: 'Lakeview Family Estate',
    price: 1850000,
    address: '1200 Lakeview Terrace',
    city: 'Austin',
    state: 'TX',
    beds: 5,
    baths: 4.5,
    sqft: 4850,
    type: 'Luxury Family Home',
    yearBuilt: 2019,
    lot: '0.45 acres',
    garage: '3-car garage',
    featured: true,
    description:
      'A sample listing showcasing a spacious luxury family residence with open living areas, a chef-inspired kitchen and a private backyard retreat. Replace this text with the real property description.',
    features: ['Gourmet kitchen with island', 'Primary suite with spa bath', 'Home office', 'Covered patio', 'Smart-home wiring', 'Three-car garage'],
    images: [IMG.ext3, IMG.living1, IMG.kitchen1, IMG.bedroom1],
  },
  {
    id: 'skyline-loft-residence',
    title: 'Skyline Loft Residence',
    price: 675000,
    address: '88 Broadway Avenue, Unit 14B',
    city: 'Nashville',
    state: 'TN',
    beds: 2,
    baths: 2,
    sqft: 1420,
    type: 'Modern Apartment',
    yearBuilt: 2021,
    lot: 'N/A',
    garage: '1 reserved space',
    featured: true,
    description:
      'A sample modern apartment with floor-to-ceiling windows, an open floor plan and resort-style building amenities. Replace this text with the real property description.',
    features: ['Floor-to-ceiling windows', 'Open-concept living', 'In-unit laundry', 'Rooftop terrace access', 'Fitness center', 'Concierge service'],
    images: [IMG.apt1, IMG.apt2, IMG.kitchen2, IMG.bedroom2],
  },
  {
    id: 'modern-hillside-retreat',
    title: 'Modern Hillside Retreat',
    price: 1295000,
    address: '2750 Desert Ridge Drive',
    city: 'Scottsdale',
    state: 'AZ',
    beds: 4,
    baths: 3.5,
    sqft: 3380,
    type: 'Contemporary House',
    yearBuilt: 2020,
    lot: '0.38 acres',
    garage: '2-car garage',
    featured: true,
    description:
      'A sample contemporary home with clean architectural lines, expansive glass and indoor-outdoor living. Replace this text with the real property description.',
    features: ['Walls of glass', 'Resort-style pool', 'Outdoor kitchen', 'Vaulted ceilings', 'Mountain views', 'Energy-efficient systems'],
    images: [IMG.ext6, IMG.living2, IMG.kitchen1, IMG.living3],
  },
  {
    id: 'brownstone-row-townhouse',
    title: 'Brownstone Row Townhouse',
    price: 529000,
    address: '415 Elm Street',
    city: 'Charlotte',
    state: 'NC',
    beds: 3,
    baths: 2.5,
    sqft: 1980,
    type: 'Townhouse',
    yearBuilt: 2018,
    lot: '0.05 acres',
    garage: '1-car garage',
    featured: false,
    description:
      'A sample three-level townhouse in a walkable neighborhood with a private rooftop deck. Replace this text with the real property description.',
    features: ['Rooftop deck', 'Hardwood floors', 'Quartz countertops', 'Walkable location', 'Attached garage', 'Low-maintenance living'],
    images: [IMG.ext7, IMG.living4, IMG.kitchen2, IMG.bedroom1],
  },
  {
    id: 'azure-coast-villa',
    title: 'Azure Coast Villa',
    price: 3450000,
    address: '9 Palm Harbor Way',
    city: 'Miami',
    state: 'FL',
    beds: 6,
    baths: 6.5,
    sqft: 7200,
    type: 'Premium Villa',
    yearBuilt: 2022,
    lot: '0.62 acres',
    garage: '4-car garage',
    featured: true,
    description:
      'A sample premium waterfront-style villa with grand entertaining spaces, a resort pool and guest accommodations. Replace this text with the real property description.',
    features: ['Infinity-edge pool', 'Guest casita', 'Wine room', 'Home theater', 'Summer kitchen', 'Private dock access'],
    images: [IMG.ext5, IMG.living3, IMG.kitchen1, IMG.bedroom2],
  },
  {
    id: 'maple-grove-colonial',
    title: 'Maple Grove Colonial',
    price: 985000,
    address: '630 Maple Grove Lane',
    city: 'Charlotte',
    state: 'NC',
    beds: 4,
    baths: 3.5,
    sqft: 3600,
    type: 'Luxury Family Home',
    yearBuilt: 2016,
    lot: '0.33 acres',
    garage: '2-car garage',
    featured: true,
    description:
      'A sample classic family home on a tree-lined street with a bright kitchen, formal dining room and a fenced yard. Replace this text with the real property description.',
    features: ['Formal dining room', 'Finished basement', 'Fenced backyard', 'Fireplace', 'Walk-in closets', 'Top-rated school zone (sample)'],
    images: [IMG.ext2, IMG.living1, IMG.kitchen2, IMG.bedroom1],
  },
  {
    id: 'downtown-city-residence',
    title: 'Downtown City Residence',
    price: 565000,
    address: '300 Congress Street, Unit 9A',
    city: 'Austin',
    state: 'TX',
    beds: 2,
    baths: 2,
    sqft: 1150,
    type: 'Modern Apartment',
    yearBuilt: 2022,
    lot: 'N/A',
    garage: '1 reserved space',
    featured: false,
    description:
      'A sample downtown apartment with city views and a modern finish package, steps from dining and entertainment. Replace this text with the real property description.',
    features: ['City views', 'Balcony', 'Stainless appliances', 'Pet-friendly building', 'Co-working lounge', 'Secure entry'],
    images: [IMG.apt2, IMG.interior, IMG.kitchen1, IMG.bedroom2],
  },
  {
    id: 'desert-contemporary-home',
    title: 'Desert Contemporary Home',
    price: 1120000,
    address: '5120 Sonoran Vista Road',
    city: 'Scottsdale',
    state: 'AZ',
    beds: 4,
    baths: 3,
    sqft: 2950,
    type: 'Contemporary House',
    yearBuilt: 2021,
    lot: '0.29 acres',
    garage: '3-car garage',
    featured: false,
    description:
      'A sample single-level contemporary home with an open plan and a landscaped courtyard. Replace this text with the real property description.',
    features: ['Single-level layout', 'Courtyard entry', 'Chef\'s kitchen', 'Heated pool & spa', 'Solar-ready roof', 'Three-car garage'],
    images: [IMG.ext8, IMG.living2, IMG.kitchen2, IMG.bedroom1],
  },
]

export const LOCATIONS = [...new Set(properties.map((p) => `${p.city}, ${p.state}`))].sort()
export const TYPES = [...new Set(properties.map((p) => p.type))]

export const formatPrice = (n) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

export function filterProperties(list, { location = '', type = '', price = '', beds = '' } = {}) {
  const [minRaw, maxRaw] = price ? price.split('-') : []
  const min = Number(minRaw) || 0
  const max = maxRaw ? Number(maxRaw) : Infinity
  return list.filter(
    (p) =>
      (!location || `${p.city}, ${p.state}` === location) &&
      (!type || p.type === type) &&
      p.price >= min &&
      p.price <= max &&
      (!beds || p.beds >= Number(beds)),
  )
}

export function sortProperties(list, sort) {
  const copy = [...list]
  if (sort === 'price-asc') return copy.sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') return copy.sort((a, b) => b.price - a.price)
  return copy
}

export const getProperty = (id) => properties.find((p) => p.id === id)
