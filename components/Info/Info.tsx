import React, { useState } from "react";
// import gt from "../../public/wer.png";
import Container from "@/components/Container/Container";
import Image from "next/image";

function Info() {
  return (
    <>
      <div className="w-full lg:h-[1550px] xxxl:h-[1700px] xxl:h-[1600px] exxl:h-[3000px] exxxl:h-[3600px] h-[1400px] relative info">
        <div className="absolute h-full lg:hidden bottom-0 w-full ">
          <Image
            height={0}
            width={0}
            sizes="100vw"
            layout="responsive"
            src="/Frame 1473.svg"
            alt="info"
            className="
             w-full md:mb-8 mb-12 absolute bottom-0"
          />
        </div>
        <Container>
          <div className="relative w-full lg:h-[1550px] xxl:h-[1600px] exxl:h-[3000px] exxxl:h-[3600px] xxxl:h-[1700px] h-[1400px] px-[16px]  flex flex-col items-center  ">
            <div className="absolute w-full h-full right-0 ">
              <div className="flex w-full justify-between">
                <div className="lg:w-[380px] w-full lg:block hidden"></div>
                <div className="lg:w-[780px] w-full md:py-[16px] py-[18px] flex justify-center items-center flex-col md:gap-1 gap-2 ">
                  <h1 className="w-full uppercase text-[#69C1ED] font-medium md:text-[48px] text-[32px] lg:text-left text-center">
                    Ever wonder
                  </h1>

                  <h1 className="text-white w-full font-bold md:text-[48px] text-[32px] lg:text-left text-center">
                    Where they come from?
                  </h1>
                </div>
              </div>

              <div className="w-full flex lg:flex-row flex-col justify-between lg:gap-4 gap-0">
                <div className="lg:w-[380px] w-full md:leading-9 leading-6 md:text-2xl text-base font-normal text-[#69C1ED] p-2 lg:text-start text-center">
                  <p>
                    Imagine being part of a community where being yourself is
                    celebrated, where you can break free from the mundane and
                    live life on your own terms. That&apos;s what being a Socker
                    is all about
                  </p>
                </div>
                <div className="lg:w-[780px] w-full md:leading-7 leading-6 md:text-xl text-base font-normal text-white p-2 lg:text-start text-center">
                  <p>
                    You may have felt it growing up - that voice in your head
                    urging you to go against the grain and do things
                    differently. And now that you&apos;re an adult, you have the
                    power to make your own choices and live your best life. No
                    more living by someone else&apos;s rules.<br></br> At
                    Sockers, we embrace this spirit of independence and
                    individuality. We don&apos;t care about fitting in or
                    following social norms. Instead, we chart our own paths and
                    blaze our own trails.<br></br> And It&apos;s not just about
                    art or NFTs. Being a Socker is a way of life - a feeling
                    that transcends any one specific thing. We come together on
                    the blockchain as Dirty Sockers to celebrate our shared
                    ethos and support one another as we pursue our dreams.
                    <br></br> We&apos;re building a vibrant, dynamic community
                    of Dirty Sockers - one That&apos;s flat and democratised,
                    where everyone has a voice and every idea is welcome.
                    Together, we&apos;re exploring new horizons, learning from
                    one another, and making money while we do it.<br></br> So if
                    you&apos;re ready to embrace your inner Socker and join a
                    community of like-minded individuals, we invite you to come
                    be a part of the Dirty Socker way. The world is your oyster,
                    and as a Socker, anything is possible.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full absolute xl:-bottom-[260px] lg:-bottom-[190px] md:-bottom-[120px] -bottom-[16px] right-0">
              <img alt="gallery" className="w-full block" src="/Wibsite.svg" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Info;
