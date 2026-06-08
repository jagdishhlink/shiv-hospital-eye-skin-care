'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineEnvelope, HiOutlineCheckCircle } from 'react-icons/hi2'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }
const staggerContainer = { initial: {}, whileInView: { transition: { staggerChildren: 0.1 } }, viewport: { once: true } }
const staggerItem = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function ContactPage() {
  const handleCall = () => {
    window.open('tel:+919426208000', '_self')
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/919426208000', '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e40af] to-gray-800 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-9.jpg"
            alt="Contact Shiv Hospital Eye & Skin Care"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-sm sm:text-base mb-6"
            >
              <HiOutlineClock className="w-4 h-4 mr-2" />
              Open 24 Hours • Emergency Care Available
            </motion.div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Contact Our Medical Team
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to provide expert eye and skin care when you need it most. Reach out for consultations, emergencies, or any medical questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-red-50 border-l-4 border-red-400 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex-1 mb-4 sm:mb-0">
              <h3 className="text-lg sm:text-xl font-semibold text-red-800 mb-2">
                Medical Emergency? Call Now
              </h3>
              <p className="text-red-700 text-sm sm:text-base">
                For urgent eye injuries, sudden vision loss, or severe skin reactions - our medical team is available 24/7
              </p>
            </div>
            <motion.button
              onClick={handleCall}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
            >
              <HiOutlinePhone className="w-5 h-5 mr-2" />
              094262 08000
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Multiple ways to connect with our medical team for consultations, appointments, and immediate care
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Phone Contact */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl shadow-md p-6 lg:p-8 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-6">
                <HiOutlinePhone className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Call Directly
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                Speak with our medical staff for appointments, consultations, and emergency care
              </p>
              <motion.button
                onClick={handleCall}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#2563eb] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#1e40af] transition-colors"
              >
                094262 08000
              </motion.button>
            </motion.div>

            {/* WhatsApp Contact */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl shadow-md p-6 lg:p-8 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center mb-6">
                <HiOutlineEnvelope className="w-6 h-6 text-[#059669]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                WhatsApp Chat
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                Quick messaging for non-urgent questions and appointment scheduling
              </p>
              <motion.button
                onClick={handleWhatsApp}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#059669] text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Chat on WhatsApp
              </motion.button>
            </motion.div>

            {/* Visit Hospital */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl shadow-md p-6 lg:p-8 border border-gray-100 md:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-6">
                <HiOutlineMapPin className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Visit Our Hospital
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                Walk-in consultations welcome, appointments recommended for faster service
              </p>
              <div className="text-sm text-gray-500">
                201, Sanjeevani Complex<br />
                S T Road, near Mayur Medical<br />
                Sadhana Colony, Jamnagar 361006
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hospital Hours & Availability */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Always Available for Your Care
              </h2>
              <div className="w-16 h-1 bg-[#2563eb] rounded-full mb-6"></div>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to 24/7 availability ensures that urgent eye and skin conditions receive immediate professional attention when you need it most.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#059669] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">24-hour emergency eye care services</span>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#059669] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Round-the-clock dermatology consultations</span>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#059669] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Weekend and holiday availability</span>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#059669] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">No appointment needed for emergencies</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#2563eb]/5 rounded-xl border border-[#2563eb]/10">
                <div className="flex items-center mb-3">
                  <HiOutlineClock className="w-5 h-5 text-[#2563eb] mr-2" />
                  <span className="font-semibold text-gray-900">Operating Hours</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-[#2563eb] mb-2">Open 24 Hours</p>
                <p className="text-gray-600 text-sm">Monday through Sunday • All holidays</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/business-10.jpg"
                alt="Shiv Hospital 24/7 Medical Care"
                width={600}
                height={400}
                className="w-full h-64 sm:h-80 object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Professional Medical Care
                </h3>
                <p className="text-white/90 text-sm sm:text-base">
                  Experienced specialists ready to serve the Jamnagar community
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Easy to Find Location
            </h2>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Conveniently located on S T Road near Mayur Medical, easily accessible for all Jamnagar residents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div {...fadeInUp}>
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Hospital Address
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <HiOutlineMapPin className="w-5 h-5 text-[#2563eb] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Shiv Hospital Eye & Skin Care</p>
                      <p className="text-gray-600">
                        201, Sanjeevani Complex<br />
                        S T Road, near Mayur Medical<br />
                        Sadhana Colony, Jamnagar<br />
                        Gujarat 361006
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Landmarks for Easy Navigation</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#2563eb] rounded-full mr-3"></div>
                      <span>Near Mayur Medical Store</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#2563eb] rounded-full mr-3"></div>
                      <span>Sanjeevani Complex Building</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#2563eb] rounded-full mr-3"></div>
                      <span>S T Road Main Route</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#2563eb] rounded-full mr-3"></div>
                      <span>Sadhana Colony Area</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-full min-h-[400px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <HiOutlineMapPin className="w-16 h-16 mx-auto mb-4 text-white/70" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-white/80 text-sm mb-6">
                    Get detailed directions to our hospital location
                  </p>
                  <motion.a
                    href="https://maps.google.com/?q=201+Sanjeevani+complex+S+T+road+Sadhana+Colony+Jamnagar+Gujarat+361006"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e40af] transition-colors"
                  >
                    <HiOutlineMapPin className="w-4 h-4 mr-2" />
                    Open in Maps
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Quick answers to common questions about our services and procedures
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                question: "Do you provide emergency eye care services?",
                answer: "Yes, we're open 24/7 and equipped to handle urgent eye conditions including injuries, sudden vision changes, and severe eye pain."
              },
              {
                question: "What skin conditions do you treat?",
                answer: "Our dermatology team treats acne, eczema, psoriasis, skin infections, allergic reactions, and provides cosmetic skin care services."
              },
              {
                question: "Do I need an appointment for consultation?",
                answer: "While walk-ins are welcome for emergencies, we recommend calling ahead to schedule consultations for better service and reduced waiting time."
              },
              {
                question: "Where exactly is the hospital located?",
                answer: "We're located at 201, Sanjeevani Complex, S T Road, near Mayur Medical in Sadhana Colony, Jamnagar - easily accessible and well-connected."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#1e40af] to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready for Professional Medical Care?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              Our experienced medical team is standing by to provide expert eye and skin care services. Contact us today for consultations or emergency care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleCall}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1e40af] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center text-lg"
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Call 094262 08000
              </motion.button>
              <motion.button
                onClick={handleWhatsApp}
                whileTap={{ scale: 0.95 }}
                className="bg-[#059669] text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center text-lg"
              >
                <HiOutlineEnvelope className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}