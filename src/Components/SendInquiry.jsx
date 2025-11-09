import React from 'react'
import woman from '../assets/woman-writing.png'
import CommonHeader from './CommonHeader'
import { FaArrowRightLong } from "react-icons/fa6";
import Button from './Button'

const SendInquiry = () => {
    return (
        <>
            <div className='py-16 md:py-32'>
                <div className="container relative">

                    <div className='flex flex-col lg:flex-row items-center lg:items-stretch lg:gap-0 gap-10'>
                        <div className='relative w-full lg:w-1/2 flex justify-center'>
                            <img src={woman} alt="" className='w-full h-full object-cover' />
                            <div className='absolute top-10 left-5 md:top-20 md:left-20 text-white'>
                                <CommonHeader
                                    title="Building stellar websites for early startups"
                                    titleClass="text-[32px] md:text-[54px] font-semibold w-full md:w-[464px]"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
                                    descClass="w-full md:w-[464px] pt-2"
                                />
                            </div>
                        </div>

                        <div className='w-full lg:w-1/2 h-auto lg:h-auto px-6 sm:px-12 md:px-16 py-12 md:py-24 bg-[#1C1E53] flex flex-col items-center justify-center rounded-none '>

                            <h2 className="text-white text-2xl md:text-3xl font-medium pb-4 text-left w-full">
                                Send inquiry
                            </h2>

                            <p className="text-[#e7eaf8] pb-8 text-sm md:text-base text-center md:text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>

                            <form className="w-full flex flex-col gap-5 pb-6">
                                <input
                                    className="w-full rounded-xl bg-transparent border border-[#3F4D78] px-5 py-4 text-[#e1e5f9] placeholder-[#7B86A4] outline-none focus:ring-2 focus:ring-[#6c47ff]"
                                    placeholder="Your Name"
                                    type="text"
                                />
                                <input
                                    className="w-full rounded-xl bg-transparent border border-[#3F4D78] px-5 py-4 text-[#e1e5f9] placeholder-[#7B86A4] outline-none focus:ring-2 focus:ring-[#6c47ff]"
                                    placeholder="Email"
                                    type="email"
                                />
                                <input
                                    className="w-full rounded-xl bg-transparent border border-[#3F4D78] px-5 py-4 text-[#e1e5f9] placeholder-[#7B86A4] outline-none focus:ring-2 focus:ring-[#6c47ff]"
                                    placeholder="Paste your Figma design URL"
                                    type="url"
                                />
                            </form>

                            <Button className='text-black! w-full bg-[#FCD980] border-none'>Send an Inquiry</Button>

                            <a
                                href="#"
                                className="text-white flex items-center gap-2 font-medium hover:text-blue-500 pt-5"
                            >
                                Get in touch with us <FaArrowRightLong />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SendInquiry
