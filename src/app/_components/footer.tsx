import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-[#1f1e25] h-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 max-sm:gap-4 p-[100px]'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl text-[#fff] font-[700] uppercase'>ECHOVOICE</h1>
                <div className='flex gap-4'>
                    <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#35343aff]'>
                        <Image src={'/icons/f.png'} alt='facebook logo' width={12} height={12}/>
                    </div>
                    <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#35343aff]'>
                        <Image src={'/icons/x.png'} alt='facebook logo' width={20} height={15}/>
                    </div>
                    <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#35343aff]'>
                        <Image src={'/icons/linked.png'} alt='facebook logo' width={20} height={20}/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl text-[#fff] font-[700] uppercase'>Product</h1>
                <div className='flex flex-col gap-4'>
                    <p className='text-[#696969] text-[20px]'>Home</p>
                    <p className='text-[#696969] text-[20px]'>Updates</p>
                    <p className='text-[#696969] text-[20px]'>Services</p>
                    <p className='text-[#696969] text-[20px]'>Features</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl text-[#fff] font-[700] uppercase'>About</h1>
                <div className='flex flex-col gap-4'>
                    <p className='text-[#696969] text-[20px]'>About us</p>
                    <p className='text-[#696969] text-[20px]'>Blog</p>
                    <p className='text-[#696969] text-[20px]'>Careers</p>
                    <p className='text-[#696969] text-[20px]'>Jobs</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl text-[#fff] font-[700] uppercase'>Support</h1>
                <div className='flex flex-col gap-4'>
                    <p className='text-[#696969] text-[20px]'>contact us</p>
                    <p className='text-[#696969] text-[20px]'>Whatsapp</p>
                    <p className='text-[#696969] text-[20px]'>Telegram</p>
                    <p className='text-[#696969] text-[20px]'>Instagram</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl text-[#fff] font-[700] uppercase'>Try Now</h1>
                <div className='flex flex-col gap-4'>
                   <Image src={'/icons/googleplay.svg'} alt='Googleplay' width={100} height={100}/>
                   <Image src={'/icons/applestore.svg'} alt='Applestore' width={100} height={100}/>
                </div>
            </div>
        </div>
    </div>
  )
}
