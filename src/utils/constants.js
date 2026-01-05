export const SOCIAL_LINKS = {
  github: 'https://github.com/mirtaakins',
  linkedin: 'https://linkedin.com/in/mirtaakins',
  twitter: 'https://twitter.com/mirtaakins',
  email: 'mailto:hello@mirtaakins.dev'
}

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }
}