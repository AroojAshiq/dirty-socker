import React from "react";
import Container from "@/components/Container/Container";
import Link from "next/link";

const Footer = () => {
  // get base url

  const terms_url = "/terms";
  return (
    <Container>
      <div className="text-white py-8">
        <div className="container flex flex-col xl:gap-0 gap-10 xl:flex-row items-start justify-between">
          {/* First Div */}
          <h1 className="md:text-5xl uppercase text-3xl mt-5 md:mt-0 font-bold text-center leading-[58px] text-[#3C3C3B]"></h1>
          <div className="order-3 xl:order-1 font-medium w-full flex xl:flex-row flex-col xl:justify-start justify-center items-center gap-4 mb-4 md:mb-0">
            <p>Pilot project of</p>
            <Link href="https://www.w3-consulting.com/">
              <img alt="w3" src="/W3-consulting.svg" />
            </Link>
          </div>

          {/* Second Div */}
          <div className="order-2 flex flex-col justify-center gap-4 items-center w-full">
            <div className="flex justify-center mt-1 items-center w-full gap-3 flex-col xl:flex-row text-white">
              <div className="flex gap-2 justify-center items-center ">
                <p className="text-base font-medium leading-5 whitespace-nowrap">
                  Copyright © 2023
                </p>
                <p className="text-base font-bold leading-5 whitespace-nowrap">
                  dirtysockers.xyz
                </p>
              </div>
              <p className="text-base font-medium leading-5 whitespace-nowrap">
                All Rights Reserved
              </p>
            </div>

            <Link href="/page/terms" className="hover:underline">
              <p className="text-[#69C1ED] text-base font-medium leading-5 whitespace-nowrap">
                Legal Policy - Terms & Conditions
              </p>
            </Link>
          </div>

          <div className="flex w-full xl:order-3 order-1 mt-1 justify-center items-center space-x-4 mb-4 md:mb-0">
            <a href="https://twitter.com/dirty_sockers">
              <img
                alt="w3"
                src="/icon.svg"
                className="hover:opacity-70 hover:shadow-white/40 cursor-pointer"
              />
            </a>
            <a href="https://www.instagram.com/dirtysockers/">
              <img
                alt="w3"
                src="/Instagram.svg"
                className="hover:opacity-70 hover:shadow-white/40 cursor-pointer"
              />
            </a>
            <a href="https://t.me/dirtysockersempire">
              <img
                alt="w3"
                src="/Telegram.svg"
                className="hover:opacity-70 hover:shadow-white/40 cursor-pointer"
              />
            </a>
            <a href="https://medium.com/@Dirty_Sockers">
              <img
                alt="w3"
                src="/Medium.svg"
                className="hover:opacity-70 hover:shadow-white/40 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
