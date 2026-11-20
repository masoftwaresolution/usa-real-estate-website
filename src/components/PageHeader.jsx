import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ title, subtitle, crumbs = [] }) {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1 text-xs text-white/60">
          <Link to="/" className="hover:text-gold">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight size={12} aria-hidden="true" />
              {c.to ? <Link to={c.to} className="hover:text-gold">{c.label}</Link> : <span className="text-gold">{c.label}</span>}
            </span>
          ))}
        </nav>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-semibold !text-white sm:text-5xl">
          {title}
        </motion.h1>
        {subtitle && <p className="mt-4 max-w-2xl leading-relaxed text-white/75">{subtitle}</p>}
        <div className="mt-6 h-px w-16 bg-gold" aria-hidden="true" />
      </div>
    </section>
  )
}
