import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, Code, ExternalLink } from 'lucide-react'
import { useScrollToSection } from '../hooks/useScrollToSection'

const Projects = () => {
  const scrollToSection = useScrollToSection()

  const handleProjectClick = (e, url) => {
    e.preventDefault()
    if (url.startsWith('#')) {
      const sectionId = url.replace('#', '')
      scrollToSection(sectionId)
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }
  const projects = [
    {
      id: 1,
      title: "🎓 Digital Life Lessons",
      subtitle: "Life Update Platform",
      description: "A full-stack MERN platform for sharing digital life lessons with integrated lesson creation and listing management features. Comprehensive educational dashboard with real-time content management.",
      image: "https://i.ibb.co.com/p7wK36F/Screenshot-2026-01-05-174853.png",
      gradient: "from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20",
      hoverColor: "hover:text-indigo-600 dark:hover:text-white",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind"],
      demoUrl: "https://tangerine-entremet-a297ff.netlify.app/",
      sourceUrl: "https://github.com/abir-11/Digital-Life-Lessons-Client-Side.git"
    },
    {
      id: 2,
      title: "🌾 My Krishi",
      subtitle: "Agriculture Portal",
      description: "A full-stack MERN platform supporting farmers and local communities to list and sell fruits and vegetables, with bidding and purchase features. Includes community skill exchange with protected booking system.",
      image: "https://i.ibb.co.com/Zz0mzpMc/Screenshot-2026-01-05-175019.png",
      gradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20",
      hoverColor: "hover:text-emerald-600 dark:hover:text-white",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind"],
      demoUrl: "https://harmonious-starburst-2d3242.netlify.app/",
      sourceUrl: "https://github.com/abir-11/Client-side.git"
    },
    {
      id: 3,
      title: "🌳 Green Tree",
      subtitle: "Eco-Friendly Project",
      description: "A responsive web application where users can browse, purchase plants, and book plants in advance, featuring secure authentication and a clean, modern user interface with eco-friendly design.",
      image: "https://i.ibb.co.com/3yGZxrRR/Screenshot-2026-01-05-174924.png",
      gradient: "from-rose-500/10 to-orange-500/10 dark:from-rose-500/20 dark:to-orange-500/20",
      hoverColor: "hover:text-rose-600 dark:hover:text-white",
      tags: ["React", "Firebase Auth", "Tailwind", "Responsive Design"],
      demoUrl: "https://stunning-stardust-4d280d.netlify.app/",
      sourceUrl: "https://github.com/abir-11/Green-Tree-Client-Side.git"
    }
  ]

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
      id="projects" 
      className="w-full bg-slate-50 dark:bg-section-dark py-20 px-6 md:px-20 lg:px-32 relative z-20"
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          variants={itemVariants}
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Featured{' '}
              <span className="text-slate-400 font-serif italic">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg">
              A selection of recent work I've built using modern technologies. Each project 
              represents a unique challenge and solution.
            </p>
          </div>
          
          <motion.a
            href="#projects"
            onClick={(e) => handleProjectClick(e, '#projects')}
            className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-slate-500 transition-colors group pb-1 border-b border-transparent hover:border-slate-500 cursor-pointer"
            whileHover={{ x: 5 }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="bg-white dark:bg-card-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-slate-100 dark:border-white/5"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <motion.div 
                className="h-64 relative overflow-hidden bg-slate-100 dark:bg-slate-800"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full p-3">
                      <ExternalLink className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <div className="p-6">
                <motion.div 
                  className="mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {project.subtitle}
                  </p>
                </motion.div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4" 
                   style={{
                     display: '-webkit-box',
                     WebkitLineClamp: 3,
                     WebkitBoxOrient: 'vertical',
                     overflow: 'hidden'
                   }}>
                  {project.description}
                </p>

                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.3 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                  <motion.a
                    href={project.demoUrl}
                    onClick={(e) => handleProjectClick(e, project.demoUrl)}
                    className={`flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 ${project.hoverColor} transition-colors cursor-pointer`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {project.demoUrl.startsWith('#') ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                    {project.demoUrl.startsWith('#') ? 'View Section' : 'Live Demo'}
                  </motion.a>
                  
                  <motion.a
                    href={project.sourceUrl}
                    onClick={(e) => handleProjectClick(e, project.sourceUrl)}
                    className={`flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 ${project.hoverColor} transition-colors cursor-pointer`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code className="w-4 h-4" />
                    Source
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects