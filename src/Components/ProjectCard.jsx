import React from 'react'
import cardImage from "../assets/Card.png";
import { FaArrowRightLong } from "react-icons/fa6";


const ProjectCard = () => {
    return (
        <>
            <div className="relative w-full md:w-[843px] rounded-2xl overflow-hidden shadow-lg group">
                <img
                    src={cardImage}
                    alt="Card"
                    className="w-full md:w-[843px] h-[600px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-blue-900/80 before:transition-all before:duration-500 group-hover:before:w-[45%]">
                    <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-7 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h2 className="text-white text-2xl font-semibold mb-3 w-full md:w-[313px]">
                            Workhub office Webflow Webflow Design
                        </h2>
                        <p className="text-white mb-5 font-medium w-full md:w-[293px]">
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
                        </p>
                        <a href="#" className="inline-flex items-center text-yellow-300 font-semibold">
                            View project <span className="ml-2"><FaArrowRightLong /></span>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectCard