import React from 'react'
import pointer1 from '../assets/pointer 1.png'
import pointer2 from '../assets/pointer 2.png'
import pointer3 from '../assets/pointer 3.png'
import pointer4 from '../assets/pointer 4.png'
import CommonHeader from './CommonHeader'

const WorkCatagory = () => {
    return (
        <div>
            <div className='flex flex-wrap gap-12 w-[654px]'>
                <div>
                    <img src={pointer1} alt="" />

                    <CommonHeader
                        title="Strategy"
                        titleClass="text-p text-[32px] font-medium pt-4"
                        description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                        descClass="text-p leading-7 w-[303px] pt-2"
                    />
                </div>
                <div>
                    <img src={pointer2} alt="" />
                    <CommonHeader
                        title="Wireframing"
                        titleClass="text-p text-[32px] font-medium pt-4"
                        description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                        descClass="text-p leading-7 w-[303px] pt-2"
                    />
                </div>
                <div>
                    <img src={pointer3} alt="" />
                    <CommonHeader
                        title="Design"
                        titleClass="text-p text-[32px] font-medium pt-4"
                        description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                        descClass="text-p leading-7 w-[303px] pt-2"
                    />
                </div>
                <div>
                    <img src={pointer4} alt="" />
                    <CommonHeader
                        title="Development"
                        titleClass="text-p text-[32px] font-medium pt-4"
                        description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                        descClass="text-p leading-7 w-[303px] pt-2"
                    />
                </div>
            </div>
        </div>
    )
}

export default WorkCatagory