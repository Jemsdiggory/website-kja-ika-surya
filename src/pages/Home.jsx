import { Link } from 'react-router-dom'
import { IconBriefcase, IconClipboard, IconReceipt } from '../components/Icons'
import { hoverCard } from '../utils/cardStyles'
import kegiatan1 from '../../img/kegiatan1.jpeg'
import kegiatan2 from '../../img/kegiatan2.jpeg'
import kegiatan3 from '../../img/kegiatan3.jpeg'

const galeri = [
  { src: kegiatan1},
  { src: kegiatan2},
  { src: kegiatan3},
]

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="page-hero page-hero-lg">
        <h1 className="text-4xl font-bold mb-4">KJA IKA SURYA</h1>
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

      {/* Galeri Kegiatan */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Galeri Kegiatan</h2>
        <p className="text-center text-gray-500 mb-12">Sekilas aktivitas dan suasana di KJA IKA SURYA</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {galeri.map((item) => (
            <div key={item.label} className="rounded-xl overflow-hidden shadow group relative">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
              />
              
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-12 px-8 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Siap Berkembang Bersama Kami?</h2>
        <p className="text-blue-800 mb-6">Konsultasikan kebutuhan bisnis Anda sekarang.</p>
        <Link
          to="/contact"
          className="bg-blue-900 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-800 transition"
        >
          Mulai Konsultasi
        </Link>
      </section>
    </div>
  )
}

export default Home