import React from "react";
import truck from "../../assests/images/menu.png";

import {
  ServicesContainer,
  ServicesCard,
  ServicesContent,
  ServicesWrapper,
  ServicesIcon,
  ServicesSubTitle,
  ServicesMainTitle,
} from "./Elements";
export default function Service() {
  return (
    <div id="services">
      <ServicesContainer>
        <ServicesMainTitle>Servislerimiz</ServicesMainTitle>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={truck} />
            <ServicesSubTitle>Title</ServicesSubTitle>
            <ServicesContent>content content content content</ServicesContent>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={truck} />
            <ServicesSubTitle>Title</ServicesSubTitle>
            <ServicesContent>content content content content</ServicesContent>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={truck} />
            <ServicesSubTitle>Title</ServicesSubTitle>
            <ServicesContent>content content content content</ServicesContent>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </div>
  );
}
