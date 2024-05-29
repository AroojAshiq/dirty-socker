import React from "react";
import { Collapse } from "react-collapse";

export default function AppAccordion({ open, toggle, heading, text }: any) {
  return (
    <div className="">
      <hr className="w-full h-[1px] border-0 bg-[#69C1ED]"></hr>
      <div
        className="cursor-pointer w-full flex justify-between items-center lg:py-8 md:py-2 py-4"
        onClick={toggle}
      >
        <h1 className="xl:text-[28px] w-[90%] md:w-full lg:text-2xl md:text-xl text-base md:leading-[53px] leading-5 font-bold text-white">
          {heading}
        </h1>
        <div
          className={`${
            open && "rotate-180"
          } transition-transform relative duration-1000 h-6 w-6`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="w-6 h-6 absolute stroke-[#69C1ED]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="p-3">
          <div className="md:text-lg text-base font-normal leading-6 text-white">
            {text}
          </div>
        </div>
      </Collapse>
    </div>
  );
}
