import Link from 'next/link'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-20 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white">Shiv Hospital Eye & Skin Care</h3>
              <div className="w-16 h-1 bg-[#2C5F7A] rounded-full mt-2"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              24/7 specialized eye and skin care in Jamnagar. Professional, inclusive healthcare with expert medical specialists available round-the-clock.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link href="/eye-care-services" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Eye Care Services
              </Link>
              <Link href="/skin-care-services" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Skin Care Services
              </Link>
              <Link href="/about-hospital" className="block text-gray-400 hover:text-white transition-colors duration-200">
                About Hospital
              </Link>
              <Link href="/contact-location" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Contact & Location
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <HiOutlinePhone className="w-5 h-5 text-[#2C5F7A] mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:09426208000" className="text-gray-300 hover:text-white transition-colors duration-200">
                    094262 08000
                  </a>
                  <p className="text-sm text-gray-400">24/7 Emergency Care</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <HiOutlineMapPin className="w-5 h-5 text-[#2C5F7A] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    201, Sanjeevani Complex, S T Road,<br />
                    Near Mayur Medical, Sadhana Colony,<br />
                    Jamnagar, Gujarat 361006
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <HiOutlineClock className="w-5 h-5 text-[#2C5F7A] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Open 24 Hours</p>
                  <p className="text-sm text-gray-400">All Days of the Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Shiv Hospital Eye & Skin Care. All rights reserved. | LGBTQ+ Friendly Healthcare
          </p>
        </div>
      </div>
    </footer>
  )
}