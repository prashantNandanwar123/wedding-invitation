import { motion } from 'framer-motion'
import { Heading, CornerFrame } from './Ornament'
import { weddingData as d } from '../data/weddingData'

export default function CoupleStory() {
  return (
    <section id="story" className="section bg-ivory text-burgundy">
      <div className="mx-auto max-w-5xl">
        <Heading tone="dark" sub={`${d.families.groom.title} ${d.families.groom.names}, ${d.families.groom.place} · ${d.families.bride.title} ${d.families.bride.names}, ${d.families.bride.place}`}>
          Two Hearts, One Beautiful Journey
        </Heading>
        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent md:left-1/2" />
          {d.story.map((s, i) => {
            const left = i % 2 === 0
            return (
              <motion.div key={s.title} initial={{ opacity: 0, x: left ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9 }}
                className={`relative mb-14 flex flex-col gap-5 pl-12 md:flex-row md:items-center md:pl-0 ${left ? '' : 'md:flex-row-reverse'}`}>
                <span className="absolute left-[10px] top-6 h-3.5 w-3.5 rotate-45 border border-gold bg-maroon md:left-1/2 md:-ml-[7px]" />
                <div className="relative md:w-1/2 md:px-10">
                  <div className="relative overflow-hidden border border-gold/60 p-1.5">
                    <img src={s.image} alt={s.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  </div>
                </div>
                <div className={`md:w-1/2 md:px-10 ${left ? 'md:text-left' : 'md:text-right'}`}>
                  <p className="font-cinzel text-xs tracking-[.25em] text-rose">{s.date}</p>
                  <h3 className="mt-1 font-playfair text-2xl text-maroon sm:text-3xl">{s.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
