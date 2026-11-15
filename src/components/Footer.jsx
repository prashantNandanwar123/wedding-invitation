import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Copy, Download, Facebook, Heart, Instagram, MessageCircle, Youtube } from 'lucide-react'
import FloatingPetals from './FloatingPetals'
import { Divider, reveal } from './Ornament'
import { weddingData as d } from '../data/weddingData'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const wa = `https://wa.me/?text=${encodeURIComponent(`${d.shareMessage} ${url}`)}`
  const copy = async () => {
    try { await navigator.clipboard.writeText(url) } catch { /* ignore */ }
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }
  const soc = [[Instagram, d.social.instagram, 'Instagram'], [Facebook, d.social.facebook, 'Facebook'], [Youtube, d.social.youtube, 'YouTube']]
  return (
    <footer className="relative overflow-hidden bg-burgundy px-5 pb-24 pt-20 text-center">
      <FloatingPetals count={8} />
      <motion.div {...reveal} className="relative z-10">
        <p className="font-cormorant text-2xl italic text-cream/90">A New Chapter Begins...</p>
        <h2 className="gold-text mt-4 font-playfair text-4xl sm:text-6xl">{d.groomShort} <Heart className="mx-1 inline fill-rose text-rose" size={32} /> {d.brideShort}</h2>
        <p className="mt-3 font-cinzel tracking-[.3em] text-gold">{d.weddingDateText}</p>
        <Divider className="my-6" />
        <p className="mx-auto max-w-xl text-xl italic text-cream/90">With Love and Blessings, We Invite You to Celebrate Our Special Day.</p>
        <div className="no-print mt-8 flex flex-wrap justify-center gap-3">
          <a href={wa} target="_blank" rel="noreferrer" className="btn-gold"><MessageCircle size={16} /> Share on WhatsApp</a>
          <button onClick={copy} className="btn-ghost"><Copy size={16} /> {copied ? 'Link copied' : 'Copy link'}</button>
          <button onClick={() => window.print()} className="btn-ghost"><Download size={16} /> Save as PDF</button>
        </div>
        <div className="no-print mt-8 flex justify-center gap-4">
          {soc.map(([I, h, n]) => <a key={n} href={h} aria-label={n} className="grid h-11 w-11 place-items-center rounded-full border border-gold text-gold transition hover:bg-gold hover:text-burgundy"><I size={18} /></a>)}
        </div>
      </motion.div>
      <a href="#home" aria-label="Back to top" className="no-print fixed bottom-5 right-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-gold text-burgundy shadow-lg"><ArrowUp /></a>
    </footer>
  )
}
