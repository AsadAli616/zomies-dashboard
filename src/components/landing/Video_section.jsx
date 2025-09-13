import React, { useMemo, useState } from "react";
import Btn from "../../images/pause.png";
import videobannerImag from "../../images/banner_right.png.png";
import girlPng from "../../images/girl.png";
import First from "../../images/first.png";
import Second from "../../images/second.png";
import Third from "../../images/third.png";

/**
 * Material-UI Carousel (Custom Implementation)
 * - Uses React state instead of Swiper
 * - Fully responsive with breakpoints
 * - Manual navigation using MUI buttons
 */
export default function VideoSection() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        title: "Aurora Escape",
        subtitle: "Chase the northern lights",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
        tags: ["Travel", "Nature"],
      },
      {
        id: 2,
        title: "Urban Evenings",
        subtitle: "Golden hour in the city",
        img: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=1600&auto=format&fit=crop",
        tags: ["City", "Photography"],
      },
      {
        id: 3,
        title: "Sandy Horizons",
        subtitle: "Dunes and endless skies",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
        tags: ["Desert", "Adventure"],
      },
      {
        id: 4,
        title: "Coastal Calm",
        subtitle: "Waves, wind, and peace",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
        tags: ["Beach", "Relax"],
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    console.log("Previous slide");
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-white flex items-center flex-col gap-2 xl:py-40 justify-center">
      <h4 class="font-bold text-[28px] sm:text-[32px] md:text-[38px] lg:text-[45px] xl:text-[45px] text-[#DE7C06FA] mb-4">
        Tutorials
      </h4>
      <img
        src={First}
        className="absolute z-10 top-40 left-40  lg:w-[80px] md:w-[60px] xms:w-[50px] w-[30px] xl:w-[100px]"
      />
      <img
        src={Second}
        className="absolute top-80  right-10 lg:w-[80px] md:w-[60px] xms:w-[50px] w-[30px] xl:w-[100px]"
      />
      <img
        src={Third}
        className="absolute bottom-10 left-40 lg:w-[80px] md:w-[60px] xms:w-[50px] w-[30px] xl:w-[100px] "
      />

      <p class="font-normal text-[20px] sm:text-[28px] md:text-[34px] text-center lg:text-[40px] xl:text-[40px] text-[#734CCC] mb-2">
        Learn how to use Zoomies to the best of its capabilities{" "}
      </p>
      <div className="flex justify-center items-center md:gap-10  mb-4">
        <button
          aria-label="Previous slide"
          onClick={() => handlePrev()}
          className="  p-2 "
        >
          <svg
            // width="32"
            // height="34"
            className=" xl:w-[32px] xl:h-[34px]   lg:w-[28px] lg:h-[30px]  md:w-[24px] md:h-[26px]  xms:w-[18px] xsm:h-[20px] w-[12px] h-[12px]    "
            viewBox="0 0 32 34"
            fill="none"
          >
            <path
              d="M30 17.0003H2M2 17.0003L16 2.41699M2 17.0003L16 31.5837"
              stroke="#744DCE"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div className="carousel-container  relative xms:w-[80vw] w-[80vw] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] xl:h-[727px] lg:h-[506px] md:h-[336px] xms:h-[206px] max-w-[1373px] rounded-[20px] md:rounded-[60px] overflow-hidden ">
          <div className="w-[100%] absolute z-10 h-[100%] bg-[#FFFAEC]/50 md:rounded-[60px]  rounded-[20px] "></div>
          <img
            src={videobannerImag}
            className="absolute right-0 bottom-0 xms:w-[60px] xms:h-[35px] w-[32px] h-[27px]  lg:w-[179px] lg:h-[150px] xl:w-[203px] xl:h-[174px] object-cover rounded-[60px]"
          />
          <div className=" lg:left-[45%] lg:top-[38%]  xms:left-[40%] xms:top-[32%] left-[35%] top-[28%]  absolute bg-white/20  md:p-4 p-2  rounded-full">
            <div className="  bg-[#F5EBEB]/70  md:p-4 p-2   rounded-full">
              <button
                style={{
                  background:
                    "linear-gradient(70deg,rgba(127, 86, 217, 1) 0%, rgba(33, 181, 115, 1) 85%)",
                }}
                className="  flex justify-center items-center xl:p-6 md:p-4 p-2 rounded-full "
              >
                <img
                  src={Btn}
                  className="xl:w-[55px] xl:h-[63px] lg:w-[35px] lg:h-[43px] md:w-[25px] md:h-[33px] xms:w-[15px] xms:h-[23px] w-[10px] h-[15px]  lg:ml-3 xms:ml-2 ml-1"
                />
              </button>
            </div>
          </div>
          <img
            src={girlPng}
            className="w-full h-auto inset-0 object-cover object-center"
          />
        </div>
        <button
          aria-label="Previous slide"
          onClick={() => handleNext()}
          className="  p-2 "
        >
          <svg
            className=" xl:w-[32px] xl:h-[34px]   lg:w-[28px] lg:h-[30px]  md:w-[24px] md:h-[26px]  w-[18px] h-[20px]   "
            viewBox="0 0 32 34"
            fill="none"
          >
            <path
              d="M2 17.0003H30M30 17.0003L16 2.41699M30 17.0003L16 31.5837"
              stroke="#744DCE"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ;
