import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Heading, Mandala } from './Ornament'
import { weddingData as d } from '../data/weddingData'

export function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, new Date(target) - new Date())
    return { Days: Math.floor(diff / 864e5), Hours: Math.floor(diff / 36e5) % 24, Minutes: Math.floor(diff / 6e4) % 60, Seconds: Math.floor(diff / 1e3) % 60 }
  }
  const [t, setT] = useState(calc)
  useEffect(() => { const i = setInterval(() => setT(calc()), 1000); return () => clearInterval(i) }, [target])
  return t
}

export function CountdownBoxes({ small = false }) {
  const t = useCountdown(d.weddingDate)
  return (
    <div className={`flex justify-center ${small ? 'gap-2 sm:gap-4' : 'gap-3 sm:gap-8'}`}>
      {Object.entries(t).map(([k, v]) => (
        <div key={k} className={`gold-border bg-burgundy/60 text-center backdrop-blur ${small ? 'w-16 py-2 sm:w-20' : 'w-[4.6rem] py-4 sm:w-32 sm:py-8'}`}>
          <div className={`relative overflow-hidden ${small ? 'h-8 sm:h-10' : 'h-10 sm:h-16'}`}>
            <AnimatePresence mode="popLayout">
              <motion.span key={v} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -24, opacity: 0 }} transition={{ duration: 0.35 }}
                className={`gold-text absolute inset-0 font-cinzel ${small ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-6xl'}`}>
                {String(v).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="mt-1 font-cinzel text-[9px] tracking-[.2em] text-cream/80 sm:text-xs">{k}</p>
        </div>
      ))}
    </div>
  )
}

export default function Countdown() {
  return (
    <section id="countdown" className="section bg-gradient-to-b from-maroon to-burgundy">
      <Mandala className="absolute left-1/2 top-1/2 w-[140vmin] -translate-x-1/2 -translate-y-1/2 opacity-10" />
      <div className="relative mx-auto max-w-4xl">
        <Heading>Counting Every Moment Until Forever</Heading>
        <CountdownBoxes />
      </div>
    </section>
  )
}
