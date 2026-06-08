'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineEye, HiOutlineCheckCircle, HiOutlineBolt, HiOutlineShieldCheck, HiOutlineClock, HiOutlinePhone, HiOutlineSparkles, HiOutlineArrowRight } from 'react-icons/hi2'

const fadeInUp = { 
  initial: { opacity: 0, y: 30 }, 
  whileInView: { opacity: 1, y: 0 }, 
  viewport: { once: true }, 
  transition: { duration: 0.6 } 
}

const staggerContainer = { 
  initial: {}, 
  whileInView: { transition: { staggerChildren: 0.1 } }, 
  viewport: { once: true } 
}

const staggerItem = { 
  initial: { opacity: 0, y: 20 }, 
  whileInView: { opacity: 1, y: 0 }, 
  viewport: { once: true } 
}

export default function EyeCareServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center bg-gradient-to-br from-[#4A90B8] to-gray-900">
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#4A90B8] to-gray-900">
          <Image
            src="/images/business-3.jpg"
            alt="Eye care specialists at Shiv Hospital"
            fill
            className="object-cover opacity-30"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A90B8]/80 to-gray-900/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <HiOutlineEye className="w-5 h-5 text-white mr-2" />
              <span className="text-white text-sm font-medium">24/7 Eye Care Services</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Expert Eye Care
              <span className="block bg-gradient-to-r from-white to-[#E8F4F8] bg-clip-text text-transparent">
                Available 24/7
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              From routine eye exams to emergency treatments, our experienced ophthalmologists provide comprehensive eye care using advanced technology and personalized treatment plans.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.a
                href="tel:09426208000"
                className="inline-flex items-center justify-center bg-[#2C5F7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Call for Emergency Care
              </motion.a>
              
              <motion.a
                href="#services"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 lg:py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-12 h-12 bg-[#2C5F7A]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <HiOutlineClock className="w-6 h-6 text-[#2C5F7A]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">24/7</h3>
              <p className="text-sm sm:text-base text-gray-600">Emergency Care</p>
            </motion.div>
            
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-12 h-12 bg-[#2C5F7A]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <HiOutlineShieldCheck className="w-6 h-6 text-[#2C5F7A]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Expert</h3>
              <p className="text-sm sm:text-base text-gray-600">Ophthalmologists</p>
            </motion.div>
            
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-12 h-12 bg-[#2C5F7A]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <HiOutlineBolt className="w-6 h-6 text-[#2C5F7A]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Quick</h3>
              <p className="text-sm sm:text-base text-gray-600">Diagnosis</p>
            </motion.div>
            
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-12 h-12 bg-[#2C5F7A]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <HiOutlineSparkles className="w-6 h-6 text-[#2C5F7A]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Advanced</h3>
              <p className="text-sm sm:text-base text-gray-600">Technology</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Eye Care Services */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Eye Care Services
            </h2>
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our eye specialists provide complete ophthalmological care using the latest medical techniques and equipment
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Complete Eye Examination",
                description: "Comprehensive eye health checkups including vision testing, refraction, and detailed eye health assessment.",
                features: ["Vision Testing", "Refraction Assessment", "Eye Pressure Check", "Retinal Examination"]
              },
              {
                title: "Cataract Treatment",
                description: "Advanced cataract surgery and treatment options including phacoemulsification and IOL implantation.",
                features: ["Cataract Surgery", "IOL Implantation", "Post-operative Care", "Vision Restoration"]
              },
              {
                title: "Glaucoma Management",
                description: "Early detection and comprehensive treatment of glaucoma to prevent vision loss and preserve eye health.",
                features: ["Pressure Monitoring", "Medical Treatment", "Laser Therapy", "Regular Follow-ups"]
              },
              {
                title: "Diabetic Eye Care",
                description: "Specialized care for diabetic patients including retinal screening and diabetic retinopathy treatment.",
                features: ["Diabetic Screening", "Retinal Assessment", "Laser Treatment", "Vision Protection"]
              },
              {
                title: "Emergency Eye Care",
                description: "24/7 emergency services for eye injuries, sudden vision loss, and other urgent eye conditions.",
                features: ["Trauma Treatment", "Infection Management", "Pain Relief", "Immediate Care"]
              },
              {
                title: "Pediatric Eye Care",
                description: "Specialized eye care for children including vision screening, amblyopia treatment, and eye muscle disorders.",
                features: ["Child-friendly Care", "Vision Development", "Lazy Eye Treatment", "Eye Coordination"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-md"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#2C5F7A]/10 rounded-xl flex items-center justify-center mr-4">
                    <HiOutlineEye className="w-6 h-6 text-[#2C5F7A]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <HiOutlineCheckCircle className="w-4 h-4 text-[#2C5F7A] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology & Equipment */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              {...fadeInUp}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Technology for Better Vision Care
              </h2>
              <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mb-6"></div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our eye care facility is equipped with state-of-the-art diagnostic and treatment equipment to provide accurate diagnoses and effective treatments for all eye conditions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Digital Fundus Camera",
                  "OCT Scanning",
                  "Automated Perimetry",
                  "Slit Lamp Biomicroscopy",
                  "Tonometry Equipment",
                  "Surgical Microscopes"
                ].map((equipment, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2C5F7A] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{equipment}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.a
                href="tel:09426208000"
                className="inline-flex items-center bg-[#2C5F7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Schedule Your Eye Exam
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/business-8.jpg"
                alt="Advanced eye care technology and equipment"
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Eye Care */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#4A90B8] to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/business-7.jpg"
                alt="24/7 emergency eye care services"
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </motion.div>
            
            <motion.div
              className="text-white"
              {...fadeInUp}
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <HiOutlineBolt className="w-5 h-5 text-white mr-2" />
                <span className="text-white text-sm font-medium">Emergency Services</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                24/7 Emergency Eye Care When You Need It Most
              </h2>
              
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Eye emergencies don't wait for business hours. Our experienced ophthalmologists are available 24/7 to provide immediate care for urgent eye conditions and injuries.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Sudden vision loss or changes",
                  "Eye injuries and trauma",
                  "Severe eye pain or headaches",
                  "Foreign objects in the eye",
                  "Chemical burns or exposure",
                  "Flashing lights or new floaters"
                ].map((condition, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#E8F4F8] mr-3 flex-shrink-0" />
                    <span className="text-white/90">{condition}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.a
                href="tel:09426208000"
                className="inline-flex items-center bg-white text-[#2C5F7A] px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Call Emergency Line: 094262 08000
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Eye Care */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Shiv Hospital for Eye Care?
            </h2>
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best eye specialist in Jamnagar with our commitment to excellence and patient care
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: HiOutlineClock,
                title: "24/7 Availability",
                description: "Round-the-clock emergency eye care services with experienced specialists always on duty."
              },
              {
                icon: HiOutlineShieldCheck,
                title: "Expert Specialists",
                description: "Qualified ophthalmologists with years of experience in comprehensive eye care and surgery."
              },
              {
                icon: HiOutlineBolt,
                title: "Quick Diagnosis",
                description: "Advanced diagnostic equipment enables rapid and accurate assessment of eye conditions."
              },
              {
                icon: HiOutlineSparkles,
                title: "Modern Technology",
                description: "State-of-the-art equipment and latest treatment techniques for optimal patient outcomes."
              },
              {
                icon: HiOutlineCheckCircle,
                title: "Comprehensive Care",
                description: "Complete eye care services from routine exams to complex surgical procedures under one roof."
              },
              {
                icon: HiOutlineEye,
                title: "Patient-Centered",
                description: "Personalized treatment plans and compassionate care in an inclusive, welcoming environment."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-md text-center"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-[#2C5F7A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-[#2C5F7A]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#2C5F7A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't Wait - Protect Your Vision Today
            </h2>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Early detection and treatment are crucial for maintaining healthy vision. Schedule your comprehensive eye examination with Jamnagar's trusted eye specialists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:09426208000"
                className="inline-flex items-center justify-center bg-white text-[#2C5F7A] px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Call Now: 094262 08000
              </motion.a>
              
              <motion.a
                href="https://wa.me/919426208000"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Consultation
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}