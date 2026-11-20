export default function Brand({ className = '' }) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="font-serif text-[16px] font-semibold tracking-[0.12em] text-white sm:text-lg">USA REAL ESTATE TEAM</span>
      <span className="mt-1.5 flex items-center gap-2 text-[10px] font-medium tracking-[0.35em] text-gold sm:text-[11px]">
        <span className="h-px w-6 bg-gold" aria-hidden="true" />
        AT LPT REALTY
      </span>
    </span>
  )
}
