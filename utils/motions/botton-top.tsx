'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
type Props = {
    children: React.ReactNode
}

function BottomTop({children}: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y:-200 }}
        animate={{ opacity: 1,y:-100 }}
       layoutId='underline'
       transition={{ type: "spring", stiffness: 100 }}
        exit={{ opacity: 0 }}
      >
        {children}
        </motion.div>

  </AnimatePresence>
  )
}

export default BottomTop