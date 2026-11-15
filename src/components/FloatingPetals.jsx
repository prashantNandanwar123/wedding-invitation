import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function FloatingPetals({ count = 18, gold = true }) {
  const items = useMemo(() => Array.from({ length: count }, (_, i) => ({
    id: i, left: Math.random() * 100, size: 8 + Math.random() * 14, delay: Math.random() * 10,
    dur: 10 + Math.random() * 10, drift: (Math.random() - 0.5) * 160,
    color: i % 5 === 0 ? '#D4AF65' : i % 2 ? '#B76E79' : '#F2A65A',
    dot: gold && i % 4 === 0,
  })), [count, gold])
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-0 block"
          style={{ left: `${p.left}%`, width: p.dot ? 4 : p.size, height: p.dot ? 4 : p.size * 1.3, background: p.color,
            borderRadius: p.dot ? '50%' : '70% 0 70% 0', opacity: 0.8, boxShadow: p.dot ? '0 0 8px #D4AF65' : 'none' }}
          initial={{ y: -40, rotate: 0 }}
          animate={{ y: '105vh', x: p.drift, rotate: 360 }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  )
}
