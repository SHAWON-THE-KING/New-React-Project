import React, { useState } from "react";

const QUESTIONS = [
  {
    h1: "How much time does it take?",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    h1: "What is your class naming convention?",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    h1: "How do you communicate?",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    h1: "I have a bigger project. Can you handle it?",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    h1: "What is your class naming convention?",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export default function Questions() {
  const [open, setOpen] = useState(null);

  return (
    <div className="container py-16 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        
        <div className="md:w-1/3 mt-8">
          <h1 className="pb-4 text-3xl sm:text-4xl text-p font-semibold">
            Frequently asked questions
          </h1>
          <p className="text-[18px] text-[#2505f2ce] font-medium cursor-pointer hover:text-[#2505f2] max-w-sm">
            Contact us for more info
          </p>
        </div>

        
        <div className="md:w-2/3">
          {QUESTIONS.map((q, i) => (
            <div
              key={i}
              className="border-b border-gray-200 py-4 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center py-4">
                <div className="flex gap-4 sm:gap-6 items-center">
                  <span className="text-[#2405F2] font-medium text-lg">{i + 1}</span>
                  <h1 className="font-bold text-[18px] sm:text-[20px] text-p">{q.h1}</h1>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`w-6 h-6 text-p transform transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === i ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-medium text-[16px] sm:text-[18px] text-p">{q.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
