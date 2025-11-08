import React from 'react'
import CommonHeader from './CommonHeader'
import MySlider from './MySlider'


const Clients = () => {
    return (
        <>
            <div className='py-32 bg-[#F4F6FC]'>
                <div className="container">

                    <div className='flex justify-between'>

                        <CommonHeader
                            title="What our clients say about us"
                            titleClass="text-p text-[32px] font-medium w-[327px]"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed."
                            descClass="text-p w-[320px] pt-2"
                        />

                        <MySlider />


                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients