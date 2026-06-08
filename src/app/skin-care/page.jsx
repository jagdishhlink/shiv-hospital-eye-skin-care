'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineHeart, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineWrench, HiOutlineUserGroup, HiOutlineClock } from 'react-icons/hi2'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }
const staggerContainer = { initial: {}, whileInView: { transition: { staggerChildren: 0.1 } }, viewport: { once: true } }
const staggerItem = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function SkinCarePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e40af] to-gray-800 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <HiOutlineSparkles className="w-5 h-5 text-white mr-2" />
              <span className="text-sm font-medium">Professional Dermatology Services</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Advanced Skin Care Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Expert dermatology care available 24/7 in Jamnagar. From acne treatment to cosmetic procedures, our experienced specialists provide comprehensive skin health solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:09426208000"
                className="inline-flex items-center justify-center bg-[#2563eb] text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlineClock className="w-5 h-5 mr-2" />
                Emergency Skin Care
              </motion.a>
              <motion.button
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Skin Treatment Services
            </h2>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Our dermatology team treats acne, eczema, psoriasis, skin infections, allergic reactions, and provides cosmetic skin care services with the latest medical protocols.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: HiOutlineShieldCheck,
                title: "Acne Treatment",
                description: "Advanced acne therapy including hormonal acne, cystic acne, and acne scarring treatment with proven medical protocols.",
                features: ["Hormonal Acne", "Cystic Acne", "Scar Treatment", "Prevention Plans"]
              },
              {
                icon: HiOutlineSparkles,
                title: "Cosmetic Dermatology",
                description: "Professional cosmetic procedures for skin rejuvenation, anti-aging treatments, and aesthetic enhancement.",
                features: ["Anti-Aging", "Skin Rejuvenation", "Pigmentation", "Aesthetic Procedures"]
              },
              {
                icon: HiOutlineHeart,
                title: "Medical Dermatology",
                description: "Treatment of chronic skin conditions including eczema, psoriasis, dermatitis, and autoimmune skin disorders.",
                features: ["Eczema Care", "Psoriasis Treatment", "Skin Infections", "Allergy Treatment"]
              },
              {
                icon: HiOutlineWrench,
                title: "Skin Surgery",
                description: "Minor surgical procedures including mole removal, cyst excision, and biopsy services with minimal scarring.",
                features: ["Mole Removal", "Cyst Excision", "Skin Biopsy", "Scar Revision"]
              },
              {
                icon: HiOutlineUserGroup,
                title: "Pediatric Dermatology",
                description: "Specialized skin care for children including birthmarks, childhood eczema, and developmental skin conditions.",
                features: ["Childhood Eczema", "Birthmarks", "Allergic Reactions", "Growth Monitoring"]
              },
              {
                icon: HiOutlineClock,
                title: "Emergency Skin Care",
                description: "24/7 availability for urgent skin conditions including severe allergic reactions, infections, and trauma.",
                features: ["Allergic Reactions", "Skin Infections", "Trauma Care", "24/7 Availability"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <HiOutlineCheckCircle className="w-4 h-4 text-[#059669] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Our Skin Care Treatment Process
              </h2>
              <div className="w-16 h-1 bg-[#2563eb] rounded-full mb-6"></div>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                We follow a systematic approach to diagnose and treat skin conditions, ensuring comprehensive care from consultation to recovery.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Detailed Consultation",
                    description: "Comprehensive skin assessment and medical history review"
                  },
                  {
                    step: "02",
                    title: "Diagnostic Testing",
                    description: "Advanced diagnostic tools including dermoscopy and allergy testing"
                  },
                  {
                    step: "03",
                    title: "Personalized Treatment",
                    description: "Customized treatment plan based on your specific skin condition"
                  },
                  {
                    step: "04",
                    title: "Follow-up Care",
                    description: "Regular monitoring and treatment adjustments for optimal results"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-[#2563eb] text-white rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/business-8.jpg"
                alt="Skin care treatment process at Shiv Hospital"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Skin Conditions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Skin Conditions We Treat
            </h2>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced dermatologists treat a wide range of skin conditions with evidence-based medical treatments and personalized care plans.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { name: "Acne & Acne Scars", severity: "Common", color: "bg-green-100 text-green-800" },
              { name: "Eczema & Dermatitis", severity: "Chronic", color: "bg-blue-100 text-blue-800" },
              { name: "Psoriasis", severity: "Autoimmune", color: "bg-purple-100 text-purple-800" },
              { name: "Skin Infections", severity: "Urgent", color: "bg-red-100 text-red-800" },
              { name: "Allergic Reactions", severity: "Emergency", color: "bg-orange-100 text-orange-800" },
              { name: "Melasma & Pigmentation", severity: "Cosmetic", color: "bg-indigo-100 text-indigo-800" },
              { name: "Skin Cancer Screening", severity: "Preventive", color: "bg-teal-100 text-teal-800" },
              { name: "Hair & Nail Disorders", severity: "Specialized", color: "bg-pink-100 text-pink-800" }
            ].map((condition, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center"
                whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <h3 className="font-semibold text-gray-800 mb-3">{condition.name}</h3>
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${condition.color}`}>
                  {condition.severity}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Skin Care */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/business-7.jpg"
                alt="Professional skin care specialists at Shiv Hospital"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
            </motion.div>

            <motion.div {...fadeInUp}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Why Choose Our Dermatology Services
              </h2>
              <div className="w-16 h-1 bg-[#2563eb] rounded-full mb-6"></div>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                As Jamnagar's trusted skin care specialists, we combine medical expertise with compassionate care to deliver exceptional dermatology services around the clock.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: HiOutlineClock,
                    title: "24/7 Emergency Care",
                    description: "Round-the-clock availability for urgent skin conditions and allergic reactions"
                  },
                  {
                    icon: HiOutlineUserGroup,
                    title: "Experienced Specialists",
                    description: "Board-certified dermatologists with extensive experience in medical and cosmetic dermatology"
                  },
                  {
                    icon: HiOutlineShieldCheck,
                    title: "Advanced Technology",
                    description: "State-of-the-art diagnostic equipment and latest treatment protocols"
                  },
                  {
                    icon: HiOutlineHeart,
                    title: "Personalized Care",
                    description: "Customized treatment plans tailored to your specific skin type and condition"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skin Care Tips */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#1e40af] to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12 text-white" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Professional Skin Care Tips
            </h2>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
              Expert advice from our dermatologists to help you maintain healthy skin between visits.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Daily Sun Protection",
                description: "Use broad-spectrum SPF 30+ sunscreen daily, even on cloudy days. Reapply every 2 hours when outdoors.",
                icon: "☀️"
              },
              {
                title: "Gentle Cleansing",
                description: "Wash your face twice daily with a mild, fragrance-free cleanser. Avoid over-washing or harsh scrubbing.",
                icon: "🧴"
              },
              {
                title: "Moisturize Regularly",
                description: "Apply moisturizer while skin is still damp to lock in hydration. Choose products suitable for your skin type.",
                icon: "💧"
              },
              {
                title: "Avoid Picking",
                description: "Never pick at acne, scabs, or blemishes as this can lead to scarring and infection.",
                icon: "🚫"
              },
              {
                title: "Stay Hydrated",
                description: "Drink plenty of water throughout the day to maintain skin hydration from within.",
                icon: "🥤"
              },
              {
                title: "Regular Check-ups",
                description: "Schedule annual skin examinations for early detection of skin cancer and other conditions.",
                icon: "🔍"
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-200 leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Skin Health?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Don't let skin concerns affect your confidence. Our expert dermatologists are here to help you achieve healthy, beautiful skin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="tel:09426208000"
                className="inline-flex items-center justify-center bg-[#2563eb] text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlineClock className="w-5 h-5 mr-2" />
                Call for Urgent Care
              </motion.a>
              <motion.button
                className="inline-flex items-center justify-center border-2 border-[#2563eb] text-[#2563eb] px-8 py-4 rounded-xl font-semibold"
                whileHover={{ backgroundColor: '#2563eb', color: 'white' }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md max-w-md mx-auto">
              <h3 className="font-semibold text-gray-800 mb-2">24/7 Emergency Skin Care</h3>
              <p className="text-sm text-gray-600 mb-3">
                Immediate care for severe allergic reactions, infections, and skin trauma
              </p>
              <a href="tel:09426208000" className="text-[#2563eb] font-semibold text-lg">
                094262 08000
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}