import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SmartImage from './SmartImage'
import { IMAGES } from '../data/content'

export default function CTASection({
  title = 'Ready to Make Your Next Move?',
  text = 'Tell us about your goals and our team will help you take the next step with confidence.',
  primary = { to: '/contact', label: 'Connect With Our Team' },
  secondary = { to: '/properties', label: 'Explore Properties' },
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-24">
      <SmartImage src={IMAGES.cta} alt="" className="absolute inset-0 -z-20 h-full w-full opacity-30" />
      <div className="absolute inset-0 -z-10 bg-navy/70" aria-hidden="true" />
      <div className="container-x text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold !text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">{text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link to={primary.to} className="btn btn-gold">{primary.label}</Link>
          </motion.div>
          {secondary && (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to={secondary.to} className="btn btn-outline-light">{secondary.label}</Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
