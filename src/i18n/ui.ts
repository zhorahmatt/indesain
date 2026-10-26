// Every interface string, per language. Indonesian is the default.
// Project and journal content is translated in src/content/{work,journal}/{id,en}/.

const id = {
  langName: 'Bahasa Indonesia',
  tagline: 'Desain Interior, Arsitektur dan Kontraktor',
  description:
    'indesain adalah studio arsitektur dan interior di Makassar yang juga menangani konstruksi dan renovasi. Kami mengerjakan rumah, kantor, hotel, dan kafe, dari desain sampai serah terima.',

  // Search titles (≤ 60 characters) and descriptions (≤ 160) per page.
  seo: {
    home: {
      title: 'Jasa Arsitek, Interior & Kontraktor Makassar · indesain',
      description:
        'Studio arsitektur, desain interior, dan konstruksi di Makassar sejak 2011. Desain, bangun baru, dan renovasi rumah, kafe, kantor, hingga hotel.',
    },
    work: {
      title: 'Portofolio Arsitektur & Desain Interior · indesain',
      description:
        'Proyek pilihan indesain: rumah tinggal, hotel dan villa, kantor, serta kafe yang kami rancang dan bangun, dari desain sampai serah terima.',
    },
    studio: {
      title: 'Tim Arsitek & Desainer Interior di Makassar · indesain',
      description:
        'Kenali tim indesain dan cara kerja kami: survei lokasi, desain, gambar kerja, sampai pengawasan konstruksi dan serah terima di Makassar.',
    },
    journal: {
      title: 'Tips Desain Interior & Renovasi Rumah · indesain',
      description:
        'Cerita dan tips dari studio indesain soal desain interior, renovasi rumah, pemilihan material, dan proyek yang pernah kami kerjakan.',
    },
    contact: {
      title: 'Kontak & Lokasi Studio di Makassar · indesain',
      description:
        'Konsultasikan rencana bangun baru atau renovasi Anda dengan indesain. Datang ke studio kami di Rappocini, Makassar, atau hubungi lewat telepon.',
    },
  },

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
      'Lebih dari sekadar desain, kami juga membangunnya. Studio arsitektur, interior, dan konstruksi di Makassar sejak 2011, untuk rumah, kafe, hingga hotel.',
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

  // {tokens} are filled from src/data/site.ts so facts stay in one place (see faqItems in utils.ts).
  faq: {
    label: '(Tanya jawab)',
    title: 'Yang sering ditanyakan',
    items: [
      {
        q: 'Apa saja layanan indesain?',
        a: 'Kami menangani arsitektur, desain interior, konstruksi, dan renovasi. Anda bisa mulai dari konsultasi desain saja, atau kami kerjakan semuanya dari desain sampai serah terima.',
      },
      {
        q: 'Proyek seperti apa yang biasa dikerjakan?',
        a: 'Rumah tinggal, apartemen, kantor, kafe dan tempat usaha, sampai hotel dan villa, baik bangun baru maupun renovasi.',
      },
      {
        q: 'Di mana lokasi studio indesain?',
        a: 'Studio kami ada di {address}. Jam buka: {hours}.',
      },
      {
        q: 'Apakah indesain menerima proyek di luar Makassar?',
        a: 'Bisa. Sejak {founded} kami sudah mengerjakan proyek di {cities} kota.',
      },
      {
        q: 'Bagaimana alur kerjanya?',
        a: 'Ada empat tahap: {steps}. Satu tim yang sama mendampingi dari awal sampai akhir.',
      },
      {
        q: 'Bagaimana cara memulai proyek?',
        a: 'Telepon kami di {phone}, kirim email ke {email}, atau isi formulir di halaman Hubungi. Setelah itu kami atur jadwal survei lokasi dan diskusi awal.',
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
  tagline: 'Interior Design, Architecture & Contractor',
  description:
    'indesain is an architecture and interior studio in Makassar that also handles construction and renovation. We work on homes, offices, hotels and cafés, from design to handover.',

  seo: {
    home: {
      title: 'Architect, Interior Design & Builder in Makassar · indesain',
      description:
        'Architecture, interior design and construction studio in Makassar, Indonesia, since 2011. New builds and renovations for homes, cafés, offices and hotels.',
    },
    work: {
      title: 'Architecture & Interior Design Projects · indesain',
      description:
        'Selected work by indesain: homes, hotels and villas, offices and cafés we designed and built, from the first sketch to handover.',
    },
    studio: {
      title: 'Our Architects & Interior Designers in Makassar · indesain',
      description:
        'Meet the indesain team and how we work: site visit, design, construction drawings, then site supervision through to handover in Makassar.',
    },
    journal: {
      title: 'Interior Design & Renovation Tips · indesain',
      description:
        'Stories and practical tips from the indesain studio on interior design, home renovation, materials and the projects behind them.',
    },
    contact: {
      title: 'Contact & Studio Location in Makassar · indesain',
      description:
        'Talk to indesain about a new build or renovation. Visit our studio in Rappocini, Makassar, or reach us by phone or email.',
    },
  },

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
      'More than design, we build it too. An architecture, interior and construction studio in Makassar since 2011, for homes, cafés and hotels.',
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

  faq: {
    label: '(FAQ)',
    title: 'Frequently asked questions',
    items: [
      {
        q: 'What does indesain do?',
        a: 'We handle architecture, interior design, construction and renovation. You can start with a design consultation only, or let us take care of everything from design to handover.',
      },
      {
        q: 'What kinds of projects do you take on?',
        a: 'Houses, apartments, offices, cafés and shops, through to hotels and villas, both new builds and renovations.',
      },
      {
        q: 'Where is the indesain studio?',
        a: 'Our studio is at {address}. Opening hours: {hours}.',
      },
      {
        q: 'Do you take on projects outside Makassar?',
        a: 'Yes. Since {founded} we have worked on projects in {cities} cities.',
      },
      {
        q: 'How does the process work?',
        a: 'There are four stages: {steps}. The same team stays with you from start to finish.',
      },
      {
        q: 'How do I start a project?',
        a: 'Call us on {phone}, email {email}, or fill in the form on the Connect page. We will then schedule a site visit and a first conversation.',
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
