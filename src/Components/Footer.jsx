import React from 'react'
import CommonHeader from './CommonHeader'
import footerLogo from '../assets/Footer_Logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='bg-primary relative'>
                <div className="container">
                    <div className='flex flex-col lg:flex-row gap-10 lg:gap-64 py-16 lg:py-24'>
                        <div className="relative mb-16 lg:mb-0 flex-1">
                            <img src={footerLogo} alt=''/>
                            <CommonHeader
                                titleClass="hidden"
                                descClass="max-w-xs lg:w-[400px] text-white pt-5"
                                description="We are always open to discuss your project and improve your online presence."
                            />
                            {/* Info bar: static for mobile, absolute for lg */}
                            <div className='w-full max-w-lg h-auto lg:w-[515px] lg:h-[95px] bg-[#FCD980] flex flex-col lg:flex-row gap-6 lg:gap-10 p-4 lg:pl-10 items-start lg:items-center static md:absolute md:-bottom-24 mt-6 lg:mt-0'>
                                <div>
                                    <h4 className='font-semibold'>Email me at</h4>
                                    <a href="#">
                                        <p className='text-p break-all'>contact@website.com</p>
                                    </a>
                                </div>
                                <div>
                                    <h4 className='font-semibold'>Call us</h4>
                                    <a href="#"><p className='text-p'>0927 6277 28525</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <CommonHeader
                                title="Lets Talk!"
                                titleClass="text-[32px] lg:text-[48px] font-semibold max-w-xs lg:w-[464px] text-white"
                                description="We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges."
                                descClass="max-w-xs lg:w-[400px] pt-2 text-white"
                            />
                            <div className='text-white flex gap-5 pt-10'>
                                <a href="#"><FaFacebook className='text-2xl hover:scale-150 duration-200 ease-in-out' /></a>
                                <a href="#"><FaInstagram className='text-2xl hover:scale-150 duration-200 ease-in-out' /></a>
                                <a href="#"><FaTwitter className='text-2xl hover:scale-150 duration-200 ease-in-out' /></a>
                                <a href="#"><FaLinkedin className='text-2xl hover:scale-150 duration-200 ease-in-out' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <footer>
                    <div className="flex flex-col md:flex-row md:justify-between md:mt-8 md:py-0 xs:py-8 gap-6">
                        <div>
                            <a href="#">
                                <p className="text-center md:text-left">Copyright 2022, Finsweet.com</p>
                            </a>
                        </div>
                        <div>
                            <ul className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-8 text-black">
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
