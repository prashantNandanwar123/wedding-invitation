import { useEffect, useRef, useState } from 'react'
import { Music, Pause, Play, Volume2 } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export default function MusicPlayer({ start }) {
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [vol, setVol] = useState(weddingData.music.volume)
  const [open, setOpen] = useState(false)

  useEffect(() => { if (audio.current) audio.current.volume = vol }, [vol])
  useEffect(() => {
    if (start && audio.current) audio.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }, [start])

  const toggle = () => {
    if (!audio.current) return
    if (playing) { audio.current.pause(); setPlaying(false) }
    else audio.current.play().then(() => setPlaying(true)).catch(() => {})
  }

  return (
    <div className="no-print fixed bottom-5 left-4 z-40 flex items-center gap-2 rounded-full border border-gold bg-burgundy/90 p-1.5 pr-3 backdrop-blur">
      <audio ref={audio} src={weddingData.music.url} loop preload="none" />
      <button onClick={toggle} aria-label={playing ? 'Pause music' : 'Play music'}
        className="grid h-11 w-11 place-items-center rounded-full bg-gold text-burgundy">
        {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
      </button>
      <button onClick={() => setOpen(!open)} aria-label="Volume" className="text-gold">
        {open ? <Volume2 size={18} /> : <Music size={18} className={playing ? 'animate-pulse' : ''} />}
      </button>
      {open && <input type="range" min="0" max="1" step="0.05" value={vol} onChange={(e) => setVol(+e.target.value)}
        className="h-1 w-24 accent-[#D4AF65]" aria-label="Volume" />}
    </div>
  )
}
