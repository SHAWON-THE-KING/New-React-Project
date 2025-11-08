import React from 'react'
import woman from '../assets/woman-writing.png'
import CommonHeader from './CommonHeader'
import { FaArrowRightLong } from "react-icons/fa6";
import Button from './Button'



const SendInquiry = () => {
    return (
        <>
            <div className='py-32'>
                <div className="container relative">

                    <div className='flex'>
                        <div>
                            <img src={woman} alt="" />
                            <div className='absolute top-30 left-20 text-white'>
                                <CommonHeader
                                    title="Building stellar websites for early startups"
                                    titleClass="text-[54px] font-semibold w-[464px]"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
                                    descClass=" w-[464px] pt-2"
                                />
                            </div>
                        </div>

                        <div>

                            <div className="w-[624px] h-[690px] px-24 py-24 bg-[#1C1E53] flex flex-col items-center">

                                <h2 className="text-white text-3xl font-medium pb-4 text-left w-full">
                                    Send inquiry
                                </h2>

                                <p className="text-[#e7eaf8] pb-8">
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
                                    className="text-white text-base flex items-center gap-2 font-medium hover:text-blue-500 pt-5"
                                >
                                    Get in touch with us <FaArrowRightLong />

                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SendInquiry