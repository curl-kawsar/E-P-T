"use client";

// Dependencies
import Image from 'next/image';
import React from 'react';
import MobileLogo from "../../assets/Navhero/logo.png";
import Logo from "../../assets/Navhero/logo.png";
import DeskLogo from "../../assets/Navhero/deslogo.png";
import Link from 'next/link';
import { useState, useEffect } from "react";
import BookIcon from "../../assets/floting-icons/book.png";
import TriRuler from "../../assets/floting-icons/tri-ruler.png";
import pencil from "../../assets/floting-icons/pencil.png";
import Rocket from "../../assets/floting-icons/rocket.png";


export default function NavHero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      };
    
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        const animateIcons = () => {
          const icons = document.querySelectorAll('.floating-icon');
          icons.forEach((icon) => {
            icon.animate(
              [
                { transform: 'translateY(0px)', opacity: 0.5 },
                { transform: 'translateY(-10px)', opacity: 0.7 },
                { transform: 'translateY(0px)', opacity: 0.5 },
              ],
              {
                duration: 4000, 
                iterations: Infinity, 
              }
            );
          });
        };
        animateIcons();
      }, []);
      
  return (
    <section className="h-[100vh] z-50 bg-gradient-to-b from-[#BD5AFC] to-[#01B7FD] flex relative overflow-hidden">
      {/* Navbar */}
      <nav className={`w-full ${
        isScrolled 
          ? 'fixed bg-black/30 backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.25)] border-b border-white/10' 
          : 'absolute'
        } lg:px-20 pt-1 top-0 z-20 transition-all duration-300`}>
        <div className="px-4 sm:px-6 py-4">
          {/* Top bar with logo and hamburger */}
          <div className="flex justify-between items-center relative">
            {/* Logo and Title */}
            <div className="flex items-center space-x-2 w-1/4">
              <Image src={MobileLogo} alt="Logo" width={50} height={50} className="block sm:hidden" />
              <Image src={DeskLogo} alt="Logo" width={200} height={200} className="hidden sm:block" />
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2">
              <ul className="text-base flex space-x-8 text-white font-bold">
                <li>
                  <Link 
                    href="/" 
                    className={`hover:opacity-80 relative ${
                      activeLink === '/' ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white' : ''
                    }`}
                    onClick={() => setActiveLink('/')}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#subjects" 
                    className={`hover:opacity-80 relative ${
                      activeLink === '#subjects' ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white' : ''
                    }`}
                    onClick={() => setActiveLink('#subjects')}
                  >
                    Subjects
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#grades" 
                    className={`hover:opacity-80 relative ${
                      activeLink === '#grades' ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white' : ''
                    }`}
                    onClick={() => setActiveLink('#grades')}
                  >
                    Grades
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hamburger Button */}
            <button
              className="sm:hidden p-2 z-30 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>

            {/* Contact Button */}
            <div className="hidden sm:block w-1/4 text-right">
              <a 
                href="https://calendly.com/exclusiveprivatetutoring/free-call" 
                target="_blank" 
                className="py-2 px-4 rounded-lg text-base text-white bg-gradient-to-b from-[#01B7FD] to-[#007FB0] hover:opacity-80 transition duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-[90%] w-[1280px] mx-auto flex flex-col pt-28">
        {/* Call Button */}
        <a
          href="https://wa.me/12169784772"
          className="flex mb-10 flex-row gap-4 items-center p-[4px] bg-white mx-auto rounded-lg shadow-sm"
        >
          <div className="w-[40px] h-[40px] bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] rounded-lg text-white flex">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="m-auto"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
            </svg>
          </div>
          <div className="text-[#6D6D6D] pr-4 flex flex-row items-center">
            <span className='hidden sm:inline'>We're Open! </span>
            <span className="text-black font-medium pl-2">Call : +1 (216) 978-4772</span>
          </div>
        </a>

        {/* Main Content */}
        <div className="m-auto flex flex-col pb-44">
          <h1 className="text-white text-4xl sm:text-[80px] font-bold text-center leading-[40px] sm:leading-[80px]">
            Strong Foundations
            <br />
            <span>Strong Grades</span>
          </h1>
          <p className="mt-10 text-xl sm:text-[32px] text-center text-white font-medium mb-10">
            Experts who make it fun and easy, reigniting the love of learning
          </p>
          <a
            href="https://calendly.com/exclusiveprivatetutoring/free-call"
            target="_blank"
            className="py-[14px] px-12 text-center bg-white rounded-xl mx-auto flex hover:bg-gray-200 transition duration-200 shadow-lg relative z-10"
          >
            <p className="text-lg sm:text-3xl font-extrabold mx-auto bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] inline-block text-transparent bg-clip-text">
              Book Your Free Consultation
            </p>
          </a>
        </div>
      </div>

      {/* Curve SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1300 230"
        className="absolute bottom-0 w-full"
      >
        <path
          fill="#FEFEFF"
          fillOpacity="1"
          d="M0,200L80,200C160,200,320,210,480,200C640,190,800,160,960,160C1120,160,1280,190,1360,210L1440,220L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      {/* Floating Icons */}
      <Image
        src={BookIcon}
        alt="Book Icon"
        width={100}
        height={100}
        className="absolute left-[15%] bottom-[30%] z-10 floating-icon"
        loading="lazy"
      />
      <Image
        src={TriRuler}
        alt="Tri-Ruler Icon"
        width={100}
        height={100}
        className="absolute left-[20%] top-[30%] z-10 floating-icon"
        loading="lazy"
      />
      <Image
        src={pencil}
        alt="Pencil Icon"
        width={100}
        height={100}
        className="absolute right-[15%] bottom-[30%] z-10 floating-icon"
        loading="lazy"
      />
      <Image
        src={Rocket}
        alt="Rocket Icon"
        width={100}
        height={100}
        className="absolute right-[20%] top-[30%] z-10 floating-icon"
        loading="lazy"
      />

      {/* Mobile Navigation and Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#1E1B3A] z-20">
          <div className="flex justify-between items-center px-4 py-4">
            <div className="flex items-center space-x-2">
              <Image src={Logo} alt="Logo" width={40} height={40} />
              <span className="text-white font-bold">Exclusive Private Tutoring</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-[calc(100%-80px)]">
            <div className="flex flex-col items-center space-y-8">
              <a href="tel:+12169784772" className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <div className="w-8 h-8 bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] rounded-lg flex items-center justify-center">
                  <svg
                    stroke="currentColor"
                    fill="white"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                  </svg>
                </div>
                <span className="text-white">Call : +1 (216) 978-4772</span>
              </a>

              <nav className="flex flex-col items-center space-y-6 text-white text-2xl font-medium">
                <Link 
                  href="/" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveLink('/');
                  }}
                  className={`relative ${
                    activeLink === '/' ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white' : ''
                  }`}
                >
                  Home
                </Link>
                <Link 
                  href="#subjects" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveLink('#subjects');
                  }}
                  className={`relative ${
                    activeLink === '#subjects' ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white' : ''
                  }`}
                >
                  Subjects
                </Link>
                <Link 
                  href="#grades" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveLink('#grades');
                  }}
                  className={`relative ${
                    activeLink === '#grades' ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white' : ''
                  }`}
                >
                  Grades
                </Link>
              </nav>

              <a
                href="https://calendly.com/exclusiveprivatetutoring/free-call"
                target="_blank"
                className="mt-8 py-3 px-8 bg-gradient-to-b from-[#01B7FD] to-[#007FB0] text-white rounded-xl font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}