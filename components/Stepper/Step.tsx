// components/Step.tsx
"use client";
import React from "react";
import RoadMapRightCard from "../RoadMapCards/RoadMapCard";
import RoadMapImageCard from "../RoadMapImage/RoadMapImageCard";
import Image from "next/image";

type StepProps = {
  state: "completed" | "inProgress" | "notStarted";
  text: string;
  imgSrc: string;
  index: any;
  onClick: () => void;
  data: any;
};

const Step: React.FC<StepProps> = ({ state, text, data, onClick }) => {
  return (
    <>
      <div
        className={`lg:flex hidden xl:h-[550px] h-[500px] items-center cursor-pointer ${
          data.text === "Step1" ||
          data.text === "Step2" ||
          data.text === "Step3" ||
          data.text === "Step4"
            ? "py-0"
            : "py-[1px]"
        }`}
        onClick={onClick}
      >
        {/* Left Content */}
        {data.swapImageWithText ? (
          <div className="flex h-auto w-1/2 justify-end items-center">
            <RoadMapRightCard data={data} />
            <div className={`border bg-red-50 w-[10%] border-solid`}></div>
          </div>
        ) : (
          <div className="flex h-auto w-1/2 justify-end items-center">
            <RoadMapImageCard data={data} />
            <div
              className={`border invisible bg-red-50 w-[10%] border-solid`}
            ></div>
          </div>
        )}

        {/* Center Progress Indicator */}
        <div className="flex h-full mx-5 relative flex-col items-center">
          <div
            className={`h-[50%] absolute mx-2 ${
              state === "completed" || state === "inProgress"
                ? `border-solid`
                : `border-dotted`
            } ${text === "Step1" ? "invisible" : "visible"} border-l-2`}
          ></div>

          <div
            className={`z-10 ${
              data.text === "Step1" ||
              data.text === "Step2" ||
              data.text === "Step3" ||
              data.text === "Step4" ||
              data.text === "Step5"
                ? "w-[75px] absolute xl:top-[43%] top-[42%]  h-[75px]"
                : "w-[52px] absolute xl:top-[45%] top-[42%]  h-[52px]"
            } rounded-full flex items-center justify-center ${
              state === "completed"
                ? ""
                : state === "inProgress"
                ? `${data.bgColor} border-4 border-white`
                : `${data.bgColor} border-4 border-white`
            }`}
          >
            {state === "completed" && (
              <span className="text-white h-[73px] w-[73px]">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/success.svg"
                  alt="success"
                  className="w-full h-full"
                />
              </span>
            )}
            {state === "inProgress" && (
              <span className="text-white h-[73px] w-[73px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="73"
                  height="73"
                  viewBox="0 0 73 73"
                  fill="none"
                >
                  <path
                    d="M36.4999 51.184L24.5099 30.4167L48.4899 30.4167L36.4999 51.184Z"
                    fill="#ECECEC"
                  />
                </svg>
              </span>
            )}
          </div>

          <div
            className={`h-[50%] absolute bottom-0 mx-2 ${
              state === "inProgress" || state === "notStarted"
                ? `border-dotted`
                : `border-solid`
            } border-l-2`}
          ></div>

          <div
            className={`w-3 h-3 absolute bottom-0 rounded-full bg-white ${
              data.text === "Step15" ? "" : "hidden"
            }`}
          ></div>
        </div>

        {/* Right Content */}
        {!data.swapImageWithText ? (
          <div className="flex h-full py-5 w-1/2 items-center">
            <div className="border w-[10%] border-solid"></div>
            <RoadMapRightCard data={data} />

            {/* <img src={imgSrc} alt="Step" className="w-24 h-24 ml-4" /> */}
          </div>
        ) : (
          <div className="flex h-auto w-1/2 justify-end items-center">
            <div
              className={`border invisible bg-red-50 w-[10%] border-solid`}
            ></div>
            <RoadMapImageCard data={data} />
          </div>
        )}
      </div>

      <div
        className="flex flex-col lg:hidden md:h-[1000px] xxsm:h-[950px] h-[1000px] justify-center items-center cursor-pointer"
        onClick={onClick}
      >
        <div className="flex h-auto w-full md:w-1/2 justify-end items-center">
          <RoadMapImageCard data={data} />
        </div>
        <div className="flex h-auto w-full xxsm:mt-8 mt-6 md:w-1/2 justify-end items-center">
          <RoadMapRightCard data={data} />
        </div>

        {/* Center Progress Indicator */}
        <div className="flex h-full relative flex-col items-center">
          <div
            className={`z-10 ${
              data.text === "Step1" ||
              data.text === "Step2" ||
              data.text === "Step3" ||
              data.text === "Step4" ||
              data.text === "Step5"
                ? "md:w-[73px] absolute md:-top-5 -mt-7 w-[50px] h-[50px]  md:h-[73px]"
                : "md:w-[73px] absolute md:-top-5 -mt-5 w-[34px] h-[34px]  md:h-[73px]"
            }  rounded-full flex items-center justify-center ${
              state === "completed"
                ? ""
                : state === "inProgress"
                ? `${data.bgColor} border-4 border-white`
                : `${data.bgColor} border-4 border-white`
            }`}
          >
            {state === "completed" && (
              <span className="text-white md:h-[73px] md:w-[73px] w-[50px] h-[50px]">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/success.svg"
                  alt="success"
                  className="w-full h-full"
                />
              </span>
            )}
            {state === "inProgress" && (
              <span className="text-white md:h-[73px] md:w-[73px] w-[34px] h-[34px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="73"
                  height="73"
                  viewBox="0 0 73 73"
                  fill="none"
                  className="md:block hidden"
                >
                  <path
                    d="M36.4999 51.184L24.5099 30.4167L48.4899 30.4167L36.4999 51.184Z"
                    fill="#ECECEC"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 73 73"
                  fill="none"
                  className="md:hidden block"
                >
                  <path
                    d="M36.4999 51.184L24.5099 30.4167L48.4899 30.4167L36.4999 51.184Z"
                    fill="#ECECEC"
                  />
                </svg>
              </span>
            )}
          </div>
          <div
            className={`h-full mx-2 ${
              state === "inProgress" || state === "notStarted"
                ? `border-dotted`
                : `border-solid`
            } border-l-2`}
          ></div>
          <div
            className={`w-4 h-4 absolute bottom-0 rounded-full bg-white ${
              data.text === "Step15" ? "" : "hidden"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Step;
