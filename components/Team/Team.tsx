import React from "react";
import Image from "next/image";
import Container from "@/components/Container/Container";
import TeamCard from "./TeamCard";
const Team = () => {
  const data = [
    {
      id: 1,
      imageUrl: "/team-01.svg",
      member: "evolsven",
      post: "Project Manager",
      smImage: "/X-img.svg",
      url: "https://twitter.com/evolsven",
    },

    {
      id: 2,
      imageUrl: "/team-02.svg",
      member: "dark",
      post: "Design Manager",
      smImage: "/X-img.svg",
      url: "https://twitter.com/DirtyDarkSocker",
    },

    {
      id: 3,
      imageUrl: "/team-03.svg",
      member: "tallsome",
      post: "Dev Manager",
      smImage: "/X-img.svg",
      url: "https://twitter.com/TallsomeG",
    },
    {
      id: 4,
      imageUrl: "/team-04.svg",
      member: "kawasaki",
      post: "Creative Director",
      smImage: "/X-img.svg",
      url: "https://twitter.com/TallsomeG",
    },
    {
      id: 5,
      imageUrl: "/team-05.svg",
      member: "nordic sock",
      post: "Marketing Designer",
      smImage: "/X-img.svg",
      url: "https://twitter.com/NordicSock",
    },
    {
      id: 6,
      imageUrl: "/team-06.svg",
      member: "sunny sock",
      post: "Twitter Wizard",
      smImage: "/X-img.svg",
      url: "https://twitter.com/SunnySocker",
    },
    {
      id: 7,
      imageUrl: "/team-07.svg",
      member: "k-fit",
      post: "Twitter Wizard",
      smImage: "/X-img.svg",
      url: "https://twitter.com/K_Fit_",
    },
    {
      id: 8,
      imageUrl: "/team-08.svg",
      member: "shaaker",
      post: "Collabs Manager",
      smImage: "/X-img.svg",
      url: "https://twitter.com/ShaakerNFT",
    },
  ];
  return (
    <div className="w-full teambg xl:h-[1560px] border-b border-[#3C3C3B] lg:h-[1230px] md:h-[1100px] xsm:h-[1700px] h-[1540px] pt-16 relative bg-[#D9D9D9]">
      <div className="xl:w-[296px] xl:h-60 md:w-[274px] md:h-44 w-[88px] h-[82px] absolute top-0">
        <Image
          height={0}
          width={0}
          sizes="100vw"
          src="/team-bg1.svg"
          alt="team1"
          className="h-full w-full"
        />
      </div>

      <div className="absolute xl:w-[248px] xl:h-[242px] md:w-32 md:h-32 w-[74px] h-[78px] xl:-top-24 md:-top-20 -top-12 right-0">
        <Image
          height={0}
          width={0}
          sizes="100vw"
          src="/team-bg2.svg"
          alt="team2"
          className="w-full h-full"
        />
      </div>

      <div className="absolute md:hidden block h-96 w-full -bottom-28 xsm:-bottom-20 -z-1">
        <Image
          height={16}
          width={16}
          src="/blackbg2.svg"
          alt="info"
          className="w-full"
        />
      </div>

      <div className="h-full flex w-full">
        <Container>
          <div className="h-full flex flex-col justify-between items-center">
            <div className="w-full h-full flex flex-col gap-4 items-center justify-between">
              <div className="xsm:mt-10 mt-5">
                <div className="w-full flex justify-center items-center flex-col md:gap-1 gap-2">
                  <h1 className="uppercase z-10 xl:pt-10 lg:py-10 md:py-8 text-center font-bold md:leading-[83px] md:text-[60px] text-[32px] md:tracking-[-1.2]">
                    The Bad Ass Team
                  </h1>
                </div>
                <div className="flex flex-col md:mt-0 mt-5 w-full gap-16">
                  <div className="grid z-10 md:grid-cols-4 md:grid-rows-2 grid-rows-4 grid-cols-2 gap-4">
                    {data.map((item) => (
                      <TeamCard
                        key={item.id}
                        imageUrl={item.imageUrl}
                        member={item.member}
                        smImage={item.smImage}
                        post={item.post}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-[248px] md:z-0 z-10 xl:h-72 lg:w-52 lg:h-[248px] w-[169px] h-[169px]">
              <Image
                height={0}
                width={0}
                sizes="100vw"
                alt="gallery"
                className="w-full h-full"
                src="/socker-footer.svg"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Team;
