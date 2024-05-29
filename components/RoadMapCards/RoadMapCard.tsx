import React from "react";

export default function RoadMapRightCard({ data }: any) {
  return (
    <div className="xl:px-16 px-8 lg:w-[90%] w-full flex flex-col justify-center items-center rounded-3xl border border-white md:py-[50px] py-14 xl:h-[500px] lg:h-[450px] xxsm:h-[450px] h-[500px] md:h-[500px] box-border space-y-2">
      <p className="xl:text-xl md:text-left text-center text-base text-white w-full font-bold">
        {data?.textHeading}
      </p>
      <p className="text-white xl:text-xl md:text-left text-center text-base">
        {data.para1}
      </p>
      {data.text === "Step1" ? (
        <p className="text-white md:text-left text-center lg:text-xl">
          <span className="lg:text-xl text-left text-base text-white font-bold">
            {data.result}
          </span>
          {data.para2}
        </p>
      ) : null}
      {data.para2 && data.text !== "Step1" ? (
        <p className="text-white md:text-left text-center text-base mt-1 font-normal">
          {data.para2}
        </p>
      ) : null}
    </div>
  );
}
