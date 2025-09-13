import React from "react";
import chartImage from "../../images/performance.png"; // Replace with your chart image

export default function PerformanceSection() {
  return (
    <section
      className="relative  overflow-hidden "
      style={
        {
          // background:
          // "linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgba(165, 120, 217, 1) 69%)",
        }
      }
    >
      <div
        className="w-[100%] absolute z-10 h-[200%]  top-50"
        style={{
          background:
            "linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgba(165, 120, 217, 1) 45%, rgba(101, 24, 190, 1) 85%)",
        }}
      ></div>
      <div className="flex my-10 relative z-20 md:my-20 xl:my-20 flex-col md:flex-row items-center ">
        {/* Left - Chart */}
        <div className="flex-1 xl:p-20 w-full">
          <img
            src={chartImage}
            alt="Performance Chart"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Right - Text Content */}
        <div className="flex-1 justify-center flex gap-5  xl:gap-20 items-center  flex-col  text-center md:text-left">
          <h2 className="text-3xl xl:text-[45px] lg:text-[35px] text-[25px] md:text-[25px]  font-extrabold  text-center text-[#3A1F78]">
            Smart Studying,{" "}
            <span className="text-orange-500">Bright Results</span>
          </h2>
          <p className="  xl:text-[24px] lg:text-[20px] md:text-[16px] text-[10px] px-10 text-center text-[#4C2B94] text-lg leading-relaxed">
            With Zoomies, study smart, take quizzes confidently, and watch your
            grades shine bright.
          </p>
          <p className="  xl:text-[24px] lg:text-[20px] md:text-[16px] text-[10px] text-[#4C2B94] text-lg leading-relaxed">
            Your academic success starts here.
          </p>

          {/* Button */}
          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
