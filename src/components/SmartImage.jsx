import { useState } from 'react'
import { ImageOff } from 'lucide-react'

/** Lazy-loaded image with a graceful fallback if the remote URL fails. */
export default function SmartImage({ src, alt, className = '', eager = false }) {
  const [failedSrc, setFailedSrc] = useState(null)
  if (failedSrc === src) {
    return (
      <div role="img" aria-label={alt || 'Image placeholder'} className={`flex flex-col items-center justify-center gap-2 bg-navy-800 text-gold/60 ${className}`}>
        <ImageOff size={28} aria-hidden="true" />
        <span className="text-[10px] uppercase tracking-widest">Image placeholder</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailedSrc(src)}
      className={`object-cover ${className}`}
    />
  )
}
