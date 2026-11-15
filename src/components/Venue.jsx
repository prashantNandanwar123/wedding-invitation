import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import { Heading, reveal } from './Ornament'
import { weddingData as d } from '../data/weddingData'

export default function Venue() {
  const v = d.venue
  return (
    <section id="venue" className="section bg-gradient-to-b from-maroon to-burgundy">
      <div className="mx-auto max-w-6xl">
        <Heading>Celebrate With Us</Heading>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div {...reveal} className="relative">
            <div className="absolute -inset-3 border border-gold/60" />
            <img src={v.image} alt={v.name} loading="lazy" className="relative aspect-[4/3] w-full object-cover" />
          </motion.div>
          <motion.div {...reveal} className="text-center lg:text-left">
            <h3 className="gold-text font-playfair text-3xl sm:text-4xl">{v.name}</h3>
            <p className="mt-4 flex items-start justify-center gap-2 text-xl text-cream/90 lg:justify-start"><MapPin className="mt-1 shrink-0 text-gold" size={20} />{v.address}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a href={v.mapsUrl} target="_blank" rel="noreferrer" className="btn-gold"><MapPin size={16} /> Google Maps</a>
              <a href={v.directionsUrl} target="_blank" rel="noreferrer" className="btn-ghost"><Navigation size={16} /> Get Directions</a>
            </div>
          </motion.div>
        </div>
        <motion.div {...reveal} className="mt-12 h-72 overflow-hidden border border-gold/60 sm:h-96">
          <iframe title="Venue map" src={v.embedUrl} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </motion.div>
      </div>
    </section>
  )
}
