import Reveal from './Reveal'

export default function IconCard({ icon: Icon, title, text, delay = 0, dark = false }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className={`h-full rounded-2xl p-7 transition duration-300 hover:-translate-y-1 ${dark ? 'bg-white/5 ring-1 ring-white/10 hover:ring-gold/50' : 'bg-white shadow-sm ring-1 ring-navy/5 hover:shadow-lg'}`}>
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
          <Icon size={22} aria-hidden="true" className={dark ? 'text-gold' : ''} />
        </span>
        <h3 className={`text-xl font-semibold ${dark ? '!text-white' : ''}`}>{title}</h3>
        <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-ink/75'}`}>{text}</p>
      </div>
    </Reveal>
  )
}
