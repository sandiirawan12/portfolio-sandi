"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const Partner = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center w-full px-10"
        >
            <div className="h-full w-full flex flex-col gap-3 sm:justify-center items-center m-auto text-start">
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-2xl sm:text-4xl font-bold text-white max-w-[400px] sm:max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Partners & Client
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-3 max-w-[300px] sm:max-w-[600px] text-center"
                >
                    Currently, Eureka Logistic & Raja Cepat's client partners include Federal Oil, Motul, IDMARCO, Penerbit Erlangga, Super Indo, Unilever, Kitani, Sinbad, Cosmax, and DCH Auriga, etc.
                </motion.p>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex sm:justify-center items-center"
            >
                <Image
                    src="/mockup-elog-race.png"
                    alt="Mockup Eureka Logistic Raja Cepat"
                    height={500}
                    width={500}
                    className="w-[500px] h-[300px] sm:w-[500] sm:h-[500px]"
                />
            </motion.div>
        </motion.div>
    );
};

export default Partner;
