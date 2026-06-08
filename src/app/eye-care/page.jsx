'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineEye, HiOutlineCheckCircle, HiOutlineShieldCheck, HiOutlineClock, HiOutlineMapPin, HiOutlinePhone, HiOutlineArrowRight, HiOutlineSparkles, HiOutlineBolt, HiOutlineUserGroup, HiOutlineHeart } from 'react-icons/hi2'

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

export default function EyeCarePage() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af] to-gray-800">
          <Image
            src="/images/business-1.jpg"
            alt="Advanced Eye Care at Shiv Hospital"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
        </div>
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-6"
              >
                <HiOutlineEye className="w-4 h-4 mr-2" />
                Expert Eye Specialists Available 24/7
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Professional Eye Care
                <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  When You Need It Most
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
              >
                Comprehensive eye care services in Jamnagar with 24/7 emergency availability. From routine exams to complex treatments, our experienced eye specialists provide quality care using advanced medical protocols.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="tel:09426208000"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-[#2563eb] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-600 transition-colors w-full sm:w-auto"
                >
                  <HiOutlinePhone className="w-5 h-5 mr-2" />
                  Book Eye Consultation
                </motion.a>
                <motion.a
                  href="#emergency-care"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors w-full sm:w-auto"
                >
                  Emergency Eye Care
                  <HiOutlineArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-16 h-16 bg-[#2563eb]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiOutlineClock className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Available</h3>
              <p className="text-gray-600">Round-the-clock emergency eye care services</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-16 h-16 bg-[#059669]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiOutlineUserGroup className="w-8 h-8 text-[#059669]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Specialists</h3>
              <p className="text-gray-600">Experienced eye doctors serving Jamnagar</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-16 h-16 bg-[#2563eb]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiOutlineShieldCheck className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Care</h3>
              <p className="text-gray-600">Latest medical protocols and equipment</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-16 h-16 bg-[#059669]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiOutlineMapPin className="w-8 h-8 text-[#059669]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Convenient Location</h3>
              <p className="text-gray-600">Easy access near Mayur Medical</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Eye Care Services */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#2563eb]/10 text-[#2563eb] text-sm px-3 py-1 rounded-full mb-4">
              <HiOutlineSparkles className="w-4 h-4 mr-2" />
              Comprehensive Services
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Eye Care Solutions
            </h2>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From routine eye exams to complex treatments, our specialized medical team provides comprehensive care for all your eye health needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <motion.div {...fadeInUp} className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
              <Image
                src="/images/business-3.jpg"
                alt="Eye examination at Shiv Hospital"
                width={600}
                height={400}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={staggerItem} className="flex items-start">
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <HiOutlineCheckCircle className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Eye Exams</h3>
                  <p className="text-gray-600">Thorough vision assessments and early detection of eye conditions using advanced diagnostic equipment.</p>
                </div>
              </motion.div>
              <motion.div variants={staggerItem} className="flex items-start">
                <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <HiOutlineCheckCircle className="w-6 h-6 text-[#059669]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Eye Care</h3>
                  <p className="text-gray-600">24/7 treatment for urgent conditions including eye injuries, sudden vision changes, and severe eye pain.</p>
                </div>
              </motion.div>
              <motion.div variants={staggerItem} className="flex items-start">
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <HiOutlineCheckCircle className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialized Treatments</h3>
                  <p className="text-gray-600">Professional care for cataracts, glaucoma, diabetic retinopathy, and other complex eye conditions.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-4">
                <HiOutlineEye className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vision Correction</h3>
              <p className="text-gray-600 text-sm">Prescription glasses, contact lenses, and refractive error management.</p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center mb-4">
                <HiOutlineBolt className="w-6 h-6 text-[#059669]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Retinal Disorders</h3>
              <p className="text-gray-600 text-sm">Diagnosis and treatment of macular degeneration and retinal conditions.</p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-4">
                <HiOutlineShieldCheck className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preventive Care</h3>
              <p className="text-gray-600 text-sm">Regular screenings and early detection programs for optimal eye health.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Eye Care */}
      <section id="emergency-care" className="py-16 sm:py-20 bg-gradient-to-br from-[#1e40af] to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-3 py-1 rounded-full mb-6">
                <HiOutlineClock className="w-4 h-4 mr-2" />
                Available 24/7
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Emergency Eye Care
                <span className="block text-blue-200">When Every Minute Counts</span>
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Don't wait when facing an eye emergency. Our experienced specialists are available 24/7 to handle urgent eye conditions including injuries, sudden vision loss, severe pain, and chemical exposure.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-white">
                  <HiOutlineCheckCircle className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                  <span>Immediate assessment and treatment</span>
                </div>
                <div className="flex items-center text-white">
                  <HiOutlineCheckCircle className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                  <span>Advanced emergency equipment on-site</span>
                </div>
                <div className="flex items-center text-white">
                  <HiOutlineCheckCircle className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                  <span>Experienced emergency eye specialists</span>
                </div>
                <div className="flex items-center text-white">
                  <HiOutlineCheckCircle className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                  <span>No appointment needed for emergencies</span>
                </div>
              </div>

              <motion.a
                href="tel:09426208000"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-[#1e40af] px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition-colors"
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Call for Emergency Care
              </motion.a>
            </motion.div>

            <motion.div {...fadeInUp} className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
              <Image
                src="/images/business-8.jpg"
                alt="Emergency eye care facility"
                width={600}
                height={500}
                className="w-full h-96 object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eye Care Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#2563eb]/10 text-[#2563eb] text-sm px-3 py-1 rounded-full mb-4">
              <HiOutlineHeart className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Eye Care Journey
            </h2>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial consultation to follow-up care, we ensure a comprehensive and comfortable experience for every patient.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600 text-sm">Detailed discussion of your eye concerns and medical history with our specialists.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-16 h-16 bg-[#059669] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Examination</h3>
              <p className="text-gray-600 text-sm">Thorough eye examination using advanced diagnostic equipment and techniques.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Treatment Plan</h3>
              <p className="text-gray-600 text-sm">Customized treatment approach based on your specific condition and needs.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-16 h-16 bg-[#059669] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow-up Care</h3>
              <p className="text-gray-600 text-sm">Ongoing monitoring and support to ensure optimal recovery and eye health.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Common Eye Conditions */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Common Eye Conditions We Treat
            </h2>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced eye specialists provide expert care for a wide range of eye conditions affecting patients of all ages.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cataracts</h3>
              <p className="text-gray-600 text-sm mb-4">Clouding of the eye lens causing vision impairment, commonly affecting older adults.</p>
              <div className="text-[#2563eb] text-sm font-medium">• Surgery available • Quick recovery</div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Glaucoma</h3>
              <p className="text-gray-600 text-sm mb-4">Increased eye pressure that can damage the optic nerve and cause vision loss.</p>
              <div className="text-[#059669] text-sm font-medium">• Early detection • Pressure management</div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Diabetic Retinopathy</h3>
              <p className="text-gray-600 text-sm mb-4">Diabetes-related damage to blood vessels in the retina requiring specialized care.</p>
              <div className="text-[#2563eb] text-sm font-medium">• Regular monitoring • Advanced treatment</div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dry Eyes</h3>
              <p className="text-gray-600 text-sm mb-4">Insufficient tear production or poor tear quality causing discomfort and irritation.</p>
              <div className="text-[#059669] text-sm font-medium">• Symptom relief • Long-term management</div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Refractive Errors</h3>
              <p className="text-gray-600 text-sm mb-4">Nearsightedness, farsightedness, and astigmatism affecting vision clarity.</p>
              <div className="text-[#2563eb] text-sm font-medium">• Prescription options • Vision correction</div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Eye Injuries</h3>
              <p className="text-gray-600 text-sm mb-4">Trauma to the eye requiring immediate medical attention and emergency care.</p>
              <div className="text-[#059669] text-sm font-medium">• 24/7 emergency • Immediate treatment</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#2563eb] to-[#1e40af]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Protect Your Vision Today
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait when it comes to your eye health. Schedule a comprehensive eye examination with our experienced specialists or call for immediate emergency care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:09426208000"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white text-[#2563eb] px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition-colors"
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Book Your Consultation
              </motion.a>
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                <HiOutlineMapPin className="w-5 h-5 mr-2" />
                Visit Our Hospital
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}