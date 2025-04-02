"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const About = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center w-full px-10"
        >
            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex sm:justify-center items-center"
            >
                <Image
                    src="/mockup-jajaauto-1.png"
                    alt="Mockup Jaja Auto"
                    height={500}
                    width={500}
                    className="w-[500px] h-[300px] sm:w-[500] sm:h-[500px]"
                />
            </motion.div>
            
            <div className="h-full w-full flex flex-col gap-3 sm:justify-center items-center m-auto text-start">
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-2xl sm:text-4xl font-bold text-white max-w-[400px] sm:max-w-[600px] w-auto h-auto"
                >
                    <span>
                        About
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Jaja Auto{" "}
                        </span>
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-3 max-w-[300px] sm:max-w-[600px] text-center"
                >
                    Jaja Auto is a company engaged in the automotive sector, providing information services and solutions for your vehicle needs. Founded in 2021, Auto Jaja was initially just a small platform, but has now become a trusted partner for many vehicle owners and automotive enthusiasts. We offer a variety of services, from car reviews, maintenance tips, to automotive product recommendations, to help you have a better driving experience.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default About;
