import React from "react";

export default function Result() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-black bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] inline-block text-transparent bg-clip-text text- md:text-[40px] lg:text-[48px] text-center mx-auto pb-2 font-bold">
          Results You Can Count On
        </h2>
        <p className="text-black text-center font-semibold mt-2 sm:px-20 text-lg sm:text-3xl">
          We combine proven strategies with fun teaching to help your child
          succeed fast! Our client's experience
        </p>
      </div>

      {/* Exclusive Private Tutoring and Big Tutoring Companies */}
      <div className="mt-8 sm:mt-12 max-w-6xl mx-auto flex justify-center items-center flex-col lg:flex-row gap-4 sm:gap-8 px-4 sm:px-8">
        {/* Exclusive Private Tutoring */}
        <div className="bg-[#FDF9FF] shadow-[0px_4px_24px_0px_#BE5BFD3D] border-2 border-[#BD5AFC] p-6 sm:p-8 lg:p-10 rounded-xl w-full lg:min-w-[605px] lg:h-[420px] overflow-x-hidden">
          <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#BD5AFC]">
            Exclusive Private Tutoring
          </h3>
          <div className="relative flex flex-col gap-6 lg:gap-8 mt-6 lg:mt-8">
            {/* Continuous vertical line that stops exactly at last dot */}
            <div className="hidden sm:block absolute z-0 left-[11px] top-[12px] h-[180px] border-l-2 border-l-[#EED2FF]"></div>

            {/* Item 1 */}
            <div className="relative flex flex-row gap-3 sm:gap-4">
              <div className="relative z-10 w-[20px] sm:w-[25px] min-w-[20px] sm:min-w-[25px] mt-1 sm:mt-2 h-[20px] sm:h-[25px] min-h-[20px] sm:min-h-[25px] bg-[#EED2FF] rounded-full flex p-[4px]">
                <div className="m-auto h-full w-full rounded-full bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9]"></div>
              </div>
              <p className="text-black text-base sm:text-xl lg:text-[24px] xl:text-[28px] font-medium">
                Personalized Approach
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative flex flex-row gap-3 sm:gap-4">
              <div className="relative z-10 w-[20px] sm:w-[25px] min-w-[20px] sm:min-w-[25px] mt-1 sm:mt-2 h-[20px] sm:h-[25px] min-h-[20px] sm:min-h-[25px] bg-[#EED2FF] rounded-full flex p-[4px]">
                <div className="m-auto h-full w-full rounded-full bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9]"></div>
              </div>
              <p className="text-black text-base sm:text-xl lg:text-[24px] xl:text-[28px] font-medium">
                Small number of clients means individualized support and
                programs
              </p>
            </div>

            {/* Item 3 */}
            <div className="relative flex flex-row gap-3 sm:gap-4">
              <div className="relative z-10 w-[20px] sm:w-[25px] min-w-[20px] sm:min-w-[25px] mt-1 sm:mt-2 h-[20px] sm:h-[25px] min-h-[20px] sm:min-h-[25px] bg-[#EED2FF] rounded-full flex p-[4px]">
                <div className="m-auto h-full w-full rounded-full bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9]"></div>
              </div>
              <p className="text-black text-base sm:text-xl lg:text-[24px] xl:text-[28px] font-medium">
                We figure out what is not working and change the program to make
                it work
              </p>
            </div>
          </div>
        </div>

        {/* Big Tutoring Companies */}
        <div className="w-full lg:min-w-[605px] lg:h-[420px] bg-[#FBFBFB] border-2 border-[#9B9999] p-6 sm:p-8 lg:p-10 rounded-xl overflow-x-hidden">
          <h3 className="text-black text-2xl sm:text-[28px] lg:text-[32px] font-bold">
            Big Tutoring Companies
          </h3>
          <div className="relative flex flex-col gap-6 lg:gap-8 mt-6 lg:mt-8">
            {/* Continuous vertical line that stops exactly at last dot */}
            <div className="hidden sm:block absolute z-0 left-[11px] top-[12px] h-[170px] border-l-2 border-l-[#DDDDDD]"></div>

            {/* Item 1 */}
            <div className="relative flex flex-row gap-3 sm:gap-4">
              <div className="relative z-10 w-[20px] sm:w-[25px] min-w-[20px] sm:min-w-[25px] mt-1 sm:mt-2 h-[20px] sm:h-[25px] min-h-[20px] sm:min-h-[25px] bg-[#DDDDDD] rounded-full flex p-[4px]">
                <div className="m-auto h-full w-full rounded-full bg-[#3A3A3A]"></div>
              </div>
              <p className="text-black text-base sm:text-xl lg:text-[24px] xl:text-[28px] font-medium">
                Set Curriculums
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative flex flex-row gap-3 sm:gap-4">
              <div className="relative z-10 w-[20px] sm:w-[25px] min-w-[20px] sm:min-w-[25px] mt-1 sm:mt-2 h-[20px] sm:h-[25px] min-h-[20px] sm:min-h-[25px] bg-[#DDDDDD] rounded-full flex p-[4px]">
                <div className="m-auto h-full w-full rounded-full bg-[#3A3A3A]"></div>
              </div>
              <p className="text-black text-base sm:text-xl lg:text-[24px] xl:text-[28px] font-medium">
                Thrive on pumping large numbers through their programs
              </p>
            </div>

            {/* Item 3 */}
            <div className="relative flex flex-row gap-3 sm:gap-4">
              <div className="relative z-10 w-[20px] sm:w-[25px] min-w-[20px] sm:min-w-[25px] mt-1 sm:mt-2 h-[20px] sm:h-[25px] min-h-[20px] sm:min-h-[25px] bg-[#DDDDDD] rounded-full flex p-[4px]">
                <div className="m-auto h-full w-full rounded-full bg-[#3A3A3A]"></div>
              </div>
              <p className="text-black text-base sm:text-xl lg:text-[24px] xl:text-[28px] font-medium">
                They offer your money back when it's not working
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
