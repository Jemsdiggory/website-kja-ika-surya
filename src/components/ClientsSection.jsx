import { useCallback, useEffect, useRef, useState } from 'react'
import { useDraggableScroll } from '../hooks/useDraggableScroll'
import { useCountUp, useIsMobile } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'

import ptpodo from '../../img/client/PTPODO.jpg'
import familyfun from '../../img/client/FAMILYFUN.jpg'
import superskin from '../../img/client/SUPERSKIN.jpg'
import ciptakarya from '../../img/client/CIPTAKARYA.jpg'
import indomarco from '../../img/client/INDOMARCO.png'
import palcoffee from '../../img/client/PALCOFFEE.jpg'
import headroom from '../../img/client/HEADROOM.jpg'
import selera from '../../img/client/SELERAINDONESIA.jpg'
import makyek from '../../img/client/MAKYEK.jpg'
import manon from '../../img/client/manon.jpeg'
import mahima from '../../img/client/mahima.jpeg'

const clients = [
  { name: 'PT Podo', logo: ptpodo },
  { name: 'Family Fun', logo: familyfun },
  { name: 'Superskin', logo: superskin },
  { name: 'Cipta Karya', logo: ciptakarya },
  { name: 'Indomarco', logo: indomarco },
  { name: 'Pal Coffee', logo: palcoffee },
  { name: 'Headroom', logo: headroom },
  { name: 'Selera Indonesia', logo: selera },
  { name: 'Makyek', logo: makyek },
  { name: 'Manon', logo: manon },
  { name: 'Mahima', logo: mahima },
]

const stats = [
  { value: 15, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 50, suffix: '+', label: 'Klien Terpercaya' },
  { value: 100, suffix: '+', label: 'Proyek Selesai' },
  { value: 10, suffix: '+', label: 'Tenaga Profesional' },
]

function StatItem({ value, suffix, label, animate }) {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const count = useCountUp(value, { enabled: animate, inView, duration: 2000 })

  return (
    <div ref={ref} className="text-center px-4 py-6">
      <p className="text-3xl sm:text-4xl font-bold text-blue-900 tabular-nums">
        {count}
        <span className="text-yellow-500">{suffix}</span>
      </p>
      <p className="text-sm sm:text-base text-gray-600 mt-2 font-medium">{label}</p>
    </div>
  )
}

function ClientsSlider() {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const loopItems = [...clients, ...clients]

  const onDragStart = useCallback(() => setIsDragging(true), [])
  const onDragEnd = useCallback(() => setIsDragging(false), [])

  useDraggableScroll(scrollRef, { onDragStart, onDragEnd })

  useEffect(() => {
    const el = scrollRef.current
    if (!el || isDragging || isPaused) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let rafId
    const speed = 0.6

    const tick = () => {
      el.scrollLeft += speed
      const half = el.scrollWidth / 2
      if (half > 0 && el.scrollLeft >= half) {
        el.scrollLeft -= half
      }
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [isDragging, isPaused])

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10"
        aria-hidden="true"
      />

      <div
        ref={scrollRef}
        id="clients-slider"
        className="clients-slider flex gap-6 sm:gap-10 overflow-x-auto py-4 select-none"
        tabIndex={0}
        role="region"
        aria-label="Logo klien — geser untuk melihat lebih banyak"
      >
        {loopItems.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="clients-slide flex shrink-0 items-center justify-center"
          >
            <img
              src={client.logo}
              alt={client.name}
              draggable={false}
              className="max-h-14 sm:max-h-16 w-auto max-w-[140px] sm:max-w-[160px] object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function ClientsSection() {
  const isMobile = useIsMobile()

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-2">
          Klien Kami
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base mb-8 sm:mb-10 max-w-2xl mx-auto">
          Dipercaya oleh berbagai perusahaan di Semarang dan sekitarnya
        </p>

        <ClientsSlider />

        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-gray-100 pt-10 sm:pt-12">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              animate={!isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
