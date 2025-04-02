"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from '@/utils/motion';

const Education = () => {
    // State untuk memastikan animasi hanya terjadi di client
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Aktifkan animasi hanya setelah komponen di-mount di client
    }, []);

    if (!isClient) return null; // Untuk menghindari render di server-side

    const educations = [
        {
            date: "2017 - 2020",
            position: "Software Engineering",
            company: "SMK Mandalahayu Bekasi"
        },
        {
            date: "2014 - 2017",
            position: "",
            company: "SMPN 3 Tambun Utara"
        },
        {
            date: "2008 - 2014",
            position: "",
            company: "SDN Karang Satria 04"
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
                Education
                <span className="text-transparent ml-[6px] bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                    History
                </span>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft(0.5)}
                className="text-[14px] md:text-[16px] text-gray-200 mb-[15px] mt-[10px] text-center px-10 md:px-20"
            >
                I have an educational background in information technology, where I learned about software development, databases, and system architecture. This education gave me a strong foundation in theory and practice needed to succeed as a fullstack developer.
            </motion.div>

            <motion.div
                className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-10 justify-center"
            >
                {educations.map((education, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[20]">
                        <div className="relative p-6">
                            <p className="mb-2 text-transparent mr-[6px] bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-bold">{education.date}</p>
                            <h1 className="text-1xl font-semibold text-white">{education.position}</h1>
                            <p className="mt-2 text-gray-300">
                                <span className="text-transparent mr-[6px] bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                                    ~
                                </span>
                                {education.company}
                            </p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Education;