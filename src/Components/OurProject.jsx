import React from "react";
import ProjectCard from "./ProjectCard";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCardSm from "./ProjectCardSm";

export default function OurProject() {
    return (
        <>
            <div className="py-32">
                <div className="container">

                    <div className="flex justify-between pb-16">
                        <h2 className="font-semibold text-5xl text-p">
                            View our projects
                        </h2>

                        <div className="flex items-center gap-2.5 hover:text-blue-700">
                            <p className="text-p font-medium hover:text-blue-700">
                                View More
                            </p>
                            <FaArrowRightLong />
                        </div>
                    </div>

                    <div className="flex justify-between ">
                        <ProjectCard />
                        <ProjectCardSm/>
                    </div>
                </div>
            </div>

        </>
    );
}
