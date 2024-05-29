import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Stepper from "../Stepper/Stepper";
import DirtyTraits from "../DirtyTraits/DirtyTraits";
import Info from "../Info/Info";
import Universe from "../Universe/Universe";
import ExclusiveTraits from "../ExclusiveTraits/ExclusiveTraits";
import OtherUtilities from "../OtherUtilities/OtherUtilities";
import MainUtility from "../MainUtility/MainUtility";
import Team from "../Team/Team";
import Faq from "../FAQ/Faq";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
