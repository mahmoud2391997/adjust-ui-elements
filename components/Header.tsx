"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Heart, Menu, Bell, User } from "lucide-react"

export default function Header() {
  const router = useRouter()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleNavClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    // Keep nav items clickable with pointer, but avoid 404 by preventing navigation
    e.preventDefault()
  }

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken")
      localStorage.removeItem("authUserName")
    }
    router.push("/login")
    setIsMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-[#e6e6e6]">
      <div className="w-full flex flex-col items-center justify-center px-4 lg:px-0">
        <div className="w-full max-w-[1440px] flex items-center justify-between py-3 lg:py-4 lg:px-8 xl:px-16 2xl:px-24">
          {/* Logo - always visible */}
          <Link href="/" className="flex items-center flex-shrink-0 cursor-pointer">
            <Image
              src="/assets/logos/tinytales-logo.svg"
              alt="Tagstokes"
              width={66}
              height={51}
              className="h-[40px] lg:h-[51px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex flex-1 mx-12">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-[#020202] hover:text-[#be968e] transition-colors font-medium cursor-pointer"
            >
              <Image src="/assets/icons/home.svg" alt="" width={19} height={19} />
              <span>Home</span>
            </Link>
            <Link
              href="#"
              onClick={handleNavClick}
              className="flex items-center gap-2 text-sm text-[#020202] hover:text-[#be968e] transition-colors font-medium cursor-pointer"
            >
              <Image src="/assets/icons/category.svg" alt="" width={18} height={18} />
              <span>Our Category</span>
            </Link>
            <Link
              href="#"
              onClick={handleNavClick}
              className="text-sm text-[#020202] hover:text-[#be968e] transition-colors font-medium cursor-pointer"
            >
              About Us
            </Link>
            <Link
              href="#"
              onClick={handleNavClick}
              className="text-sm text-[#020202] hover:text-[#be968e] transition-colors font-medium cursor-pointer"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              onClick={handleNavClick}
              className="text-sm text-[#020202] hover:text-[#be968e] transition-colors font-medium cursor-pointer"
            >
              FAQs
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-6">
              <button className="p-2 hover:opacity-70 transition-opacity cursor-pointer">
                <Bell className="h-5 w-5 stroke-[#020202] stroke-1.5" />
              </button>
              <button className="p-2 hover:opacity-70 transition-opacity cursor-pointer">
                <Heart className="h-5 w-5 stroke-[#020202] stroke-1.5" />
              </button>
              <select className="border-none bg-transparent text-sm font-medium text-[#020202] outline-none cursor-pointer hover:text-[#be968e]">
                <option>EN</option>
                <option>AR</option>
              </select>
              <button className="p-2 hover:opacity-70 transition-opacity cursor-pointer">
                <User className="h-5 w-5 stroke-[#020202] stroke-1.5" />
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-md border border-[#e6e6e6] text-sm font-medium text-[#020202] hover:bg-[#f5f5f5] transition-colors cursor-pointer"
              >
                Logout
              </button>
            </div>

            {/* Mobile: hamburger menu */}
            <button
              className="inline-flex lg:hidden p-2 hover:opacity-70 cursor-pointer"
              type="button"
              onClick={() => setIsMobileOpen((v) => !v)}
            >
              <Menu className="h-6 w-6 stroke-[#020202]" />
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {isMobileOpen && (
          <div className="w-full max-w-[1440px] lg:hidden px-2 pb-3">
            <div className="mt-2 rounded-xl border border-[#e6e6e6] bg-white shadow-sm py-3 px-4 flex flex-col gap-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold tracking-wide text-[#888]">
                  MENU
                </span>
                <button
                  type="button"
                  className="text-xs text-[#020202]/70 underline underline-offset-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Close
                </button>
              </div>

              <Link
                href="/"
                className="flex items-center gap-2 py-1.5 text-sm font-medium text-[#020202] cursor-pointer"
                onClick={() => setIsMobileOpen(false)}
              >
                <Image src="/assets/icons/home.svg" alt="" width={19} height={19} />
                <span>Home</span>
              </Link>
              <button
                type="button"
                className="flex items-center gap-2 py-1.5 text-sm font-medium text-[#020202] cursor-pointer text-left"
              >
                <Image src="/assets/icons/category.svg" alt="" width={18} height={18} />
                <span>Our Category</span>
              </button>
              <button
                type="button"
                className="py-1.5 text-sm font-medium text-[#020202] cursor-pointer text-left"
              >
                About Us
              </button>
              <button
                type="button"
                className="py-1.5 text-sm font-medium text-[#020202] cursor-pointer text-left"
              >
                Contact Us
              </button>
              <button
                type="button"
                className="py-1.5 text-sm font-medium text-[#020202] cursor-pointer text-left"
              >
                FAQs
              </button>

              <div className="h-px bg-[#e6e6e6] my-1" />

              <button
                type="button"
                onClick={handleLogout}
                className="py-1.5 text-sm font-medium text-[#d12b2b] cursor-pointer text-left"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
