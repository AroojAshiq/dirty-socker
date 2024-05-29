"use client";
import React, { useState } from "react";
import Step from "./Step";
import Container from "../Container/Container";

const Stepper = () => {
  const stepsData = [
    {
      text: "Step1",
      imgSrc: "/01.svg",
      title: "01",
      bgColor: "bg-[#DCC6ED]",
      border: "border-[#DCC6ED]",
      textColor: "text-[#DCC6ED]",
      heading: "OG Edition Minting",
      swapImageWithText: false,
      textHeading: " Mint OG collection of 10 unique OG NFTs",
      result: "Result:",
      para2: " Mint-out in under 2 minutes on crypto.com/NFT",
      para1:
        "This release is a strategic drop, to get the right people involved  early, and to build the hype for the full drop. This will also be an opportunity for early investors to take a bigger part of the revenue when the full collection is released. Besides sharing all of the DS utilities, the OG holders part take in some sick extra rewards, OG cashback and airdrop. See further down in the roadmap for more information.",
    },
    {
      text: "Step2",
      imgSrc: "/02.svg",
      title: "02",
      bgColor: "bg-[#FFC2A5]",
      border: "border-[#FFC2A5]",
      textColor: "text-[#FFC2A5]",
      heading: "OG Merchandise",
      swapImageWithText: true,
      textHeading: "Socks Merchandise",
      para1:
        "being released from W3. To start building up the brand value, and promote the collection, merchandise will be integrated early on, starting out with DS socks.",
      para2:
        "W3 got a distribution center ready to ship these Socks worldwide from Berlin. OG holders may expect to be shipped DS socks for free. The DS socks will be the first merchandise being released from the agency, with more merch coming up later.",
    },
    {
      text: "Step3",
      imgSrc: "/03.svg",
      title: "03",
      bgColor: "bg-[#C67236]",
      border: "border-[#C67236]",
      textColor: "text-[#C67236]",
      swapImageWithText: false,
      heading: "Early Edition Minting",
      textHeading: "Mint of Early Edition",
      para1:
        "Early Sockers is a layered 1k drop from the full 10k collection, meaning, the 1000 NFTs are part of the 10.000 NFT Dirty Sockers collection, but Early Sockers will be dropped in advance of the rest.",
      para2:
        "Early Sockers brings the same utility as the Dirty Sockers NFTs, and additionally three bonus utilities: increased rarity on traits, cashback, and airdrop. For more details on the cashback and the airdrop, see step 7.",
    },
    {
      text: "Step4",
      imgSrc: "/04.svg",
      title: "04",
      bgColor: "bg-[#CAA7F6]",
      border: "border-[#CAA7F6]",
      swapImageWithText: true,
      textColor: "text-[#CAA7F6]",
      heading: "Cashback",
      textHeading: "Cashback for OG holders",
      para1:
        "15% of the gross mint revenue of Early Sockers is being distributed to the OGs. At a full mint out, this is equal to $150 for every OG NFT. Sick.",
    },
    {
      text: "Step5",
      imgSrc: "/05.svg",
      title: "05",
      bgColor: "bg-[#69C1ED]",
      border: "border-[#69C1ED]",
      swapImageWithText: false,
      textColor: "text-[#69C1ED]",
      heading: "Lucky Edition Minting",
      textHeading: "Mint of Dirty Sockers Lucky Edition",
      para1:
        "We are here fam, with first phase of the rest 9k NFTs of the Dirty Sockers collection. This phase consist of 4500 NFTs including OG, early edition and WL air drops.",
    },
    {
      text: "Step6",
      imgSrc: "/06.svg",
      title: "06",
      bgColor: "bg-[#949597]",
      border: "border-[#949597]",
      swapImageWithText: true,
      textColor: "text-[#949597]",
      heading: "Cashback + Airdrop",
      textHeading: "Cashback and airdrop for OG holders",
      para1:
        "7,5% of the gross mint revenue of the main Dirty Sockers collection is distributed evenly to the holders of the 100 OG NFTs. The cashback will equal approximately a 2,5x return on the OG mint price. Break-even is at 4000 regularly minted Dirty Sockers NFTs.",
      para2:
        "Every OG holder will also be rewarded with an airdropped Dirty Sockers NFT. 100 Dirty Sockers NFTs will be airdropped into the 100 OG wallets.",
    },
    {
      text: "Step7",
      imgSrc: "/07.svg",
      title: "07",
      bgColor: "bg-[#78C196]",
      border: "border-[#78C196]",
      swapImageWithText: false,
      textColor: "text-[#78C196]",
      heading: "Cashback + Airdrop",
      textHeading: "Cashback and airdrop for Early Edition",
      para1:
        "25% of the gross mint revenue of the Dirty Sockers drop will go to the Early Sockers.",
      para2:
        "This will equal to about 1x return on every Early Sockers NFT on full mintout. Every Early Socker wallet will be airdropped one Dirty Sockers NFT after the mint of the 9k has been completed.",
    },
    {
      text: "Step8",
      imgSrc: "/08.svg",
      title: "08",
      bgColor: "bg-[#F3AE13]",
      border: "border-[#F3AE13]",
      swapImageWithText: true,
      textColor: "text-[#F3AE13]",
      heading: "Final Edition Minting",
      textHeading: "Mint of Dirty Sockers Final Edition",
      para1:
        "Finally, the end of this collection has come. With second phase of the rest 9k NFTs of the Dirty Sockers collection. This phase also consist of 4500 NFTs available for minting.",
    },
    {
      text: "Step9",
      imgSrc: "/09.svg",
      title: "09",
      bgColor: "bg-[#A1A93C]",
      border: "border-[#A1A93C]",
      swapImageWithText: false,
      textColor: "text-[#A1A93C]",
      heading: "Cashback + Airdrop",
      textHeading: "Cashback and airdrop for OG holders",
      para1:
        "7,5% of the gross mint revenue of the main Dirty Sockers collection is distributed evenly to the holders of the 100 OG NFTs. The cashback will equal approximately a 2,5x return on the OG mint price. Break-even is at 4000 regularly minted Dirty Sockers NFTs.",
      para2:
        "Every OG holder will also be rewarded with an airdropped Dirty Sockers NFT. 100 Dirty Sockers NFTs will be airdropped into the 100 OG wallets.",
    },
    {
      text: "Step10",
      imgSrc: "/10.svg",
      title: "10",
      bgColor: "bg-[#EBC2C2]",
      border: "border-[#EBC2C2]",
      swapImageWithText: true,
      textColor: "text-[#EBC2C2]",
      heading: "Cashback + Airdrop",
      textHeading: "Cashback and airdrop for  Early Edition",
      para1:
        "25% of the gross mint revenue of the Dirty Sockers drop will go to the Early Sockers.",
      para2:
        "This will equal to about 1x return on every Early Sockers NFT on full mintout. Every Early Socker wallet will be airdropped one Dirty Sockers NFT after the mint of the 9k has been completed.",
    },
    {
      text: "Step11",
      imgSrc: "/11.svg",
      title: "11",
      bgColor: "bg-[#E9C983]",
      border: "border-[#E9C983]",
      swapImageWithText: false,
      textColor: "text-[#E9C983]",
      heading: "Dirty Cash Club (DCC)",
      textHeading: "Initiate Dirty Cash Club (DCC)",
      para1:
        "As a head start, for the Dirty Sockers holder fund, DCC gets 5% of the gross revenue from the initial mint.",
      para2:
        "Over time, DCC will grow by profiting 50% of the creator fees of the Dirty Sockers NFT sales and is rewarded with 10% of the gross revenue of W3.",
    },
    {
      text: "Step12",
      imgSrc: "/12.svg",
      title: "12",
      bgColor: "bg-[#67C7BD]",
      border: "border-[#67C7BD]",
      swapImageWithText: true,
      textColor: "text-[#67C7BD]",
      heading: "Dirty DAO",
      textHeading: "Implementing the Dirty DAO",
      para1:
        "One of the biggest parts of the NFT world is the community — so the community should of course have a chance in taking part in big decisions.",
      para2:
        "The DAO voting system will be implemented so that decisions about the treasury wallet and other bigger decisions can be taken on a community basis. The DAO system is a possibility for small holders to big whales in the Dirty Sockers community to make their voices heard, and take part in governing the community.",
    },
    {
      text: "Step13",
      imgSrc: "/13.svg",
      title: "13",
      bgColor: "bg-[#F39A98]",
      border: "border-[#F39A98]",
      swapImageWithText: false,
      textColor: "text-[#F39A98]",
      heading: "More Merch",
      textHeading: "Merch, merch",
      para1:
        "Dirty Sockers hoodies, t-shirts, and caps are being released as the next products in the merchandise line.",
      para2:
        "The products will mainly be distributed from the distribution center in Berlin, but may also be distributed through offline stores, to get more people from the outside into the NFT community.",
    },
    {
      text: "Step14",
      imgSrc: "/14.svg",
      title: "14",
      bgColor: "bg-[#C483F8]",
      border: "border-[#C483F8]",
      swapImageWithText: true,
      textColor: "text-[#C483F8]",
      heading: "Podcast Series Release",
      textHeading: "Podcast series release of project post mint",
      para1:
        "“About how to build an NFT collection”. The team will share their experiences in building the Dirty Sockers collection.",
      para2:
        "This will be professional video production, explaining the building of the Dirty Sockers NFT collection from start to finish. The podcast series will primarily be available on Youtube and Tiktok but also on other voice-only channels.",
    },
    {
      text: "Step15",
      imgSrc: "/15.svg",
      title: "15",
      bgColor: "bg-[#E9C983]",
      border: "border-[#E9C983]",
      swapImageWithText: false,
      textColor: "text-[#E9C983]",
      heading: "3D Sockers",
      textHeading: "Next project of W3 — 3D Sockers",
      para1:
        "The second project of the W3 agency will be a collection of 5000 3D Sockers..",
      para2:
        "This will be professional video production, explaining the building of the Dirty Sockers NFT collection from start to finish. The podcast series will primarily be available on Youtube and Tiktok but also on other voice-only channels.",
    },
  ];

  const currentStep = 4;

  const handleClick = (index: number) => {
    // Set current step
    // setCurrentStep(5);
  };

  const getStepState = (
    index: number
  ): "completed" | "inProgress" | "notStarted" => {
    if (index < currentStep) return "completed";
    if (index === currentStep) return "inProgress";
    return "notStarted";
  };

  return (
    <Container>
      <div className="lg:mt-16 md:mt-12 mt-8">
        <h1 className="uppercase xl:py-14 lg:py-10 md:py-8 py-8 text-[#69C1ED] text-center font-bold leading-[83px] md:text-[60px] text-[32px] md:tracking-[-1.2]">
          our dirty roadmap
        </h1>
        {stepsData.map((step, index) => (
          <Step
            data={step}
            key={index}
            index={index}
            state={getStepState(index)}
            text={step.text}
            imgSrc={step.imgSrc}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </Container>
  );
};

export default Stepper;
