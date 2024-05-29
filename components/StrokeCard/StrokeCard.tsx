import React from "react";

const ScokerCard = ({ data }: any) => {
  
  return (
    <div
      className={`w-full h-full bg-[#3C3C3B] shadow-xl p-6 rounded-md ${
        data.id === 1 ? "group hover:bg-[#869F6D] hover:border" : ""
      }  ${data.id === 2 ? "group hover:bg-[#8E6CCF] hover:border" : ""}
      ${data.id === 3 ? "bg-[#4B6DD4] border" : ""}
      ${data.id === 4 ? "group hover:bg-[#F3AE13] hover:border" : ""}
      `}
    >
      {/* First Grid */}
      <div className="w-full h-full grid md:grid-cols-4 grid-col-1 p-6 gap-4">
        <div className="w-full h-full flex flex-col gap-4 rounded-md">
          <div
            className={`w-full h-full flex bg-[#3C3C3B] ${
              data.id === 1
                ? "group-hover:bg-[#869F6D] group-hover:text-white"
                : ""
            } 
            ${
              data.id === 2
                ? "group-hover:bg-[#8E6CCF] group-hover:text-white"
                : ""
            } 
              
              ${data.id === 3 ? "bg-[#4B6DD4] text-white" : ""} 
              ${
                data.id === 4
                  ? "group-hover:bg-[#F3AE13] group-hover:text-white"
                  : ""
              } 
              flex-col justify-center itmes-center`}
          >
            <div className="xl:h-[266px] xl:w-[266px] md:h-full md:w-full mx-auto h-[230px] w-[230px]">
              <img alt="gallery" src={data.imageUrl} />
            </div>
          </div>

          <div className="w-full">
            <p
              className={`text-center text-base leading-5 font-bold ${
                data.id === 1
                  ? "group-hover:bg-[#869F6D] group-hover:text-white"
                  : "text-white"
              }
              ${
                data.id === 2
                  ? "group-hover:bg-[#8E6CCF] group-hover:text-white"
                  : "text-white"
              }
              ${data.id === 3 ? "bg-[#4B6DD4] text-white" : "text-white"}
              ${
                data.id === 4
                  ? "group-hover:bg-[#F3AE13] group-hover:text-white"
                  : "text-white"
              } 
               `}
            >
              {data.status1}
              <a href="/buy" className="underline">
                {data.status2}
              </a>
              {data.status3}
            </p>
          </div>
        </div>
        <div className="w-full h-full text-[#646462] flex flex-col justify-between gap-4 items-center tracking-wide rounded-md">
          <div
            className={`w-full h-full bg-[#484846] flex justify-center items-center rounded-md ${
              data.id === 1
                ? "group-hover:bg-[#9DB882] group-hover:text-white"
                : "text-[#646462]"
            }
              ${
                data.id === 2
                  ? "group-hover:bg-[#9A79D9] group-hover:text-white"
                  : "text-[#646462]"
              }
              ${data.id === 3 ? "bg-[#6F8CE2] text-white" : "text-[#646462]"}
              ${
                data.id === 4
                  ? "group-hover:bg-[#F2B93A] group-hover:text-white"
                  : "text-[#646462]"
              }

               `}
          >
            <h1 className="lg:text-[56px] text-4xl font-black leading-[113px] text-center tracking-wide">
              {data.projectSize}
            </h1>
          </div>

          <div className="w-full">
            <p
              className={`text-center text-base leading-5 font-bold text-[#646462] ${
                data.id === 1
                  ? "group-hover:bg-[#869F6D] group-hover:text-white"
                  : "text-[#646462]"
              }  ${
                data.id === 2
                  ? "group-hover:bg-[#8E6CCF] group-hover:text-white"
                  : "text-[#646462]"
              } 
              ${data.id === 3 ? "bg-[#4B6DD4] text-white" : "text-[#646462]"}
              ${
                data.id === 4
                  ? "group-hover:bg-[#F3AE13] group-hover:text-white"
                  : "text-[#646462]"
              } 
              `}
            >
              Project Size
            </p>
          </div>
        </div>
        <div className="w-full h-full text-[#646462] flex flex-col justify-between gap-4 items-center tracking-wide rounded-md">
          <div
            className={`w-full h-full bg-[#484846] flex justify-center items-center rounded-md  ${
              data.id === 1
                ? "group-hover:bg-[#9DB882] group-hover:text-white"
                : "text-[#646462]"
            }     ${
              data.id === 2
                ? "group-hover:bg-[#9A79D9] group-hover:text-white"
                : "text-[#646462]"
            }
              ${data.id === 3 ? "bg-[#6F8CE2] text-white" : "text-[#646462]"}
                ${
                  data.id === 4
                    ? "group-hover:bg-[#F2B93A] group-hover:text-white"
                    : "text-[#646462]"
                }
              `}
          >
            <h1 className="lg:text-[56px] text-4xl font-black leading-[113px] text-center tracking-wide">
              {data.mintDate}
            </h1>
          </div>

          <div className="w-full">
            <p
              className={`text-center text-base leading-5 font-bold text-[#646462] ${
                data.id === 1
                  ? "group-hover:bg-[#869F6D] group-hover:text-white"
                  : "text-[#646462]"
              }
              ${
                data.id === 2
                  ? "group-hover:bg-[#8E6CCF] group-hover:text-white"
                  : "text-[#646462]"
              } 
              ${data.id === 3 ? "bg-[#4B6DD4] text-white" : "text-[#646462]"}
              ${
                data.id === 4
                  ? "group-hover:bg-[#F3AE13] group-hover:text-white"
                  : "text-[#646462]"
              } 
              `}
            >
              Mint Date
            </p>
          </div>
        </div>

        <div className="w-full h-full text-[#646462] flex flex-col justify-between gap-4 items-center tracking-wide rounded-md">
          <div
            className={`w-full h-full bg-[#484846] flex justify-center items-center rounded-md ${
              data.id === 1
                ? "group-hover:bg-[#9DB882] group-hover:text-white"
                : "text-[#646462]"
            }
              ${
                data.id === 2
                  ? "group-hover:bg-[#9A79D9] group-hover:text-white"
                  : "text-[#646462]"
              }
              ${data.id === 3 ? "bg-[#6F8CE2] text-white" : "text-[#646462]"}
              ${
                data.id === 4
                  ? "group-hover:bg-[#F2B93A] group-hover:text-white"
                  : "text-[#646462]"
              }
              `}
          >
            <h1 className="lg:text-[56px] text-4xl font-black leading-[113px] text-center tracking-wide">
              {data.publicMintPrice}
            </h1>
          </div>

          <div className="w-full  ">
            <p
              className={`text-center text-base leading-5 font-bold ${
                data.id === 1
                  ? "group-hover:bg-[#869F6D] group-hover:text-white"
                  : "text-[#646462]"
              }  ${
                data.id === 2
                  ? "group-hover:bg-[#8E6CCF] group-hover:text-white"
                  : "text-[#646462]"
              } 
              ${data.id === 3 ? "bg-[#4B6DD4] text-white" : "text-[#646462]"}
              ${
                data.id === 4
                  ? "group-hover:bg-[#F3AE13] group-hover:text-white"
                  : "text-[#646462]"
              } 
              `}
            >
              Public Mint Price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScokerCard;
