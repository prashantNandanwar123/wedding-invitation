import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Heading } from './Ornament'
import { weddingData as d } from '../data/weddingData'

const cats = ['All', ...new Set(d.gallery.map((g) => g.cat))]

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [view, setView] = useState('masonry')
  const [idx, setIdx] = useState(null)
  const items = d.gallery.filter((g) => cat === 'All' || g.cat === cat)
  const step = (n) => setIdx((idx + n + items.length) % items.length)

  return (
    <section id="gallery" className="section bg-ivory text-burgundy">
      <div className="mx-auto max-w-6xl">
        <Heading tone="dark">Moments We Treasure</Heading>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`min-h-[44px] border px-4 font-cinzel text-xs tracking-widest transition ${cat === c ? 'border-maroon bg-maroon text-gold' : 'border-gold text-maroon hover:bg-gold/20'}`}>{c}</button>
          ))}
          <button onClick={() => setView(view === 'grid' ? 'masonry' : 'grid')} className="min-h-[44px] border border-gold px-4 font-cinzel text-xs tracking-widest text-maroon">{view === 'grid' ? 'Masonry' : 'Grid'} view</button>
        </div>

        <motion.div layout className={view === 'masonry' ? 'columns-2 gap-3 md:columns-3 md:gap-4' : 'grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4'}>
          <AnimatePresence>
            {items.map((g, i) => (
              <motion.button layout key={g.src} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIdx(i)} className={`group relative mb-3 block w-full overflow-hidden border border-gold/60 p-1 md:mb-4 ${view === 'grid' ? 'aspect-square !mb-0' : ''}`}>
                <img src={g.src} alt={g.alt} loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-110 ${view === 'grid' ? 'h-full' : i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`} />
                <span className="absolute inset-x-1 bottom-1 bg-burgundy/80 py-1 text-center font-cinzel text-[10px] tracking-widest text-gold opacity-0 transition group-hover:opacity-100">{g.cat}</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {idx !== null && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIdx(null)}>
            <button className="absolute right-4 top-4 grid h-12 w-12 place-items-center text-gold" aria-label="Close"><X size={30} /></button>
            <button onClick={(e) => { e.stopPropagation(); step(-1) }} className="absolute left-2 grid h-12 w-12 place-items-center text-gold" aria-label="Previous"><ChevronLeft size={36} /></button>
            <motion.img key={items[idx].src} src={items[idx].src} alt={items[idx].alt} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-full border-2 border-gold object-contain" />
            <button onClick={(e) => { e.stopPropagation(); step(1) }} className="absolute right-2 grid h-12 w-12 place-items-center text-gold" aria-label="Next"><ChevronRight size={36} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
