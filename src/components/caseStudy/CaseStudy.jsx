"use client";
import React, { useState } from "react";
import CaseStudyImage from "../../assets/img/case study 2.svg";
import Image from "next/image";
const CaseStudy = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex justify-center items-center my-20">
      <div className="bg-[#FDF9FF] flex flex-col items-center justify-center w-full max-w-[1241px] min-h-fit pt-10 pb-1 sm:pt-12 sm:pb-2 md:pt-12 md:pb-2 lg:pt-16 lg:pb-3 px-1 sm:px-2 md:px-2 lg:px-3 rounded-xl sm:rounded-2xl shadow-xl mx-4 lg:mx-0">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-7 lg:mb-8 max-w-[328px] sm:max-w-[428px] md:min-h-[116px] md:max-w-[550px]">
          Tutoring So Good,
          <br />
          You'll Stop Needing Us
        </h1>
        <p className="text-center max-w-[1074px] text-black text-base sm:text-lg md:text-xl lg:text-[28px] font-medium mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4">
          Great tutors do't take years to deliver results. Period! Our expert
          tutors are dedicated to offering sessions so effective that most
          students no longer need us after just one year. It may not be the best
          business model, but every day counts when your child needs support,
          guidance, and confidence to succeed.
        </p>

        <div className="flex flex-col w-full">
          <div className="bg-gradient-to-b from-[#01B7FD] to-[#007FB0] p-2 sm:p-3 md:p-4 lg:p-5 rounded-xl sm:rounded-2xl">
            <span className="inline-block bg-white text-[#01B7FD] px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-1 rounded-xl text-xs sm:text-sm md:text-base font-medium mb-2 sm:mb-3 md:mb-4 shadow-md">
              Case Study
            </span>

            <div className="relative">
              <div
                className={`transition-all duration-700 ease-in-out ${
                  isExpanded
                    ? "max-h-[1200px]"
                    : "max-h-[150px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[300px]"
                } overflow-hidden relative`}
              >
                <Image
                  src={CaseStudyImage}
                  alt="case study image"
                  className={`transition-transform duration-700 ease-in-out w-full h-auto ${
                    isExpanded ? "transform-none" : "transform translate-y-0"
                  }`}
                />
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-18 lg:h-20 bg-gradient-to-t from-[black] to-transparent" />
                )}
              </div>

              {isExpanded ? (
                <div className="flex flex-col items-center mt-2 sm:mt-3 md:mt-4">
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-white text-sm sm:text-base md:text-lg lg:text-2xl font-bold flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2 hover:text-zinc-200 transition-colors duration-200"
                  >
                    View Less
                    <svg
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 hover:animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="absolute bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 text-white z-10 text-sm sm:text-base md:text-lg lg:text-2xl font-bold flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2 hover:text-zinc-200 transition-colors duration-200"
                >
                  View Full Case Study
                  <svg
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 hover:animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
