function IconMapPin({ className = 'w-6 h-6 text-yellow-500' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  )
}

function IconPhone({ className = 'w-6 h-6 text-yellow-500' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
    </svg>
  )
}

function IconEnvelope({ className = 'w-6 h-6 text-yellow-500' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}

function IconWhatsapp({ className = 'w-6 h-6 text-yellow-500' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  )
}

const kontakInfo = [
  { icon: <IconMapPin />, label: 'Alamat', value: 'JI. Darat Nipah 3 No. 251A Dadapsari Semarang Utara' },
  { icon: <IconPhone />, label: 'Telepon', value: '(024) 3511253' },
  { icon: <IconWhatsapp />, label: 'WhatsApp', value: '+62 856-4027-0055' },
  { icon: <IconEnvelope />, label: 'Email', value: 'firmaikasurya@gmail.com' },
]

import { hoverInfoRow, hoverPanel } from '../utils/cardStyles'

function Contact() {
  return (
    <div>
      <section className="page-hero">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Hubungi Kami</h1>
        <p className="text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Kami siap membantu kebutuhan akuntansi dan perpajakan Anda. Jangan ragu untuk menghubungi kami.
        </p>
      </section>

      <section className="py-16 px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Informasi Kontak</h2>
            <div className="space-y-6">
              {kontakInfo.map((item) => (
                <div key={item.label} className={hoverInfoRow}>
                  <div className="bg-blue-50 p-3 rounded-lg shrink-0 transition-colors duration-300 group-hover:bg-blue-100">{item.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">{item.label}</p>
                    <p className="text-gray-800 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/6285640270055"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-400 transition"
            >
              <IconWhatsapp className="w-5 h-5 text-white" />
              Chat via WhatsApp
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Jam Operasional</h2>
            <div className={`bg-gray-50 p-6 space-y-3 ${hoverPanel}`}>
              {[
                { hari: 'Senin - Jumat', jam: '08.00 - 16.00 WIB' },
                { hari: 'Sabtu', jam: '08.00 - 13.00 WIB' },
                { hari: 'Minggu & Hari Libur', jam: 'Tutup' },
              ].map((item) => (
                <div key={item.hari} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                  <span className="text-gray-700 font-medium">{item.hari}</span>
                  <span className={`font-semibold ${item.jam === 'Tutup' ? 'text-red-500' : 'text-blue-900'}`}>
                    {item.jam}
                  </span>
                </div>
              ))}
            </div>
            <div className={`mt-6 bg-yellow-50 border border-yellow-200 p-6 ${hoverPanel} hover:bg-yellow-100/80`}>
              <h3 className="font-bold text-blue-900 mb-2">Konsultasi Gratis</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hubungi kami untuk konsultasi awal secara gratis. Tim profesional kami siap 
                memberikan solusi terbaik untuk kebutuhan akuntansi dan perpajakan bisnis Anda.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Setelah closing tag section kontak (</section>), tambahkan ini: */}

<section className="py-16 px-8 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-blue-900 mb-2">Lokasi Kami</h2>
    <p className="text-gray-500 mb-6 text-sm">Jl. Darat Nipah 3 No. 251A, Dadapsari, Semarang Utara</p>

    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <iframe
        title="Lokasi KJA IKA SURYA"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d110.4166!3d-6.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d7b0f%3A0x6e2b2e2e2e2e2e2e!2sJl.+Darat+Nipah+3+No.251A%2C+Dadapsari%2C+Semarang+Utara!5e0!3m2!1sid!2sid!4v1234567890"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    <div className="mt-4 flex justify-end">
      
        <a href="https://maps.app.goo.gl/cNauazsyToJRGvXP7"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 bg-blue-900 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-800 transition shadow"
      >
        <IconMapPin className="w-5 h-5 text-yellow-400" />
        Buka di Google Maps
      </a>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact