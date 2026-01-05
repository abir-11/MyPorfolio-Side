import React from 'react'
import { motion } from 'framer-motion'
import { Download, Play, Facebook, Twitter, Linkedin } from 'lucide-react'
import myResume from '../assets/resume.pdf'

const Hero = () => {
  const socialIcons = [
    { Icon: Facebook, href: 'https://www.facebook.com/arafatalom.abir.1', position: 'icon-1' },
    { Icon: Twitter, href: 'https://x.com/arafat1abir', position: 'icon-2' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/md-arafat-alam-abir/', position: 'icon-3' },
    
  ]

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 relative py-12 md:py-20 min-h-[calc(100vh-88px)]">
      <motion.div 
        className="w-full md:w-1/2 z-10 flex flex-col items-start space-y-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="space-y-4">
          <motion.p 
            className="text-2xl md:text-3xl font-display font-light text-slate-700 dark:text-slate-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello! I'm
          </motion.p>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
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
          transition={{ duration: 0.8, delay: 0.6 }}
        >
         MERN Stack Developer | React.js • Node.js • Express • MongoDB • Tailwind  | Exploring Next.js 🚀 | Problem Solver(C,C++,JavaScript) |  Passionate about Turning Ideas into Modern, Scalable & User-Focused Web Experiences
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href={myResume} // Place your resume.pdf file in the public folder
            download="Arafat_Alam_MERN_STACK_Dev.pdf" // This will be the downloaded file name
            target="_blank"
            className="px-8 py-4 bg-slate-900 dark:bg-accent-dark text-white rounded-lg text-sm font-medium hover:bg-slate-700 dark:hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>

          {/* <motion.button 
            className="flex items-center gap-4 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center group-hover:border-slate-500 dark:group-hover:border-slate-500 transition-colors">
              <Play className="w-5 h-5 text-slate-900 dark:text-white" />
            </div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              Watch Video
            </span>
          </motion.button> */}
        </motion.div>
      </motion.div>

      <motion.div 
        className="w-full md:w-1/2 relative h-[400px] md:h-auto flex items-end justify-center mt-12 md:mt-0 self-stretch"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
          <motion.div 
            className="hidden lg:block orbit-container border-slate-300 dark:border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {socialIcons.map(({ Icon, href, position }, index) => (
              <motion.a
                key={index}
                href={href}
                className={`orbit-icon ${position} group`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.img
          src="https://i.ibb.co.com/Kc929pZp/IMG-8039.jpg"
          alt="Portrait of Arafat Alam Abir, Web Developer"
          className="relative z-20 h-full w-auto object-cover object-top"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
      </motion.div>
    </section>
  )
}

export default Hero