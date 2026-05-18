import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../img/logo.ico'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Tentang Kami' },
  { to: '/services', label: 'Layanan' },
]

/** Setelah scroll melewati nilai ini, navbar menjadi fixed/sticky */
const STICKY_THRESHOLD = 100

function navLinkClass({ isActive }) {
  return [
    'relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
    isActive
      ? 'text-yellow-300 bg-white/10'
      : 'text-blue-100 hover:text-yellow-300 hover:bg-white/5',
  ].join(' ')
}

function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > STICKY_THRESHOLD)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setIsSticky(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const headerClass = [
    'z-50 w-full bg-blue-900 transition-all duration-300 ease-out',
    isSticky
      ? 'fixed top-0 left-0 right-0 shadow-lg border-b border-yellow-400/25 bg-blue-900/95 backdrop-blur-md py-3'
      : 'relative shadow-md py-4',
  ].join(' ')

  return (
    <>
      <header className={headerClass}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
          <Link
            to="/"
            className="group flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0"
          >
            <img
              src={logo}
              alt="Logo KJA IKA SURYA"
              className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 object-contain rounded-full bg-white p-0.5 shadow-sm ring-1 ring-yellow-400/40 group-hover:ring-yellow-300/60 transition-shadow"
            />
            <div className="flex flex-col min-w-0 leading-tight">
              <span className="font-bold text-base sm:text-lg text-white tracking-tight group-hover:text-yellow-300 transition-colors truncate">
                KJA IKA SURYA
              </span>
              <span className="text-blue-200 text-[10px] sm:text-xs font-normal truncate hidden sm:block">
                Kantor Jasa Akuntansi
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navLinkClass} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="ml-2">
              <Link
                to="/contact"
                className="inline-block bg-yellow-400 text-blue-900 text-sm font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition-colors duration-200 shadow-sm"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-blue-100 hover:text-yellow-300 hover:bg-white/10 transition-colors"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </nav>

        <div
          className={[
            'md:hidden overflow-hidden transition-all duration-300 ease-out border-t border-blue-800/80',
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-transparent',
            isSticky ? 'bg-blue-900/95' : 'bg-blue-900',
          ].join(' ')}
        >
          <ul className="px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                      isActive
                        ? 'text-yellow-300 bg-white/10'
                        : 'text-blue-100 hover:text-yellow-300 hover:bg-white/5',
                    ].join(' ')
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                className="block text-center bg-yellow-400 text-blue-900 text-sm font-bold px-5 py-2.5 rounded-full hover:bg-yellow-300 transition-colors"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Cegah konten meloncat saat navbar menjadi fixed */}
      {isSticky && (
        <div className="h-[var(--header-height)] shrink-0" aria-hidden="true" />
      )}
    </>
  )
}

export default Navbar
