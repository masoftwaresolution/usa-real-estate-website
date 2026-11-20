import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SmartImage from './SmartImage'
import PropertySearch from './PropertySearch'
import { IMAGES } from '../data/content'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } }
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }

export default function Hero() {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({ location: '', type: '', price: '', beds: '' })

  const search = (f) => {
    const qs = new URLSearchParams(Object.entries(f).filter(([, v]) => v)).toString()
    navigate(`/properties${qs ? `?${qs}` : ''}`)
  }

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <SmartImage src={IMAGES.hero} alt="Luxury American home exterior at dusk" eager className="absolute inset-0 -z-20 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/85" aria-hidden="true" />
      <div className="container-x pb-16 pt-24 sm:pt-32 lg:pb-20 lg:pt-40">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={item} className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold">USA Real Estate Team · at LPT Realty</motion.p>
          <motion.h1 variants={item} className="text-4xl font-semibold leading-tight !text-white sm:text-5xl lg:text-6xl">
            Find Your Place. Discover Your Future.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            We are a dedicated real estate team helping buyers and sellers navigate every step with local insight, honest guidance and a personal touch.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}><Link to="/properties" className="btn btn-gold w-full sm:w-auto">Explore Properties</Link></motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}><Link to="/contact" className="btn btn-outline-light w-full sm:w-auto">Connect With Our Team</Link></motion.div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }} className="mt-14">
          <PropertySearch filters={filters} setFilters={setFilters} onSubmit={search} buttonLabel="Search" />
        </motion.div>
      </div>
    </section>
  )
}
