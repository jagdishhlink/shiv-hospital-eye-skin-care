'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineEnvelope, HiOutlineArrowRight, HiOutlineCheckCircle } from 'react-icons/hi2'

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

export default function ContactLocation() {
  const handleCall = () => {
    window.location.href = 'tel:09426208000'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/919426208000', '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4A90B8] to-gray-800 text-white py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex bg-white/10 backdrop-blur-sm border border-white/20 text-sm px-4 py-2 rounded-full mb-6"
            >
              <HiOutlineClock className="w-4 h-4 mr-2" />
              Open 24 Hours Daily
            </motion.div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Visit Shiv Hospital Eye & Skin Care
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Conveniently located in Jamnagar with 24/7 emergency care availability. Your trusted healthcare partner is just a call away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleCall}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2C5F7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Call for Emergency Care
              </motion.button>
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <HiOutlineEnvelope className="w-5 h-5 mr-2" />
                WhatsApp Inquiry
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for appointments, emergencies, or general inquiries
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div {...staggerItem} className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#E8F4F8] rounded-xl flex items-center justify-center mx-auto mb-6">
                <HiOutlinePhone className="w-8 h-8 text-[#2C5F7A]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone</h3>
              <p className="text-gray-600 mb-4">24/7 emergency and appointment line</p>
              <a 
                href="tel:09426208000"
                className="text-2xl font-bold text-[#2C5F7A] hover:text-[#4A90B8] transition-colors"
              >
                094262 08000
              </a>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#E8F4F8] rounded-xl flex items-center justify-center mx-auto mb-6">
                <HiOutlineMapPin className="w-8 h-8 text-[#2C5F7A]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Address</h3>
              <p className="text-gray-600 leading-relaxed">
                201, Sanjeevani complex,<br />
                S T road, near Mayur medical,<br />
                Sadhana Colony, Jamnagar,<br />
                Gujarat 361006
              </p>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-[#E8F4F8] rounded-xl flex items-center justify-center mx-auto mb-6">
                <HiOutlineClock className="w-8 h-8 text-[#2C5F7A]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hours</h3>
              <div className="bg-[#E8F4F8] rounded-xl p-4 mb-4">
                <p className="text-[#2C5F7A] font-bold text-lg">Open 24 Hours</p>
                <p className="text-gray-600">Every Day of the Week</p>
              </div>
              <p className="text-gray-600 text-sm">Emergency care available around the clock</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location Map & Image */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us in Jamnagar
            </h2>
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conveniently located near Mayur Medical with easy parking and accessibility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div {...fadeInUp} className="space-y-6">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg">
                <Image
                  src="/images/business-9.jpg"
                  alt="Shiv Hospital Eye & Skin Care Location"
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover"
                  unoptimized
                />
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <HiOutlineMapPin className="w-6 h-6 text-[#2C5F7A] mr-2" />
                  Location Benefits
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2C5F7A] mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Easy access from S T Road main route</p>
                  </div>
                  <div className="flex items-start">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2C5F7A] mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Near Mayur Medical for easy identification</p>
                  </div>
                  <div className="flex items-start">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2C5F7A] mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Ample parking space available</p>
                  </div>
                  <div className="flex items-start">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2C5F7A] mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Public transportation accessible</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp} 
              className="bg-gradient-to-br from-[#4A90B8] to-[#2C5F7A] rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Visit Information</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3">For Emergency Visits</h4>
                  <p className="text-blue-100 mb-4">
                    Walk-ins welcome 24/7. No appointment needed for urgent eye or skin emergencies.
                  </p>
                  <motion.button
                    onClick={handleCall}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white text-[#2C5F7A] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                  >
                    <HiOutlinePhone className="w-5 h-5 mr-2" />
                    Call Emergency Line
                  </motion.button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3">For Scheduled Appointments</h4>
                  <p className="text-blue-100 mb-4">
                    Call ahead to minimize wait times and ensure optimal care scheduling.
                  </p>
                  <motion.button
                    onClick={handleWhatsApp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center"
                  >
                    <HiOutlineEnvelope className="w-5 h-5 mr-2" />
                    WhatsApp Booking
                  </motion.button>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center text-blue-100 mb-2">
                    <HiOutlineCheckCircle className="w-5 h-5 mr-2" />
                    LGBTQ+ friendly environment
                  </div>
                  <div className="flex items-center text-blue-100 mb-2">
                    <HiOutlineCheckCircle className="w-5 h-5 mr-2" />
                    Wheelchair accessible facility
                  </div>
                  <div className="flex items-center text-blue-100">
                    <HiOutlineCheckCircle className="w-5 h-5 mr-2" />
                    Multiple payment options accepted
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions & Transportation */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clear directions and transportation options for your convenience
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...staggerItem} className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#E8F4F8] rounded-xl flex items-center justify-center mr-4">
                  <HiOutlineMapPin className="w-6 h-6 text-[#2C5F7A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">By Car</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2C5F7A] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-600">Head to S T Road in Sadhana Colony area</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2C5F7A] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-600">Look for Mayur Medical landmark</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2C5F7A] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-600">Find Sanjeevani complex at 201, near Mayur Medical</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-[#E8F4F8] rounded-xl">
                <p className="text-[#2C5F7A] font-semibold mb-1">Parking Available</p>
                <p className="text-gray-600 text-sm">Dedicated parking space for patients and visitors</p>
              </div>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#E8F4F8] rounded-xl flex items-center justify-center mr-4">
                  <HiOutlineArrowRight className="w-6 h-6 text-[#2C5F7A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Public Transport</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2C5F7A] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">🚌</span>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Local Bus Service</p>
                    <p className="text-gray-500 text-sm">Regular buses to Sadhana Colony area</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2C5F7A] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">🚗</span>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Auto Rickshaw</p>
                    <p className="text-gray-500 text-sm">Easy access from main Jamnagar areas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2C5F7A] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">📱</span>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Ride Booking Apps</p>
                    <p className="text-gray-500 text-sm">Uber, Ola available to our location</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-[#E8F4F8] rounded-xl">
                <p className="text-[#2C5F7A] font-semibold mb-1">Need Directions?</p>
                <p className="text-gray-600 text-sm">Call us for detailed guidance to reach our facility</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#4A90B8] to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to Visit Us?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Don't wait for your eye or skin concerns to worsen. Our specialists are available 24/7 to provide the care you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleCall}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2C5F7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Call 094262 08000
              </motion.button>
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <HiOutlineEnvelope className="w-5 h-5 mr-2" />
                WhatsApp Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}