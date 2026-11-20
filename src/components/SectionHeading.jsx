import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <Reveal className={`mb-12 max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      )}
      <h2 className={`text-3xl font-semibold sm:text-4xl ${light ? '!text-white' : ''}`}>{title}</h2>
      {subtitle && <p className={`mt-4 leading-relaxed ${light ? 'text-white/75' : 'text-ink/75'}`}>{subtitle}</p>}
    </Reveal>
  )
}
