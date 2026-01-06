"use client"

import type React from "react"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const resumeLink = "https://drive.google.com/file/d/1nXkEBLRYJAn3QzGM5yDVp_p2JrDZ9VKo/view?usp=drive_link"
  const email = "Talktosoundar@gmail.com"

  const handleGetInTouch = () => {
    window.location.href = `mailto:${email}`
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "#home")}
            className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity"
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleSmoothScroll(e, "#portfolio")}
            className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity"
          >
            Portfolio
          </a>
        </div>

        <Button
          onClick={handleGetInTouch}
          className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0"
          title="Send email"
        >
          <Mail className="w-10 h-10" strokeWidth={2.5} />
        </Button>
      </nav>
    </div>
  )
}
