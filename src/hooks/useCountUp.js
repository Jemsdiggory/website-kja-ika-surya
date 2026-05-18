import { useEffect, useState } from 'react'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}

/**
 * Count-up animation when element is visible.
 * Disabled on mobile (< md) and when prefers-reduced-motion.
 */
export function useCountUp(target, { duration = 2000, enabled = true, inView = false } = {}) {
  const reducedMotion = usePrefersReducedMotion()
  const [value, setValue] = useState(target)
  const shouldAnimate = enabled && inView && !reducedMotion

  useEffect(() => {
    if (!shouldAnimate) {
      setValue(target)
      return
    }

    let start = null
    let rafId

    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.floor(eased * target))
      if (progress < 1) rafId = requestAnimationFrame(step)
      else setValue(target)
    }

    setValue(0)
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [shouldAnimate, target, duration])

  return value
}

export function useIsMobile() {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setMobile(mq.matches)
    const handler = (e) => setMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return mobile
}
