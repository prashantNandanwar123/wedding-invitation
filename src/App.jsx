import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import OpeningInvitation from './components/OpeningInvitation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CoupleStory from './components/CoupleStory'
import WeddingEvents from './components/WeddingEvents'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import Venue from './components/Venue'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import { weddingData as d } from './data/weddingData'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    document.title = `${d.groomShort} & ${d.brideShort} | Wedding Invitation | ${d.weddingDateText}`
    const t = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div key="load" exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="fixed inset-0 z-[60] grid place-items-center bg-burgundy">
            <div className="text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: 'linear' }} className="mx-auto mb-4 h-16 w-16 rounded-full border border-dashed border-gold" />
              <p className="gold-text font-playfair text-2xl">{d.groomShort} &amp; {d.brideShort}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && !opened && <OpeningInvitation onOpen={() => setOpened(true)} />}
      <MusicPlayer start={opened} />

      <Navbar />
      <main>
        <Hero />
        <CoupleStory />
        <WeddingEvents />
        <Countdown />
        <Gallery />
        <Venue />
        <RSVP />
      </main>
      <Footer />
    </>
  )
}
