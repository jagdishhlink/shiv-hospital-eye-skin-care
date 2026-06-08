'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineHeart, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineSparkles, HiOutlineCheckCircle, HiOutlineClock, HiOutlineArrowRight } from 'react-icons/hi2'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }
const staggerContainer = { initial: {}, whileInView: { transition: { staggerChildren: 0.1 } }, viewport: { once: true } }
const staggerItem = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function AboutHospitalPage() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-[#4A90B8] to-gray-800 py-16 sm:py-20 lg:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-6">
                <HiOutlineHeart className="w-4 h-4 mr-2" />
                Caring Healthcare Since Years
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Story of
                <span className="block bg-gradient-to-r from-white to-[#E8F4F8] bg-clip-text text-transparent">
                  Compassionate Care
                </span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Discover how Shiv Hospital Eye & Skin Care became Jamnagar's trusted medical destination, providing inclusive healthcare with unwavering dedication to every patient's wellbeing.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/contact-location"
                  className="inline-flex items-center justify-center bg-[#2C5F7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Visit Our Hospital
                  <HiOutlineArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:094262 08000"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Call Now: 094262 08000
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src="/images/business-2.jpg"
                  alt="Shiv Hospital Eye & Skin Care - Our Story"
                  width={600}
                  height={400}
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Building Trust Through Excellence
            </h2>
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Shiv Hospital Eye & Skin Care has been serving Jamnagar with specialized medical expertise for years. Located conveniently on S T Road near Mayur Medical, we provide comprehensive eye and skin treatments 24 hours a day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Our Commitment to Inclusive Healthcare
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our commitment to inclusive healthcare means every patient receives compassionate, professional care regardless of background. We combine advanced medical technology with personalized treatment plans for optimal patient outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Being LGBTQ+ friendly is not just a policy for us—it's a core value that shapes how we treat every individual who walks through our doors with dignity and respect.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-[#E8F4F8] rounded-xl flex items-center justify-center mr-4">
                    <HiOutlineHeart className="w-6 h-6 text-[#2C5F7A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Compassionate Care</h4>
                    <p className="text-sm text-gray-600">Patient-centered approach</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-[#E8F4F8] rounded-xl flex items-center justify-center mr-4">
                    <HiOutlineUserGroup className="w-6 h-6 text-[#2C5F7A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Inclusive Environment</h4>
                    <p className="text-sm text-gray-600">LGBTQ+ friendly facility</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src="/images/business-7.jpg"
                  alt="Inclusive healthcare environment at Shiv Hospital"
                  width={600}
                  height={400}
                  unoptimized
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Shiv Hospital Eye & Skin Care
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-[#2C5F7A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HiOutlineShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Delivering the highest standards of medical care with advanced technology and expertise
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-[#2C5F7A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HiOutlineHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Treating every patient with empathy, understanding, and genuine care for their wellbeing
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-[#2C5F7A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HiOutlineUserGroup className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Inclusivity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating a welcoming environment where all patients feel respected and valued
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-[#2C5F7A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HiOutlineClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Available 24/7 for emergency care, ensuring patients get help when they need it most
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Patients Choose Shiv Hospital
            </h2>
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for eye and skin care in Jamnagar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src="/images/business-5.jpg"
                  alt="Why choose Shiv Hospital Eye & Skin Care"
                  width={600}
                  height={400}
                  unoptimized
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-start"
                variants={staggerItem}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-[#2C5F7A] rounded-full flex items-center justify-center mr-4 mt-1">
                  <HiOutlineCheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    24/7 Emergency Care Availability
                  </h3>
                  <p className="text-gray-600">
                    Round-the-clock medical attention for eye and skin emergencies, ensuring you get help when you need it most.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                variants={staggerItem}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-[#2C5F7A] rounded-full flex items-center justify-center mr-4 mt-1">
                  <HiOutlineCheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Dual Specialization Expertise
                  </h3>
                  <p className="text-gray-600">
                    Specialized expertise in both ophthalmology and dermatology under one roof for comprehensive care.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                variants={staggerItem}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-[#2C5F7A] rounded-full flex items-center justify-center mr-4 mt-1">
                  <HiOutlineCheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    LGBTQ+ Friendly Environment
                  </h3>
                  <p className="text-gray-600">
                    Inclusive healthcare environment where all patients receive respectful, professional care regardless of identity.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                variants={staggerItem}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-[#2C5F7A] rounded-full flex items-center justify-center mr-4 mt-1">
                  <HiOutlineCheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Convenient Jamnagar Location
                  </h3>
                  <p className="text-gray-600">
                    Easily accessible location on S T Road near Mayur Medical with convenient parking facilities.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Excellence Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#4A90B8] to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Medical Excellence You Can Trust
            </h2>
            <div className="w-16 h-1 bg-white/30 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our experienced medical specialists combine expertise with compassionate care for the best patient outcomes
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HiOutlineSparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Specialized Expertise</h3>
              <p className="text-white/80 leading-relaxed">
                Our specialists bring years of experience in both ophthalmology and dermatology for comprehensive care.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HiOutlineShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Technology</h3>
              <p className="text-white/80 leading-relaxed">
                State-of-the-art medical equipment and techniques for accurate diagnosis and effective treatment.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HiOutlineHeart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Patient-Centered Care</h3>
              <p className="text-white/80 leading-relaxed">
                Personalized treatment plans designed around each patient's unique needs and circumstances.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Experience Compassionate Care Today
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of patients who trust Shiv Hospital Eye & Skin Care for their medical needs. We're here for you 24/7.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.a
                href="tel:094262 08000"
                className="inline-flex items-center justify-center bg-[#2C5F7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                Book Your Consultation Today
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="https://wa.me/919426208000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-[#2C5F7A] text-[#2C5F7A] px-8 py-4 rounded-xl font-semibold hover:bg-[#2C5F7A] hover:text-white transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}