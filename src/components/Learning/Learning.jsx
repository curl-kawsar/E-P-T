"use client";

import React from 'react'
import Image from 'next/image'
import BoyImg from '@/assets/learning/boy.png'


export default function Learning() {
  return (
    <section className="max-w-[90%] w-[1280px] mx-auto flex flex-col gap-24 mt-[-5px] pt-12">
      <div className="flex flex-col md:flex-row gap-16 md:gap-0 items-center">
        <div className="md:pr-6 w-full md:w-[60%] flex flex-col gap-2 text-center md:text-left">
          <h2 className="bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] inline-block text-transparent bg-clip-text text-4xl md:text-5xl pb-2 font-bold">
            Falling Behind in Class?<br /> Not Anymore!
          </h2>
          <p className="text-2xl sm:text-[28px] font-medium mt-4 text-[#3A3A3A]">
            Good teaching makes even the most confusing subjects clear!
          </p>
          <p className="text-xl sm:text-2xl text-textSecondary mt-2 text-[#6A497F]">
            Each subject has a core structure that must be mastered before tackling more advanced material. 
            With the right guidance, your child can build a strong academic base, making future learning 
            easier and more effective.
          </p>
        </div>
        <div className="w-full md:w-[40%] flex md:pl-4">
          <Image
            src={BoyImg}
            alt="Student celebrating academic success"
            width={481}
            height={507}
            priority
            className="w-full md:w-[95%] md:mr-auto"
          />
        </div>
      </div>
    </section>
  )
}
