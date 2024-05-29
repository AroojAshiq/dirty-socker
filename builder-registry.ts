"use client";
import { Builder } from "@builder.io/react";
import Button from "./components/Button/Button";
// register ButtonPrimary component

import Container from "./components/Container/Container";
import Counter from "./components/Counter/Counter";
import Dao from "./components/DirtyDAO/Dao";
import DirtyTraits from "./components/DirtyTraits/DirtyTraits";
import ExclusiveTraits from "./components/ExclusiveTraits/ExclusiveTraits";
import Faq from "./components/FAQ/Faq";
import FaqDropdown from "./components/FAQ/FaqDropdown";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Home from "./components/HomePage/Home";
import Info from "./components/Info/Info";
import MainUtility from "./components/MainUtility/MainUtility";
import Navbar from "./components/Navbar/Navbar";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import OtherUtilities from "./components/OtherUtilities/OtherUtilities";
import RewardCard from "./components/RewardCard/RewardCard";
import RoadMapImageCard from "./components/RoadMapImage/RoadMapImageCard";
import RoadMapRightCard from "./components/RoadMapCards/RoadMapCard";
import ScokerCard from "./components/StrokeCard/StrokeCard";
import Step from "./components/Stepper/Step";
import Stepper from "./components/Stepper/Stepper";
import Team from "./components/Team/Team";
import TeamCard from "./components/Team/TeamCard";
import Terms from "./components/terms&conditions/Terms";
import Universe from "./components/Universe/Universe";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
    {
      name: "bgColor",
      type: "string",
    },
  ],
});


Builder.registerComponent(Container, {
  name: "Container",
  inputs: [
    {
      name: "children",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Navbar, {
  name: "Navbar", // register ButtonPrimary component
});

Builder.registerComponent(
  Step,
  {
    name: "Step",
    inputs: [
      {
        name: "imgSrc",
        type: "string",
        required: true,
      },
      {
        name: "onClick",
        type: "string",
        required: true,
      },
      {
        name: "setSwap",
        type: "boolean",
        required: true,
      },
      {
        name: "state",
        type: "string",
        required: true,
      },
      {
        name: "swapImageWithText",
        type: "boolean",
        required: true,
      },
      {
        name: "text",
        type: "string",
        required: true,
      },
    ],
  }
  // register ButtonPrimary component
);

Builder.registerComponent(Stepper, {
  name: "Stepper",
});

Builder.registerComponent(Button, {
  name: "Button",
  inputs: [
    {
      name: "children",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "onClick",
      type: "string",
    },
    {
      name: "size",
      type: "string",
    },
    {
      name: "variant",
      type: "string",
    },
  ],
});

Builder.registerComponent(Dao, {
  name: "Dao",
});

Builder.registerComponent(DirtyTraits, {
  name: "DirtyTraits",
});

Builder.registerComponent(ExclusiveTraits, {
  name: "ExclusiveTraits",
});

Builder.registerComponent(Faq, {
  name: "Faq",
});

Builder.registerComponent(FaqDropdown, {
  name: "FaqDropdown",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(HeroSection, {
  name: "HeroSection",
});

Builder.registerComponent(Home, {
  name: "Home",
});

Builder.registerComponent(Info, {
  name: "Info",
});

Builder.registerComponent(MainUtility, {
  name: "MainUtility",
});

Builder.registerComponent(NewsLetter, {
  name: "NewsLetter",
});

Builder.registerComponent(OtherUtilities, {
  name: "OtherUtilities",
});

Builder.registerComponent(RewardCard, {
  name: "RewardCard",
});

Builder.registerComponent(RoadMapImageCard, {
  name: "RoadMapImageCard",
});

Builder.registerComponent(RoadMapRightCard, {
  name: "RoadMapRightCard",
});

Builder.registerComponent(ScokerCard, {
  name: "ScokerCard",
});

Builder.registerComponent(Team, {
  name: "Team",
});

Builder.registerComponent(TeamCard, {
  name: "TeamCard",
});

Builder.registerComponent(Terms, {
  name: "Terms",
});

Builder.registerComponent(Universe, {
  name: "Universe",
});
