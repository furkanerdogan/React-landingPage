import React, { useState, useEffect } from "react";
import Video from "../../assests/videos/backgroundVideo.mp4";

import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroTitleMain,
  ImageBg,
  HeroBtn,
  HeroTitleSecond,
  HeroBtnLink
} from "./Elements";

export default function HeroSection() {

  return (
    <HeroContainer id="whereIsCargo">
      <HeroBg>
        <ImageBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
      <HeroTitleSecond>THE BEST DESIGNS</HeroTitleSecond>

      <HeroTitleMain>Beauty in all shapes, <br /> sizes and colours</HeroTitleMain>


        <HeroBtn>
            <HeroBtnLink
            >
              BOOKING NOW!
            </HeroBtnLink>
          </HeroBtn>
      </HeroContent>
      {/* <AboutUs/> */}
    </HeroContainer>
  );
}
