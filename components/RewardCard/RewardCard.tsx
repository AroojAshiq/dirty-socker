import React from "react";
import Container from "../Container/Container";

export default function RewardCard({ data }: any) {
  return (
    <>
      <div className="w-full hidden lg:flex flex-col space-y-5 justify-center items-center h-auto">
        <div className="relative flex flex-col justify-center items-center w-full h-[63px]">
          <hr
            className={`h-[3px] absolute top-8 w-full border-2 ${
              data.id === 1 || data.id === 8 ? "border-dotted" : ""
            }`}
          />
          <div
            className={`h-[63px] absolute w-[63px] ${
              data.id === 1 || data.id === 8 ? "invisible" : `${data.bgColor}`
            } border-4 border-white rounded-full `}
          ></div>
        </div>
        <button
          className={`xl:w-[162px] w-[90%] h-[57px] text-2xl font-bold tracking-tighter rounded-lg border border-[#DCC6ED] ${
            data.id === 1 || data.id === 8 ? "invisible" : `${data.textColor}`
          } ${
            data.id == 7 || data.id === 3 || data.id == 5
              ? `${data.bgColor}`
              : ""
          }`}
        >
          {data.days}
        </button>
        <div
          className={`w-full relative flex flex-col items-center h-[66px]  ${
            data.id === 1 || data.id === 8 ? "invisible" : ""
          }`}
        >
          <button
            className={`xl:w-[177px] w-[95%] absolute ${
              data.id == 7 || data.id === 3 || data.id == 5
                ? `visible ${data.bgColor}`
                : "invisible"
            } py-1  z-10 xl:text-base text-sm font-bold tracking-[-0.32px] text-[#ECECEC] rounded-3xl`}
          >
            {data.points}
          </button>
          <button className="xl:w-[162px] w-[90%] absolute h-[57px] bg-[#484846] top-4 xl:text-base text-sm font-medium tracking-[-0.32px] text-[#ECECEC] rounded-lg">
            {data.rewardText}
          </button>
        </div>
      </div>

      <div className="lg:hidden">
        <Container>
          <div
            className={`w-full flex justify-center items-center h-36 ${
              data.id === 1 || data.id === 8 ? "hidden" : ""
            }`}
          >
            <div
              className={`w-full flex flex-col justify-center items-center ${
                data.id === 2 || data.id === 4 || data.id === 6
                  ? ""
                  : "invisible"
              }`}
            >
              <button
                className={`w-[135px] py-6 text-2xl font-bold tracking-tighter rounded-lg border border-[#DCC6ED] ${
                  data.id === 1 || data.id === 8
                    ? "invisible"
                    : `${data.textColor}`
                } ${
                  data.id == 7 || data.id === 3 || data.id == 5
                    ? `${data.bgColor}`
                    : ""
                }`}
              >
                {data.days}
              </button>
              <div
                className={`w-full relative flex flex-col items-center h-[66px]  ${
                  data.id === 1 || data.id === 8 ? "invisible" : ""
                }`}
              >
                <button className="w-[135px] absolute h-[57px] bg-[#484846] top-4 text-base font-medium tracking-[-0.32px] text-[#ECECEC] rounded-lg">
                  {data.rewardText}
                </button>
              </div>
            </div>

            <div className="relative h-full flex justify-center items-start w-full">
              <hr
                className={`w-[3px] absolute h-36 border-2 ${
                  data.id === 7 ? "hidden" : ""
                }`}
              />
              <div
                className={`md:h-[63px] h-12 w-12 absolute md:w-[63px]             
                     ${data.bgColor}
                border-4 border-white rounded-full `}
              ></div>
            </div>

            <div
              className={`w-full flex flex-col justify-center items-center ${
                data.id === 3 || data.id === 5 || data.id === 7
                  ? ""
                  : "invisible"
              }`}
            >
              <button
                className={`w-[135px] py-6 text-2xl font-bold tracking-tighter rounded-lg border border-[#DCC6ED] ${
                  data.id === 1 || data.id === 8
                    ? "invisible"
                    : `${data.textColor}`
                } ${
                  data.id == 7 || data.id === 3 || data.id == 5
                    ? `${data.bgColor}`
                    : ""
                }`}
              >
                {data.days}
              </button>
              <div
                className={`w-full mt-2 relative flex flex-col items-center h-[66px]  ${
                  data.id === 1 || data.id === 8 ? "invisible" : ""
                }`}
              >
                <button
                  className={`w-[141px] absolute ${
                    data.id == 7 || data.id === 3 || data.id == 5
                      ? `visible ${data.bgColor}`
                      : "invisible"
                  } py-1 z-10 text-base font-bold tracking-[-0.32px] text-[#ECECEC] rounded-3xl`}
                >
                  +5 Index points
                </button>
                <button className="w-[135px] absolute h-[57px] bg-[#484846] top-4 text-base font-medium tracking-[-0.32px] text-[#ECECEC] rounded-lg">
                  {data.rewardText}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
