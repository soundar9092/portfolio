import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  const resumeLink = "https://drive.google.com/file/d/1nXkEBLRYJAn3QzGM5yDVp_p2JrDZ9VKo/view?usp=drive_link"

  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/about-me.svg" alt="About me illustration" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who's behind all this <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">great work?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              A passionate Full Stack Developer with 3.5+ years of professional experience building scalable web
              applications and e-commerce solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">3.5+ years of experience</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Web design, backend development, and e-commerce solutions. Currently Senior Full Stack Developer at
                  Vinsinfo Pvt Ltd.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Growing career trajectory</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Associate Software Developer → Full Stack Developer → Senior Full Stack Developer (2022-2025)
                </p>
              </div>
            </div>
          </div>

          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <User className="w-5 h-5" />
              More about me
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
