import React from "react";

const TeamCard = ({ imageUrl, member, smImage, post, url }: any) => {
  return (
    <div className="p-4 bg-[#EBEBEB] rounded-md">
      <img src={imageUrl} alt="Image" className="w-full h-auto mb-2" />
      <div className="flex justify-between items-center md:mb-2">
        <h1 className="md:text-lg text-xs font-bold leading-5 text-[#3C3C3B]">
          {member}
        </h1>
        <a href={url}>
          <img
            src={smImage}
            alt="Icon"
            className="w-6 h-6 mr-2 cursor-pointer hover:opacity-70 hover:shadow-white/40"
          />
        </a>
      </div>
      <p className="font-normal md:text-sm text-[9px] leading-4 text-[#878786]">
        {post}
      </p>
    </div>
  );
};

export default TeamCard;
