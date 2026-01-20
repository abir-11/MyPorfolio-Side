import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { Download, Facebook, Twitter, Linkedin } from 'lucide-react'
import OptimizedImage from './OptimizedImage'

const Hero = memo(() => {
  const socialIcons = [
    { Icon: Facebook, href: 'https://www.facebook.com/arafatalom.abir.1', position: 'icon-1' },
    { Icon: Twitter, href: 'https://x.com/arafat1abir', position: 'icon-2' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/md-arafat-alam-abir/', position: 'icon-3' },
  ]

  return (
    // পরিবর্তন ১: min-h শুধুমাত্র lg ডিভাইসে কাজ করবে। মোবাইলে অটো হাইট নেবে।
    // পরিবর্তন ২: justify-between এর বদলে justify-center দিয়েছি মোবাইলের জন্য।
    <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-20 lg:px-32 relative py-10 md:py-20 lg:min-h-[calc(100vh-88px)]">
      
      <motion.div 
        // পরিবর্তন ৩: নিচের মার্জিন বা স্পেসিং ঠিক রাখার জন্য mb-8 বা প্রয়োজনমত ক্লাস এডজাস্ট করা যাবে
        className="w-full lg:w-1/2 z-10 flex flex-col items-start space-y-6 md:space-y-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="space-y-3 md:space-y-4">
          <motion.p 
            className="text-2xl md:text-3xl font-display font-light text-slate-700 dark:text-slate-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello! I'm
          </motion.p>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Arafat{' '}
            <span className="curved-underline relative italic font-serif text-slate-800 dark:text-slate-100">
              Alam Abir
            </span>
          </motion.h1>
        </div>

        <motion.p 
          className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-md leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
         MERN Stack Developer | React.js • Node.js • Express • MongoDB • Tailwind | Exploring Next.js 🚀 | Problem Solver(C,C++,JavaScript) | Passionate about Turning Ideas into Modern, Scalable & User-Focused Web Experiences
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2 md:pt-4"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="/resume.pdf"
            download="Arafat_Alam_Frontend_Dev.pdf"
            target="_blank"
            className="px-8 py-4 bg-slate-900 dark:bg-accent-dark text-white rounded-lg text-sm font-medium hover:bg-slate-700 dark:hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Image Section: Hidden on mobile/tablet, Visible on LG screens only */}
      <motion.div 
        className="hidden lg:flex w-1/2 relative h-auto items-end justify-center self-stretch"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
          <div className="hidden lg:block orbit-container border-slate-300 dark:border-white/10">
            {socialIcons.map(({ Icon, href, position }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`orbit-icon ${position} group`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <OptimizedImage
          src="https://i.ibb.co.com/Kc929pZp/IMG-8039.jpg"
          alt="Portrait of Arafat Alam Abir, Web Developer"
          className="relative z-20 h-full w-auto object-cover rounded-2xl object-top"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
          }}
          loading="eager"
        />
      </motion.div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero