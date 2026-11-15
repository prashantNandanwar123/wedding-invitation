import { motion } from 'framer-motion'

export const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Divider({ className = '' }) {
  return (
    <svg viewBox="0 0 300 24" className={`mx-auto w-56 ${className}`} fill="none" stroke="#D4AF65" strokeWidth="1">
      <path d="M0 12h120M180 12h120" />
      <path d="M150 2c4 6 10 8 10 10s-6 4-10 10c-4-6-10-8-10-10s6-4 10-10z" fill="#D4AF65" />
      <circle cx="128" cy="12" r="2" fill="#D4AF65" /><circle cx="172" cy="12" r="2" fill="#D4AF65" />
    </svg>
  )
}

export function Mandala({ className = '' }) {
  const petals = Array.from({ length: 16 })
  return (
    <svg viewBox="-100 -100 200 200" className={className} fill="none" stroke="#D4AF65" strokeWidth=".6">
      {[90, 70, 48, 26].map((r) => <circle key={r} r={r} />)}
      {petals.map((_, i) => (
        <g key={i} transform={`rotate(${(360 / 16) * i})`}>
          <path d="M0 -26C8 -40 8 -56 0 -70C-8 -56 -8 -40 0 -26Z" />
          <path d="M0 -70C10 -78 10 -86 0 -90C-10 -86 -10 -78 0 -70Z" />
        </g>
      ))}
    </svg>
  )
}

export function Heading({ children, sub, tone = 'light' }) {
  return (
    <motion.div {...reveal} className="mb-14 text-center">
      <h2 className="gold-text font-playfair text-3xl leading-tight sm:text-5xl">{children}</h2>
      <Divider className="mt-5" />
      {sub && <p className={`mx-auto mt-5 max-w-xl italic ${tone === 'dark' ? 'text-burgundy/80' : 'text-cream/80'}`}>{sub}</p>}
    </motion.div>
  )
}

export function CornerFrame() {
  const c = 'absolute h-8 w-8 border-gold'
  return (
    <>
      <span className={`${c} left-2 top-2 border-l border-t`} /><span className={`${c} right-2 top-2 border-r border-t`} />
      <span className={`${c} bottom-2 left-2 border-b border-l`} /><span className={`${c} bottom-2 right-2 border-b border-r`} />
    </>
  )
}
