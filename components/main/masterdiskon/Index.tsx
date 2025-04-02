import React from "react";
import HeroContent from "../../sub/masterdiskon/HeroContent";
import About from "../../sub/masterdiskon/About";
import Partner from "../../sub/masterdiskon/Partner";
import Tool from "../../sub/masterdiskon/Tool";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            <HeroContent />
            <About />
            <Partner />
            <Tool />
        </div>
    );
};

export default Hero;
