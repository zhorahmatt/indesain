// Every interface string, per language. Indonesian is the default.
// Project and journal content is translated in src/content/{work,journal}/{id,en}/.

const id = {
  langName: 'Bahasa Indonesia',
  tagline: 'Desain Interior & Arsitektur',
  description:
    'indesain adalah studio arsitektur dan interior di Makassar yang juga menangani konstruksi dan renovasi. Kami mengerjakan rumah, kantor, hotel, dan kafe, dari desain sampai serah terima.',

  nav: { home: 'Beranda', work: 'Karya', studio: 'Tim', journal: 'Cerita', contact: 'Hubungi' },
  menu: { open: 'Menu', close: 'Tutup', primary: 'Navigasi utama', language: 'Bahasa' },

  hero: {
    lines: ['Nyaman dihuni,', 'bukan cuma', 'enak dilihat.'],
    services: 'Arsitektur · Interior · Konstruksi · Renovasi',
    since: 'sejak',
    videoAlt: 'Video interior rumah',
  },

  intro: {
    label: '(Tentang kami)',
    statement:
      'Kami studio arsitektur dan interior di Makassar yang juga menangani konstruksi dan renovasi. Sejak 2011, kami merancang dan membangun rumah, kantor, hotel, dan kafe, lalu mengawalnya sampai kunci diserahkan.',
    stats: ['Tahun berpengalaman', 'Proyek selesai', 'Happy client', 'Kota proyek'],
  },

  work: {
    selected: 'Proyek pilihan',
    all: 'Lihat semua proyek',
    pageLabel: 'Karya',
    pageTitle: 'Beberapa proyek yang pernah kami kerjakan',
    filterAll: 'Semua',
    filterLabel: 'Filter proyek',
    facts: { type: 'Jenis', location: 'Lokasi', year: 'Tahun', area: 'Luas', scope: 'Lingkup kerja' },
    next: '(Proyek berikutnya)',
    view: 'foto',
    open: 'Lihat proyek →',
    categories: { Residential: 'Rumah Tinggal', Hospitality: 'Hotel & Villa', Workplace: 'Kantor', Retail: 'Komersial' },
  },

  process: {
    label: '(Cara kerja)',
    title: 'Satu tim yang sama, dari survei pertama sampai serah terima.',
    steps: [
      {
        title: 'Survei & brief',
        body: 'Kami datang ke lokasi, mengukur, lalu berdiskusi soal kebutuhan, kebiasaan, dan anggaran Anda. Dari situ kami susun brief yang jelas.',
      },
      {
        title: 'Konsep & desain',
        body: 'Kami siapkan layout, moodboard, dan visual 3D, lengkap dengan RAB. Revisi kami kerjakan bersama Anda sampai desainnya terasa pas.',
      },
      {
        title: 'Gambar kerja & produksi',
        body: 'Desain final kami jadikan gambar kerja yang detail. Furnitur custom dan material dikerjakan bersama workshop dan vendor langganan kami.',
      },
      {
        title: 'Pengerjaan & serah terima',
        body: 'Tim kami rutin mengawasi pekerjaan di lapangan sampai ruangan siap dipakai dan kuncinya kami serahkan ke Anda.',
      },
    ],
  },

  showreel: { caption: 'Intip studio kami', alt: 'Video profil studio' },

  services: {
    label: '(Layanan)',
    title: 'Bisa mulai dari konsultasi saja, atau kami kerjakan dari awal sampai beres.',
    groups: [
      {
        group: 'Desain',
        items: ['Desain interior', 'Konsultasi desain', 'Layout & tata ruang', 'Visual 3D', 'Desain pencahayaan'],
      },
      {
        group: 'Produksi',
        items: ['Furnitur custom', 'Kitchen set', 'Lemari & built-in', 'Pemilihan material', 'Styling & dekorasi'],
      },
      {
        group: 'Pelaksanaan',
        items: ['Rencana anggaran (RAB)', 'Pengadaan barang', 'Pengawasan proyek', 'Renovasi', 'Paket terima beres'],
      },
    ],
  },

  testimonials: {
    label: '(Kata klien)',
    prev: 'Testimoni sebelumnya',
    next: 'Testimoni berikutnya',
    items: [
      {
        quote:
          'Dari awal mereka banyak bertanya soal kebiasaan kami di rumah. Hasilnya bukan cuma bagus dilihat, tapi memang enak dipakai sehari-hari.',
        name: 'Klien rumah tinggal',
        context: 'Kemang, Jakarta',
      },
      {
        quote:
          'Timnya rapi dan gampang diajak komunikasi. Villa kami bisa dibuka sesuai jadwal, padahal waktunya mepet sekali.',
        name: 'Pemilik villa',
        context: 'Uluwatu, Bali',
      },
      {
        quote:
          'Yang paling saya hargai, gambar kerjanya detail dan hasil di lapangan sesuai gambar. Jarang ketemu yang seperti ini.',
        name: 'Developer properti',
        context: 'Surabaya',
      },
    ],
  },

  journal: {
    title: 'Cerita',
    all: 'Semua cerita',
    back: '← Semua cerita',
    pageLabel: 'Cerita',
    pageTitle: 'Cerita dan tips dari studio',
  },

  cta: {
    label: '(Mulai proyek)',
    title: 'Punya rencana renovasi atau bangun baru? Ceritakan ke kami.',
    button: 'Hubungi kami →',
  },

  footer: { pages: 'Halaman', follow: 'Ikuti kami', studio: 'Studio', directions: 'Petunjuk arah' },

  studio: {
    label: 'Tim',
    title: 'Studio kecil, dengan tim yang turun langsung ke lapangan',
    photoAlt: 'Suasana studio indesain',
    people: 'Tim kami',
    team: [
      { name: 'Nama Pendiri', role: 'Pendiri & Principal Designer' },
      { name: 'Nama Partner', role: 'Design Director' },
      { name: 'Nama Anggota', role: 'Senior Interior Designer' },
      { name: 'Nama Anggota', role: 'Project Manager' },
    ],
  },

  contact: {
    label: 'Hubungi',
    title: 'Ceritakan proyek Anda',
    email: 'Email',
    phone: 'Telepon',
    studio: 'Studio',
    hours: 'Jam buka',
    days: { Mo: 'Senin', Tu: 'Selasa', We: 'Rabu', Th: 'Kamis', Fr: 'Jumat', Sa: 'Sabtu', Su: 'Minggu' },
    closed: 'Tutup',
    directions: 'Buka di Google Maps →',
    mapTitle: 'Peta lokasi studio indesain di Makassar',
    form: {
      name: 'Nama',
      email: 'Email',
      type: 'Jenis proyek',
      message: 'Ceritakan sedikit tentang proyeknya',
      submit: 'Kirim pesan →',
      types: ['Rumah tinggal', 'Apartemen', 'Kantor', 'Hotel & villa', 'Kafe & retail', 'Lainnya'],
    },
  },

  notFound: { label: '404', title: 'Halaman tidak ditemukan', back: '← Kembali ke beranda' },

  dateLocale: 'id-ID',
};

