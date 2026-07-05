import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react'

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "United International University",
      period: "2023 – Present",
      status: "Ongoing",
      statusColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
      icon: GraduationCap,
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-700/50",
      glowColor: "bg-blue-50 dark:bg-blue-900/10",
      highlights: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Web Technologies",
        "Software Engineering"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Science Group",
      period: "2021",
      status: "Completed",
      statusColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
      icon: BookOpen,
      iconBg: "bg-emerald-50 dark:bg-emerald-900/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      borderColor: "border-emerald-200 dark:border-emerald-700/50",
      glowColor: "bg-emerald-50 dark:bg-emerald-900/10",
      highlights: [
        "Physics", "Chemistry", "Mathematics", "Biology"
      ]
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Science Group",
      period: "2019",
      status: "Completed",
      statusColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
      icon: Award,
      iconBg: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-700/50",
      glowColor: "bg-purple-50 dark:bg-purple-900/10",
      highlights: [
        "Mathematics", "Science", "English", "ICT"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section
      id="education"
      className="w-full bg-white dark:bg-background-dark/50 py-20 px-6 md:px-20 lg:px-32 relative z-20 border-y border-slate-200 dark:border-white/5"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-primary font-medium text-sm tracking-wide border border-indigo-100 dark:border-indigo-500/30"
            variants={itemVariants}
          >
            Educational Qualification
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white leading-tight">
            Academic{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Background
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A foundation built on strong academics, continuous learning, and a passion for technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary top-8 z-10 shadow-lg shadow-primary/30" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <motion.div
                  className={`w-full md:w-1/2 group bg-card-light dark:bg-card-dark rounded-3xl p-8 shadow-sm hover:shadow-2xl border ${edu.borderColor} transition-all duration-300 relative overflow-hidden`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${edu.glowColor} rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity`} />

                  {/* Icon + Status */}
                  <div className="flex items-start justify-between mb-5">
                    <motion.div
                      className={`w-12 h-12 rounded-2xl ${edu.iconBg} flex items-center justify-center ${edu.iconColor} group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <edu.icon className="w-6 h-6" />
                    </motion.div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${edu.statusColor}`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 font-display">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                    {edu.institution}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Education
