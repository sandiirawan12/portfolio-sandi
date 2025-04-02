import React from "react";
import HeroContent from "../../sub/elogs-race/HeroContent";
import About from "../../sub/elogs-race/About";
import Partner from "../../sub/elogs-race/Partner";
import Tool from "../../sub/elogs-race/Tool";

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
