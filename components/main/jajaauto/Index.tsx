import React from "react";
import HeroContent from "../../sub/jajaauto/HeroContent";
import About from "../../sub/jajaauto/About";
import Partner from "../../sub/jajaauto/Partner";
import Tool from "../../sub/jajaauto/Tool";

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
