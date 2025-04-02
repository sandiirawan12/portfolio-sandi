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
                    src="/mockup-jajaid-2.png"
                    alt="Mockup Jaja ID"
                    height={500}
                    width={500}
                    className="w-[300px] h-[380px] sm:w-[500] sm:h-[500px]"
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
                            Masterdiskon{" "}
                        </span>
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-3 max-w-[300px] sm:max-w-[600px] text-center"
                >
                    Masterdiskon is a company engaged in the field of tour & travel, masterdiskon provides online booking services for tickets,
                    hotels, tours, etc. Masterdiskon was established in 2018, which was initially only a small agent, but is now trusted by many
                    large companies to serve domestic and international tourist trips.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default About;
