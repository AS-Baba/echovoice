import Image from "next/image";
import React from "react";

export const TwoMic = () => {
  return (
    <>
      <div className="empty-banner w-full h-[100px] md:h-[200px]"></div>
      <div className="flex justify-center items-center w-full relative bottom-[100px] sm:bottom-[45px] md:bottom-[250px]">
        <div className="w-5/6 h-auto rounded-2xl overflow-hidden ">
          <Image
            src={"/images/two-mic.jpg"}
            alt="Mic"
            width={100}
            height={100}
            unoptimized
            className="w-full md:h-[500px] rounded-[40px]"
          />
        </div>
      </div>
    </>
  );
};
