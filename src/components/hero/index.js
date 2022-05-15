import React from "react";
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP } from "./elements";
import ArcadeBg from "../../images/hero/arcade.png";
import PrintersBg from "../../images/hero/printers.png";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBg src={PrintersBg} />
      <HeroContent>
        <HeroH1>
          We are a community of
          <br />
          3D printing fans.
        </HeroH1>
        <HeroP>
          UTDesign Makerspace is a free-to-use place of innovation,
          collaboration, and education for all majors.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
