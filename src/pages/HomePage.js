import React, { useState } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Service from "../components/Service/Service";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection/InfoSection";
import { infoObject } from "../components/InfoSection/Data";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroSection />
      <InfoSection {...infoObject} />
      <Service />

      <div style={{ height: "500px" }}>Page will come</div>
    </>
  );
}
