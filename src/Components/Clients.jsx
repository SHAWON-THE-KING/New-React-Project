import React from 'react'
import CommonHeader from './CommonHeader'
import MySlider from './MySlider'

const Clients = () => {
  return (
    <>
      <div className='py-32 bg-[#F4F6FC]'>
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0'>
            <CommonHeader
              title="What our clients say about us"
              titleClass="text-p text-[28px] md:text-[32px] font-medium w-full md:w-[327px] text-center md:text-left"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed."
              descClass="text-p w-full md:w-[320px] pt-2 text-center md:text-left"
            />
            <MySlider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Clients
