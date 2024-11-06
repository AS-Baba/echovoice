"use client";

import Image from "next/image";
import React, { useState } from "react";
import { TwoMic } from "./ui/two-mic";

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
      <div className="hero h-screen flex flex-col lg:justify-center items-start gap-8 w-full  p-4 lg:p-[130px] overflow-visible">
        <div className="flex flex-col items-center w-full  max-sm:text-[25px] lg:text-[100px] text-[#fff] max-sm:font-[700] lg:font-[970] uppercase ">
          <div className="flex justify-between items-center gap-4 lg:gap-8 w-full h-[75px]">
            <h1 className="">Listen </h1>
            <div className="max-sm:hidden sm:hidden lg:flex justify-center items-basesline lg:h-[70px] max-sm:w-auto ">
              <Image
                src={"/icons/mic1.png"}
                alt="..."
                width={220}
                height={10}
                className="h-[70px] "
              />
            </div>
            <div className="lg:hidden  flex justify-center items-basesline h-[50px] lg:h-[70px]  ">
              <Image
                src={"/icons/mic1.png"}
                alt="..."
                width={100}
                height={40}
                className="h-[40px]"
              />
            </div>
            <h1>new</h1>
            <div className="max-sm:hidden sm:hidden lg:flex justify-center items-basesline h-[50px] lg:h-[70px]  ">
              <Image
                src={"/icons/mic2.png"}
                alt="..."
                width={150}
                height={100}
                className="h-[70px]"
              />
            </div>
            <div className="lg:hidden  flex justify-center items-basesline h-[50px] lg:h-[70px]  ">
              <Image
                src={"/icons/mic2.png"}
                alt="..."
                width={100}
                height={40}
                className="h-[40px]"
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 lg:gap-8 w-full">
            <h1> podcast</h1>
            <div className="max-sm:hidden sm:hidden lg:flex justify-center items-basesline h-[70px] ">
              <Image
                src={"/icons/mic3.png"}
                alt="..."
                width={150}
                height={100}
                className="h-[70px]"
              />
            </div>
            <div className="lg:hidden flex justify-center items-basesline h-[40px] ">
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
          <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-[650px]">
            <p className="text-sm lg:text-[20px] text-[#88888aff] font-[500]">
              Podcastin is an easy and powerful way to create, promote and
              monitize your podcast. Everything you need for a successfull
              podcast.{" "}
            </p>

            <button className="flex justify-center items-center gap-2 max-sm:w-[120px] max-sm:h-[30px] lg:font-[700] text-[#a3a3a4ff] text-sm border lg:px-[16px] lg:py-[8px] rounded-lg">
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

            <div className="flex flex-col gap-2 mt-8">
              <h1 className="text-[#fff] text-sm font-[700]">Supported by</h1>
              <div className="flex justify-center items-center gap-2 lg:font-[700] text-[#a3a3a4ff] text-sm">
                <Image
                  src={"/icons/youtube.png"}
                  alt="youtube"
                  width={30}
                  height={30}
                  className="max-sm:hidden sm:hidden"
                />
                <Image
                  src={"/icons/youtube.png"}
                  alt="youtube"
                  width={18}
                  height={18}
                  className="lg:hidden"
                />
                Youtube Netflix Disney
              </div>
            </div>
          </div>
          {/* Top podcast */}
          <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-[500px]">
            <h1 className="text-[#fff] text-sm lg:text-2xl font-[700]">
              Top Podcast of the week
            </h1>
            <div className="flex flex-col gap-4 w-full h-[170px] overflow-y-scroll p-4 ">
              {topPodcast.map((item, index) => {
                return (
                  <div
                    className="flex justify-start items-center gap-4 border-b border-[#5c5c5c] py-2"
                    key={index}
                  >
                    <h1 className="text-[#fff] text-sm lg:text-2xl lg:font-[700]">
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
                      <h1 className="text-[#fff] text-sm lg:text-lg font-[500] tracking-wide">
                        {item.title}
                      </h1>
                      <p className="text-[#a3a3a4ff] text-sm lg:text-lg tracking-wide">
                        #{item.host}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <TwoMic></TwoMic>
    </>
  );
};
