import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Menu } from 'lucide-react'
import { NAVIGATION_ITEMS } from '../utils/constants'
import { useScrollToSection } from '../hooks/useScrollToSection'

const Header = () => {
  const scrollToSection = useScrollToSection()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const sectionId = href.replace('#', '')
      scrollToSection(sectionId)
    }
  }
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full px-6 py-6 md:px-12 flex items-center justify-between relative z-50"
    >
      <motion.div 
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="w-8 h-8 bg-white text-background-dark rounded flex items-center justify-center font-bold text-lg font-display">
          A
        </div>
        <span className="text-xl font-display font-bold tracking-wide text-slate-900 dark:text-white">
          Arafat
        </span>
      </motion.div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
        {NAVIGATION_ITEMS.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`${
              item.name === 'Home' 
                ? 'text-slate-900 dark:text-white' 
                : 'hover:text-slate-900 dark:hover:text-white'
            } transition-colors cursor-pointer`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            {item.name}
          </motion.a>
        ))}
      </nav>

      <motion.a
        href="#contact"
        onClick={(e) => handleNavClick(e, '#contact')}
        className="hidden md:flex items-center gap-2 border-gray-300 px-2 py-1 rounded-2xl border text-sm font-medium text-slate-900 dark:text-white hover:text-slate-500 transition-colors group cursor-pointer"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        Hire Me
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.a>

      <motion.button 
        className="md:hidden text-slate-900 dark:text-white"
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="w-6 h-6" />
      </motion.button>
    </motion.header>
  )
}

export default Header