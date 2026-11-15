import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Confetti from 'react-confetti'
import { CheckCircle2, Send } from 'lucide-react'
import { Heading, CornerFrame } from './Ornament'
import { weddingData as d } from '../data/weddingData'

const empty = { name: '', email: '', phone: '', guests: 1, attending: 'yes', message: '' }
const field = 'w-full border border-gold/50 bg-white/60 px-4 py-3 text-lg text-burgundy outline-none transition placeholder:text-burgundy/40 focus:border-maroon focus:bg-white'

export default function RSVP() {
  const [f, setF] = useState(empty)
  const [err, setErr] = useState({})
  const [done, setDone] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (f.name.trim().length < 2) er.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = 'Enter a valid email address.'
    if (!/^[+\d][\d\s-]{8,14}$/.test(f.phone)) er.phone = 'Enter a valid mobile number.'
    setErr(er)
    if (Object.keys(er).length) return
    console.log('RSVP (frontend only):', f) // connect to your backend / Google Sheet here
    if (d.rsvp.whatsappNumber) {
      const m = `RSVP: ${f.name} — ${f.attending === 'yes' ? `attending with ${f.guests} guest(s)` : 'unable to attend'}. ${f.message}`
      window.open(`https://wa.me/${d.rsvp.whatsappNumber}?text=${encodeURIComponent(m)}`, '_blank')
    }
    setDone(true)
  }

  return (
    <section id="rsvp" className="section bg-ivory text-burgundy">
      {done && <Confetti recycle={false} numberOfPieces={350} colors={['#D4AF65', '#6D1028', '#B76E79', '#FFF8E7']} style={{ position: 'fixed', zIndex: 60 }} />}
      <div className="mx-auto max-w-2xl">
        <Heading tone="dark" sub={`Kindly respond by ${d.rsvp.deadline}`}>Will You Join Us?</Heading>
        <div className="relative border border-gold bg-cream p-6 shadow-xl sm:p-10">
          <CornerFrame />
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div key="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center" role="status">
                <CheckCircle2 className="mx-auto text-maroon" size={56} />
                <h3 className="mt-4 font-playfair text-3xl text-maroon">{f.attending === 'yes' ? 'Thank you, ' + f.name.split(' ')[0] + '!' : 'We will miss you, ' + f.name.split(' ')[0]}</h3>
                <p className="mt-3 text-xl">{f.attending === 'yes' ? `Your presence is confirmed for ${f.guests} guest(s). We cannot wait to celebrate with you.` : 'Thank you for letting us know. You will be in our hearts on the day.'}</p>
                <button className="btn-ghost mt-6 !text-maroon !border-maroon" onClick={() => { setF(empty); setDone(false) }}>Submit another response</button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} noValidate className="space-y-5" exit={{ opacity: 0 }}>
                <div><input className={field} placeholder="Guest name" value={f.name} onChange={set('name')} aria-label="Guest name" />{err.name && <p className="mt-1 text-sm text-maroon">{err.name}</p>}</div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><input type="email" className={field} placeholder="Email address" value={f.email} onChange={set('email')} aria-label="Email" />{err.email && <p className="mt-1 text-sm text-maroon">{err.email}</p>}</div>
                  <div><input type="tel" className={field} placeholder="Mobile number" value={f.phone} onChange={set('phone')} aria-label="Mobile" />{err.phone && <p className="mt-1 text-sm text-maroon">{err.phone}</p>}</div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block"><span className="mb-1 block font-cinzel text-xs tracking-widest">Number of guests</span>
                    <select className={field} value={f.guests} onChange={set('guests')}>{Array.from({ length: d.rsvp.maxGuests }, (_, i) => <option key={i + 1}>{i + 1}</option>)}</select></label>
                  <fieldset><legend className="mb-1 font-cinzel text-xs tracking-widest">Will you attend?</legend>
                    <div className="flex gap-3">
                      {[['yes', 'Joyfully Yes'], ['no', 'Regretfully No']].map(([v, l]) => (
                        <label key={v} className={`flex min-h-[52px] flex-1 cursor-pointer items-center justify-center border px-2 text-center text-base transition ${f.attending === v ? 'border-maroon bg-maroon text-gold' : 'border-gold/50'}`}>
                          <input type="radio" name="att" className="sr-only" checked={f.attending === v} onChange={() => setF({ ...f, attending: v })} />{l}
                        </label>
                      ))}
                    </div></fieldset>
                </div>
                <textarea rows="4" className={field} placeholder="Your blessings or a personal message" value={f.message} onChange={set('message')} aria-label="Message" />
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit" className="btn-gold w-full !bg-maroon !text-gold"><Send size={16} /> Confirm Your Presence</motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
