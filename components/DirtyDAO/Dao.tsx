import React from "react";
import Container from "@/components/Container/Container";
import Image from "next/image";
import Button from "../Button/Button";

function Dao() {
  return (
    <>
      <div className="w-full xxl:[1600px] xxxl:h-[2000px] dao lg:h-[1500px] sm:h-[1500px] exl:h-[2500px] exxl:h-[3500px] exxxl:h-[4500px] h-[1400px] relative bg-gradient-to-b from-[#3c3c3b] from-10% to-[#4B6DD499] to-90%">
        <div className="absolute bottom-0 block xl:hidden xl:h-full w-full">
          <img src="/podcast.png" alt="background" className="w-full h-full" />
        </div>
        <div className="h-full w-full absolute">
          <Container>
            <div className="w-full h-full px-4 md:pt-12 pt-28 flex flex-col items-center lg:gap-20 gap-20">
              <div className="w-full flex xl:flex-row flex-col xl:justify-between justify-center xl:gap-4 gap-16">
                <div className="flex flex-col xl:justify-start justify-center xl:gap-4 gap-3 xl:w-[320px] w-full">
                  <h1 className="text-2xl uppercase leading-10 font-extrabold text-[#69C1ED] xl:text-start text-center">
                    Dirty DAO
                  </h1>
                  <p className="text-lg font-normal leading-7 text-[#ECECEC] xl:text-start text-center">
                    All the major decisions will be made on the Dirty DAO
                  </p>
                  <h1 className="text-2xl leading-10 font-extrabold text-[#69C1ED] xl:text-start text-center">
                    OTHER WHALE REWARDS
                  </h1>
                </div>
                <div className="flex xl:flex-row flex-col items-center gap-10 xl:w-[780px] w-full">
                  <div className="md:w-[133px] md:mt-0 mt-5 md:h-[152px] w-[110px] h-[117px]">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/dao.svg"
                      alt="01"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-6">
                    <h1 className="md:text-2xl text-xl md:leading-10 font-extrabold text-[#F3AE13] xl:text-start text-center">
                      FREE DIRTY SOCKER NFT FOR OG HOLDERS
                    </h1>
                    <p className="md:text-2xl text-lg md:leading-8 font-normal text-[#ECECEC] xl:text-start text-center">
                      On Mint Day Of The Full Collection, Every OG Holder Will
                      be Rewarded by an Airdropped Dirty Sockers NFT.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center items-center flex-col md:gap-16 gap-24">
                <div className="w-full flex flex-col justify-center items-center gap-4">
                  <h1 className="flex text-center md:text-lg text-base font-normal leading-5 text-white">
                    For detailed information visit
                  </h1>
                  <Button
                    url="https://medium.com/@Dirty_Sockers"
                    size="btn-xxl"
                    variant="btn-primary"
                  >
                    DIRTY WHITEPAPER
                  </Button>
                </div>

                <div className="lg:w-36 lg:h-36 w-28 h-28">
                  <Image
                    height={200}
                    width={200}
                    src="/c-logo.svg"
                    alt="info"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Dao;
