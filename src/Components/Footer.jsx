import React from 'react'
import CommonHeader from './CommonHeader'
import footerLogo from '../assets/Footer_Logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='bg-primary relative'>
                <div className="container">
                    <div className='flex flex-col lg:flex-row gap-10 lg:gap-64 py-16 lg:py-24'>
                        {/* Left Section */}
                        <div className='relative flex flex-col items-start'>
                            <img src={footerLogo} alt='' className='w-[180px] sm:w-[220px]' />
                            <CommonHeader
                                titleClass="hidden"
                                descClass="w-full md:w-[400px] text-white pt-5"
                                description="We are always open to discuss your project and improve your online presence."
                            />

                            <div className='w-full md:w-[515px] h-auto md:h-[95px] bg-[#FCD980] flex flex-col md:flex-row gap-5 md:gap-10 px-6 md:pl-10 py-5 items-start md:items-center mt-8 md:mt-0 md:absolute md:bottom-0'>
                                <div>
                                    <h4 className='font-semibold'>Email me at</h4>
                                    <a href="#">
                                        <p className='text-p'>contact@website.com</p>
                                    </a>
                                </div>

                                <div>
                                    <h4 className='font-semibold'>Call us</h4>
                                    <a href="#"><p className='text-p'>0927 6277 28525</p></a>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className='flex flex-col'>
                            <CommonHeader
                                title="Lets Talk!"
                                titleClass="text-[36px] md:text-[48px] font-semibold w-full md:w-[464px] text-white"
                                description="We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges."
                                descClass="w-full md:w-[400px] pt-2 text-white"
                            />

                            <div className='text-white flex gap-5 pt-8 md:pt-10'>
                                <a href="#"><FaFacebook className='text-2xl hover:scale-150 duration-200 ease-in-out' /></a>
                                <a href="#"><FaInstagram className='text-2xl hover:scale-150 duration-200 ease-in-out' /></a>
                                <a href="#"><FaTwitter className='text-2xl hover:scale-150 duration-200 ease-in-out' /></a>
                                <a href="#"><FaLinkedin className='text-2xl hover:scale-150 duration-200 ease-in-out' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="container">
                <footer>
                    <div className="flex flex-col md:flex-row justify-between py-6 md:py-8 items-center gap-5 md:gap-0 text-center md:text-left">
                        <div>
                            <a href="#">
                                <p className='text-sm md:text-base'>Copyright 2022, Finsweet.com</p>
                            </a>
                        </div>

                        <div>
                            <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-black">
                                <li><a href="#" className="hover:text-[#5c23ee]">Home</a></li>
                                <li><a href="#" className="hover:text-[#5c23ee]">About us</a></li>
                                <li><a href="#" className="hover:text-[#5c23ee]">Features</a></li>
                                <li><a href="#" className="hover:text-[#5c23ee]">Pricing</a></li>
                                <li><a href="#" className="hover:text-[#5c23ee]">FAQ</a></li>
                                <li><a href="#" className="hover:text-[#5c23ee]">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
