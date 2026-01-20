import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Eye, Code, ExternalLink, X, Calendar, Users, Star, Github, Info } from 'lucide-react'
import { useScrollToSection } from '../hooks/useScrollToSection'

const Projects = () => {
  const scrollToSection = useScrollToSection()
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedDescriptions, setExpandedDescriptions] = useState({})

  const handleProjectClick = (e, url) => {
    e.preventDefault()
    if (url.startsWith('#')) {
      const sectionId = url.replace('#', '')
      scrollToSection(sectionId)
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const openProjectDetails = (project) => {
    setSelectedProject(project)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  const toggleDescription = (projectId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  // Handle body overflow when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const projects = [
    {
      id: 1,
      title: "Digital Life Lessons",
      subtitle: "Education Platform",
      description: "A full-stack MERN platform for sharing digital life lessons with integrated lesson creation and listing management features. Comprehensive educational dashboard with real-time content management.",
      detailedDescription: "Digital Life Lessons is a comprehensive educational platform built with the MERN stack that revolutionizes how digital skills are taught and learned. The platform features a robust content management system where educators can create, edit, and organize digital lessons with rich multimedia content including videos, interactive quizzes, and downloadable resources.",
      image: "https://i.ibb.co.com/p7wK36F/Screenshot-2026-01-05-174853.png",
      gradient: "from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20",
      hoverColor: "hover:text-indigo-600 dark:hover:text-white",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind"],
      demoUrl: "https://idyllic-daffodil-529a0f.netlify.app/",
      sourceUrl: "https://github.com/abir-11/Digital-Life-Lessons-Client-Side.git",
      features: [
        "User authentication with Firebase",
        "Lesson creation and management system",
        "Interactive learning dashboard",
        "Progress tracking and analytics",
        "Responsive design for all devices",
        "Real-time content updates"
      ],
      techStack: {
        frontend: ["React.js", "Tailwind CSS", "React Router", "React form Hooks"],
        backend: ["Node.js", "Express.js", "MongoDB"],
        authentication: ["Firebase Authentication"],
        deployment: ["Netlify", "Vercel"]
      },
      duration: "10-15 days",
      team: "Solo Project",
      status: "Completed"
    },
    {
      id: 2,
      title: "My Krishi",
      subtitle: "Agriculture Portal",
      description: "A full-stack MERN platform supporting farmers and local communities to list and sell fruits and vegetables, with bidding and purchase features. Includes community skill exchange with protected booking system.",
      detailedDescription: "My Krishi is an innovative agricultural marketplace that bridges the gap between farmers and consumers. The platform empowers farmers to directly list their produce, set competitive prices, and manage their inventory efficiently. Buyers can browse through a wide variety of fresh fruits and vegetables, place bids, and make secure purchases.",
      image: "https://i.ibb.co.com/Zz0mzpMc/Screenshot-2026-01-05-175019.png",
      gradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20",
      hoverColor: "hover:text-emerald-600 dark:hover:text-white",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind"],
      demoUrl: "https://harmonious-starburst-2d3242.netlify.app",
      sourceUrl: "https://github.com/abir-11/Client-side.git",
      features: [
        "Farmer product listing system",
        "Bidding and auction functionality",
        "Secure payment integration",
        "Community skill exchange",
        "Real-time chat system",
        "Order tracking and management",
        "Mobile-responsive design"
      ],
      techStack: {
        frontend: ["React.js", "Tailwind CSS", "React Router"],
        backend: ["Node.js", "Express.js", "MongoDB"],
        authentication: ["Firebase Authentication"],
        deployment: ["Netlify", "Vercel"]
      },
      duration: "8-12 days",
      team: "Solo Project",
      status: "Completed"
    },
    {
      id: 3,
      title: "GreenNest",
      subtitle: "Eco-Friendly Project",
      description: "A responsive web application where users can browse, purchase plants, and book plants in advance, featuring secure authentication and a clean, modern user interface with eco-friendly design.",
      detailedDescription: "Green Tree is an eco-conscious e-commerce platform dedicated to promoting environmental sustainability through plant sales and education. The application features a beautiful, nature-inspired design that makes plant shopping an enjoyable experience while educating users about environmental conservation.",
      image: "https://i.ibb.co.com/35dqDK7W/green-nest-ten-vercel-app-1.png",
      gradient: "from-rose-500/10 to-orange-500/10 dark:from-rose-500/20 dark:to-orange-500/20",
      hoverColor: "hover:text-rose-600 dark:hover:text-white",
      tags: ["Next.js", "Firebase Auth", "Tailwind", "Responsive Design"],
      demoUrl: "https://green-nest-ten.vercel.app/",
      sourceUrl: "https://github.com/abir-11/Green-Planted.git",
      features: [
        "Plant catalog with detailed information",
        "Advanced booking system",
        "User wishlist and favorites",
        "Plant care guides and tips",
        "Eco-friendly packaging options",
        "Seasonal plant recommendations",
        "Mobile-first responsive design"
      ],
      techStack: {
        frontend: ["Next.js", "Tailwind CSS",],
        authentication: ["Firebase Authentication"],
        deployment: ["Vercel"]
      },
      duration: "3-4 days",
      team: "Solo Project", 
      status: "Completed"
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
    <>
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
                  
                  {/* Description with Read More */}
                  <div className="mb-4">
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {expandedDescriptions[project.id] 
                        ? project.description 
                        : `${project.description.substring(0, 120)}${project.description.length > 120 ? '...' : ''}`
                      }
                    </p>
                    {project.description.length > 120 && (
                      <button
                        onClick={() => toggleDescription(project.id)}
                        className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors mt-2"
                      >
                        {expandedDescriptions[project.id] ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>

                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
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
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </motion.div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                    <motion.button
                      onClick={() => openProjectDetails(project)}
                      className="flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Info className="w-4 h-4" />
                      Details
                    </motion.button>

                    <div className="flex items-center gap-3">
                      <motion.a
                        href={project.demoUrl}
                        onClick={(e) => handleProjectClick(e, project.demoUrl)}
                        className={`flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 ${project.hoverColor} transition-colors cursor-pointer`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </motion.a>
                      
                      <motion.a
                        href={project.sourceUrl}
                        onClick={(e) => handleProjectClick(e, project.sourceUrl)}
                        className={`flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 ${project.hoverColor} transition-colors cursor-pointer`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code className="w-4 h-4" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetails}
          >
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header - Fixed */}
              <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 p-6 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-display">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-lg">{selectedProject.subtitle}</p>
                </div>
                <motion.button
                  onClick={closeProjectDetails}
                  className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                </motion.button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="overflow-y-auto max-h-[calc(95vh-120px)] scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
                <div className="p-8 space-y-10">
                  {/* Hero Image Section */}
                  <motion.div 
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-80 md:h-96 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-6 right-6">
                        <motion.span 
                          className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                        >
                          ✓ {selectedProject.status}
                        </motion.span>
                      </div>

                      {/* Quick Action Buttons on Image */}
                      <div className="absolute bottom-6 left-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white rounded-full text-sm font-medium hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4 inline mr-2" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={selectedProject.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white rounded-full text-sm font-medium hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4 inline mr-2" />
                          Source
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Stats Cards */}
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800/30">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Duration</p>
                          <p className="text-xl font-bold text-indigo-900 dark:text-indigo-100">{selectedProject.duration}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/30">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Team</p>
                          <p className="text-xl font-bold text-emerald-900 dark:text-emerald-100">{selectedProject.team}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-800/30">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">Status</p>
                          <p className="text-xl font-bold text-amber-900 dark:text-amber-100">{selectedProject.status}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                        <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                        About This Project
                      </h3>
                      <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                          {selectedProject.detailedDescription}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Key Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                      <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, index) => (
                        <motion.div 
                          key={index} 
                          className="group bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                            <span className="text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                              {feature}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Technology Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                      <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                      Technology Stack
                    </h3>
                    <div className="space-y-6">
                      {Object.entries(selectedProject.techStack).map(([category, technologies], categoryIndex) => (
                        <motion.div 
                          key={category} 
                          className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + categoryIndex * 0.1 }}
                        >
                          <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wide flex items-center gap-2">
                            <div className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                            {category.replace(/([A-Z])/g, ' $1').trim()}
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {technologies.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className="px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + categoryIndex * 0.1 + techIndex * 0.05 }}
                                whileHover={{ y: -2 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Main Action Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-200 dark:border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white rounded-2xl font-semibold hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 transition-all shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/40"
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Demo
                    </motion.a>
                    <motion.a
                      href={selectedProject.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all border-2 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-5 h-5" />
                      View Source Code
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects