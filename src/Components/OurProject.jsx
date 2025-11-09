import React from "react";
import ProjectCard from "./ProjectCard";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCardSm from "./ProjectCardSm";

export default function OurProject() {
    return (
        <>
            <div className="py-32">
                <div className="container px-4 sm:px-6 lg:px-8">

                    {/* Header flex container: stacks vertically below md, horizontal on md+ */}
                    <div className="flex flex-col md:flex-row justify-between items-center pb-16 gap-4 md:gap-0">
                        <h2 className="font-semibold text-4xl sm:text-5xl text-p text-center md:text-left">
                            View our projects
                        </h2>

                        <div className="flex items-center gap-2.5 hover:text-blue-700 cursor-pointer">
                            <p className="text-p font-medium hover:text-blue-700">View More</p>
                            <FaArrowRightLong />
                        </div>
                    </div>

                    {/* Cards flex container: stack vertically on small, horizontal with gap on md+ */}
                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6">
                        <ProjectCard />
                        <ProjectCardSm />
                    </div>
                </div>
            </div>


        </>
    );
}
