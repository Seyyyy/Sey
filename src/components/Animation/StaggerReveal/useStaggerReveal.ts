import { useEffect, type RefObject } from 'react'
import styles from './StaggerReveal.module.css'

const TARGET_SELECTOR = 'h1, h2, h3, p, li, pre, blockquote, a'
const DEFAULT_STEP_MS = 40

/**
 * @param stepMs 要素ごとの表示間隔(ミリ秒)。省略時は40ms。
 */
export function useStaggerReveal(
  containerRef: RefObject<HTMLElement | null>,
  stepMs: number = DEFAULT_STEP_MS,
) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>(TARGET_SELECTOR),
    ).filter((el) => {
      const tag = el.tagName.toLowerCase()
      if (tag === 'pre' || tag === 'blockquote' || tag === 'a') return true
      return !el.closest('pre') && !el.closest('blockquote') && !el.closest('a')
    })

    const timers = targets.map((el, i) =>
      setTimeout(() => {
        el.classList.add(styles.revealed)
      }, i * stepMs),
    )

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [containerRef, stepMs])

  return styles.pending
}
