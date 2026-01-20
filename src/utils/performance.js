// Performance monitoring utilities

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0]
    
    return {
      // Page load metrics
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      
      // Network metrics
      dns: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcp: navigation.connectEnd - navigation.connectStart,
      request: navigation.responseStart - navigation.requestStart,
      response: navigation.responseEnd - navigation.responseStart,
      
      // Total time
      totalTime: navigation.loadEventEnd - navigation.navigationStart
    }
  }
  return null
}

// Preload critical resources
export const preloadCriticalResources = () => {
  // Only preload the hero image immediately, others will be lazy loaded
  const criticalImages = [
    'https://i.ibb.co.com/Kc929pZp/IMG-8039.jpg', // Hero image only
  ]

  criticalImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}

// Optimize images for different screen sizes
export const getOptimizedImageUrl = (originalUrl, width = 800, quality = 80) => {
  // For ibb.co images, we can't optimize them directly
  // But we can add loading strategies
  return originalUrl
}

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Check if device supports WebP
export const supportsWebP = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}

// Lazy load images when they come into view
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]')
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove('lazy')
        observer.unobserve(img)
      }
    })
  })

  images.forEach(img => imageObserver.observe(img))
}