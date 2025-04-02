"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import {
    tool_elog_race,
} from "@/constants";
import SkillDataProvider from "../SkillDataProvider";

const Tool = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center w-full mb-40 mt-20 px-10"
        >
            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex sm:justify-center items-center"
            >
                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 md:gap-20 items-center">
                    {tool_elog_race.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
            </motion.div>
            <div className="h-full w-full flex flex-col gap-3 sm:justify-center items-center m-auto text-start">
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-2xl sm:text-4xl font-bold text-white max-w-[400px] sm:max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Tools System
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-3 max-w-[300px] sm:max-w-[600px] text-center"
                >
                    The tools used to create application systems are as follows: React JS, Express Js, Javascript, Node JS, Mysql, React Native, Figma
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Tool;
