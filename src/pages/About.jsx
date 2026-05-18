import { IconRocket, IconTarget, IconUser } from '../components/Icons'
import OrgChart from '../components/OrgChart'
import {
  hoverCard,
  hoverCardBorderLeftBlue,
  hoverCardBorderLeftYellow,
  hoverCardDark,
} from '../utils/cardStyles'

import pimpinan2 from '../../img/pimpinan2.jpeg'

function About() {
  return (
    <div>
      {/* Tentang Perusahaan */}
      <section className="bg-blue-900 text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
        <p className="text-blue-200 max-w-2xl mx-auto">
          Mengenal lebih jauh KJA IKA SURYA — kantor jasa akuntansi profesional terpercaya di Semarang.
        </p>
      </section>

      {/* Deskripsi Perusahaan */}
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Siapa Kami?</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          KJA IKA SURYA adalah perusahaan yang bergerak di bidang jasa profesional, meliputi jasa kompilasi 
          laporan keuangan, jasa perpajakan, jasa pembukuan, jasa manajemen, jasa konsultasi manajemen, 
          dan akuntansi manajemen.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Legalitas operasional KJA IKA SURYA telah ditetapkan melalui Keputusan Menteri Keuangan 
          Republik Indonesia Nomor 38/KM.1/PPPK/2022. Perusahaan ini dikelola oleh tenaga ahli yang 
          kompeten dan berpengalaman di bidangnya.
        </p>
        <p className="text-gray-700 leading-relaxed">
          KJA IKA SURYA senantiasa membuka diri untuk bekerja sama dengan berbagai instansi, baik dari 
          sektor swasta maupun pemerintahan, dengan menjunjung tinggi prinsip kerja sama yang dilandasi 
          tanggung jawab, saling menguntungkan, serta berorientasi pada hasil terbaik bagi semua pihak.
        </p>
      </section>

      {/* Visi & Misi */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${hoverCard} p-8 ${hoverCardBorderLeftBlue}`}>
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <IconTarget />
              Visi
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi Kantor Jasa Akuntansi yang jujur dan terpercaya, serta mampu memberikan jasa 
              berkualitas tinggi dan berstandar di bidang akuntansi, keuangan, serta perpajakan dengan 
              kredibilitas terbaik.
            </p>
          </div>
          <div className={`${hoverCard} p-8 ${hoverCardBorderLeftYellow}`}>
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <IconRocket />
              Misi
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi Kantor Jasa Akuntansi yang tumbuh dan berkembang bersama para klien dengan 
              menerapkan praktik bisnis yang baik sesuai dengan standar profesional yang berlaku dengan 
              menjunjung tinggi hukum dan etika profesi.
            </p>
          </div>
        </div>
      </section>

      <OrgChart />

      {/* Profil Pimpinan */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-12">Pimpinan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pimpinan 1 */}
            <div className={`${hoverCard} p-6 text-center`}>
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-100 group-hover:ring-2 group-hover:ring-blue-200">
                <IconUser />
              </div>
              <h3 className="font-bold text-blue-900 text-lg transition-colors duration-300 group-hover:text-blue-800">Dra. Djuwariyah</h3>
              <p className="text-sm text-gray-500 mb-2">S.E., S.H., M.Ak., Akt., CA., BKP., ACPA</p>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300 group-hover:bg-blue-200">
                Pimpinan Utama
              </span>
            </div>

            {/* Pimpinan 2 */}
            <div className={`${hoverCard} p-6 text-center`}>
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-yellow-50 group-hover:ring-2 group-hover:ring-yellow-200">
                <img
                  src={pimpinan2}
                  alt="Ika Adhias Cahyaningrum"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-blue-900 text-lg transition-colors duration-300 group-hover:text-blue-800">Ika Adhias Cahyaningrum</h3>
              <p className="text-sm text-gray-500 mb-2">S.E., S.H., M.Si., Ak., CA., BKP., ACPA., CGAA</p>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300 group-hover:bg-yellow-200">
                Rekan Pimpinan
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Data Perusahaan */}
      <section className="bg-blue-900 text-white py-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Profil Singkat Perusahaan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {[
              { label: "Nama Perusahaan", value: "KJA IKA SURYA" },
              { label: "Bentuk Usaha", value: "Firma" },
              { label: "No. Izin Usaha", value: "38/KM.1/PPPK/2022" },
              { label: "NPWP KJA", value: "53.4886.155.504.000" },
              { label: "Alamat", value: "Jl. Darat Nipah No. 251A, Semarang Utara" },
              { label: "Telepon", value: "(024) 3511253" },
              { label: "WhatsApp", value: "081390645358" },
              { label: "Email", value: "firmaikasurya@gmail.com" },
            ].map((item) => (
              <div key={item.label} className={`bg-blue-800 p-4 ${hoverCardDark}`}>
                <p className="text-yellow-300 font-semibold text-xs mb-1">{item.label}</p>
                <p className="text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
