import React from "react";
import { Grid, Typography, Button, useMediaQuery } from "@mui/material";
import image1 from "../../images/OBJECTS.png"; // Import your first image
import image2 from "../../images/hero_image2.svg"; // Import your second image
import { useTheme } from "@mui/material/styles";
import heroImg from "../../images/hero-bg2.png";
export default function Hero() {
  const theme = useTheme();

  const istabletScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="  relative  w-[100%] pb-20 mx-auto flex md:flex-row flex-col  "
    >
      <div className="absolute bg-[#81C7A2]/30  -left-56 z-30 xl:top-20  w-[314px] h-[314px] rounded-full blur-2xl"></div>
      <div className="max-w-[1600px]  relative w-[100%] pb-20 mx-auto flex md:flex-row flex-col  ">
        <div>
          <img
            src={image1}
            alt="Image 1"
            className=" bottom-10 z-30 left-20 md:bottom-20 xl:left-28"
            style={{
              position: "absolute",

              maxWidth: "30%",
              maxHeight: "30%",
            }}
          />
        </div>
        <div className=" md:w-[50%] relative z-20   gap-10 md:gap-2 xl:pl-20 md:pl-10  w-[100%] flex flex-col xl:mt-28 md:mt-10 lg:mt-16 items-start ">
          <h3 className="xl:text-[32px]  lg:text-[20px]    text-[16px] mx-auto md:mx-0 text-white/80">
            Your Path to Quiz Brilliance
          </h3>
          <div className="xl:text-[65px] xl:leading-[80px] lg:text-[40px] md:text-[32px] lg:leading-[62px] md:leading-[40px] text-[25px] w-[90vw] leading-[25px]  mx-auto sm:mx-0 text-white md:text-start text-center ">
            <h1 className=" ">Zoomies</h1>
            <span className=" block  ">Where learning levels up.</span>
          </div>
          <div className="mx-auto md:mx-0 my-2">
            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={{ color: "white", borderColor: "white", marginRight: 2 }}
            >
              Demo Quiz{" "}
            </Button>
            <Button
              className="hidden text-[24px]"
              variant="text"
              href="#outlined-buttons"
              sx={{ color: "white" }}
            >
              Get Free Coupons
            </Button>
          </div>
        </div>
        <div className="md:w-[50%] relative z-20   w-[100%] flex flex-col  items-center">
          <img
            src={image2}
            alt="Image 2"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
