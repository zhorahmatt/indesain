// Every interface string, per language. Indonesian is the default.
// Project and journal content is translated in src/content/{work,journal}/{id,en}/.

const id = {
  langName: 'Bahasa Indonesia',
  tagline: 'Desain Interior & Arsitektur',
  description:
    'indesain adalah studio desain interior dan arsitektur yang menciptakan hunian, ruang kerja, dan ruang hospitalitas dengan perhatian pada cahaya, material, dan keseharian.',

  nav: { home: 'Beranda', work: 'Proyek', studio: 'Studio', journal: 'Jurnal', contact: 'Kontak' },
  menu: { open: 'Menu', close: 'Tutup', primary: 'Navigasi utama', language: 'Bahasa' },

  hero: { lines: ['Ruang yang', 'dibentuk oleh', 'cara Anda hidup.'], videoAlt: 'Penelusuran interior' },

  intro: {
    label: '(Studio)',
    statement:
      'Kami merancang interior yang terasa tenang sejak hari pertama dan makin baik di hari keseribu — material yang jujur, cahaya yang lapang, dan detail yang bekerja dengan tenang.',
    stats: ['Tahun berkarya', 'Ruang terselesaikan', 'Desainer & perajin', 'Kota tempat kami berkarya'],
  },

  work: {
    selected: 'Proyek pilihan',
    all: 'Semua proyek',
    pageLabel: 'Proyek',
    pageTitle: 'Ruang yang telah kami bentuk',
    filterAll: 'Semua',
    filterLabel: 'Saring proyek',
    facts: { type: 'Tipe', location: 'Lokasi', year: 'Tahun', area: 'Luas', scope: 'Lingkup' },
    next: '(Proyek berikutnya)',
    view: 'tampilan',
    categories: { Residential: 'Hunian', Hospitality: 'Hospitalitas', Workplace: 'Ruang Kerja', Retail: 'Ritel' },
  },

  process: {
    label: '(Cara kami bekerja)',
    title: 'Empat tahap, satu tim, dari kunjungan pertama hingga ruang yang siap dihuni.',
    steps: [
      {
        title: 'Mendengar',
        body: 'Kami meluangkan waktu di lokasi dan bersama orang-orang yang menggunakannya — memetakan rutinitas, cahaya, dan hal-hal yang layak dipertahankan sebelum menarik satu garis pun.',
      },
      {
        title: 'Membentuk',
        body: 'Tata ruang, volume, dan palet material berkembang bersama sebagai satu gagasan, diuji lewat maket, sampel, dan diskusi yang jujur tentang anggaran.',
      },
      {
        title: 'Merinci',
        body: 'Joinery, pencahayaan, dan perabot khusus digambar hingga milimeter, lalu diadakan dan dibuat bersama perajin yang telah kami percaya selama bertahun-tahun.',
      },
      {
        title: 'Mewujudkan',
        body: 'Kami mengoordinasikan pembangunan di lokasi hingga ruang tertata sempurna, sehingga ruang yang Anda tempati adalah ruang yang kami janjikan.',
      },
    ],
  },

  showreel: { caption: 'Di dalam studio', alt: 'Video profil studio' },

  services: {
    label: '(Layanan)',
    title: 'Satu studio untuk seluruh proyek, dari denah pertama hingga objek terakhir di rak.',
    groups: [
      {
        group: 'Desain',
        items: ['Arsitektur Interior', 'Perencanaan Ruang', 'Desain Konsep', 'Desain Pencahayaan', 'Warna & Material'],
      },
      {
        group: 'Detail',
        items: ['Joinery Khusus', 'Desain Furnitur', 'Dapur & Kamar Mandi', 'Kurasi Seni', 'Penataan'],
      },
      {
        group: 'Pelaksanaan',
        items: ['Pengadaan', 'Tender Kontraktor', 'Pengawasan Lapangan', 'Proyek Turnkey', 'Layanan Purnajual'],
      },
    ],
  },

  testimonials: {
    label: '(Kata mereka)',
    prev: 'Testimoni sebelumnya',
    next: 'Testimoni berikutnya',
    items: [
      {
        quote:
          'Mereka lebih banyak mendengar daripada berbicara, dan kini rumah kami sesuai dengan cara kami benar-benar hidup — pagi yang lebih tenang, cahaya yang lebih baik, tanpa ada yang sia-sia.',
        name: 'Klien pribadi',
        context: 'Hunian, Jakarta',
      },
      {
        quote:
          'Dari kunjungan lokasi pertama hingga bantal terakhir, tim ini memikul seluruh proyek. Tamu kami merasakan ketenangannya sebelum menyadari desainnya.',
        name: 'Mitra hospitalitas',
        context: 'Hotel butik, Bali',
      },
      {
        quote:
          'Studio langka yang memahami gambar kerja sekaligus lapangan. Setiap detail yang dijanjikan hadir persis seperti yang digambar.',
        name: 'Pengembang',
        context: 'Ruang kerja, Surabaya',
      },
    ],
  },

  journal: {
    title: 'Jurnal',
    all: 'Semua catatan',
    back: '← Semua catatan',
    pageLabel: 'Jurnal',
    pageTitle: 'Catatan dari studio',
  },

  cta: {
    label: '(Mulai proyek)',
    title: 'Punya ruang yang ingin diwujudkan? Mari kita telusuri bersama.',
    button: 'Kirim pertanyaan →',
  },

  footer: { pages: 'Halaman', follow: 'Ikuti', studio: 'Studio' },

  studio: {
    label: 'Studio',
    title: 'Tim kecil dengan perhatian yang panjang',
    photoAlt: 'Studio indesain',
    people: 'Orang-orang di balik studio',
    team: [
      { name: 'Nama Pendiri', role: 'Prinsipal, Arsitek Interior' },
      { name: 'Nama Mitra', role: 'Direktur Desain' },
      { name: 'Anggota Tim', role: 'Desainer Senior' },
      { name: 'Anggota Tim', role: 'Manajer Proyek' },
    ],
  },

  contact: {
    label: 'Kontak',
    title: 'Ceritakan tentang ruang Anda',
    email: 'Email',
    phone: 'Telepon',
    studio: 'Studio',
    form: {
      name: 'Nama',
      email: 'Email',
      type: 'Jenis proyek',
      message: 'Tentang proyek',
      submit: 'Kirim pertanyaan →',
      types: ['Hunian', 'Hospitalitas', 'Ruang Kerja', 'Ritel', 'Lainnya'],
    },
  },

  notFound: { label: '404', title: 'Ruangan ini tidak ada', back: '← Kembali ke beranda' },

  dateLocale: 'id-ID',
};

