"use client";

import React, { useState } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      text: "I had a great experience! She was able to help me get my scores up through her individual coaching and personalized approach. When I did not get my desired ACT score the first time, she continued to meet with me in her free time. Through her extra help, I was able to get my desired score on both the ACT and SAT! I got into all my top colleges and she opened so many doors for me!",
      name: "Chloe Cahill",
      role: "Student",
    },
    {
      text: "This class was such a truly amazing experience. Not only did Erin teach us about how to succeed on the ACT, but to succeed in life as well. This class gave me so much confidence, and I can genuinely say that I'm excited and ready to see great results! Thank you Erin! :)",
      name: "Madie Shoaf",
      role: "Student",
    },
    {
      text: "This ACT prep class with Exclusive Private Tutor Erin has been nothing but helpful. Not only have I learned strategies and information to help me succeed on the test, but I have also learned how to manage stress, look at life from different perspectives, as well as how to be a happier and more successful person overall. I loved this class and I think anyone looking for a great tutor can find that with Erin.",
      name: "Emmaline Purohit",
      role: "Student",
    },
    {
      text: "Erin's strategies helped me improve my test scores significantly. Highly recommended!",
      name: "Alex Johnson",
      role: "Student",
    },
    {
      text: "The coaching experience was transformative for me. I achieved my target score and gained confidence.",
      name: "Samantha Lee",
      role: "Student",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex flex-col items-center justify-start gap-8 w-screen max-h-[700px] h-[500px] md:min-h-[500px] md:max-h-[700px] sm:h-[700px] overflow-hidden mt-10 z-10 bg-gray-50">
      {/* <div className="flex flex-col items-center justify-start gap-8 w-screen h-auto min-h-[500px] sm:min-h-[600px] md:min-h-[700px]  overflow-hidden mt-10 z-10 bg-gray-50"> */}

      {/* Header Section */}
      <div className="text-center mb-10 lg:mb-40">
        <h2 className="text-3xl lg:text-[48px] font-bold bg-gradient-to-b from-[#01B7FD] to-[#007FB0] text-transparent bg-clip-text lg:mb-5">
          We Love Our Students
        </h2>
        <p className="text-lg lg:text-[28px] text-[#01B7FD] mb-24">
          And They Love Us Too!
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full flex items-center justify-center">
        {/* Testimonials */}
        {testimonials.map((testimonial, index) => {
          const isActive = index === currentIndex;
          const isPrev =
            index ===
            (currentIndex - 1 + testimonials.length) % testimonials.length;
          const isNext = index === (currentIndex + 1) % testimonials.length;

          return (
            <div
              key={index}
              className={`absolute transition-transform duration-500 ease-in-out rounded-xl shadow-lg ${
                isActive
                  ? "scale-100 z-10 opacity-100 w-auto h-auto md:w-[70%] lg:w-[50%]"
                  : "scale-75 z-0 opacity-50 w-auto h-auto md:w-[50%] lg:w-[30%]"
              } ${
                isPrev
                  ? "translate-x-[-120%]"
                  : isNext
                  ? "translate-x-[120%]"
                  : "translate-x-0"
              } bg-white p-6 mx-2`}
            >
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
              </div>
              <p
                className={`text-sm lg:text-lg font-semibold text-gray-700 ${
                  isActive ? "line-clamp-none" : "line-clamp-3"
                }`}
              >
                {testimonial.text}
              </p>
              <div className="flex items-center mt-4">
                <img
                  alt={testimonial.name}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full mr-4 object-cover"
                  src="/_next/image?url=%2Fcards%2Fpic.png&w=256&q=75"
                />
                <div>
                  <h3 className="font-medium text-gray-900 text-sm lg:text-base">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-xs lg:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Buttons */}
        <div className="absolute  -bottom-60 sm:-bottom-60 lg:-bottom-72 flex flex-row justify-center items-center w-full px-4 gap-4 z-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left w-4 h-4 lg:w-6 lg:h-6"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right w-4 h-4 lg:w-6 lg:h-6"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
