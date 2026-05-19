import { Link } from 'react-router-dom'

function Footer() {
  const instagram = {
    label: 'Instagram',
    href: 'https://www.instagram.com/kja.ikasurya',
  }
  const tiktok = {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@kja.ikasurya',
  }
  const linkedin = {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/kja-ika-surya/',
  }

  const IconInstagram = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )

  const IconTiktok = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  )

  const IconLinkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )

  const year = new Date().getFullYear()

  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6 px-8 mt-auto">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

        <div>
          <h3 className="font-bold text-lg text-yellow-400 mb-3">KJA IKA SURYA</h3>
          <p className="text-blue-200 text-sm leading-relaxed">
            Kantor Jasa Akuntansi profesional terpercaya di Semarang. Terdaftar resmi di Kementerian Keuangan RI.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-sm text-yellow-400 mb-3 uppercase tracking-wider">Social Media</h3>
          <div className="flex gap-4 mt-1">
          <a href={instagram.href} target="_blank" rel="noopener noreferrer" aria-label={instagram.label} className="text-blue-200 hover:text-yellow-300 hover:scale-125 transition-transform duration-200">
            <IconInstagram />
          </a>
          <a href={tiktok.href} target="_blank" rel="noopener noreferrer" aria-label={tiktok.label} className="text-blue-200 hover:text-yellow-300 hover:scale-125 transition-transform duration-200">
            <IconTiktok />
          </a>
          <a href={linkedin.href} target="_blank" rel="noopener noreferrer" aria-label={linkedin.label} className="text-blue-200 hover:text-yellow-300 hover:scale-125 transition-transform duration-200">
            <IconLinkedin />
          </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm text-yellow-400 mb-3 uppercase tracking-wider">Kontak</h3>
          <ul className="space-y-2 text-sm text-blue-200">
            <li>JI. Darat Nipah 3 No. 251A Dadapsari Semarang Utara</li>
            <li>+62 856-4027-0055</li>
            <li>firmaikasurya@gmail.com</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-blue-800 pt-6 text-center text-blue-400 text-xs">
        © {year} KJA IKA SURYA Semarang. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer