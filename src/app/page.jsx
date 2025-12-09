'use client'
import Footer from "@/components/footer/Footer";
import NavHero from "@/components/navhero/NavHero";
import Result from "@/components/result/Result";
import GradeLevels from "@/components/Grades/GradeLevels";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import Learning from "@/components/Learning/Learning";
import Testimonial from "@/components/Testimonial/Testimaonial";
import Personal from '@/components/personal/Personal'
import StrangerAndVideo from '@/components/Stranger/StrangerAndVideo'

export default function Home() {

  

  return (
    <> 
      <NavHero />
      <Learning />
      <GradeLevels />
      <Result />
      <Testimonial />
      <Personal />
      <CaseStudy />
      <StrangerAndVideo />
      <Footer />  
    </>
  );
}
