'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineHeart, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineClock, HiOutlineArrowRight } from 'react-icons/hi2'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }
const staggerContainer = { initial: {}, whileInView: { transition: { staggerChildren: 0.1 } }, viewport: { once: true } }
const staggerItem = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function SkinCareServices() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4A90B8] to-gray-800 text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
                <HiOutlineSparkles className="w-4 h-4 mr-2" />
                Expert Dermatology Services
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Advanced
                <span className="block bg-gradient-to-r from-[#E8F4F8] to-white bg-clip-text text-transparent">
                  Skin Care Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-100 mb-8">
                Comprehensive dermatology treatments available 24/7 in Jamnagar. From acne to advanced skin conditions, our specialists provide expert care with cutting-edge treatments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="tel:09426208000"
                  className="inline-flex items-center justify-center bg-[#2C5F7A] hover:bg-[#2C5F7A]/90 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-colors duration-200"
                  whileTap={{ scale: 0.95 }}
                >
                  <HiOutlinePhone className="w-5 h-5 mr-3" />
                  Book Your Consultation Today
                </motion.a>
                <motion.a
                  href="https://wa.me/919426208000"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200"
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp Inquiry
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="/images/business-3.jpg"
                alt="Modern skin care treatment facility at Shiv Hospital"
                width={600}
                height={400}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-8 sm:py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
            {...staggerContainer}
          >
            <motion.div className="text-center" {...staggerItem}>
              <div className="text-2xl sm:text-3xl font-bold text-[#2C5F7A] mb-2">24/7</div>
              <div className="text-gray-600 text-sm sm:text-base">Emergency Care</div>
            </motion.div>
            <motion.div className="text-center" {...staggerItem}>
              <div className="text-2xl sm:text-3xl font-bold text-[#2C5F7A] mb-2">15+</div>
              <div className="text-gray-600 text-sm sm:text-base">Skin Conditions Treated</div>
            </motion.div>
            <motion.div className="text-center" {...staggerItem}>
              <div className="text-2xl sm:text-3xl font-bold text-[#2C5F7A] mb-2">100%</div>
              <div className="text-gray-600 text-sm sm:text-base">LGBTQ+ Friendly</div>
            </motion.div>
            <motion.div className="text-center" {...staggerItem}>
              <div className="text-2xl sm:text-3xl font-bold text-[#2C5F7A] mb-2">Expert</div>
              <div className="text-gray-600 text-sm sm:text-base">Dermatologists</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <div className="inline-flex items-center bg-[#E8F4F8] text-[#2C5F7A] text-sm px-4 py-2 rounded-full mb-4">
              Comprehensive Dermatology
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Skin Care Solutions
            </h2>
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From routine skin examinations to complex dermatological treatments, our specialists provide comprehensive care using the latest medical techniques and technology.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            {...staggerContainer}
          >
            {[
              {
                icon: <HiOutlineSparkles className="w-8 h-8" />,
                title: "Acne Treatment",
                description: "Advanced acne solutions including topical treatments, oral medications, and professional procedures for clear, healthy skin."
              },
              {
                icon: <HiOutlineHeart className="w-8 h-8" />,
                title: "Cosmetic Dermatology",
                description: "Anti-aging treatments, skin rejuvenation, and aesthetic procedures to enhance your natural beauty and confidence."
              },
              {
                icon: <HiOutlineShieldCheck className="w-8 h-8" />,
                title: "Skin Cancer Screening",
                description: "Comprehensive mole checks and early detection services for skin cancer prevention and treatment."
              },
              {
                icon: <HiOutlineUserGroup className="w-8 h-8" />,
                title: "Pediatric Dermatology",
                description: "Specialized skin care for children including eczema, birthmarks, and other pediatric skin conditions."
              },
              {
                icon: <HiOutlineCheckCircle className="w-8 h-8" />,
                title: "Chronic Skin Conditions",
                description: "Expert management of psoriasis, eczema, rosacea, and other long-term skin conditions with personalized treatment plans."
              },
              {
                icon: <HiOutlineClock className="w-8 h-8" />,
                title: "Emergency Skin Care",
                description: "24/7 availability for acute skin reactions, infections, and other urgent dermatological emergencies."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                {...staggerItem}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#E8F4F8] text-[#2C5F7A] rounded-xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center bg-[#E8F4F8] text-[#2C5F7A] text-sm px-4 py-2 rounded-full mb-6">
                Our Process
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Skin Care Journey
              </h2>
              <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mb-8"></div>
              
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Initial Consultation",
                    description: "Comprehensive skin assessment and medical history review with our dermatology specialists."
                  },
                  {
                    step: "02",
                    title: "Diagnosis & Planning",
                    description: "Detailed diagnosis using advanced technology and development of personalized treatment plans."
                  },
                  {
                    step: "03",
                    title: "Treatment Implementation",
                    description: "Professional treatment delivery with continuous monitoring and adjustment as needed."
                  },
                  {
                    step: "04",
                    title: "Follow-up Care",
                    description: "Ongoing support and maintenance to ensure optimal results and prevent recurrence."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#2C5F7A] text-white rounded-xl flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/business-8.jpg"
                alt="Skin care treatment process at Shiv Hospital"
                width={600}
                height={500}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="bg-[#4A90B8] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Skin Conditions We Treat
            </h2>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our dermatologists have extensive experience treating a wide range of skin conditions with proven, effective treatments.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            {...staggerContainer}
          >
            {[
              "Acne & Acne Scarring",
              "Eczema & Dermatitis",
              "Psoriasis",
              "Rosacea",
              "Skin Infections",
              "Moles & Warts",
              "Hair Loss",
              "Vitiligo",
              "Fungal Infections",
              "Age Spots",
              "Skin Allergies",
              "Melasma"
            ].map((condition, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-200"
                {...staggerItem}
              >
                <HiOutlineCheckCircle className="w-6 h-6 mx-auto mb-2 text-[#E8F4F8]" />
                <span className="font-medium">{condition}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology & Treatments */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/business-4.jpg"
                alt="Advanced dermatology equipment and technology"
                width={600}
                height={400}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                unoptimized
              />
            </motion.div>

            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center bg-[#E8F4F8] text-[#2C5F7A] text-sm px-4 py-2 rounded-full mb-6">
                Advanced Technology
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Treatments
              </h2>
              <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mb-6"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We utilize the latest dermatological technology and proven treatment methods to deliver optimal results for our patients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Laser Therapy",
                    description: "Advanced laser treatments for various skin conditions"
                  },
                  {
                    title: "Chemical Peels",
                    description: "Professional-grade peels for skin rejuvenation"
                  },
                  {
                    title: "Cryotherapy",
                    description: "Freezing treatment for warts and lesions"
                  },
                  {
                    title: "Phototherapy",
                    description: "Light-based treatments for chronic conditions"
                  }
                ].map((treatment, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <HiOutlineCheckCircle className="w-6 h-6 text-[#2C5F7A] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{treatment.title}</h3>
                      <p className="text-gray-600">{treatment.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Care Notice */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 rounded-xl p-6 lg:p-8"
            {...fadeInUp}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Skin Emergency? We're Here 24/7
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Severe allergic reactions, sudden rashes, infections, or other urgent skin conditions require immediate attention. Our emergency dermatology services are available around the clock.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <HiOutlineClock className="w-4 h-4 mr-1 text-red-500" />
                    Open 24 Hours
                  </span>
                  <span className="flex items-center">
                    <HiOutlinePhone className="w-4 h-4 mr-1 text-red-500" />
                    Emergency Line Available
                  </span>
                </div>
              </div>
              <motion.a
                href="tel:09426208000"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-colors duration-200 whitespace-nowrap"
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-[#4A90B8] to-gray-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
              <HiOutlineSparkles className="w-4 h-4 mr-2" />
              Ready to Transform Your Skin?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Schedule Your Skin Care
              <span className="block">Consultation Today</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Take the first step toward healthier, clearer skin. Our dermatologists are ready to provide expert care tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="tel:09426208000"
                className="inline-flex items-center bg-[#2C5F7A] hover:bg-[#2C5F7A]/90 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlinePhone className="w-5 h-5 mr-3" />
                Call 094262 08000
              </motion.a>
              <motion.a
                href="https://wa.me/919426208000"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlineArrowRight className="w-5 h-5 mr-3" />
                WhatsApp Us Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}