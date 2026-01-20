import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react' // X আইকন ইম্পোর্ট করুন
import { NAVIGATION_ITEMS } from '../utils/constants'
import { useScrollToSection } from '../hooks/useScrollToSection'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false) // মোবাইল মেনুর জন্য স্টেট
  const scrollToSection = useScrollToSection()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false) // লিংক এ ক্লিক করলে মেনু বন্ধ হবে
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const sectionId = href.replace('#', '')
      scrollToSection(sectionId)
    }
  }

  // মেনু অ্যানিমেশন ভেরিয়েন্ট
  const sidebarVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  }

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full px-6 py-6 md:px-12 flex items-center justify-between relative z-50 bg-gray-100  dark:bg-slate-900/80 backdrop-blur-md"
      >
        {/* Logo Section */}
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded flex items-center justify-center font-bold text-lg font-display">
            A
          </div>
          <span className="text-xl font-display font-bold tracking-wide text-slate-900 dark:text-white">
            Arafat
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          {NAVIGATION_ITEMS.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Desktop Hire Me Button */}
        <motion.a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden md:flex items-center gap-2 border-slate-300 dark:border-slate-700 px-4 py-2 rounded-full border text-sm font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group cursor-pointer"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          Hire Me
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-slate-900 dark:text-white z-50 relative"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </motion.header>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
            />
            
            {/* Sidebar Panel */}
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white dark:bg-slate-900 shadow-2xl z-50 flex flex-col justify-center items-center gap-8 md:hidden"
            >
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-2xl font-display font-medium text-slate-900 dark:text-white hover:text-slate-500 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full text-lg font-medium mt-4"
              >
                Hire Me
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header