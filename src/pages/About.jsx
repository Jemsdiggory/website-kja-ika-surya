import { IconRocket, IconTarget, IconUser } from '../components/Icons'
import OrgChart from '../components/OrgChart'
import {
  hoverCard,
  hoverCardBorderLeftBlue,
  hoverCardBorderLeftYellow,
  hoverCardDark,
} from '../utils/cardStyles'

import pimpinan2 from '../../img/pimpinan2.jpeg'
import pimpinan1 from '../../img/pimpinan1.jpeg'

function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Tentang Perusahaan */}
      <section className="page-hero">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Tentang Kami</h1>
        <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Mengenal lebih jauh KJA IKA SURYA — kantor jasa akuntansi profesional terpercaya di Semarang.
        </p>
      </section>

      {/* Deskripsi Perusahaan */}
      <section className="py-10 sm:py-16 px-4 sm:px-8 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Siapa Kami?</h2>
        <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
          <span className="font-bold">KJA IKA SURYA</span> adalah perusahaan yang bergerak di bidang jasa profesional, meliputi jasa kompilasi 
          laporan keuangan, jasa perpajakan, jasa pembukuan, jasa manajemen, jasa konsultasi manajemen, 
          dan akuntansi manajemen.
        </p>
        <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
          Legalitas operasional KJA IKA SURYA telah ditetapkan melalui Keputusan Menteri Keuangan 
          Republik Indonesia Nomor 38/KM.1/PPPK/2022. Perusahaan ini dikelola oleh tenaga ahli yang 
          kompeten dan berpengalaman di bidangnya.
        </p>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          KJA IKA SURYA senantiasa membuka diri untuk bekerja sama dengan berbagai instansi, baik dari 
          sektor swasta maupun pemerintahan, dengan menjunjung tinggi prinsip kerja sama yang dilandasi 
          tanggung jawab, saling menguntungkan, serta berorientasi pada hasil terbaik bagi semua pihak.
        </p>
      </section>

      {/* Visi & Misi */}
      <section className="bg-gray-50 py-10 sm:py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          <div className={`${hoverCard} p-5 sm:p-8 ${hoverCardBorderLeftBlue}`}>
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-4 flex items-center gap-2">
              <IconTarget />
              Visi
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Menjadi Kantor Jasa Akuntansi yang jujur dan terpercaya, serta mampu memberikan jasa 
              berkualitas tinggi dan berstandar di bidang akuntansi, keuangan, serta perpajakan dengan 
              kredibilitas terbaik.
            </p>
          </div>
          <div className={`${hoverCard} p-5 sm:p-8 ${hoverCardBorderLeftYellow}`}>
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-4 flex items-center gap-2">
              <IconRocket />
              Misi
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Menjadi Kantor Jasa Akuntansi yang tumbuh dan berkembang bersama para klien dengan 
              menerapkan praktik bisnis yang baik sesuai dengan standar profesional yang berlaku dengan 
              menjunjung tinggi hukum dan etika profesi.
            </p>
          </div>
        </div>
      </section>

      <OrgChart />

      {/* Profil Pimpinan */}
      <section className="py-10 sm:py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 text-center mb-8 sm:mb-12 px-2">
            Pimpinan Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-lg sm:max-w-none mx-auto">
            <div className={`${hoverCard} p-5 sm:p-6 text-center`}>
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-100 group-hover:ring-2 group-hover:ring-blue-200 overflow-hidden shrink-0">
                <img
                  src={pimpinan1}
                  alt="Dra. Djuwariyah"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-blue-900 text-base sm:text-lg transition-colors duration-300 group-hover:text-blue-800 break-words px-1">
                Dra. Djuwariyah
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 leading-snug break-words px-1">
                S.E., S.H., M.Ak., Akt., CA., BKP., ACPA
              </p>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300 group-hover:bg-blue-200">
                Pimpinan Utama
              </span>
            </div>

            <div className={`${hoverCard} p-5 sm:p-6 text-center`}>
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-yellow-50 group-hover:ring-2 group-hover:ring-yellow-200 overflow-hidden shrink-0">
                <img
                  src={pimpinan2}
                  alt="Ika Adhias Cahyaningrum"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-blue-900 text-base sm:text-lg transition-colors duration-300 group-hover:text-blue-800 break-words px-1">
                Ika Adhias Cahyaningrum
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 leading-snug break-words px-1">
                S.E., S.H., M.Si., Ak., CA., BKP., ACPA., CGAA
              </p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300 group-hover:bg-yellow-200">
                Rekan Pimpinan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Data Perusahaan */}
      <section className="bg-blue-900 text-white py-10 sm:py-16 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 px-2">
            Profil Singkat Perusahaan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
            {[
              { label: 'Nama Perusahaan', value: 'KJA IKA SURYA' },
              { label: 'Bentuk Usaha', value: 'Firma' },
              { label: 'No. Izin Usaha', value: '38/KM.1/PPPK/2022' },
              { label: 'NPWP KJA', value: '53.4886.155.504.000' },
              { label: 'Alamat', value: 'JI. Darat Nipah 3 No. 251A Dadapsari Semarang Utara' },
              { label: 'Telepon', value: '(024) 3511253' },
              { label: 'WhatsApp', value: '+62 856-4027-0055' },
              { label: 'Email', value: 'firmaikasurya@gmail.com' },
            ].map((item) => (
              <div key={item.label} className={`bg-blue-800 p-3 sm:p-4 rounded-lg ${hoverCardDark}`}>
                <p className="text-yellow-300 font-semibold text-xs mb-1">{item.label}</p>
                <p className="text-white text-sm sm:text-base break-words">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
