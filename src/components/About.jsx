import React from 'react'
import { motion } from 'framer-motion'
import { Code, GraduationCap, CheckCircle } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section
      id="about"
      className="w-full relative z-20 py-20 px-6 md:px-20 lg:px-32 border-y border-slate-200 dark:border-white/5 bg-white dark:bg-background-dark/50"
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="w-full lg:w-5/12 relative"
          variants={itemVariants}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
            <motion.img
              src="https://res.cloudinary.com/zuclzwuy/image/upload/v1784352315/IMG_20260405_104752_elt1pz.png"
              alt="Professional shot of Mirta working"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <motion.div
              className="absolute bottom-6 left-6 right-6 z-20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <div className="bg-indigo-500 rounded-full p-2 text-white">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Open for Work</p>
                  <p className="text-white/70 text-xs">Currently available for projects</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute -z-10 -bottom-8 -right-8">
            <motion.svg
              className="w-24 h-24 text-slate-200 dark:text-slate-800"
              fill="currentColor"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2"></circle>
              </pattern>
              <rect width="100" height="100" fill="url(#dots)"></rect>
            </motion.svg>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-8/12 space-y-8"
          variants={itemVariants}
        >
          <div className="space-y-4">
            <motion.h2
              className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white"
              variants={itemVariants}
            >
              Crafting code with{' '}
              <span className="text-indigo-500 italic font-serif">passion</span> & purpose
            </motion.h2>

            <motion.p
              className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
              variants={itemVariants}
            >
              🚀 I'm a Full Stack Web Developer passionate about building modern, scalable, and user-friendly web applications that solve real-world problems.

              💻 Technical Expertise: Skilled in React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Prisma, Mongoose, Firebase, Tailwind CSS, JavaScript, TypeScript, and Git. I enjoy developing responsive front-end interfaces and secure, scalable back-end systems with clean, maintainable code.

              🏆 What I Do: I build end-to-end web applications, design RESTful APIs, integrate databases, implement authentication, and create responsive user experiences while following modern development best practices.

              🌱 Currently Learning: Continuously improving my knowledge of Data Structures & Algorithms (DSA), system design, and advanced full-stack development to build high-performance, production-ready applications.

              🤝 Career Goal: I'm seeking Junior Full Stack Developer opportunities where I can collaborate with talented teams, contribute to impactful products, and continuously grow as a software developer.
            </motion.p>

          </div>

          <motion.div
            className="grid grid-cols-2 gap-6 pt-4"
            variants={containerVariants}
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg flex items-center gap-2">
                <Code className="w-5 h-5 text-indigo-500" />
                Expertise
              </h4>
              <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                <li>React • Tailwind Ecosystem & Next.js  </li>
                <li>Node.js • Express • MongoDB • PostgreSQL • Prisma  & Backend Architecture</li>
                <li>Problem Solving(JavaScript,TypeScript,C,C++,DSA)</li>
              </ul>
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-500" />
                Education
              </h4>
              <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                <li>BS in Computer Science</li>
                <li>United International University</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* <motion.div 
            className="pt-8 border-t border-slate-200 dark:border-white/10"
            variants={itemVariants}
          >
            <div className="flex items-start gap-4">
              <motion.span 
                className="text-4xl text-slate-400 dark:text-slate-600"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                "
              </motion.span>
              <div>
                <p className="italic text-slate-700 dark:text-slate-300 mb-4 text-lg">
                  "Mirta is an exceptional developer who brings creativity and technical expertise 
                  to every project. Her attention to detail and ability to deliver on time is unmatched."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">
                    JS
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">James Sullivan</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">CTO, TechFlow Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About