const en: typeof id = {
  langName: 'English',
  tagline: 'Interior Design & Architecture',
  description:
    'indesain is an architecture and interior studio in Makassar that also handles construction and renovation. We work on homes, offices, hotels and cafés, from design to handover.',

  nav: { home: 'Home', work: 'Work', studio: 'Team', journal: 'Story', contact: 'Connect' },
  menu: { open: 'Menu', close: 'Close', primary: 'Main navigation', language: 'Language' },

  hero: {
    lines: ['Made to be', 'lived in, not', 'just looked at.'],
    services: 'Architecture · Interiors · Construction · Renovation',
    since: 'since',
    videoAlt: 'Interior video of a home',
  },

  intro: {
    label: '(About us)',
    statement:
      "We're an architecture and interior studio in Makassar that also handles construction and renovation. Since 2011 we've designed and built homes, offices, hotels and cafés, and stayed with each one until the keys were handed over.",
    stats: ['Years of practice', 'Projects completed', 'Happy clients', 'Cities'],
  },

  work: {
    selected: 'Selected projects',
    all: 'See all projects',
    pageLabel: 'Work',
    pageTitle: "Some of the work we've done",
    filterAll: 'All',
    filterLabel: 'Filter projects',
    facts: { type: 'Type', location: 'Location', year: 'Year', area: 'Area', scope: 'Scope of work' },
    next: '(Next project)',
    view: 'photo',
    open: 'View project →',
    categories: { Residential: 'Residential', Hospitality: 'Hotel & Villa', Workplace: 'Office', Retail: 'Commercial' },
  },

  process: {
    label: '(How we work)',
    title: 'One team, from the first site visit to handover.',
    steps: [
      {
        title: 'Site visit & brief',
        body: 'We visit the site, take measurements, and talk through your needs, routines and budget. From that we write a clear brief.',
      },
      {
        title: 'Concept & design',
        body: 'We prepare layouts, a moodboard and 3D visuals, along with a cost estimate. We revise together until the design feels right.',
      },
      {
        title: 'Drawings & production',
        body: 'The final design becomes detailed construction drawings. Custom furniture and materials are made with workshops and suppliers we work with regularly.',
      },
      {
        title: 'Build & handover',
        body: 'Our team checks on site regularly until the space is ready to use and we hand you the keys.',
      },
    ],
  },

  showreel: { caption: 'A look inside the studio', alt: 'Studio video' },

  services: {
    label: '(Services)',
    title: 'Start with a consultation, or let us handle everything from start to finish.',
    groups: [
      {
        group: 'Design',
        items: ['Interior design', 'Design consultation', 'Space planning', '3D visuals', 'Lighting design'],
      },
      {
        group: 'Production',
        items: ['Custom furniture', 'Kitchens', 'Wardrobes & built-ins', 'Material selection', 'Styling & decor'],
      },
      {
        group: 'Delivery',
        items: ['Cost planning', 'Procurement', 'Project supervision', 'Renovation', 'Turnkey packages'],
      },
    ],
  },

  testimonials: {
    label: '(Client words)',
    prev: 'Previous testimonial',
    next: 'Next testimonial',
    items: [
      {
        quote:
          'From the start they asked a lot about how we live at home. The result looks good, and more importantly it works for us every day.',
        name: 'Homeowner',
        context: 'Kemang, Jakarta',
      },
      {
        quote: 'The team was organised and easy to talk to. Our villa opened on schedule, even though the timeline was tight.',
        name: 'Villa owner',
        context: 'Uluwatu, Bali',
      },
      {
        quote:
          "What I valued most is that the drawings were detailed and what got built matched them. That's not easy to find.",
        name: 'Property developer',
        context: 'Surabaya',
      },
    ],
  },

  journal: {
    title: 'Story',
    all: 'All stories',
    back: '← All stories',
    pageLabel: 'Story',
    pageTitle: 'Stories and tips from the studio',
  },

  cta: {
    label: '(Start a project)',
    title: 'Planning a renovation or a new build? Tell us about it.',
    button: 'Get in touch →',
  },

  footer: { pages: 'Pages', follow: 'Follow us', studio: 'Studio', directions: 'Get directions' },

  studio: {
    label: 'Team',
    title: "A small studio, with a team that's on site",
    photoAlt: 'Inside the indesain studio',
    people: 'Our team',
    team: [
      { name: 'Founder Name', role: 'Founder & Principal Designer' },
      { name: 'Partner Name', role: 'Design Director' },
      { name: 'Team Member', role: 'Senior Interior Designer' },
      { name: 'Team Member', role: 'Project Manager' },
    ],
  },

  contact: {
    label: 'Connect',
    title: 'Tell us about your project',
    email: 'Email',
    phone: 'Phone',
    studio: 'Studio',
    hours: 'Opening hours',
    days: { Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday' },
    closed: 'Closed',
    directions: 'Open in Google Maps →',
    mapTitle: 'Map showing the indesain studio in Makassar',
    form: {
      name: 'Name',
      email: 'Email',
      type: 'Project type',
      message: 'A little about the project',
      submit: 'Send message →',
      types: ['House', 'Apartment', 'Office', 'Hotel & villa', 'Café & retail', 'Other'],
    },
  },

  notFound: { label: '404', title: "We couldn't find that page", back: '← Back to home' },

  dateLocale: 'en-GB',
};

export const ui = { id, en };
