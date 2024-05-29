import React from "react";
import Image from "next/image";

export default function RoadMapImageCard({ data }: any) {
  return (
    <div
      className={`px-16 lg:w-[90%] w-full xl:h-[500px] ${
        data.text === "Step1" ||
        data.text === "Step2" ||
        data.text === "Step3" ||
        data.text === "Step4"
          ? "border-[#646462]"
          : `${data.border}`
      } lg:h-[450px] h-[320px] relative rounded-3xl border xl:pt-[72px] py-[30px] box-border`}
    >
      <div className="w-full lg:h-[180px] h-[150px] xl:h-[200px]">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={data?.imgSrc}
          alt="01"
          className="w-full h-full"
        />
      </div>
      <div className="">
        <h1
          className={`md:text-[72px] text-4xl lg:mt-8 mt-3 ${data.textColor} text-center font-black uppercase tracking-[-1.44px]`}
        >
          {data.title}
        </h1>
        <h1
          className={`xl:text-[32px] lg:mt-10 mt-5 text-xl ${data.textColor} whitespace-nowrap text-center font-bold uppercase tracking-[-0.8px]`}
        >
          {data.heading}
        </h1>
      </div>
      <div
        className={`xl:h-[108px] lg:h-[120px] h-14 flex justify-center items-end ${
          data.text === "Step1" ||
          data.text === "Step2" ||
          data.text === "Step3" ||
          data.text === "Step4"
            ? ""
            : "hidden"
        }`}
      >
        <button className="md:w-[217px] w-[160px] h-10 md:h-11 rounded-3xl bg-[#5ABC11] text-white font-bold md:text-xl text-base tracking-tighter">
          Delivered
        </button>
      </div>
    </div>
  );
}
