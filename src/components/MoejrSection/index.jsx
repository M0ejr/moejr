import React from "react";
// import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  // HeroBg,
  HeroLeftContainer,
  // Img,
  // HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
} from "./MoejrStyle";
// import logo from "../images/M13.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        {/* <HeroBg>
          <HeroBgAnimation />
        </HeroBg> */}
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>{Bio.name}</Title>
            <TextLoop>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
          </HeroLeftContainer>
          {/* I will add this back whenever I need it */}

          {/* <HeroRightContainer id="Right">
            <Img src={logo} alt="M-logo" />
          </HeroRightContainer> */}
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;

// I removed the profile photo and the animations for some time.
