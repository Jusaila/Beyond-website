'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollText() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Modify transform values to create an upward stacking effect
  const y1 = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, -80, -160, -240])
  const y2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [80, 0, -80, -160])
  const y3 = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [80, 0, -80])
  const y4 = useTransform(scrollYProgress, [0.6, 0.8], [80, 0])

  // Opacity transforms - fade in only, no fade out
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])

  // Add opacity for the entire container to fade out at the end
  const containerOpacity = useTransform(
    scrollYProgress,
    [0.8, 0.9],
    [1, 0]
  )

  return (
    <div className="relative">
      {/* Spacer div to maintain scroll height */}
      <div 
        ref={containerRef}
        className="h-[300vh]"
      />
      
      {/* Container for fixed content that's constrained to this component */}
      <motion.div 
        style={{ opacity: containerOpacity }}
        className="absolute inset-0 overflow-hidden pointer-events-none font-mersad"
      >
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-20 w-full">
          <div className="relative flex flex-col items-center justify-center text-center space-y-4 md:space-y-6 lg:space-y-8">
            <motion.h2
              style={{ opacity: opacity1, y: y1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
            >
              Creative Design Attracts <br/> People.
            </motion.h2>

            <motion.h2
              style={{ opacity: opacity2, y: y2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
            >
              Smart UX Makes Them <br/> Stay.
            </motion.h2>

            <motion.h2
              style={{ opacity: opacity3, y: y3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
            >
              At Outcrowd We Deliver <br/> Both.
            </motion.h2>

            <motion.h2
              style={{ opacity: opacity4, y: y4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
            >
              For You, For People, For<br/> Business.
            </motion.h2>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
