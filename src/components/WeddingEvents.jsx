import { motion } from 'framer-motion'
import { Sun, Leaf, Music, Flame, Wine, Calendar, Clock, MapPin, Shirt } from 'lucide-react'
import { Heading, CornerFrame } from './Ornament'
import { weddingData as d } from '../data/weddingData'

const icons = { sun: Sun, leaf: Leaf, music: Music, flame: Flame, wine: Wine }

export default function WeddingEvents() {
  return (
    <section id="events" className="section bg-gradient-to-b from-burgundy to-maroon">
      <div className="mx-auto max-w-6xl">
        <Heading sub="Join us for five days of colour, music and blessings.">Wedding Celebrations</Heading>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {d.events.map((e, i) => {
            const Icon = icons[e.icon] || Flame
            return (
              <motion.article key={e.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.12, duration: 0.8 }}
                whileHover={{ y: -8 }} className="group relative overflow-hidden bg-burgundy gold-border">
                <div className="relative h-44 overflow-hidden">
                  <img src={e.image} alt={e.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy to-transparent" />
                  <div className="absolute -bottom-6 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border border-gold bg-maroon text-gold"><Icon size={24} /></div>
                </div>
                <div className="relative space-y-3 px-6 pb-8 pt-10 text-center">
                  <CornerFrame />
                  <h3 className="gold-text font-playfair text-2xl">{e.name}</h3>
                  <ul className="space-y-1.5 text-cream/90">
                    <li className="flex items-center justify-center gap-2"><Calendar size={15} className="text-gold" />{e.date}</li>
                    <li className="flex items-center justify-center gap-2"><Clock size={15} className="text-gold" />{e.time}</li>
                    <li className="flex items-center justify-center gap-2"><MapPin size={15} className="text-gold" />{e.venue}</li>
                    <li className="flex items-center justify-center gap-2"><Shirt size={15} className="text-gold" />{e.dress}</li>
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
