import React from "react";

const FaqDropdown = ({ data, id, setId }: any) => {
  return (
    <div className="w-full mt-5 h-auto">
      {/* <div onClick={() => setId(data.id)} className="w-full ">
        <div className="relative w-full h-auto overflow-hidden">
          <input
            type="checkbox"
            className="peer absolute top-0 insert-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className="h-12 w-full flex items-center justify-between">
            <h1 className="xl:text-[28px] xsm:w-3/4 w-full whitespace-nowrap lg:text-2xl md:text-xl text-base md:leading-[53px] leading-5 font-bold text-white">
              {data.heading}
            </h1>
          </div>
          <div
            className={`absolute top-3 mr-5 right-3 text-[#64748B] peer-checked:text-white  ${
              data.id === id
                ? "peer-checked:rotate-180 transition-transform duration-500"
                : "rotate-0 transition-transform duration-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-6 h-6 stroke-[#69C1ED]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div
            className={`bg-transparent overflow-hidden max-h-0  md:mt-6 ${
              data.id === id
                ? "peer-checked:max-h-64 transition-all duration-900"
                : "transition-all duration-900"
            }`}
          >
            <div className="md:text-lg text-base font-normal leading-6 text-white">
              {data.text}
            </div>
          </div>
        </div>
      </div> */}
      
    </div>
  );
};

export default FaqDropdown;
