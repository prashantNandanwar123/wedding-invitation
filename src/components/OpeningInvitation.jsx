import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FloatingPetals from './FloatingPetals'
import { Mandala } from './Ornament'
import { weddingData as d } from '../data/weddingData'

export default function OpeningInvitation({ onOpen }) {
  const [opened, setOpened] = useState(false)
  const [leaving, setLeaving] = useState(false)

  const open = () => {
    setOpened(true)
    onOpen?.() // user gesture -> music may start
    setTimeout(() => setLeaving(true), 3600)
  }

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-burgundy via-[#4a0a1f] to-maroon px-4"
          exit={{ opacity: 0, scale: 1.08 }} transition={{ duration: 1.1 }}
        >
          <div className="mandala-bg absolute inset-0" />
          <Mandala className="absolute -top-24 left-1/2 w-[120vmin] -translate-x-1/2 opacity-30" />
          <FloatingPetals count={22} />

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center">
            <p className="gold-text font-deva text-xl sm:text-3xl">|| श्री गणेशाय नमः ||</p>
            <motion.svg viewBox="0 0 120 120" className="mx-auto my-3 w-20 sm:w-24" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
              {/* Stylised Ganesha motif */}
              <circle cx="60" cy="60" r="56" fill="none" stroke="#D4AF65" strokeWidth="1.5" />
              <path d="M60 18c-12 0-22 8-22 20 0 6 2 10 6 14-8 4-14 12-14 22 0 4 2 8 4 10h52c2-2 4-6 4-10 0-10-6-18-14-22 4-4 6-8 6-14 0-12-10-20-22-20z" fill="#D4AF65" />
              <path d="M60 52c-4 8-2 20 6 28 4 4 10 2 10-2" fill="none" stroke="#6D1028" strokeWidth="4" strokeLinecap="round" />
              <circle cx="50" cy="44" r="2.5" fill="#6D1028" /><circle cx="70" cy="44" r="2.5" fill="#6D1028" />
              <path d="M52 26h16l-8-10z" fill="#6D1028" />
            </motion.svg>
            <h1 className="font-cinzel text-sm tracking-[.35em] text-cream sm:text-lg">Together With Their Families</h1>
          </motion.div>

          {/* Envelope */}
          <div className="relative z-10 mt-8 h-52 w-[min(86vw,22rem)] sm:h-60" style={{ perspective: 900 }}>
            <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-[#e8c97a] to-[#b8913f] shadow-2xl" />
            <motion.div
              className="absolute left-3 right-3 z-10 rounded-sm bg-cream p-4 text-center text-burgundy"
              initial={{ y: 0, height: '70%', top: '15%' }}
              animate={opened ? { y: -150, height: '92%' } : {}}
              transition={{ delay: 0.9, duration: 1.4, ease: 'easeInOut' }}
              style={{ top: '14%' }}
            >
              <div className="gold-border h-full p-2">
                <p className="font-cinzel text-[10px] tracking-[.3em]">THE WEDDING OF</p>
                <p className="mt-1 font-playfair text-xl text-maroon sm:text-2xl">{d.groomShort} &amp; {d.brideShort}</p>
                <p className="mt-1 text-sm italic">{d.weddingDateText}</p>
              </div>
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 z-20 h-3/4 bg-gradient-to-br from-[#d9b25f] to-[#a67f32]" style={{ clipPath: 'polygon(0 100%, 0 0, 50% 55%, 100% 0, 100% 100%)' }} />
            <motion.div
              className="absolute inset-x-0 top-0 z-30 h-1/2 origin-top bg-gradient-to-b from-[#f0d58b] to-[#c9a04a]"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', transformStyle: 'preserve-3d' }}
              animate={opened ? { rotateX: 180, zIndex: 5 } : {}}
              transition={{ duration: 0.9 }}
            />
            {!opened && <div className="absolute left-1/2 top-[44%] z-40 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-maroon text-gold shadow-lg ring-2 ring-gold">❦</div>}
          </div>

          <motion.button
            className="btn-gold relative z-10 mt-10" onClick={open} disabled={opened}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0 }} animate={{ opacity: opened ? 0 : 1 }} transition={{ delay: opened ? 0 : 1 }}
          >
            Open Invitation
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
