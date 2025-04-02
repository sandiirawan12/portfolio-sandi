"use client"; // Pastikan ini adalah file client component
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from '@/utils/motion'; // Pastikan ini adalah fungsi yang Anda gunakan untuk animasi
import Image from "next/image";

const About = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Menunggu sampai komponen dimount

    const personalInfoLeft = [
        { label: "Full Name", value: "Sandi Irawan" },
        { label: "Birth Date", value: "12 August 2002" },
        { label: "Linkedin", value: "sandi-irawan12" },
        { label: "Experience", value: "3,5 Years" },
        { label: "Address", value: "Bekasi, Indonesia" }
    ];

    const personalInfoRight = [
        { label: "Phone", value: "(+62) 815 8445 4049" },
        { label: "Languages", value: "English, Indonesia" },
        { label: "Freelance", value: "Available, Part Time" },
        { label: "Email", value: "sandiirawan859@gmail.com" },
    ];

    return (
        <div className="flex flex-col relative items-center justify-center">
            {/* Title Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft(0.5)}
                className="text-[30px] text-white font-bold mt-[10px] text-center mb-[10px]"
            >
                <span className="text-transparent mr-[6px] bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                    About
                </span>
                Me
            </motion.div>

            {/* Introduction Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft(0.5)}
                className="text-[14px] md:text-[16px] text-gray-200 mb-[15px] mt-[10px] text-center px-10 md:px-20"
            >
                I am Sandi Irawan, a dedicated software developer passionate about building user-friendly applications. My journey in tech has focused on continuous learning and striving for excellence, and I am eager to take on new challenges and contribute to meaningful projects.
            </motion.div>

            {/* Profile Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row items-center w-full px-10"
            >
                {/* Profile Image */}
                <motion.div className="w-full h-full flex justify-center items-center py-10">
                    <Image
                        src="/fotoProfile.png"
                        alt="Foto Profile Masterdiskon"
                        height={300}
                        width={300}
                        className="w-[300px] h-[300px] sm:w-[300px] sm:h-[300px]"
                    />
                </motion.div>

                {/* Personal Information */}
                <div className="h-full w-full z-[20] sm:pt-10 pt-0">
                    <div className="flex flex-col md:flex-row gap-1 text-start">
                        {/* Left Section */}
                        <motion.div>
                            {personalInfoLeft.map((item, index) => (
                                <motion.p key={index} className="text-sm text-gray-400 my-3 flex flex-row justify-between items-center">
                                    <div className="flex-1">{item.label}</div>
                                    <div className="text-[15px] ml-20 text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 flex-1 text-right whitespace-nowrap">
                                        {item.value}
                                    </div>
                                </motion.p>
                            ))}
                        </motion.div>

                        {/* Right Section */}
                        <motion.div className="ml-0 md:ml-10">
                            {personalInfoRight.map((item, index) => (
                                <motion.p key={index} className="text-sm text-gray-400 my-3 flex flex-row justify-between items-center">
                                    <span className="flex-1">{item.label}</span>
                                    <span className="text-[15px] ml-10 text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 flex-1 text-right whitespace-nowrap">
                                        {item.value}
                                    </span>
                                </motion.p>
                            ))}
                        </motion.div>
                    </div>
                    <div className="flex flex-row justify-center text-white mt-5">
                        <a href="/CV-Sandi.pdf" download className="py-2 px-5 bg-cyan-500 text-white font-semibold rounded-full shadow-md hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-400 focus:ring-opacity-75">
                            Download CV
                        </a>
                        <a
                            href="mailto:sandiirawan859@gmail.com?subject=Hire%20Project&body=Hello,%20I%20am%20interested%20in%20hiring%20you."
                            className="py-2 px-5 ml-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
