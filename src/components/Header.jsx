'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiOutlineBars3, HiOutlineXMark, HiOutlinePhone } from 'react-icons/hi2'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Eye Care', href: '/eye-care-services' },
  { label: 'Skin Care', href: '/skin-care-services' },
  { label: 'About', href: '/about-hospital' },
  { label: 'Contact', href: '/contact-location' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-left">
              <div className="text-lg sm:text-xl font-bold text-white">
                Shiv Hospital
              </div>
              <div className="text-xs sm:text-sm text-[#2C5F7A] -mt-1">
                Eye & Skin Care
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-[#2C5F7A] text-white'
                    : 'text-white hover:bg-[#1a1a1a]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:09426208000"
              className="flex items-center space-x-2 text-sm text-white hover:text-[#2C5F7A] transition-colors"
            >
              <HiOutlinePhone className="w-4 h-4" />
              <span className="hidden lg:block">094262 08000</span>
            </a>
            <a
              href="tel:09426208000"
              className="bg-[#2C5F7A] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#234B5F] transition-colors duration-200"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-white hover:text-[#2C5F7A] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiOutlineBars3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-gray-200">
            <nav className="py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block px-4 py-3.5 text-base font-medium rounded-lg mx-2 transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-[#2C5F7A] text-white'
                      : 'text-white hover:bg-[#1a1a1a]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Mobile CTA */}
            <div className="px-4 py-4 border-t border-gray-200">
              <a
                href="tel:09426208000"
                onClick={closeMenu}
                className="flex items-center justify-center space-x-2 w-full bg-[#2C5F7A] text-white py-3.5 rounded-lg font-medium hover:bg-[#234B5F] transition-colors duration-200"
              >
                <HiOutlinePhone className="w-5 h-5" />
                <span>Call Now - 094262 08000</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}