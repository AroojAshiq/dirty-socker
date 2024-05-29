"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import Stepper from "@/components/Stepper/Stepper";
import DirtyTraits from "@/components/DirtyTraits/DirtyTraits";
import Info from "@/components/Info/Info";
import Universe from "@/components/Universe/Universe";
import ExclusiveTraits from "@/components/ExclusiveTraits/ExclusiveTraits";
import OtherUtilities from "@/components/OtherUtilities/OtherUtilities";
import MainUtility from "@/components/MainUtility/MainUtility";
import Team from "@/components/Team/Team";
import Faq from "@/components/FAQ/Faq";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import { Element } from "react-scroll";
import FloatingButton from "@/components/FAB/FloatingButton";

export default function App() {
  return (
    <>
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="about">
        <Info />
      </Element>
      <Universe />
      <Element name="traits">
        <DirtyTraits />
      </Element>
      <ExclusiveTraits />
      <Element name="roadmap">
        <Stepper />
      </Element>
      <Element name="utility">
        <MainUtility />
      </Element>
      <OtherUtilities />
      <Element name="team">
        <Team />
      </Element>
      <Element name="faq">
        <Faq />
      </Element>
      <Element name="w3">
        <NewsLetter />
      </Element>
      <FloatingButton />
    </>
  );
}
