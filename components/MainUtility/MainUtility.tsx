import React from "react";
import Container from "@/components/Container/Container";
const MainUtility = () => {
  return (
    <Container>
      <div className="w-full xl:mt-32 lg:mt-20 mt-16 h-auto flex flex-col gap-12 items-center">
        <div className="w-full xl:p-[32px] lg:px-[14px] md:p-[16px] p-[18px] flex justify-center items-center flex-col md:gap-8 gap-4">
          <div className="w-full ">
            <h1 className="lg:text-6xl uppercase md:text-5xl text-[32px] font-bold text-center md:leading-[58px] leading-[38px] text-white">
              Our Main<span className="text-[#69C1ED]"> Utility</span>
            </h1>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-between md:gap-8 gap-2">
            <h1 className="w-full flex md:justify-end justify-center md:text-right text-center md:text-3xl text-xl font-black md:leading-[50px] leading-6 text-[#69C1ED]">
              DIRTY CASH CLUB (DCC)
            </h1>
            <h1 className="w-full md:text-3xl text-xl md:justify-start justify-center md:text-left text-center font-black md:leading-[50px] leading-6 text-[#F3AE13]">
              OG holder’s BENEFITS
            </h1>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between w-full">
          <div className="w-full flex justify-center h-auto">
            <img
              src="/main-utility2.svg"
              alt="Image for Medium Screen"
              className="block sm:hidden w-full"
            />

            <img
              src="/main-utility1.svg"
              alt="Image for Small Screen"
              className=" md:block hidden sm:hidden w-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainUtility;
