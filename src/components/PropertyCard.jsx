import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bath, BedDouble, MapPin, Maximize } from 'lucide-react'
import SmartImage from './SmartImage'
import { formatPrice } from '../data/properties'
import { resize } from '../data/images'

export default function PropertyCard({ property: p, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.06 }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/5 transition-shadow hover:shadow-xl"
    >
      <Link to={`/properties/${p.id}`} tabIndex={-1} aria-hidden="true" className="relative block aspect-[4/3] overflow-hidden">
        <SmartImage src={resize(p.images[0], 800)} alt="" className="h-full w-full transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-white">{p.type}</span>
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-navy">Demo Listing</span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-serif text-2xl font-semibold text-navy">{formatPrice(p.price)}</p>
        <h3 className="mt-1 text-lg font-semibold">
          <Link to={`/properties/${p.id}`} className="hover:text-gold-dark">{p.title}</Link>
        </h3>
        <p className="mt-2 flex items-start gap-1.5 text-sm text-ink/70">
          <MapPin size={15} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />
          {p.address}, {p.city}, {p.state}
        </p>
        <ul className="mt-5 flex items-center gap-5 border-t border-navy/10 pt-4 text-sm text-ink/80">
          <li className="flex items-center gap-1.5"><BedDouble size={16} aria-hidden="true" />{p.beds}<span className="sr-only"> bedrooms</span></li>
          <li className="flex items-center gap-1.5"><Bath size={16} aria-hidden="true" />{p.baths}<span className="sr-only"> bathrooms</span></li>
          <li className="flex items-center gap-1.5"><Maximize size={16} aria-hidden="true" />{p.sqft.toLocaleString()} sq ft</li>
        </ul>
        <Link to={`/properties/${p.id}`} className="btn btn-outline mt-5 w-full">View Details</Link>
      </div>
    </motion.article>
  )
}
