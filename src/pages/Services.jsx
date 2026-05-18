import { IconClipboard, IconReceipt, IconBriefcase, IconTarget, IconRocket } from '../components/Icons'
import { hoverCard, hoverCardBorderTop } from '../utils/cardStyles'

const services = [
  {
    icon: <IconClipboard />,
    number: '01',
    title: 'Jasa Kompilasi Laporan Keuangan',
    description: 'Penyusunan laporan keuangan berdasarkan dokumen transaksi dan dokumen lain yang terkait dengan keuangan perusahaan, sesuai Standar Akuntansi Keuangan yang berlaku.',
    points: [
      'Tidak perlu karyawan accounting internal',
      'Cukup kumpulkan dokumen transaksi dan catat kas masuk/keluar',
      'Laporan disajikan secara cepat, akurat, dan profesional',
    ],
  },
  {
    icon: <IconReceipt />,
    number: '02',
    title: 'Jasa Perpajakan',
    description: 'Layanan profesional di bidang perpajakan, meliputi konsultasi umum, perencanaan pajak, review kewajiban pajak, pengisian SPM/SPT, dan penyelesaian permasalahan perpajakan.',
    points: [
      'SPT Masa PPh Pasal 21/26 Badan dan PPN Masa',
      'Pelaporan ke KPP setempat',
      'Penghapusan NPWP',
    ],
  },
  {
    icon: <IconClipboard />,
    number: '03',
    title: 'Jasa Pembukuan',
    description: 'Layanan pembukuan lengkap untuk pencatatan transaksi keuangan perusahaan secara sistematis dan akurat.',
    points: [
      'Input data transaksi rutin',
      'Penjurnalan dan Rekonsiliasi Bank',
      'Trial Balance dan General Ledger',
    ],
  },
  {
    icon: <IconBriefcase />,
    number: '04',
    title: 'Jasa Manajemen',
    description: 'Membantu pengelolaan bisnis dan sumber daya manusia perusahaan secara profesional.',
    points: [
      'Pembuatan Peraturan Perusahaan & Payroll System',
      'Administrasi Jamsostek & Karyawan',
      'Penyusunan Studi Kelayakan Bisnis',
    ],
  },
  {
    icon: <IconTarget />,
    number: '05',
    title: 'Jasa Konsultasi Manajemen',
    description: 'Membantu pengelola badan usaha dalam mengidentifikasi problem bisnis dan menemukan solusi untuk pemecahan masalah operasi, keuangan, dan pemasaran.',
    points: [
      'Analisis masalah operasional',
      'Solusi strategis keuangan',
      'Konsultasi pemasaran bisnis',
    ],
  },
  {
    icon: <IconRocket />,
    number: '06',
    title: 'Akuntansi Manajemen',
    description: 'Menyediakan informasi keuangan bagi manajemen untuk pengambilan keputusan ekonomi dalam melaksanakan fungsi manajemen.',
    points: [
      'Informasi keuangan untuk pengambilan keputusan',
      'Analisis rasio keuangan',
      'Laporan manajemen berkala',
    ],
  },
]

function Services() {
  return (
    <div>
      {/* Header */}
      <section className="page-hero">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Layanan Kami</h1>
        <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          KJA IKA SURYA menyediakan berbagai layanan profesional di bidang akuntansi, 
          perpajakan, dan manajemen untuk mendukung pertumbuhan bisnis Anda.
        </p>
      </section>

      {/* Daftar Layanan */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.number} className={`${hoverCard} p-6 ${hoverCardBorderTop}`}>
              <div className="flex items-start gap-4 mb-4">
                <div>{service.icon}</div>
                <div>
                  <span className="text-yellow-500 font-bold text-sm">{service.number}</span>
                  <h3 className="font-bold text-blue-900 text-lg leading-tight">{service.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-1">
                {service.points.map((point) => (
                  <li key={point} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-yellow-500 font-bold mt-0.5">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services