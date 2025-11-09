import React from 'react'
import cardImage2 from "../assets/Card_2.png";
import cardImage3 from "../assets/Card_3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectCardSm = () => {
    return (
        <>
            <div>
                <div className="relative w-full sm:w-[calc(50%-1rem)] md:w-[405px] group rounded-2xl overflow-hidden shadow-lg">
                    <img src={cardImage2} alt="Card" className="w-full object-cover" />
                    <div className="absolute inset-0 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-blue-900/80 before:transition-all before:duration-500 group-hover:before:w-full">
                        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-7 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h2 className="text-white text-2xl font-semibold mb-3 w-full md:w-[313px]">
                                Unisaas Website Design
                            </h2>
                            <a href="#" className="inline-flex items-center text-yellow-300 font-semibold">
                                View project <span className="ml-2"><FaArrowRightLong /></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative w-full sm:w-[50%] md:w-[405px] group rounded-2xl md:mt-10 overflow-hidden shadow-lg mt-8 sm:mt-0">
                    <img src={cardImage3} alt="Card" className="w-full object-cover" />
                    <div className="absolute inset-0 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-blue-900/80 before:transition-all before:duration-500 group-hover:before:w-full">
                        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-7 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h2 className="text-white text-2xl font-semibold mb-3 w-full md:w-[313px]">
                                Unisaas Website Design
                            </h2>
                            <a href="#" className="inline-flex items-center text-yellow-300 font-semibold">
                                View project <span className="ml-2"><FaArrowRightLong /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectCardSm