import React from "react";
import Image from "next/image";

const ConsultingBanner = () => {
  return (
    <div className="relative w-full mt-14 rounded-3xl bg-gradient-to-b from-[#01B7FD] to-[#007FB0] flex flex-col justify-center text-center pt-6 lg:pt-8 h-64 lg:h-60 shadow-lg overflow-hidden">
      {/* Text and Button (Higher z-index) */}
      <div className="relative z-20 px-4">
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-3 sm:mb-7">
          Ready to Reignite the Love of Learning?
        </h2>
        <button className="px-8 py-1.5 sm:py-3 bg-white text-[#01B7FD] lg:text-xl font-medium rounded-lg shadow-md hover:bg-transparent hover:ring-2 hover:ring-white hover:text-white transition-all duration-300">
          Book Your Free Consultation
        </button>
      </div>

      {/* Vector Image (Lower z-index) */}
      <Image
        src="/Consult-Vector.png"
        alt="Decorative Vector"
        className="absolute bottom-0 left-0 w-full z-10"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ConsultingBanner;
