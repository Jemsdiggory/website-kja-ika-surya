import { useCallback, useEffect, useRef } from 'react'

function getClientX(e) {
  return e.touches ? e.touches[0].clientX : e.clientX
}

/**
 * Drag-to-scroll horizontal slider (mouse + touch + keyboard).
 * @param {React.RefObject<HTMLElement>} ref
 * @param {{ onDragStart?: () => void, onDragEnd?: () => void }} options
 */
export function useDraggableScroll(ref, { onDragStart, onDragEnd } = {}) {
  const state = useRef({ isDown: false, startX: 0, scrollLeft: 0 })

  const endDrag = useCallback(() => {
    if (state.current.isDown) {
      state.current.isDown = false
      onDragEnd?.()
    }
  }, [onDragEnd])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMouseDown = (e) => {
      state.current.isDown = true
      state.current.startX = getClientX(e) - el.offsetLeft
      state.current.scrollLeft = el.scrollLeft
      onDragStart?.()
      e.preventDefault()
    }

    const onMouseMove = (e) => {
      if (!state.current.isDown) return
      e.preventDefault()
      const x = getClientX(e) - el.offsetLeft
      el.scrollLeft = state.current.scrollLeft - (x - state.current.startX) * 1.3
    }

    const onTouchStart = (e) => {
      state.current.startX = getClientX(e)
      state.current.scrollLeft = el.scrollLeft
      onDragStart?.()
    }

    const onTouchMove = (e) => {
      el.scrollLeft = state.current.scrollLeft - (getClientX(e) - state.current.startX) * 1.3
    }

    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') el.scrollLeft += 180
      if (e.key === 'ArrowLeft') el.scrollLeft -= 180
    }

    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('mouseleave', endDrag)
    el.addEventListener('mouseup', endDrag)
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: true })
    el.addEventListener('touchend', endDrag)
    el.addEventListener('keydown', onKeyDown)

    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('mouseleave', endDrag)
      el.removeEventListener('mouseup', endDrag)
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', endDrag)
      el.removeEventListener('keydown', onKeyDown)
    }
  }, [ref, endDrag, onDragStart, onDragEnd])

  return { endDrag }
}
