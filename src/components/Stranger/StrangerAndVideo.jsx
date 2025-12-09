import Image from "next/image";
import React from "react";
import ConsultingBanner from "./ConsultingBanner";

const StrangerAndVideo = () => {
  return (
    <>
      <div className=" relative overflow-hidden w-full mt-28">
        <Image
          src="/Grade-Vector.png"
          alt=""
          className="absolute min-h-screen min-w-full z-10 top-0 ring-2 ring-orange-500"
          width={500}
          height={500}
        />
        <div className="w-full px-4 py-8 md:px-8 lg:px-28 xl:px-24 2xl:px-48 md:py-12 flex flex-col items-center md:flex-row md:justify-between md:text-center md:gap-4 ">
          {/* Background Vector */}
          {/* Left Content */}
          <div className="text-center md:text-left w-full sm:w-1/2 ">
            <h1 className="text-4xl font-extrabold bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] bg-clip-text text-transparent mb-4">
              Stranger Danger!
            </h1>

            <h2 className="text-2xl font-medium text-gray-800 mb-4">
              We help your child change their relationship with their most{" "}
              <span
                className="bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-nosifer)" }}
              >
                DREADED
              </span>{" "}
              subject.
            </h2>
            <p className="text-2xl text-[#6A497F]">
              But don’t just trust your child to any internet "stranger!"{" "}
              <span className="font-bold">Watch our video</span> to get to know
              us first.
            </p>
          </div>

          {/* Right Content (Video) */}
          <div className="p-5 mt-8 w-full md:mt-0 sm:w-1/2 flex justify-center text-center md:text-start md:justify-start md:flex-row-reverse md:p-0">
            <video
              src=""
              controls
              className="size-48 w-full sm:size-80 md:w-3/4 max-w-xl rounded-sm md:rounded-3xl object-cover ring-4 ring-[#7C35A9]"
            ></video>
          </div>
        </div>

        <div className="w-full px-4 py-8 md:px-8 lg:px-28 xl:px-24 2xl:px-48 md:py-12 flex flex-col items-center">
        <ConsultingBanner />
        </div>
      </div>
    </>
  );
};

export default StrangerAndVideo;
