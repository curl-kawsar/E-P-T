import React from 'react'
import Image from 'next/image'
import TutorImg from '@/assets/img/girls.png'

export default function Personal() {
  return (
    <section className="max-w-[90%] w-[1280px] mx-auto flex flex-col gap-24 mt-[-5px] pt-12 mb-12">
      <div className="flex flex-col md:flex-row gap-16 md:gap-0 items-center">
        <div className="md:pr-6 w-full md:w-[60%] flex flex-col gap-2 text-center md:text-left">
          <h2 className="bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] inline-block text-transparent bg-clip-text text-4xl md:text-5xl pb-2 font-bold">
            Personalized Tutoring Crafted Just for YOU
          </h2>
          <p className="text-2xl sm:text-[28px] font-medium mt-4 text-[#3A3A3A]">
            Unlike large tutoring companies that rely on set curriculum, we create personalized lessons tailored to your needs.
          </p>
          <p className="text-xl sm:text-2xl text-textSecondary mt-2 text-[#6A497F]">
            As a small company, we thrive on your success, and you're not just another client-you're a vital part of what keeps us going. 
            You'll receive the attention and care you deserve, with tutors who are genuinely invested in your progress.
          </p>
        </div>
        <div className="w-full md:w-[40%] flex md:pl-4">
          <Image
            src={TutorImg}
            alt="Female tutor with glasses in professional attire"
            width={481}
            height={507}
            priority
            className="w-full md:w-[95%] md:mr-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
