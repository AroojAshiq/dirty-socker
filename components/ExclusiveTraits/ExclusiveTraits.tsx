import React from "react";
import Container from "@/components/Container/Container";
const ExclusiveTraits = () => {
  return (
    <Container>
      <div className="w-full xl:mt-24 lg:mt-20 mt-3 h-auto flex flex-col gap-4 items-center">
        <div className="w-full xl:p-[32px] lg:px-[14px] md:pt-12  pt-16 flex justify-center items-center flex-col md:gap-1 gap-2">
          <h1 className="uppercase text-white lg:pb-2 font-bold md:leading-[83px] md:text-[60px] text-[32px] tracking-[-1.2]">
            Exclusive traits
          </h1>
        </div>
        <div className="flex md:flex-row flex-col justify-between w-full">
          <div className="lg:w-[569px] w-full py-4">
            <div className="w-full flex flex-col justify-between items-center rounded-lg overflow-hidden">
              <div className="xl:w-[569px] w-full xl:h-[581px] h-[418px]">
                <img
                  alt="trait"
                  className="w-full h-full"
                  src="/exclusive-trait1.svg"
                />
              </div>
              <div className="lg:w-96 w-full flex flex-col justify-center items-center gap-4">
                <h2 className="text-2xl font-bold leading-7 text-center mb-2 text-white">
                  Legendary Sockers
                </h2>
                <p className="font-normal text-base leading-5 text-center text-white">
                  10 Most wanted legendary sockers are hidden in our Lucky
                  Edition. These NFTs are One-of-One and are the rarest in the
                  whole DS collection, with rarity 1-10
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[569px] w-full py-4 ">
            <div className="w-full flex flex-col justify-between items-center rounded-lg overflow-hidden p-2">
              <div className="xl:w-[569px] w-full xl:h-[581px] h-[418px]">
                <img
                  alt="trait"
                  className="w-full h-full"
                  src="/exclusive-trait2.svg"
                />
              </div>
              <div className="lg:w-96 w-full flex flex-col justify-center items-center gap-4">
                <h2 className="text-2xl font-bold leading-7 text-center mb-2 text-white">
                  Treasure Trait
                </h2>
                <p className="font-normal text-base leading-5 text-center text-white">
                  It is used only on 5 NFTs in Dirty Sockers. Minters of this
                  trait will be rewarded 500$ cash-back
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ExclusiveTraits;
