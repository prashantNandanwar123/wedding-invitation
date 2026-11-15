import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import FloatingPetals from './FloatingPetals'
import { Divider, Mandala } from './Ornament'
import { CountdownBoxes } from './Countdown'
import { weddingData as d } from '../data/weddingData'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-24">
      <motion.div style={{ y, backgroundImage: `linear-gradient(rgba(59,7,24,.78), rgba(59,7,24,.92)), url(${d.palaceImage})` }} className="absolute inset-[-10%] bg-cover bg-center" />
      <Mandala className="absolute -right-32 -top-32 w-[520px] opacity-20" />
      <Mandala className="absolute -bottom-40 -left-40 w-[520px] opacity-20" />
      <FloatingPetals count={14} />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.p initial={{ opacity: 0, letterSpacing: '0.1em' }} animate={{ opacity: 1, letterSpacing: '0.4em' }} transition={{ duration: 1.5 }} className="font-cinzel text-xs text-gold sm:text-sm">YOU&apos;RE INVITED!</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="gold-text mt-4 font-playfair text-5xl leading-[1.1] sm:text-7xl">
            {d.groomShort}<span className="mx-3 text-rose">&amp;</span>{d.brideShort}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-4 text-xl italic text-cream/90 sm:text-2xl">{d.tagline}</motion.p>
          <Divider className="my-6 lg:mx-0" />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="space-y-1 font-cinzel text-sm tracking-widest text-cream">
            <p>{d.groom} &amp; {d.bride}</p>
            <p className="gold-text text-lg">{d.weddingDateText}</p>
            <p className="text-xs text-cream/80">{d.venue.name}, Jodhpur, Rajasthan</p>
          </motion.div>
          <div className="mt-8"><CountdownBoxes small /></div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1.2 }} className="relative mx-auto w-[min(80vw,24rem)]">
          <div className="absolute -inset-3 rounded-t-full border border-gold/70" />
          <div className="aspect-[3/4] overflow-hidden rounded-t-full border-2 border-gold shadow-2xl shadow-black/50">
            <motion.img src={d.heroImage} alt={`${d.groom} and ${d.bride}`} className="h-full w-full object-cover" initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 2.5 }} />
          </div>
        </motion.div>
      </div>

      <a href="#story" aria-label="Scroll down" className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gold">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}><ChevronDown size={30} /></motion.div>
      </a>
    </section>
  )
}
