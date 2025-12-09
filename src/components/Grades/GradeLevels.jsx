import React, { useEffect } from "react";
import GradeCard from "./GradeCard";
import Image from "next/image";
import SubjectCard from "./SubjectCard";

const GradeLevels = () => {
  const grades = [
    { grade: "Elementary", avatar: "/elementary.png" },
    { grade: "Middle School", avatar: "/Middleschool.png" },
    { grade: "High School", avatar: "/Highschool.png" },
    { grade: "College/Adult", avatar: "/College-Adult.png" },
  ];

  const subjects = [
    { subject: "Math", avatar: "/math.png" },
    { subject: "English", avatar: "/english.png" },
    { subject: "Science", avatar: "/science.png" },
    { subject: "History", avatar: "/history.png" },
    { subject: "Foreign Language", avatar: "/foreign-lng.png" },
    { subject: "Class Test", avatar: "/class-test.png" },
    { subject: "IB Classes", avatar: "/ib-classes.png" },
    { subject: "AP Classes", avatar: "/ap-classes.png" },
  ];


  const handleScroll = () => {
    const hash = window.location.hash;

    if (hash === "#grades") {
      const gradesElement = document.getElementById("grades");
      gradesElement?.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#subjects") {
      const subjectsElement = document.getElementById("subjects");
      subjectsElement?.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "" || hash === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  return (
    <>
      <div  className="relative mt-14 w-full flex flex-col justify-center text-center lg:px-12 xl:px-8 2xl:px-10 overflow-hidde">
        <h1 id="grades" className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0199D3]">
          Grade Levels
        </h1>

        <Image
          src="/Grade-Vector.png"
          alt=""
          className="absolute h-screen w-full z-20 top-12 left-0 "
          width={500}
          height={500}
        />

        {/* Grade Cards */}
        <div 
        className="mt-10 mb-16 z-30 py-3 px-4 flex flex-col sm:flex-row flex-wrap gap-5 justify-center lg:gap-16 xl:gap-6 lg:px-20 xl:px-14 2xl:px-20">
          {grades.map((level) => (
            <GradeCard level={level} key={level.grade} />
          ))}
        </div>

        <h1 id="subjects" className="text-4xl lg:text-5xl xl:text-5xl font-extrabold bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] bg-clip-text text-transparent">
          Subjects
        </h1> 
        <div 
        className="w-full flex flex-col sm:flex-row flex-wrap gap-6 justify-center mt-10 lg:gap-6 xl:gap-6 lg:px-10 xl:px-10 2xl:px-20">
          {subjects.map((sub) => (
            <SubjectCard sub={sub} key={sub.subject} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GradeLevels;
