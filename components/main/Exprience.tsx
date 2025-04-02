"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from '@/utils/motion';

const Experience = () => {
  // State untuk memastikan animasi hanya terjadi di client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Aktifkan animasi hanya setelah komponen di-mount di client
  }, []);

  if (!isClient) return null; // Untuk menghindari render di server-side

  const experiences = [
    {
      date: "Nov 2021 - Present",
      position: "Front & Backend Development",
      company: "PT Penerbit Erlangga Group"
    },
    {
      date: "Sep 2020 - Sep 2021",
      position: "Web Development",
      company: "PT Promedica Sejahtera"
    },
    {
      date: "Jun 2018 - Sep 2018",
      position: "IT Support",
      company: "PT. Lotte Indonesia"
    }
  ];

  return (
    <div className="flex flex-col relative items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-bold mt-[10px] text-center mb-[10px]"
      >
        <span className="text-transparent mr-[6px] bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
          Work
        </span>
        Experience
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
        className="text-[14px] md:text-[16px] text-gray-200 mb-[15px] mt-[10px] text-center px-10 md:px-20"
      >
        With extensive experience in web development and backend APIs, I am skilled at building efficient and easy-to-integrate systems. From designing responsive interfaces to scalable APIs, each project strengthens my skills in creating reliable technology solutions.
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row items-center justify-center w-full px-10"
      >
        {[
          { number: "3,5", label: "Years Of Experience" },
          { number: "10", label: "Project Complete" },
          { number: "15", label: "Technologies Mastered" },
          { number: "400+", label: "Code Commit" },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={slideInFromLeft(0.8)}
            className="h-full w-full flex flex-col gap-3 sm:justify-center items-center text-start mt-5"
          >
            <p className="text-[50px] mt-5 text-gray-400 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                {item.number}
              </span>
              <p className="text-[20px]">{item.label}</p>
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-10 justify-center"
      >
        {experiences.map((experience, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[20]">
            <div className="relative p-6">
              <p className="mb-2 text-transparent mr-[6px] bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-bold">{experience.date}</p>
              <h1 className="text-2xl font-semibold text-white">{experience.position}</h1>
              <p className="mt-2 text-gray-300">
                <span className="text-transparent mr-[6px] bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  ~
                </span>
                {experience.company}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;