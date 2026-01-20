import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Share2, Send, Github, Linkedin, Loader2, CheckCircle2, AlertCircle, MapPin, Phone, Download } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  // ==========================================
  // � EপmailJS Configuration - Replace with your actual credentials
  // ==========================================
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    // Check if EmailJS is configured
    if (SERVICE_ID === "service_your_id" || TEMPLATE_ID === "template_your_id" || PUBLIC_KEY === "your_public_key") {
      setStatus('error')
      console.error('EmailJS not configured! Please update src/config/emailjs.js with your actual EmailJS credentials.')
      alert('EmailJS is not configured yet. Please follow the setup guide in EMAILJS_SETUP.md to configure your EmailJS credentials.')
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      // Initialize EmailJS with your public key
      emailjs.init(PUBLIC_KEY)

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Md. Arafat Alam Abir',
        to_email: 'malam2331103@bscse.uiu.ac.bd',
        reply_to: formData.email
      }

      console.log('Sending email with params:', JSON.stringify(templateParams, null, 2))
      console.log('✅ Using Service ID:', SERVICE_ID)
      console.log('✅ Using Template ID:', TEMPLATE_ID)
      console.log('✅ Using Public Key:', PUBLIC_KEY.substring(0, 8) + '...')

      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      
      console.log('Email sent successfully:', JSON.stringify(result, null, 2))
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setStatus(null), 5000)
      
    } catch (error) {
      console.error('Email send failed:', error.message || String(error))
      setStatus('error')
      
      // Show detailed error for debugging
      if (error.text) {
        console.error('Error details:', error.text)
      }
      
      // Auto-hide error message after 8 seconds
      setTimeout(() => setStatus(null), 8000)
    } finally {
      setLoading(false)
    }
  }

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  }

  return (
    <section 
      id="contact" 
      className="w-full relative py-20 px-6 md:px-20 lg:px-32 bg-slate-50 dark:bg-background-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-primary font-medium text-sm tracking-wide border border-indigo-100 dark:border-indigo-500/30"
            variants={itemVariants}
          >
            Get In Touch
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white leading-tight">
            Let's work{' '}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              together
            </span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Have a project in mind or just want to say hi? I'm always open to discussing 
            new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Info Cards */}
          <ContactCard
            icon={Mail}
            title="Email"
            subtitle="Send me an email"
            content="malam2331103@bscse.uiu.ac.bd"
            href="mailto:malam2331103@bscse.uiu.ac.bd"
            color="indigo"
          />
          
          <ContactCard
            icon={Phone}
            title="Whatsapp"
            subtitle="Call me directly"
            content="+8801857465024"
            href="https://wa.me/8801857465024"
            color="emerald"
          />
          
          <ContactCard
            icon={MapPin}
            title="Location"
            subtitle="Based in"
            content="Dhaka, Bangladesh"
            href="#"
            color="purple"
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Side - Contact Form */}
          <motion.div variants={cardVariants}>
            <div className="bg-white dark:bg-card-dark p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-700/50 shadow-xl relative overflow-hidden">
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Send Message
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                {/* Configuration Status Alert */}
                {(SERVICE_ID === "service_your_id" || TEMPLATE_ID === "template_your_id" || PUBLIC_KEY === "your_public_key") && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl"
                  >
                    <p className="text-yellow-700 dark:text-yellow-400 font-medium flex items-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5" />
                      EmailJS Not Configured
                    </p>
                    <p className="text-yellow-600 dark:text-yellow-400 text-sm">
                      To enable the contact form, please follow the setup guide in{' '}
                      <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">QUICK_EMAILJS_SETUP.md</code>
                      {' '}and update your credentials in{' '}
                      <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">src/config/emailjs.js</code>
                    </p>
                  </motion.div>
                )}
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField 
                    label="Full Name" 
                    name="name" 
                    type="text" 
                    placeholder="Enter you name" 
                    value={formData.name} 
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  <InputField 
                    label="Email Address" 
                    name="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    value={formData.email} 
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                </div>

                {/* Subject */}
                <InputField 
                  label="Subject" 
                  name="subject" 
                  type="text" 
                  placeholder="Project Inquiry" 
                  value={formData.subject} 
                  onChange={handleChange}
                  error={errors.subject}
                  required
                />

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border ${
                      errors.message 
                        ? 'border-red-300 dark:border-red-600' 
                        : 'border-slate-200 dark:border-slate-700'
                    } text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 rounded-xl font-medium text-white flex items-center justify-center gap-3 transition-all ${
                    loading 
                      ? 'bg-slate-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-primary to-secondary hover:from-indigo-600 hover:to-violet-600 shadow-lg shadow-primary/25'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                  >
                    <p className="text-green-700 dark:text-green-400 font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                  >
                    <p className="text-red-700 dark:text-red-400 font-medium flex items-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5" />
                      Failed to send message
                    </p>
                    <p className="text-red-600 dark:text-red-400 text-sm">
                      Please try again or email me directly at{' '}
                      <a 
                        href="mailto:malam2331103@bscse.uiu.ac.bd" 
                        className="underline hover:no-underline"
                      >
                        malam2331103@bscse.uiu.ac.bd
                      </a>
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right Side - Additional Info */}
          <motion.div variants={cardVariants} className="space-y-8">
            {/* Social Links */}
            <div className="bg-white dark:bg-card-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-700/50 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <SocialLink 
                  href="https://github.com/abir-11" 
                  Icon={Github} 
                  label="GitHub"
                  color="hover:bg-gray-100 dark:hover:bg-gray-800"
                />
                <SocialLink 
                  href="https://www.linkedin.com/in/md-arafat-alam-abir/" 
                  Icon={Linkedin} 
                  label="LinkedIn"
                  color="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                />
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white dark:bg-card-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-700/50 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Quick Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">Available for freelance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">Open to collaborations</span>
                </div>
                
                {/* Resume Download Button */}
                <motion.a
                  href="/resume.pdf"
                  download="Arafat_Alam_Frontend_Dev.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:from-indigo-600 hover:to-violet-600 transition-all duration-300 shadow-lg shadow-primary/25 mt-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Card Component
const ContactCard = ({ icon: Icon, title, subtitle, content, href, color }) => {
  const colorClasses = {
    indigo: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30',
    emerald: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30'
  }

  return (
    <motion.a
      href={href}
      className="block bg-white dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
      whileHover={{ y: -4 }}
      variants={{
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
      }}
    >
      <div className={`w-12 h-12 rounded-xl ${colorClasses[color]} flex items-center justify-center mb-4 transition-colors`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{subtitle}</p>
      <p className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary transition-colors">
        {content}
      </p>
    </motion.a>
  )
}

// Input Field Component
const InputField = ({ label, name, type, placeholder, value, onChange, error, required }) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border ${
        error 
          ? 'border-red-300 dark:border-red-600' 
          : 'border-slate-200 dark:border-slate-700'
      } text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all`}
    />
    {error && (
      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
    )}
  </div>
)

// Social Link Component
const SocialLink = ({ href, Icon, label, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -2, scale: 1.05 }}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 ${color} transition-all group`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium text-slate-700 dark:text-slate-300">{label}</span>
  </motion.a>
)

export default Contact