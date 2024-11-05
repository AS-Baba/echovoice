import React from "react";

export const BestNews = () => {
  return (
    <div className="flex flex-col gap-8 w-full h-auto bg-[#1f1e25ff] p-4 md:py-[50px] md:px-[100px]">
      <div className="flex max-sm:flex-col max-sm:gap-4">
        <div className=" w-full md:w-3/6 text-sm md:text-[70px] text-[#fff] font-[950] ">
          <h1 className="md:leading-[80px] uppercase">
            Best news of this week
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

      <div className="flex max-sm:flex-col gap-4 w-full">
        <div className="flex flex-col gap-4 w-full md:w-2/6 ">
          <div className="flex flex-col justify-end news-of-the-week-top-left ">
            <div className="relative bottom-0 w-full md:h-[150px] p-5">
              <h1 className="text-sm md:text-2xl font-[700] uppercase">
                Psychology of money
              </h1>
              <p className="max-sm:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus corrupti eligendi neque, molestiae possimus maxime!
              </p>
              <h1 className="text-sm font-[700]">
                Speaker: Dr Dan of the Infinte Minds.inc
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-end news-of-the-week-bottom-left ">
            <div className="relative bottom-0 w-full md:h-[150px] p-5">
              <h1 className="text-sm md:text-2xl font-[700] uppercase">
                The top 1% of the top 1%
              </h1>
              <p className="max-sm:text-sm">
                The top 1% of the top 1%, the ones who play god without permission.
                Doloribus corrupti eligendi neque, molestiae possimus maxime!
              </p>
              <h1 className="text-sm font-[700]">Speaker: Dr Dan</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-4/6 h-auto ">
          <div className="flex flex-col justify-end news-of-the-week-top-right ">
            <div className="relative bottom-0 w-full md:h-[150px] p-5">
              <h1 className="text-sm md:text-2xl font-[700] uppercase">
                Streamlined Financial Audits and Customer Management in One Platform
              </h1>
              <p className="max-sm:text-sm">
                Stohb brings financial management and customer data together in one powerful plartform...
              </p>
              
            </div>
          </div>
          <div className="flex flex-col justify-end news-of-the-week-bottom-right ">
            <div className="relative bottom-0 w-full md:h-[150px] p-5">
              <h1 className="text-sm md:text-2xl font-[700] uppercase">
                Stuff You Should Know
              </h1>
              <p className="max-sm:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus corrupti eligendi neque, molestiae possimus maxime!
              </p>
              <h1 className="text-sm font-[700]">
                Speaker: Dr Dan of the Infinte Minds.inc
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
