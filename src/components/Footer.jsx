import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6 px-8 mt-auto">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Kolom 1 - Brand */}
        <div>
          <h3 className="font-bold text-lg text-yellow-400 mb-3">KJA IKA SURYA</h3>
          <p className="text-blue-200 text-sm leading-relaxed">
            Kantor Jasa Akuntansi profesional terpercaya di Semarang. Terdaftar resmi di Kementerian Keuangan RI.
          </p>
        </div>

        {/* Kolom 2 - Navigasi */}
        <div>
          <h3 className="font-bold text-sm text-yellow-400 mb-3 uppercase tracking-wider">Navigasi</h3>
          <ul className="space-y-2 text-sm text-blue-200">
            <li><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 transition">Tentang Kami</Link></li>
            <li><Link to="/services" className="hover:text-yellow-300 transition">Layanan</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300 transition">Kontak</Link></li>
          </ul>
        </div>

        {/* Kolom 3 - Kontak */}
        <div>
          <h3 className="font-bold text-sm text-yellow-400 mb-3 uppercase tracking-wider">Kontak</h3>
          <ul className="space-y-2 text-sm text-blue-200">
            <li>Jl. Perbalan Purwosari Gg. I, Semarang Utara</li>
            <li>(024) 3511253</li>
            <li>081390645358</li>
            <li>firmaikasurya@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800 pt-6 text-center text-blue-400 text-xs">
        © {new Date().getFullYear()} KJA IKA SURYA Semarang. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer