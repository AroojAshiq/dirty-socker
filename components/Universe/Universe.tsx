import React from "react";
import Container from "@/components/Container/Container";
import ScokerCard from "../StrokeCard/StrokeCard";

function Universe() {
  const cardData = [
    {
      id: 1,
      imageUrl: "/socker1.svg",
      status1: "Sold Out.",
      status2: "Buy",
      status3: "at secondary.",
      projectSize: "100",
      mintDate: "Sold",
      publicMintPrice: "150$",
      url: "https://crypto.com/nft/collection/ab513833b988818f4a00c5844a904014?tab=items",
    },

    {
      id: 2,
      imageUrl: "/socker2.svg",
      status1: "Sold Out.",
      status2: "Buy",
      status3: "at secondary.",
      projectSize: "1000",
      mintDate: "Sold",
      publicMintPrice: "100$",
      url: "https://crypto.com/nft/collection/395e65e62bde89fe6d51b9445c88b809?tab=items",
    },

    {
      id: 3,
      imageUrl: "/socker3.svg",
      status2: "Mint your Socker",
      projectSize: "4500",
      mintDate: "08 Nov",
      publicMintPrice: "59$",
      url: "https://crypto.com/nft/collection/395e65e62bde89fe6d51b9445c88b809?tab=items",
    },

    {
      id: 4,
      imageUrl: "/socker4.svg",
      status1: "To be Announced",
      projectSize: "4500",
      mintDate: "TBA",
      publicMintPrice: "49$",
      url: "",
    },
  ];

  return (
    <>
      <div className="w-full h-auto lg:pt-72 md:pt-32 pt-6">
        <Container>
          <div className="w-full h-auto flex flex-col gap-4 items-center  ">
            <div className="w-full xl:p-[32px] lg:px-[14px] md:p-[16px] p-[18px] flex justify-center items-center flex-col md:gap-1 gap-2 ">
              <h1 className="md:text-5xl uppercase text-[32px] md:font-bold font-black text-center leading-[58px] text-white">
                Our universe
              </h1>
            </div>
            <div className="flex flex-col w-full gap-12">
              {cardData.map((card, index) => (
                <ScokerCard key={index} data={card} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Universe;
