import React from 'react'
import CommonHeader from './CommonHeader'
import icon1 from '../assets/Icon_1.png'
import icon2 from '../assets/Icon_2.png'
import icon3 from '../assets/Icon_3.png'
import icon4 from '../assets/Icon_4.png'
import icon5 from '../assets/Icon_5.png'
import icon6 from '../assets/Icon_6.png'

const Features = () => {
    return (
        <>
            <div className='py-32 bg-secondary'>
                <div className="container">
                    <div className='text-center'>
                        <CommonHeader
                            title="Features"
                            titleClass="text-p"
                            description="Design that solves problems, one product at a time"
                            descClass="text-p text-[48px] font-medium w-[630px] mx-auto mt-3 "
                        />
                    </div>

                    <div className='flex flex-wrap gap-10 w-full pt-12'>

                        <div className='w-[405px] bg-white px-12 py-14 mx-auto'>
                            <img className='pb-5' src={icon1} alt="" />
                            <CommonHeader
                                title="Uses Client First"
                                titleClass="text-p text-[24px] font-medium"
                                description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
                                descClass="text-p leading-7 w-[324px] pt-3"
                            />
                        </div>
                        <div className='w-[405px] bg-white px-12 py-14 mx-auto'>
                            <img className='pb-5' src={icon2} alt="" />
                            <CommonHeader
                                title="Uses Client First"
                                titleClass="text-p text-[24px] font-medium"
                                description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
                                descClass="text-p leading-7 w-[324px] pt-3"
                            />
                        </div>
                        <div className='w-[405px] bg-white px-12 py-14 mx-auto'>
                            <img className='pb-5' src={icon3} alt="" />
                            <CommonHeader
                                title="Uses Client First"
                                titleClass="text-p text-[24px] font-medium"
                                description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
                                descClass="text-p leading-7 w-[324px] pt-3"
                            />
                        </div>
                        <div className='w-[405px] bg-white px-12 py-14 mx-auto'>
                            <img className='pb-5' src={icon4} alt="" />
                            <CommonHeader
                                title="Uses Client First"
                                titleClass="text-p text-[24px] font-medium"
                                description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
                                descClass="text-p leading-7 w-[324px] pt-3"
                            />
                        </div>
                        <div className='w-[405px] bg-white px-12 py-14 mx-auto'>
                            <img className='pb-5' src={icon5} alt="" />
                            <CommonHeader
                                title="Uses Client First"
                                titleClass="text-p text-[24px] font-medium"
                                description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
                                descClass="text-p leading-7 w-[324px] pt-3"
                            />
                        </div>
                        <div className='w-[405px] bg-white px-12 py-14 mx-auto'>
                            <img className='pb-5' src={icon6} alt="" />
                            <CommonHeader
                                title="Uses Client First"
                                titleClass="text-p text-[24px] font-medium"
                                description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
                                descClass="text-p leading-7 w-[324px] pt-3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features