"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Think better with Next js 13
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className='text-[30px] text-white font-bold mt-[10px] text-center mb-[15px]'
        >
          Making apps with modern 
          <span className="text-transparent ml-[6px] bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
            technologies
          </span>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className='text-[14px] md:text-[16px] text-gray-200 mb-10 mt-[10px] text-center'
        >
        Proficient in a variety of programming languages and frameworks, I excel in developing mobile and web applications. My technical skills are complemented by strong problem-solving abilities, effective teamwork, and excellent communication.
        </motion.div>
    </div>
  )
}

export default SkillText