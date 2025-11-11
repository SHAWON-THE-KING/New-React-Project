import React from 'react'
import CommonHeader from '../Components/CommonHeader'
import aboutImg from '../assets/About_heading_img.png'
import aboutImg2 from '../assets/man-in-blue.png'
import Loop from "../Pages/Loop";


const AboutUs = () => {
    return (
        <>
    

            <div className="container">
                <div className='flex justify-between py-32'>
                    <div>
                        <CommonHeader
                            titleClass="hidden"
                            description="About us "
                            descClass="text-p"
                        />

                        <CommonHeader
                            title="Our designs solve problems"
                            titleClass="text-p text-[54px] font-semibold leading-[74px] w-[595px]"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                            descClass="text-p w-[484px] pt-6"
                        />
                    </div>

                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                </div>



                <div className='pb-32'>
                    <div>
                        <CommonHeader
                            titleClass="hidden"
                            description="Who we are"
                            descClass="text-p pt-20 pl-17 bg-secondary"
                        />

                        <div className='flex justify-around bg-secondary pb-20'>
                            <CommonHeader
                                title="Goal focussed"
                                titleClass="text-p text-[38px] font-semibold"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                descClass="text-p w-[515px] pt-6"
                            />
                            <CommonHeader
                                title="Continuous improvement"
                                titleClass="text-p text-[38px] font-semibold"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                descClass="text-p w-[515px] pt-6"
                            />
                           
                        </div>
                    </div>

                    <div>
                        <img src={aboutImg2} alt="" />
                    </div>
                </div>



            </div>


        </>
    )
}

export default AboutUs