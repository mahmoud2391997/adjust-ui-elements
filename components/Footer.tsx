"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Keep footer links clickable with pointer, but avoid navigating to non-existing pages
    e.preventDefault()
  }

  return (
    <footer className="w-full text-white mt-16 lg:mt-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/assets/images/footer.jpg)'}}>
      <div className="w-full bg-black/80 px-4 lg:px-8 xl:px-16 2xl:px-24 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="flex flex-col gap-6">
            <Image
              src="/assets/logos/tinytales-logo.svg"
              alt="Tinytales"
              width={66}
              height={51}
              className="brightness-0 invert"
            />
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam in eos qui consequatur ab .Soluta dolor quae Ipsam in eos quconsequatur ab cum maxime.Soluta dolor quae
            </p>
          </div>

          {/* Let Us Help */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base lg:text-2xl font-semibold">Let Us Help</h3>
            <div className="flex flex-col gap-2.5">
              <Link
                href="#"
                onClick={handleNavClick}
                className="text-sm lg:text-base text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                My Account
              </Link>
              <Link
                href="#"
                onClick={handleNavClick}
                className="text-sm lg:text-base text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                FAQs
              </Link>
              <Link
                href="#"
                onClick={handleNavClick}
                className="text-sm lg:text-base text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                Categories
              </Link>
              <Link
                href="#"
                onClick={handleNavClick}
                className="text-sm lg:text-base text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                All Products
              </Link>
            </div>
          </div>

          {/* Policies */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base lg:text-2xl font-semibold">Policies</h3>
            <div className="flex flex-col gap-2.5">
              <Link
                href="#"
                onClick={handleNavClick}
                className="text-sm lg:text-base text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                Refund Policy
              </Link>
              <Link
                href="#"
                onClick={handleNavClick}
                className="text-sm lg:text-base text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                About Us
              </Link>
              <Link
                href="#"
                onClick={handleNavClick}
                className="text-sm lg:text-base text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                Cancellation Policy
              </Link>
              <Link
                href="#"
                onClick={handleNavClick}
                className="text-sm lg:text-base text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                Terms and Conditions
              </Link>
              <Link
                href="#"
                onClick={handleNavClick}
                className="text-sm lg:text-base text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Send Email & Follow Us */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h3 className="text-base lg:text-2xl font-semibold">Send Email</h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3.5 lg:py-4 bg-transparent border border-white/10 rounded-xl text-sm placeholder:text-white/40 focus:outline-none focus:border-[#be968e] transition-colors"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#be968e] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#a87e77] transition-colors cursor-pointer">
                  Send
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-base lg:text-base font-semibold">Follow Us</h3>
              <div className="flex items-center gap-4">
                <Link href="#" className="hover:opacity-70 transition-opacity cursor-pointer" onClick={handleNavClick}>
                  <Image src="/assets/icons/facebook.svg" alt="Facebook" width={11} height={18} className="brightness-0 invert" />
                </Link>
                <Link href="#" className="hover:opacity-70 transition-opacity cursor-pointer" onClick={handleNavClick}>
                  <Image src="/assets/icons/twitter.svg" alt="Twitter" width={21} height={17} className="brightness-0 invert" />
                </Link>
                <Link href="#" className="hover:opacity-70 transition-opacity cursor-pointer" onClick={handleNavClick}>
                  <Image src="/assets/icons/instagram.svg" alt="Instagram" width={20} height={20} className="brightness-0 invert" />
                </Link>
                <Link href="#" className="hover:opacity-70 transition-opacity cursor-pointer" onClick={handleNavClick}>
                  <Image src="/assets/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="brightness-0 invert" />
                </Link>
                <Link href="#" className="hover:opacity-70 transition-opacity cursor-pointer" onClick={handleNavClick}>
                  <Image src="/assets/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="brightness-0 invert" />
                </Link>
                <Link href="#" className="hover:opacity-70 transition-opacity cursor-pointer" onClick={handleNavClick}>
                  <Image src="/assets/icons/telegram.svg" alt="Telegram" width={21} height={18} className="brightness-0 invert" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
