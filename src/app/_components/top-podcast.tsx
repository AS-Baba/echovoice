'use client'

import Image from "next/image";
import React, { useState } from "react";

export const TopPodcast = () => {
     const topPodcastData = [
    {
      title: "Heavy weight",
      host: "Society & Culture",
      image: "/images/news1.jpg",
    },
    {
      title: "Women build relationship",
      host: "Society & Culture",
      image: "/images/woman.png",
    },
    {
      title: "Where should we begin",
      host: "Society & Culture",
      image: "/images/news3.jpg",
    },
    {
      title: "Hustle",
      host: "Society & Culture",
      image: "/images/news5.jpg",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Computer and Society",
      host: "Sceince & Technology",
      image: "/images/news7.jpg",
    },
    {
      title: "Who loses in the transaction",
      host: "Relationships",
      image: "/images/news8.jpg",
    },
    {
      title: "Tough and Fair",
      host: "Life",
      image: "/images/news9.jpg",
    },
    
  ];
  const [topPodcast] = useState(topPodcastData);


  return (
    <div className="flex flex-col gap-8 w-full h-auto bg-[#1f1e25ff] p-4 md:py-[50px] md:px-[100px]">
      <div className="flex max-sm:flex-col max-sm:gap-4">
        <div className=" w-full md:w-3/6 text-sm md:text-[70px] text-[#fff] font-[950] ">
          <h1 className="md:leading-[80px] uppercase">
            Top podcast of the week
          </h1>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 w-full md:w-3/6">
          <p className="text-[#fff] text-sm md:text-[20px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore ut
            nesciunt tempore nulla corrupti quam obcaecati ?
          </p>
          <button className="flex justify-center items-center gap-2 w-[125px] max-sm:h-[35px] md:w-2/6 font-[700] text-[#a3a3a4ff] border  md:px-[16px] md:py-[8px] rounded-lg">
            Get started
             <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
          </button>
        </div>
      </div>

       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-4 w-full h-[400px] overflow-y-scroll p-4 ">
              {topPodcast.map((item, index) => {
                return (
                  <div
                    className="flex justify-between items-center gap-4 border-b border-[#5c5c5c] py-4"
                    key={index}
                  >
                    <div className="flex gap-4">
                        <h1 className="text-[#fff] text-sm md:text-2xl font-[700]">
                          {index + 1}.
                        </h1>
                        <Image
                          src={item.image}
                          alt="Grow your career"
                          width={100}
                          height={100}
                          className="rounded-lg"
                        />
                        <div>
                          <h1 className="text-[#fff] text-sm md:text-lg font-[500] tracking-wide">
                            {item.title}
                          </h1>
                          <p className="text-[#a3a3a4ff] text-sm md:text-lg tracking-wide">
                            #{item.host}
                          </p>
                        </div>
                    </div>
                    <Image src={'/icons/play.png'} alt="click play" width={30} height={30} className="max-sm:hidden cursor-pointer"/>
                  </div>
                );
              })}
            </div>
    </div>
  );
};
