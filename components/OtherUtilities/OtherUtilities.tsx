"use client";
import React from "react";
import Image from "next/image";
import Dao from "../DirtyDAO/Dao";
import Container from "../Container/Container";

export default function OtherUtilities() {
  return (
    <>
      <div className="lg:my-20 mt-14">
        <h1 className="uppercase xl:py-14 lg:py-10 md:py-8 text-[#69C1ED] text-center font-black leading-[83px] md:text-[60px] text-[32px] md:tracking-[-1.2]">
          <span className="text-white mdLfont-semibold font-bold">Other </span>
          Utilities
        </h1>
        <h2 className="uppercase text-[#69C1ED] text-center font-black leading-6 md:text-[30px] text-lg md:tracking-[-1.2]">
          dirty staking
        </h2>
        <h2 className="text-white text-center font-bold leading-6 md:py-4 py-1 md:text-[20px] text-lg md:tracking-tighter">
          Base index 100*
        </h2>
        <div className="w-full md:block hidden h-[233px] xl:mt-14">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/uitilitydays.svg"
            alt="01"
            className="w-full h-full"
          />
        </div>
        <div className="md:hidden block xl:mt-10 mt-16">
          <Container>
            <Image
              width={500}
              height={233}
              src="/utilitydays2.svg"
              alt="01"
              className="w-full h-full"
            />
          </Container>
        </div>
      </div>
      <Dao />
    </>
  );
}
