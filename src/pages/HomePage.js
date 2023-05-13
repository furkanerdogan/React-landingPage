import React, { useState } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Service from "../components/Service/Service";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection/InfoSection";
import { infoObject, infoObject2 } from "../components/InfoSection/Data";
import Footer from "../components/Footer/Footer";

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
      <InfoSection {...infoObject2} />
      <Service />
      <Footer />
    </>
  );
}
