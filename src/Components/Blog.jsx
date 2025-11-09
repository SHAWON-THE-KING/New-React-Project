import React from 'react'
import CommonHeader from './CommonHeader'
import { FaArrowRightLong } from "react-icons/fa6";
import blog1 from '../assets/Blog_1.png'
import blog2 from '../assets/Blog_2.png'
import blog3 from '../assets/Blog_3.png'

const Blog = () => {
    return (
        <>
            <div>
  <div className="container">

    <div className='pb-16'>
      <CommonHeader
        title="Our blog"
        titleClass="text-[48px] font-semibold text-start text-p"
        descClass="hidden"
      />
    </div>

    <div className='flex flex-col md:flex-row md:justify-between md:gap-0 gap-10 pb-32'>
      <div className="w-full md:w-[32%]">
        <img src={blog1} alt="" className="w-full h-auto" />
        <p className='text-p font-medium pt-10'>19 Jan 2022</p>
        <div className='w-full'>
          <CommonHeader
            title="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
            titleClass="text-[24px] font-medium text-start text-p pt-4"
            descClass="pt-4"
            description="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
          />
        </div>
        <a
          href="#"
          className="text-p flex items-center gap-2 font-medium hover:text-blue-500 pt-8"
        >
          Read More <FaArrowRightLong />
        </a>
      </div>
      <div className="w-full md:w-[32%]">
        <img src={blog2} alt="" className="w-full h-auto" />
        <p className='text-p font-medium pt-10'>19 Jan 2022</p>
        <div className='w-full'>
          <CommonHeader
            title="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
            titleClass="text-[24px] font-medium text-start text-p pt-4"
            descClass="pt-4"
            description="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
          />
        </div>
        <a
          href="#"
          className="text-p flex items-center gap-2 font-medium hover:text-blue-500 pt-8"
        >
          Read More <FaArrowRightLong />
        </a>
      </div>
      <div className="w-full md:w-[32%]">
        <img src={blog3} alt="" className="w-full h-auto" />
        <p className='text-p font-medium pt-10'>19 Jan 2022</p>
        <div className='w-full'>
          <CommonHeader
            title="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
            titleClass="text-[24px] font-medium text-start text-p pt-4"
            descClass="pt-4"
            description="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
          />
        </div>
        <a
          href="#"
          className="text-p flex items-center gap-2 font-medium hover:text-blue-500 pt-8"
        >
          Read More <FaArrowRightLong />
        </a>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Blog