import Reveal from './Reveal'

export default function ProcessSteps({ steps }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s.title}>
          <Reveal delay={i * 0.07} className="h-full">
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-serif text-3xl font-semibold text-gold">{String(i + 1).padStart(2, '0')}</span>
                <s.icon size={22} className="text-navy/60" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.text}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
