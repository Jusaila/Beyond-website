"use client"

import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showText, setShowText] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Check if we've scrolled enough to trigger the animation
      if (scrollPosition > windowHeight * 0.3) {
        setIsScrolled(true)

        // Add a slight delay before showing the text
        setTimeout(() => {
          setShowText(true)
        }, 500)
      } else {
        setIsScrolled(false)
        setShowText(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="h-screen relative">
      <div className=" inset-0 flex flex-col items-center justify-center">
        <div
          className={`transition-all duration-1000 ease-out flex flex-col items-center
            ${isScrolled ? "scale-50 -translate-y-8" : "scale-100"}`}
        >
          <img
            src=

"/about/1.png"            alt="Logo"
            className=" h-[500px]"
          />

          <div
            className={`max-w-md text-center mt-6 px-4 transition-all duration-700 ease-out
              ${showText ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          >
            <p>
              We are a remote design agency based in Dubai, working with clients around the world. As passionate
              designers, we love building products that are easy to use, accessible, engaging, and delightful.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

