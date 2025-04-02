"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center w-full px-10 mt-40 sm:mt-10"
        >
            <div className="h-full w-full flex flex-col gap-3 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <WrenchScrewdriverIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Automotive
                    </h1>
                </motion.div>


                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-4xl sm:text-6xl font-bold text-white max-w-[400px] sm:max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Website & Apps
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Jaja Auto{" "}
                        </span>
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-3 max-w-[300px] sm:max-w-[600px]"
                >
                    A platform that provides vehicle financing services with a fast and easy process, offering a variety of flexible car credit options.
                </motion.p>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex sm:justify-center items-center"
            >
                <Image
                    src="/mockup-jajaauto.png"
                    alt="Mockup Jaja Auto"
                    height={650}
                    width={550}
                    className="w-[400px] h-[330px] sm:w-[650px] sm:h-[600px]"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
