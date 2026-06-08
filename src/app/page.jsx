'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineStar, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineEye, HiOutlineSparkles, HiOutlineHeart, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineBolt, HiOutlineChevronDown, HiOutlineChevronRight } from 'react-icons/hi2'
import { useState } from 'react'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      icon: HiOutlineEye,
      title: "Eye Care Services",
      description: "Comprehensive eye examinations, emergency care, and specialized treatments for all vision needs.",
      features: ["Emergency Eye Care", "Routine Examinations", "Vision Correction", "Specialist Consultations"]
    },
    {
      icon: HiOutlineSparkles,
      title: "Skin Care Services", 
      description: "Advanced dermatology treatments for medical and cosmetic skin conditions with personalized care.",
      features: ["Acne Treatment", "Skin Infections", "Cosmetic Dermatology", "Preventive Care"]
    },
    {
      icon: HiOutlineBolt,
      title: "24/7 Emergency Care",
      description: "Round-the-clock medical attention for urgent eye and skin conditions requiring immediate treatment.",
      features: ["24 Hour Availability", "Emergency Response", "Urgent Care", "Immediate Treatment"]
    }
  ]

  const trustFeatures = [
    {
      icon: HiOutlineClock,
      title: "24/7 Availability",
      description: "Open round-the-clock for emergency care"
    },
    {
      icon: HiOutlineEye,
      title: "Dual Specialization",
      description: "Eye and skin expertise under one roof"
    },
    {
      icon: HiOutlineHeart,
      title: "LGBTQ+ Friendly",
      description: "Inclusive healthcare for all patients"
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Expert Care",
      description: "Experienced specialists on staff"
    }
  ]

  const testimonials = [
    {
      text: "Excellent care and professional service. The doctors are very knowledgeable.",
      author: "Patient Review",
      rating: 5,
      highlight: "excellent care and professional service"
    },
    {
      text: "Very helpful staff and good treatment. Highly recommend for skin problems.",
      author: "Verified Patient", 
      rating: 4,
      highlight: "very helpful staff and good treatment"
    },
    {
      text: "Best eye specialist in Jamnagar. Quick diagnosis and effective treatment.",
      author: "Local Patient",
      rating: 5,
      highlight: "best eye specialist in jamnagar"
    }
  ]

  const faqs = [
    {
      question: "Do you provide emergency eye and skin care services?",
      answer: "Yes, we're open 24 hours daily and equipped to handle all eye and skin emergencies. Our specialists are available round-the-clock for urgent medical situations."
    },
    {
      question: "What skin conditions do you treat?",
      answer: "We treat a wide range of skin conditions including acne, eczema, psoriasis, skin infections, and cosmetic dermatology needs. Our specialists provide both medical and aesthetic treatments."
    },
    {
      question: "Do you accept walk-in patients?",
      answer: "Yes, we accept both appointments and walk-in patients. For non-emergency cases, we recommend calling ahead to minimize wait times and ensure optimal care."
    },
    {
      question: "Is your facility inclusive and welcoming to all patients?",
      answer: "Absolutely. We're proud to be LGBTQ+ friendly and provide respectful, professional care to all patients regardless of background, identity, or orientation."
    }
  ]

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#4A90B8] to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-1.jpg"
            alt="Shiv Hospital Eye & Skin Care"
            fill
            className="object-cover opacity-30"
            unoptimized
          />
        </div>
        <div className="relative z-10 bg-black/30 min-h-[60vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 sm:space-y-6"
              >
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                  24/7 Eye & Skin Care Jamnagar
                </h1>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                  Expert ophthalmology and dermatology services available round-the-clock. Your trusted healthcare partner in an inclusive, welcoming environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.a
                    href="tel:09426208000"
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-[#2C5F7A] hover:bg-[#2C5F7A]/90 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
                  >
                    <HiOutlinePhone className="w-5 h-5" />
                    Book Your Consultation Today
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919426208000"
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.86 3.687"/>
                    </svg>
                    WhatsApp Us
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-md border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-12 h-12 bg-[#E8F4F8] rounded-xl flex items-center justify-center">
                <HiOutlineClock className="w-6 h-6 text-[#2C5F7A]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">24/7 Open</p>
                <p className="text-sm">Emergency care available</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-12 h-12 bg-[#E8F4F8] rounded-xl flex items-center justify-center">
                <HiOutlineMapPin className="w-6 h-6 text-[#2C5F7A]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sadhana Colony</p>
                <p className="text-sm">Near Mayur Medical, Jamnagar</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-12 h-12 bg-[#E8F4F8] rounded-xl flex items-center justify-center">
                <HiOutlineStar className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">3.6/5 Rating</p>
                <div className="flex gap-1">
                  {[1,2,3,4].map((star, index) => (
                    <HiOutlineStar key={index} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Care Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From routine eye exams to complex skin conditions, our specialists provide comprehensive care using the latest medical techniques. We're equipped to handle both emergency situations and planned treatments with equal expertise.
            </p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" 
                }}
                className="bg-white rounded-2xl p-6 border border-gray-100 border-l-4 border-l-[#2C5F7A] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900">
                    <Image
                      src={`/images/business-${index + 3}.jpg`}
                      alt={service.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#E8F4F8] rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#2C5F7A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Trust & Social Proof */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Patients Trust Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence and patient care has earned us the trust of Jamnagar community.
            </p>
          </div>

          {/* Trust Features */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center p-6 bg-gradient-to-br from-[#E8F4F8] to-white rounded-2xl border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#2C5F7A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Patient Testimonials */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-l-4 border-l-[#2C5F7A] shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-sm font-medium text-gray-900">
                    — {testimonial.author}
                  </cite>
                  <span className="text-xs text-[#2C5F7A] font-semibold bg-[#E8F4F8] px-3 py-1 rounded-full">
                    {testimonial.rating}★
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About / Why Choose Us */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Healthcare Partner in Jamnagar
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Shiv Hospital Eye & Skin Care has been serving Jamnagar with specialized medical expertise for years. Located conveniently on S T Road near Mayur Medical, we provide comprehensive eye and skin treatments 24 hours a day. Our commitment to inclusive healthcare means every patient receives compassionate, professional care regardless of background. We combine advanced medical technology with personalized treatment plans for optimal patient outcomes.
              </p>
              
              <div className="space-y-4">
                {[
                  "24/7 emergency eye and skin care availability",
                  "Specialized dual expertise in ophthalmology and dermatology", 
                  "LGBTQ+ friendly and inclusive healthcare environment",
                  "Convenient Jamnagar location with easy access",
                  "Comprehensive skin and eye treatments under one roof"
                ].map((point, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <HiOutlineCheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#2C5F7A] mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#2C5F7A] mb-1">2</div>
                  <div className="text-sm text-gray-600">Specializations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#2C5F7A] mb-1">100%</div>
                  <div className="text-sm text-gray-600">Inclusive Care</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src="/images/business-2.jpg"
                  alt="Shiv Hospital Interior"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#2C5F7A] rounded-2xl flex items-center justify-center shadow-lg">
                <HiOutlineHeart className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Get answers to common questions about our services and care.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-white"
                >
                  <div className="px-6 py-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Location & Contact */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Conveniently located in the heart of Jamnagar for easy access.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E8F4F8] rounded-xl flex items-center justify-center">
                      <HiOutlineMapPin className="w-6 h-6 text-[#2C5F7A]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        201, Sanjeevani complex, S T road, near Mayur medical, Sadhana Colony, Jamnagar, Gujarat 361006
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E8F4F8] rounded-xl flex items-center justify-center">
                      <HiOutlinePhone className="w-6 h-6 text-[#2C5F7A]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:09426208000" className="text-[#2C5F7A] hover:underline font-medium">
                        094262 08000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E8F4F8] rounded-xl flex items-center justify-center">
                      <HiOutlineClock className="w-6 h-6 text-[#2C5F7A]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                      <p className="text-gray-600">Open 24 hours daily</p>
                      <p className="text-sm text-green-600 font-medium">Emergency care available</p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="https://maps.google.com/?q=201+Sanjeevani+complex+ST+road+Mayur+medical+Sadhana+Colony+Jamnagar+Gujarat+361006"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 mt-6 bg-[#2C5F7A] hover:bg-[#2C5F7A]/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <HiOutlineMapPin className="w-5 h-5" />
                  Get Directions
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 to-gray-900"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.123456789!2d70.123456!3d22.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI3JzI0LjQiTiA3MMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Shiv Hospital Eye & Skin Care Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#4A90B8] to-[#2C5F7A] text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready for Expert Eye & Skin Care?
            </h2>
            <p className="text-base sm:text-lg mb-8 opacity-90 leading-relaxed">
              Don't wait for your health concerns to worsen. Our specialists are available 24/7 to provide the care you need in a welcoming, inclusive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:09426208000"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-[#2C5F7A] hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <HiOutlinePhone className="w-5 h-5" />
                Call for Emergency Care
              </motion.a>
              <motion.a
                href="https://wa.me/919426208000"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.86 3.687"/>
                </svg>
                WhatsApp Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50 shadow-lg">
        <div className="flex gap-3">
          <a
            href="tel:09426208000"
            className="flex-1 bg-[#2C5F7A] hover:bg-[#2C5F7A]/90 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <HiOutlinePhone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href="https://wa.me/919426208000"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.86 3.687"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}