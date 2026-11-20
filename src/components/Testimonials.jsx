import { Quote } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { TESTIMONIALS } from '../data/content'

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Client Stories" title="What Clients Can Expect" subtitle="Sample testimonials shown as placeholders — replace with real, permissioned client feedback." />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/5">
                <Quote className="text-gold" size={28} aria-hidden="true" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink/80">{t.text}</blockquote>
                <figcaption className="mt-6 border-t border-navy/10 pt-4">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-sm text-ink/60">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
