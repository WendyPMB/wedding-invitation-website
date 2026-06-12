export const weddingData = {
  // Tanggal pernikahan (format ISO) — mudah diganti
  weddingDate: "2026-09-12T08:00:00+07:00",

  couple: {
    groom: {
      name: "Dimas Arya Pratama",
      shortName: "Dimas",
      parents: "Putra dari Bapak Suryanto & Ibu Rahmawati",
      description:
        "Putra pertama yang penuh dedikasi, mencintai musik dan perjalanan.",
      photo: "/images/groom.png",
      instagram: "@dimasarya",
    },
    bride: {
      name: "Anindya Putri Lestari",
      shortName: "Anindya",
      parents: "Putri dari Bapak Hendra & Ibu Wulandari",
      description:
        "Putri kedua yang lembut hati, mencintai seni dan literasi.",
      photo: "/images/bride.png",
      instagram: "@anindyaputri",
    },
  },

  greeting: {
    salutation: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
    quote:
      "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.",
    source: "QS. Ar-Rum: 21",
  },

  story: [
    {
      title: "Pertemuan",
      date: "Maret 2021",
      description:
        "Takdir mempertemukan kami di sebuah acara komunitas. Sebuah perkenalan sederhana yang menjadi awal dari segalanya.",
      photo: "/images/story-1.png",
    },
    {
      title: "Pendekatan",
      date: "Agustus 2022",
      description:
        "Dari obrolan ringan hingga larut malam, kami menyadari betapa nyamannya kebersamaan ini dan tumbuhnya rasa yang tulus.",
      photo: "/images/story-2.png",
    },
    {
      title: "Lamaran",
      date: "Februari 2025",
      description:
        "Di bawah langit senja, sebuah janji diucapkan. Sebuah pertanyaan yang dijawab dengan air mata bahagia dan kata 'iya'.",
      photo: "/images/story-3.png",
    },
    {
      title: "Pernikahan",
      date: "September 2026",
      description:
        "Dan kini, kami siap melangkah ke babak baru kehidupan, menyatukan dua hati dalam ikatan suci pernikahan.",
      photo: "/images/gallery-1.png",
    },
  ],

  events: [
    {
      title: "Akad Nikah",
      date: "Sabtu, 12 September 2026",
      time: "08.00 - 10.00 WIB",
      location: "Masjid Agung Al-Azhar",
      address: "Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan",
    },
    {
      title: "Resepsi",
      date: "Sabtu, 12 September 2026",
      time: "11.00 - 14.00 WIB",
      location: "Ballroom Hotel Mulia",
      address: "Jl. Asia Afrika No. 8, Senayan, Jakarta Pusat",
    },
  ],

  maps: {
    embedUrl:
      "https://www.google.com/maps?q=Hotel+Mulia+Senayan+Jakarta&output=embed",
    link: "https://maps.google.com/?q=Hotel+Mulia+Senayan+Jakarta",
  },

  gallery: [
    "/images/gallery-1.png",
    "/images/gallery-2.png",
    "/images/gallery-3.png",
    "/images/gallery-4.png",
    "/images/gallery-5.png",
    "/images/gallery-6.png",
  ],

  gifts: [
    {
      bank: "Bank BCA",
      number: "1234567890",
      holder: "Dimas Arya Pratama",
    },
    {
      bank: "Bank Mandiri",
      number: "0987654321",
      holder: "Anindya Putri Lestari",
    },
  ],

  shippingAddress:
    "Jl. Melati Indah No. 24, Kebayoran Baru, Jakarta Selatan, 12110",

  initialWishes: [
    {
      name: "Rangga & Sari",
      message:
        "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
    },
    {
      name: "Bunga Citra",
      message:
        "Bahagia selalu untuk kalian berdua. Semoga cintanya abadi sampai akhir hayat.",
    },
    {
      name: "Keluarga Besar Wijaya",
      message:
        "Turut berbahagia atas pernikahan kalian. Semoga selalu dilimpahkan keberkahan.",
    },
  ],
}

export type WeddingData = typeof weddingData
