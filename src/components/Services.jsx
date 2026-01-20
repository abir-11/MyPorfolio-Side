import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Server, Globe, Smartphone, Palette } from 'lucide-react'
import { useScrollToSection } from '../hooks/useScrollToSection'

const Services = () => {
  const scrollToSection = useScrollToSection()

  const handleContactClick = (e) => {
    e.preventDefault()
    scrollToSection('contact')
  }

  // Technology categories matching the HTML design
  const techCategories = [
    {
      id: 1,
      title: "Frameworks & Libraries",
      description: "Crafting responsive, high-performance user interfaces with modern component-based architecture and styling systems.",
      icon: Code2,
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      shadowColor: "hover:shadow-blue-500/10",
      glowColor: "bg-blue-50 dark:bg-blue-900/10",
      hoverBorder: "hover:border-blue-200 dark:hover:border-blue-700",
      technologies: [
        "React.js", "React Router", "Context API", "Tailwind CSS", "Bootstrap"
      ]
    },
    {
      id: 2,
      title: "Backend & Tools",
      description: "Building robust server-side applications, handling API integrations, and managing version control workflows.",
      icon: Server,
      iconBg: "bg-emerald-50 dark:bg-emerald-900/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      shadowColor: "hover:shadow-emerald-500/10",
      glowColor: "bg-emerald-50 dark:bg-emerald-900/10",
      hoverBorder: "hover:border-emerald-200 dark:hover:border-emerald-700",
      technologies: [
        "Node.js", "Express.js", "Axios", "TanStack Query", "Git", "GitHub"
      ]
    },
    {
      id: 3,
      title: "Database & Services",
      description: "Managing data persistence, cloud storage solutions, and secure authentication flows for modern apps.",
      icon: Database,
      iconBg: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      shadowColor: "hover:shadow-purple-500/10",
      glowColor: "bg-purple-50 dark:bg-purple-900/10",
      hoverBorder: "hover:border-purple-200 dark:hover:border-purple-700",
      technologies: [
        "MongoDB", "Firebase", "JWT Authentication"
      ]
    },
    
    
  ]

  // Top technology icons with Font Awesome classes
  const topTechnologies = [
    { name: "React", icon: "fa-brands fa-react", color: "text-blue-400" },
    { name: "Node.js", icon: "fa-brands fa-node", color: "text-green-500" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400" },
    { name: "Git", icon: "fa-brands fa-git-alt", color: "text-orange-500" },
    { name: "MongoDB", icon: "fa-solid fa-database", color: "text-emerald-500" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      id="services" 
      className="w-full bg-background-light dark:bg-background-dark py-20 px-6 md:px-20 lg:px-32 relative z-20"
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-5xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-primary font-medium text-sm tracking-wide border border-indigo-100 dark:border-indigo-500/30"
            variants={itemVariants}
          >
            Tech Stack & Expertise
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white leading-tight">
            Tools that power my{' '}
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              digital creations
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A comprehensive overview of the technologies, frameworks, and tools I use to build 
            scalable, high-performance web applications.
          </p>
        </motion.div>

        {/* Top Technology Icons */}
        <motion.div 
          className="w-full overflow-hidden mb-20"
          variants={itemVariants}
        >
          <motion.div 
            className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 dark:opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            variants={containerVariants}
          >
            {topTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center gap-2 group"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <i className={`${tech.icon} text-4xl ${tech.color} transform group-hover:-translate-y-1 transition-transform`}></i>
                <span className="text-xs font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Technology Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.id}
              className={`group bg-card-light dark:bg-card-dark rounded-3xl p-8 shadow-sm hover:shadow-2xl ${category.shadowColor} border border-slate-100 dark:border-slate-700/50 transition-all duration-300 relative overflow-hidden`}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${category.glowColor} rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100`}></div>

              {/* Icon */}
              <motion.div 
                className={`w-14 h-14 rounded-2xl ${category.iconBg} flex items-center justify-center mb-6 ${category.iconColor} group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <category.icon className="w-8 h-8" />
              </motion.div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display">
                {category.title}
              </h2>
              
              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
                {category.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border border-transparent ${category.hoverBorder} transition-colors cursor-default`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: category.id * 0.1 + techIndex * 0.05 + 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            onClick={handleContactClick}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:from-indigo-600 hover:to-violet-600 transition-all duration-300 cursor-pointer shadow-lg shadow-primary/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Build Something Amazing</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Services