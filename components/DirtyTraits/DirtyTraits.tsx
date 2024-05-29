import React from "react";
import Container from "../Container/Container";
import Image from "next/image";

export default function DirtyTraits() {
  const data = [
    {
      id: 1,
      name: "Eyes",
      url: "/eyes.svg",
    },
    {
      id: 2,
      name: "Head Gear",
      url: "/headGear.svg",
    },
    {
      id: 3,
      name: "Mouth Gear",
      url: "/mouth.svg",
    },
    {
      id: 4,
      name: "Base Sock",
      url: "/base.svg",
    },
    {
      id: 5,
      name: "Dragon Fins",
      url: "/dragon.svg",
    },
    {
      id: 6,
      name: "Arm Bands",
      url: "/arm.svg",
    },
    {
      id: 7,
      name: "Arms",
      url: "/arms.svg",
    },
    {
      id: 8,
      name: "Backgrounds",
      url: "/background.svg",
    },
  ];
  return (
    <Container>
      <div className="flex flex-col justify-center items-center xl:mt-40 lg:mt-32 md:mt-20 mt-10">
        <h1 className="uppercase text-[#69C1ED] md:pb-2 font-bold leading-[83px] md:text-[60px] text-[32px] tracking-[-1.2]">
          Dirty traits
        </h1>
        <div className="h-auto md:mt-7 mt-2 grid lg:grid-cols-4 grid-cols-2 xl:gap-16 lg:gap-10 gap-5 w-full md:w-[60%] lg:w-full">
          {data?.map((obj, i) => (
            <div
              key={obj.id}
              className="h-auto flex flex-col justify-center items-center space-y-2"
            >
              <div
                className={`xl:h-[287px] md:h-[200px] h-[170px] group rounded-3xl border border-white flex justify-center items-center w-full md:w-[200px] xl:w-[274px] ${
                  obj.id === 8 ? "gradient" : ""
                }`}
              >
                <div
                  className={`h-full w-full overflow-hidden flex justify-center ${
                    obj.id === 7 || obj.id === 8
                      ? "items-end px-10 pt-14"
                      : "items-center p-10"
                  }`}
                >
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={obj.url}
                    alt={obj.name}
                    className="group-hover:transition-transform group-hover:transform group-hover:scale-110 w-full h-full"
                  />
                </div>
              </div>
              <p className="md:text-xl text-base text-center md:tracking-[-0.4px] tracking-[-0.32px] font-normal text-white">
                {obj.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
