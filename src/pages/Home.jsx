import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ClientsSection from '../components/ClientsSection'
import { IconBriefcase, IconClipboard, IconReceipt } from '../components/Icons'
import { hoverCard } from '../utils/cardStyles'
import kegiatan1 from '../../img/kegiatan1.jpeg'
import kegiatan2 from '../../img/kegiatan2.jpeg'
import kegiatan3 from '../../img/kegiatan3.jpeg'
import kegiatan4 from '../../img/kegiatan4.jpeg'
import kegiatan5 from '../../img/kegiatan5.jpeg'
import kegiatan6 from '../../img/kegiatan6.jpeg'
import background1 from '../../img/bg1.jpeg'
import background2 from '../../img/bg2.jpeg'
import floatingAccountant from '../../img/vector.jpg'

const slides = [
  { src: background1 },
  { src: background2 },
]

const galeri = [
  { src: kegiatan1 },
  { src: kegiatan2 },
  { src: kegiatan3 },
  { src: kegiatan4 },
  { src: kegiatan5 },
  { src: kegiatan6 },
]

// FloatingAccountant component
const FloatingAccountant = () => (
  <div
    className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
    style={{ animation: 'float 3s ease-in-out infinite' }}
  >
    <img
      src={floatingAccountant}
      alt="Floating Accountant"
      className="w-full h-full object-contain drop-shadow-lg"
    />
  </div>
)

function Home() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[580px] flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <img src={slide.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="relative z-10 text-center text-white px-8 py-20">
          <p className="text-yellow-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Terdaftar Resmi Kementerian Keuangan RI
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">KJA IKA SURYA</h1>
          <p className="text-yellow-300 text-lg mb-4">Kantor Jasa Akuntansi Profesional – Semarang</p>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Kami hadir untuk membantu bisnis Anda berkembang dengan laporan keuangan
            yang akurat, layanan perpajakan, dan strategi manajemen yang tepat.
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? 'bg-yellow-400 w-6' : 'bg-white/50 hover:bg-white/80 w-2'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Highlight Layanan */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className={`${hoverCard} p-6 text-center`}>
            <div className="mb-4"><IconClipboard /></div>
            <h3 className="font-bold text-blue-900 text-lg mb-2">Jasa Akuntansi & Pembukuan</h3>
            <p className="text-gray-600 text-sm">Penyusunan laporan keuangan akurat sesuai standar akuntansi yang berlaku.</p>
          </div>
          <div className={`${hoverCard} p-6 text-center`}>
            <div className="mb-4"><IconReceipt /></div>
            <h3 className="font-bold text-blue-900 text-lg mb-2">Jasa Perpajakan</h3>
            <p className="text-gray-600 text-sm">Pengelolaan perpajakan perusahaan secara profesional dan sesuai regulasi.</p>
          </div>
          <div className={`${hoverCard} p-6 text-center`}>
            <div className="mb-4"><IconBriefcase /></div>
            <h3 className="font-bold text-blue-900 text-lg mb-2">Konsultasi Manajemen</h3>
            <p className="text-gray-600 text-sm">Solusi strategis untuk operasional, keuangan, dan pengembangan bisnis Anda.</p>
          </div>
        </div>
      </section>

      <ClientsSection />

      {/* Galeri Kegiatan */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Galeri Kegiatan</h2>
        <p className="text-center text-gray-500 mb-12">Sekilas aktivitas keluarga besar KJA IKA SURYA</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {galeri.map((item) => (
            <div key={String(item.src)} className="rounded-xl overflow-hidden shadow group relative">
              <img
                src={item.src}
                alt="Kegiatan KJA IKA SURYA"
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-12 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Siap Berkembang Bersama Kami?</h2>
            <p className="text-blue-800 mb-6">Konsultasikan kebutuhan bisnis Anda sekarang.</p>
            <Link
              to="/contact"
              className="bg-blue-900 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-800 transition"
            >
              Mulai Konsultasi
            </Link>
          </div>
          <div className="flex-shrink-0 flex justify-center">
            <FloatingAccountant />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home