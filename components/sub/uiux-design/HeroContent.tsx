"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { PaintBrushIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center w-full px-10 mt-40 sm:mt-25"
        >
            {/* z-[20] PENTING */}
            <motion.div className="mb-10 z-[20]"> 
                <div className="h-full w-full flex flex-col gap-3 justify-center m-auto text-start mb-5">
                    <motion.div
                        variants={slideInFromTop}
                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    >
                        <PaintBrushIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                        <h1 className="Welcome-text text-[13px]">
                            Design
                        </h1>
                    </motion.div>


                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className="flex flex-col gap-6 mt-6 text-4xl sm:text-6xl font-bold text-white max-w-[400px] sm:max-w-[600px] w-auto h-auto"
                    >
                        <span>
                            UI UX Mobile
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                Design{" "}
                            </span>
                        </span>
                    </motion.div>

                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="text-lg text-gray-400 my-3 max-w-[300px] sm:max-w-[600px]"
                    >
                        Designing intuitive and visually appealing mobile interfaces to enhance user experience and engagement.
                    </motion.p>
                </div>

                <a href="https://dribbble.com/Sandi_Ir" target="_blank" className="py-2 px-5 bg-cyan-500 text-white font-semibold rounded-full shadow-md hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-400 focus:ring-opacity-75">
                    View All
                </a>
            </motion.div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex sm:justify-center items-center"
            >
                <Image
                    src="/mockup-uiux.png"
                    alt="Mockup UI UX Design"
                    height={500}
                    width={550}
                    className="w-[400px] h-[250px] sm:w-[500px] sm:h-[300px] rounded-[20px]"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
