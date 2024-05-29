import React, { useState } from "react";
import Container from "@/components/Container/Container";
import AppAccordion from "../Accordion/Accordion";

const Faq = () => {
  const [isOpen, setOpen] = useState(-1);
  const toggle = (index: any) => {
    if (isOpen === index) {
      return setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  const discord_link = "https://discord.com/invite/fcB9RYzHjy";

  const data = [
    {
      id: 1,
      heading: "What are THE Dirty Sockers?",
      text: "A collection of 10,000 unique, degen Dirty Sockers and 100 OG Sockers that promote freedom, individuality, and diversity in the NFT space and give back to the community.",
    },
    {
      id: 2,
      heading: " Is there a Dirty Sockers Discord?",
      text: (
        <span>
          Yes, our Discord the open, Join our community, you can &nbsp;
          <a className="underline" href={discord_link}>
            Join Here
          </a>
        </span>
      ),
    },
    {
      id: 3,
      heading: "When will I be able to buy a Dirty Sockers NFT",
      text: "Mint date is to be announced",
    },
    {
      id: 4,
      heading: " How many Dirty Sockers can I mint?",
      text: "Every wallet will be permited to mint maximum of 3 Dirty Sockers.",
    },
    {
      id: 5,
      heading: " How much is a Dirty Sockers NFT?",
      text: "They will be minted at a fixed price of 50 USD",
    },
    {
      id: 6,
      heading: "What is the benefit of holding a Dirty Sockers NFT?",
      text: (
        <p>
          1. A % of all sales will be allocated to the DIRTY CASH CLUB Fund and
          Several other <br />
          2. You own the IP rights to your Dirty Sockers as provided by this
          agreement. <br />
          3. Exclusive access to the HD file. <br />
          4. Automatic admission to our DIRTY CASH CLUB - This is our community
          wallet as a way of making rewarding our holders. It will serve as a
          solid benefit for the long-term holders in our Sockers community.{" "}
          <br />
          5. A voting system where all Dirty Sockers holders are seen as
          stakeholders and will have a say in where funds of the DIRTY CASH CLUB
          will be allocated to.
          <br />
          6. Guest list access to Dirty Sockers events. <br />
          7. You’ll have the privilege of being a Badass Dirty Socker.
        </p>
      ),
    },
  ];
  return (
    <Container>
      <div className="relative z-20 w-full h-auto flex flex-col gap-5 items-center md:px-12 p-0 xl:mt-40 md:mt-20 mt-24">
        <div className="w-full xl:pt-8 xl:pb-6 lg:px-[14px] md:p-[16px] p-[18px] flex justify-center items-center flex-col md:gap-8 gap-4">
          <h1 className="lg:text-[86px] md:text-5xl text-[32px] font-bold text-center md:leading-[80px] leading-[32px] text-[#69C1ED]">
            FAQ’S
          </h1>
        </div>
        <div className="flex flex-col p-2 lg:gap-4 gap-2 justify-between w-full">
          {data.map((data, index) => (
            <AppAccordion
              key={index}
              open={isOpen === index}
              heading={data.heading}
              text={data.text}
              toggle={() => toggle(index)}
            />
          ))}
          <hr className="w-full h-[1px] border-0 bg-[#69C1ED]"></hr>
        </div>
      </div>
    </Container>
  );
};

export default Faq;