const en: typeof id = {
  langName: 'English',
  tagline: 'Interior Design & Architecture',
  description:
    'indesain is an interior design and architecture studio creating homes, workplaces and hospitality spaces with care for light, material and daily life.',

  nav: { home: 'Home', work: 'Projects', studio: 'Studio', journal: 'Journal', contact: 'Contact' },
  menu: { open: 'Menu', close: 'Close', primary: 'Primary', language: 'Language' },

  hero: { lines: ['Rooms shaped', 'around how', 'you live.'], videoAlt: 'Interior walkthrough' },

  intro: {
    label: '(The studio)',
    statement:
      'We design interiors that feel calm on the first day and better on the thousandth — honest materials, generous light and details that quietly do their job.',
    stats: ['Years in practice', 'Spaces delivered', 'Designers & makers', 'Cities we work in'],
  },

  work: {
    selected: 'Selected projects',
    all: 'All projects',
    pageLabel: 'Projects',
    pageTitle: 'Spaces we have shaped',
    filterAll: 'All',
    filterLabel: 'Filter projects',
    facts: { type: 'Type', location: 'Location', year: 'Year', area: 'Area', scope: 'Scope' },
    next: '(Next project)',
    view: 'view',
    categories: { Residential: 'Residential', Hospitality: 'Hospitality', Workplace: 'Workplace', Retail: 'Retail' },
  },

  process: {
    label: '(How we work)',
    title: 'Four steps, one team, from the first visit to the final styled room.',
    steps: [
      {
        title: 'Listen',
        body: 'We spend time in the space and with the people who use it, mapping routines, light and the things worth keeping before drawing a single line.',
      },
      {
        title: 'Shape',
        body: 'Layout, volume and a material palette develop together as one idea, tested through models, samples and honest conversations about budget.',
      },
      {
        title: 'Detail',
        body: 'Joinery, lighting and custom pieces are drawn to the millimetre, then sourced and made with craftspeople we have trusted for years.',
      },
      {
        title: 'Deliver',
        body: 'We coordinate the build on site through to the final styled room, so the space you move into is the space we promised.',
      },
    ],
  },

  showreel: { caption: 'Inside the studio', alt: 'Studio showreel' },

  services: {
    label: '(Services)',
    title: 'One studio for the whole project, from the first plan to the last object on the shelf.',
    groups: [
      {
        group: 'Design',
        items: ['Interior Architecture', 'Space Planning', 'Concept Design', 'Lighting Design', 'Colour & Material'],
      },
      {
        group: 'Detail',
        items: ['Custom Joinery', 'Furniture Design', 'Kitchens & Baths', 'Art Curation', 'Styling'],
      },
      {
        group: 'Delivery',
        items: ['Procurement', 'Contractor Tender', 'Site Supervision', 'Turnkey Projects', 'Aftercare'],
      },
    ],
  },

  testimonials: {
    label: '(Kind words)',
    prev: 'Previous testimonial',
    next: 'Next testimonial',
    items: [
      {
        quote:
          'They listened more than they spoke, and the house now fits the way we actually live — quieter mornings, better light, nothing wasted.',
        name: 'Private client',
        context: 'Residence, Jakarta',
      },
      {
        quote:
          'From the first site visit to the last cushion, the team carried the whole project. Our guests notice the calm before they notice the design.',
        name: 'Hospitality partner',
        context: 'Boutique hotel, Bali',
      },
      {
        quote:
          'A rare studio that understands both the drawing and the building site. Every detail we were promised arrived exactly as drawn.',
        name: 'Developer',
        context: 'Workplace, Surabaya',
      },
    ],
  },

  journal: {
    title: 'Journal',
    all: 'All notes',
    back: '← All notes',
    pageLabel: 'Journal',
    pageTitle: 'Notes from the studio',
  },

  cta: {
    label: '(Start a project)',
    title: "Have a space in mind? Let's walk it together.",
    button: 'Start an enquiry →',
  },

  footer: { pages: 'Pages', follow: 'Follow', studio: 'Studio' },

  studio: {
    label: 'Studio',
    title: 'A small team with a long attention span',
    photoAlt: 'The indesain studio',
    people: 'The people',
    team: [
      { name: 'Founder Name', role: 'Principal, Interior Architect' },
      { name: 'Partner Name', role: 'Design Director' },
      { name: 'Team Member', role: 'Senior Designer' },
      { name: 'Team Member', role: 'Project Manager' },
    ],
  },

  contact: {
    label: 'Contact',
    title: 'Tell us about your space',
    email: 'Email',
    phone: 'Phone',
    studio: 'Studio',
    form: {
      name: 'Name',
      email: 'Email',
      type: 'Project type',
      message: 'About the project',
      submit: 'Send enquiry →',
      types: ['Residential', 'Hospitality', 'Workplace', 'Retail', 'Other'],
    },
  },

  notFound: { label: '404', title: "This room doesn't exist", back: '← Back home' },

  dateLocale: 'en-GB',
};

export const ui = { id, en };
