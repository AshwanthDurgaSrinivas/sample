import { useEffect } from 'react'

/**
 * Scroll reveal hook – adds .is-visible to elements with
 * data-reveal, data-reveal-left, data-reveal-right, data-reveal-scale
 */
export default function useScrollReveal() {
  useEffect(() => {
    const revealSelectors = [
      '[data-reveal]',
      '[data-reveal-left]',
      '[data-reveal-right]',
      '[data-reveal-scale]',
      '[data-reveal-stagger]',
    ].join(',')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // For stagger children
            const stagger = entry.target.getAttribute('data-reveal-stagger')
            if (stagger) {
              const children = entry.target.children
              Array.from(children).forEach((child, i) => {
                child.style.transitionDelay = `${i * parseInt(stagger)}ms`
                child.classList.add('stagger-item-visible')
              })
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll(revealSelectors)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
