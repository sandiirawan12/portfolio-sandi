import React from "react";
import HeroContent from "../../sub/jajaid/HeroContent";
import About from "../../sub/jajaid/About";
import Partner from "../../sub/jajaid/Partner";
import Tool from "../../sub/jajaid/Tool";

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
