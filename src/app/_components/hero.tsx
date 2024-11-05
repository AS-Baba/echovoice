"use client";

import Image from "next/image";
import React, { useState } from "react";

export const Hero = () => {
  const topPodcastData = [
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Women build relationship",
      host: "Infinite Minds",
      image: "/images/woman.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
    {
      title: "Grow your career",
      host: "Infinite Minds",
      image: "/images/grow-your-career.png",
    },
  ];

  const [topPodcast] = useState(topPodcastData);

  return (
    <>
      <div className="hero flex flex-col md:justify-center items-start gap-8 w-full h-screen p-4 md:p-[130px] overflow-visible">
        <div className="flex flex-col items-center w-full  max-sm:text-[25px] md:text-[100px] text-[#fff] max-sm:font-[700] md:font-[970] uppercase ">
          <div className="flex justify-between items-center gap-4 md:gap-8 w-full h-[75px]">
            <h1 className="">Listen </h1>
            <div className="max-sm:hidden flex justify-center items-basesline md:h-[70px] max-sm:w-auto ">
              <Image
                src={"/icons/mic1.png"}
                alt="..."
                width={220}
                height={10}
                className="h-[70px] "
              />
            </div>
            <div className="md:hidden flex justify-center items-basesline h-[50px] md:h-[70px]  ">
              <Image
                src={"/icons/mic1.png"}
                alt="..."
                width={100}
                height={40}
                className="h-[40px]"
              />
            </div>
            <h1>new</h1>
            <div className="max-sm:hidden flex justify-center items-basesline h-[50px] md:h-[70px]  ">
              <Image
                src={"/icons/mic2.png"}
                alt="..."
                width={150}
                height={100}
                className="h-[70px]"
              />
            </div>
            <div className="md:hidden flex justify-center items-basesline h-[50px] md:h-[70px]  ">
              <Image
                src={"/icons/mic2.png"}
                alt="..."
                width={100}
                height={40}
                className="h-[40px]"
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 md:gap-8 w-full">
            <h1> podcast</h1>
            <div className="max-sm:hidden flex justify-center items-basesline h-[70px] ">
              <Image
                src={"/icons/mic3.png"}
                alt="..."
                width={150}
                height={100}
                className="h-[70px]"
              />
            </div>
            <div className="md:hidden flex justify-center items-basesline h-[40px] ">
              <Image
                src={"/icons/mic3.png"}
                alt="..."
                width={100}
                height={40}
                className="h-[40px]"
              />
            </div>
            <h1> order</h1>
          </div>
        </div>
        {/* Top podcast of the week */}
        <div className="flex max-sm:flex-col justify-between gap-8 w-full ">
          <div className="flex flex-col justify-start items-start gap-4 w-full md:w-[650px]">
            <p className="text-sm md:text-[20px] text-[#88888aff] font-[500]">
              Podcastin is an easy and powerful way to create, promote and
              monitize your podcast. Everything you need for a successfull
              podcast.{" "}
            </p>

            <button className="flex justify-center items-center gap-2 max-sm:w-[120px] max-sm:h-[30px] md:font-[700] text-[#a3a3a4ff] text-sm border md:px-[16px] md:py-[8px] rounded-lg">
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

            <div className="flex flex-col gap-4">
              <h1 className="text-[#fff] text-sm font-[700]">Supported by</h1>
              <div className="flex justify-center items-center gap-2 md:font-[700] text-[#a3a3a4ff]">
                <Image
                  src={"/icons/youtube.png"}
                  alt="youtube"
                  width={30}
                  height={30}
                />
                Youtube Netflix Disney
              </div>
            </div>
          </div>
          {/* Top podcast */}
          <div className="flex flex-col justify-start items-start gap-4 w-full md:w-[500px]">
            <h1 className="text-[#fff] text-sm md:text-2xl font-[700]">
              Top Podcast of the week
            </h1>
            <div className="flex flex-col gap-4 w-full h-[170px] overflow-y-scroll p-4 ">
              {topPodcast.map((item, index) => {
                return (
                  <div
                    className="flex justify-start items-center gap-4 border-b border-[#5c5c5c] p-4"
                    key={index}
                  >
                    <h1 className="text-[#fff] text-sm md:text-2xl md:font-[700]">
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
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="absolute bottom-[-280px] md:bottom-[-500px]  w-5/6 h-auto rounded-2xl overflow-hidden">
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
      </div>
      <div className="w-full h-[200px] md:h-[460px]"></div>
    </>
  );
};
