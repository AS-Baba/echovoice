import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="hero flex justify-center items-start w-full h-screen p-[100px]">
        <div className="flex flex-col items-center w-full text-[100px] text-[#fff] font-[700] uppercase">
          <div className="flex items-center gap-2 w-ful">
            <h1 className="">Listen </h1>
            <div className="flex justify-center items-basesline h-[70px] ">
              <Image
                src={"/icons/mic1.png"}
                alt="..."
                width={220}
                height={10}
                className="h-[70px]"
              />
            </div>
            <h1>new</h1>
            <div className="flex justify-center items-basesline h-[70px] ">
              <Image
                src={"/icons/mic2.png"}
                alt="..."
                width={150}
                height={100}
                className="h-[70px]"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 w-ful">
              <h1> podcast</h1>
                <div className="flex justify-center items-basesline h-[70px] ">
                  <Image
                    src={"/icons/mic3.png"}
                    alt="..."
                    width={150}
                    height={100}
                    className="h-[70px]"
                  />
                </div>
                <h1> order</h1>
          </div>
        </div>
      </div>
    </>
  );
};
