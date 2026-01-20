import { useEffect, useRef } from 'react'

// Hook to optimize animations based on device performance
export const usePerformance = () => {
  const prefersReducedMotion = useRef(false)
  const isLowEndDevice = useRef(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.current = mediaQuery.matches

    // Simple performance detection
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')
    const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4
    const isLowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4

    isLowEndDevice.current = isSlowConnection || isLowMemory || isLowCPU

    // Listen for changes in motion preference
    const handleChange = (e) => {
      prefersReducedMotion.current = e.matches
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return {
    shouldReduceMotion: prefersReducedMotion.current,
    isLowEndDevice: isLowEndDevice.current,
    getOptimizedTransition: (defaultTransition) => {
      if (prefersReducedMotion.current || isLowEndDevice.current) {
        return { duration: 0.1 }
      }
      return defaultTransition
    }
  }
}

// Hook for intersection observer with performance optimizations
export const useOptimizedInView = (options = {}) => {
  const ref = useRef()
  const isInView = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.current = entry.isIntersecting
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView.current]
}