"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Business() {
  const [isFullyVisible, setIsFullyVisible] = useState(false)
  let scrollTriggerInstance

  useEffect(() => {
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: ".image-section",
      start: "top top",
      end: "bottom bottom",
      onEnter: () => setIsFullyVisible(true),
      onLeaveBack: () => setIsFullyVisible(false),
    })

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill()
      }
    }
  }, [scrollTriggerInstance]) // Added scrollTriggerInstance to dependencies

  return (
    <div>
      <div className="image-section h-screen relative font-mersad w-screen">
        {/* Base Image */}
        <img src="/8.png" alt="Business Background" className="absolute inset-0 w-full h-full object-cover" />

        {/* Animated Overlay with Content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isFullyVisible ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Design For Business</h1>
            <p className="text-lg">
              Lorem Ipsum Dolor Sit Amet Consectetur. Penatibus Pharetra Condimentum Amet Aliquet Quam Sem Mattis
              Maecenas Purus. Non Risus Nisi Eu Lobortis Ullamcorper Mauris Ut Quisque.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Business

