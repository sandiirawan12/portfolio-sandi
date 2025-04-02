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
                    src="/mockup-race.png"
                    alt="Mockup Race Cepat"
                    height={500}
                    width={500}
                    className="w-[500px] h-[300px] sm:w-[500] sm:h-[500px]"
                />
            </motion.div>
            
            <div className="h-full w-full flex flex-col gap-3 sm:justify-center items-center m-auto text-start">
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-2xl sm:text-3xl font-bold text-center text-white max-w-[400px] sm:max-w-[600px] w-auto h-auto"
                >
                    <span>
                        About
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Eureka Logistic{" & "}Raja Cepat
                        </span>
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-md text-gray-400 my-3 max-w-[300px] sm:max-w-[600px] text-center"
                >
                    Eureka Logistics and Rajacepat are trusted providers in the logistics and shipping industry. With strong networks and reliable services, they offer efficient transportation, warehousing, and supply chain solutions for both domestic and international needs. Their dedicated teams ensure timely and secure deliveries, making them reliable partners for businesses seeking streamlined logistics and delivery services.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default About;
