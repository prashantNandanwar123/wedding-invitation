import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { weddingData as d } from '../data/weddingData'

const links = [['Home', 'home'], ['Story', 'story'], ['Events', 'events'], ['Gallery', 'gallery'], ['Venue', 'venue'], ['RSVP', 'rsvp']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', f, { passive: true }); f()
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <nav className={`no-print fixed inset-x-0 top-0 z-30 transition-colors duration-500 ${solid || open ? 'bg-burgundy/95 backdrop-blur' : ''}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="gold-text font-playfair text-xl">{d.groomShort} &amp; {d.brideShort}</a>
        <ul className="hidden gap-8 md:flex">
          {links.map(([l, id]) => <li key={id}><a href={`#${id}`} className="font-cinzel text-xs tracking-[.2em] text-cream/90 transition hover:text-gold">{l}</a></li>)}
        </ul>
        <button className="grid h-11 w-11 place-items-center text-gold md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <ul className="border-t border-gold/30 bg-burgundy/95 px-5 pb-4 md:hidden">
          {links.map(([l, id]) => <li key={id}><a onClick={() => setOpen(false)} href={`#${id}`} className="block py-3 font-cinzel text-sm tracking-[.2em] text-cream">{l}</a></li>)}
        </ul>
      )}
    </nav>
  )
}
