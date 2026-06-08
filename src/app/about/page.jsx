'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineCheckCircle, HiOutlineHeart, HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineClock } from 'react-icons/hi2'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }
const staggerContainer = { initial: {}, whileInView: { transition: { staggerChildren: 0.1 } }, viewport: { once: true } }
const staggerItem = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#1e40af] to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex bg-white/10 backdrop-blur-sm border border-white/20 text-sm px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <HiOutlineHeart className="w-4 h-4 mr-2" />
              Caring for Jamnagar Since Years
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Shiv Hospital</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in comprehensive eye and skin care, dedicated to providing exceptional medical services 24/7 in Jamnagar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="w-16 h-1 bg-[#2563eb] rounded-full mb-6"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Healthcare Journey
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p className="mb-6">
                  Shiv Hospital Eye & Skin Care has been serving the Jamnagar community with dedicated medical expertise in two vital specialties. Located conveniently on S T Road, our hospital combines advanced eye care with comprehensive dermatology services.
                </p>
                <p className="mb-6">
                  Our commitment to 24/7 availability ensures that urgent eye and skin conditions receive immediate professional attention. We believe quality healthcare should be accessible when you need it most.
                </p>
                <p>
                  From routine consultations to emergency care, our experienced medical team is dedicated to providing compassionate, professional treatment that prioritizes your health and well-being above all else.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/business-2.jpg"
                alt="Shiv Hospital Eye & Skin Care facility"
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 lg:mb-16" {...fadeInUp}>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our core values guide every aspect of patient care and medical excellence we deliver
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
                icon: HiOutlineHeart,
                title: "Compassionate Care",
                description: "Every patient receives personalized attention and empathetic treatment from our dedicated medical team."
              },
              {
                icon: HiOutlineShieldCheck,
                title: "Medical Excellence",
                description: "We maintain the highest standards of medical practice with continuous learning and advanced protocols."
              },
              {
                icon: HiOutlineClock,
                title: "24/7 Availability",
                description: "Round-the-clock medical services ensure urgent conditions receive immediate professional attention."
              },
              {
                icon: HiOutlineUserGroup,
                title: "Community Focus",
                description: "Deeply committed to serving Jamnagar and surrounding communities with accessible healthcare."
              },
              {
                icon: HiOutlineSparkles,
                title: "Dual Expertise",
                description: "Specialized knowledge in both eye care and dermatology provides comprehensive treatment options."
              },
              {
                icon: HiOutlineCheckCircle,
                title: "Honest Communication",
                description: "Transparent discussions about treatments, costs, and expected outcomes build lasting trust."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1e40af] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div 
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/business-7.jpg"
                alt="Medical team commitment to patient care"
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </motion.div>
            <motion.div className="order-1 lg:order-2" {...fadeInUp}>
              <div className="w-16 h-1 bg-white rounded-full mb-6"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Our Promise to You
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HiOutlineCheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Always Available When You Need Us</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Our 24/7 operations mean emergency eye injuries, sudden vision changes, or urgent skin conditions receive immediate professional care.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HiOutlineCheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Comprehensive Care Under One Roof</h3>
                    <p className="text-blue-100 leading-relaxed">
                      From routine eye exams to complex dermatological treatments, our dual expertise eliminates the need for multiple referrals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HiOutlineCheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Transparent & Honest Communication</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Clear explanations about your condition, treatment options, and expected outcomes help you make informed healthcare decisions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 lg:mb-16" {...fadeInUp}>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Jamnagar Trusts Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building confidence through consistent quality care and reliable service
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { number: "24/7", label: "Hours Open", description: "Every day of the year" },
              { number: "2", label: "Medical Specialties", description: "Eye care & dermatology" },
              { number: "100%", label: "Professional Care", description: "Experienced specialists" },
              { number: "S T Road", label: "Prime Location", description: "Near Mayur Medical" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center bg-gray-50 rounded-2xl p-6 lg:p-8"
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2563eb] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Experience Healthcare Done Right
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 lg:mb-10 leading-relaxed">
              Ready to receive expert eye and skin care from Jamnagar's trusted dual-specialty hospital? Contact us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:09426208000"
                className="bg-white text-[#2563eb] px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call for Emergency Care
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}