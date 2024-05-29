"use client";
import React from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import Image from "next/image";
interface HeroProps {
  className?: string;
  onClick?: any;
  variant?: string;
  disabled?: boolean;
}

const HeroSection: React.FC<HeroProps> = () => {
  return (
    <>
      <div className="hero-img relative xl:h-[810px] lg:h-[570px] md:h-[500px] xxl:h-[950px] exl:h-[1400px] exxl:h-[1800px] exxxl:h-[2500px] h-[384px]">
        <div className="absolute h-full w-full">
          <Container>
            <div className="relative lg:block hidden h-full">
              <div className="h-auto lg:mt-20 xl:mt-24 mt-[70px] pt-1">
                <div className="">
                  <h1 className="font-black xl:text-[100px] text-[40px] xl:leading-[110px] leading-[50px] uppercase xl:tracking-[-4px] tracking-[-1.4px] text-white">
                    Dirty
                  </h1>
                  <h1 className="font-black xl:text-[100px] text-[40px] xl:leading-[110px] leading-[50px] uppercase xl:tracking-[-4px] tracking-[-1.6px] text-white">
                    Badass
                  </h1>
                  <h1 className="font-black xl:text-[40px] text-[30px] xl:tracking-[-0.6px] text-[#578FDE] uppercase">
                    Rebel Sockers
                  </h1>
                  <div className="flex flex-col space-y-2 mt-5">
                    <Button
                      url="https://crypto.com/nft/collection/395e65e62bde89fe6d51b9445c88b809?tab=items"
                      disabled={false}
                      variant="btn-primary"
                      size="btn-xl"
                    >
                      Mint Lucky Edition
                    </Button>
                    <Button
                      url="https://crypto.com/nft/collection/ab513833b988818f4a00c5844a904014?tab=items"
                      disabled={false}
                      variant="btn-transparent"
                      size="btn-xl"
                    >
                      Buy OG Edition
                    </Button>
                    <Button
                      url="https://crypto.com/nft/collection/395e65e62bde89fe6d51b9445c88b809?tab=items"
                      disabled={false}
                      variant="btn-transparent"
                      size="btn-xl"
                    >
                      Buy Early Edition
                    </Button>
                  </div>
                </div>
                <div className="xl:mt-28 xxl:mt-60 lg:mt-8 mt-10">
                  <p className="text-base font-medium leading-6 text-white">
                    We are exclusively minting on
                  </p>
                  <Image
                    height={20}
                    width={200}
                    src="/crypto.svg"
                    alt="crypto.com"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <div className="h-[218px] lg:block hidden relative w-full">
          <div className="absolute w-[410px] h-[420px] -bottom-14 -left-20 flex">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/Tapped.svg"
              alt="01"
              className="w-full h-full"
            />
          </div>
          <div className="absolute w-[212px] h-[229px] xl:left-[60%] -top-3 left-[50%] flex">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/red-drawing.svg"
              alt="01"
              className="w-full h-full"
            />
          </div>
          <div className="absolute right-0  top-11 flex">
            <Image
              height={43}
              width={153}
              src="/diamondShape.svg"
              alt="tapped"
            />
          </div>
        </div>
      </Container>
      <div className="px-2">
        <div className="relative lg:hidden md:h-full">
          <Image
            height={65}
            width={71}
            src="/red-drawing.svg"
            alt="tapped"
            className="absolute right-0"
          />
        </div>
      </div>
      <div className="lg:hidden mt-5">
        <Container>
          <div className="h-auto py-5 flex flex-col gap-y-1 justify-center items-center">
            <h1 className="text-[40px] z-10 tracking-[-1.6px] text-center font-black uppercase text-white">
              dirty Badass
            </h1>
            <h1 className="text-[30px] leading-3 text-center font-bold tracking-[-0.6px] text-[#578FDE] uppercase">
              Rebel Sockers
            </h1>
            <div className="mt-9">
              <Image
                height={140}
                width={140}
                src="/discord.svg"
                alt="tapped"
                className="rounded-full"
              />
            </div>
            <div className="flex">
              <Image height={201} width={197} src="/Tapped.svg" alt="tapped" />
            </div>
            <div className="">
              <Image
                height={22}
                width={79}
                src="/diamondShape.svg"
                alt="tapped"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default HeroSection;
