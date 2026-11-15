// ============================================================
//  EDIT ONLY THIS FILE TO CUSTOMISE THE INVITATION FOR A CLIENT
// ============================================================
const u = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const weddingData = {
  groom: 'Aarav Sharma',
  bride: 'Meera Verma',
  groomShort: 'Aarav',
  brideShort: 'Meera',
  tagline: 'A Royal Celebration of Love',
  weddingDate: '2027-02-18T19:00:00+05:30', // used by the countdown
  weddingDateText: '18 February 2027',
  music: { url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', volume: 0.5 }, // swap for your own file in /public

  heroImage: u('photo-1519741497674-611481863552', 1400),
  palaceImage: u('photo-1477587458883-47145ed94245', 1600),

  venue: {
    name: 'Umaid Bhawan Palace',
    address: 'Circuit House Road, Jodhpur, Rajasthan 342006, India',
    image: u('photo-1599661046289-e31897846e41', 1400),
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Umaid+Bhawan+Palace+Jodhpur',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Umaid+Bhawan+Palace+Jodhpur',
    embedUrl: 'https://www.google.com/maps?q=Umaid+Bhawan+Palace+Jodhpur&output=embed',
  },

  families: {
    groom: { title: 'Son of', names: 'Mr. Rajesh & Mrs. Sunita Sharma', place: 'Jaipur' },
    bride: { title: 'Daughter of', names: 'Mr. Anil & Mrs. Kavita Verma', place: 'Udaipur' },
  },

  story: [
    { title: 'First Meeting', date: 'March 2019', text: 'A rainy evening, a shared umbrella and a conversation that refused to end.', image: u('photo-1529634806980-85c3dd6d34ac', 800) },
    { title: 'Friendship', date: '2020', text: 'Late-night chai, long drives and the quiet certainty that home was a person.', image: u('photo-1522673607200-164d1b6ce486', 800) },
    { title: 'The Proposal', date: 'December 2025', text: 'Under a sky of lanterns: one knee, one question, and a very happy yes.', image: u('photo-1519225421980-715cb0215aed', 800) },
    { title: 'Forever Begins', date: '18 February 2027', text: 'Surrounded by family, we take seven steps into a lifetime together.', image: u('photo-1583939003579-730e3918a45a', 800) },
  ],

  events: [
    { name: 'Haldi Ceremony', icon: 'sun', date: '16 February 2027', time: '10:00 AM', dress: 'Yellow Traditional', venue: 'Palace Courtyard Lawns', image: u('photo-1606800052052-a08af7148866', 900) },
    { name: 'Mehendi Ceremony', icon: 'leaf', date: '16 February 2027', time: '5:00 PM', dress: 'Green Ethnic', venue: 'Garden Pavilion', image: u('photo-1595407753234-0882f1e77954', 900) },
    { name: 'Sangeet Night', icon: 'music', date: '17 February 2027', time: '7:00 PM', dress: 'Royal Traditional', venue: 'Grand Ballroom', image: u('photo-1511795409834-ef04bbd61622', 900) },
    { name: 'Wedding Ceremony', icon: 'flame', date: '18 February 2027', time: '7:00 PM', dress: 'Royal Indian', venue: 'Umaid Bhawan Palace Mandap', image: u('photo-1583939003579-730e3918a45a', 900) },
    { name: 'Reception', icon: 'wine', date: '19 February 2027', time: '8:00 PM', dress: 'Formal / Ethnic', venue: 'Durbar Hall', image: u('photo-1465495976277-4387d4b0b4c6', 900) },
  ],

  gallery: [
    { src: u('photo-1519741497674-611481863552'), cat: 'Couple', alt: 'Couple portrait' },
    { src: u('photo-1606800052052-a08af7148866'), cat: 'Haldi', alt: 'Haldi ceremony' },
    { src: u('photo-1595407753234-0882f1e77954'), cat: 'Mehendi', alt: 'Mehendi hands' },
    { src: u('photo-1511795409834-ef04bbd61622'), cat: 'Sangeet', alt: 'Sangeet night' },
    { src: u('photo-1519225421980-715cb0215aed'), cat: 'Engagement', alt: 'Engagement' },
    { src: u('photo-1583939003579-730e3918a45a'), cat: 'Couple', alt: 'Wedding rituals' },
    { src: u('photo-1529634806980-85c3dd6d34ac'), cat: 'Engagement', alt: 'Together' },
    { src: u('photo-1465495976277-4387d4b0b4c6'), cat: 'Sangeet', alt: 'Celebration' },
  ],

  rsvp: { deadline: '31 January 2027', whatsappNumber: '', maxGuests: 10 }, // whatsappNumber e.g. '919999999999'
  social: { instagram: '#', facebook: '#', youtube: '#' },
  shareMessage: 'You are warmly invited to the wedding of Aarav & Meera on 18 February 2027 at Umaid Bhawan Palace, Jodhpur.',
}
export default weddingData
