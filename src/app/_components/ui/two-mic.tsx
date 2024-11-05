import Image from 'next/image'
import React from 'react'

export const TwoMic = () => {
  return (
    <>
    <div className="flex justify-center items-center w-full">
          <div className="r bottom-[-50px] md:bottom-[-500px]  w-5/6 h-auto rounded-2xl overflow-hidden">
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
  )
}
