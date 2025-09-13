import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import bg_image from "../../images/back-ground.png";
import bg_image2 from "../../images/pricing.png";

import icon1 from "../../images/Icon1.png";
import icon2 from "../../images/Icon2.png";
import icon3 from "../../images/Icon3.png";
import "../../fonts/fonts.css";
import { useMediaQuery } from "@mui/material";

// Dummy data
const data = [
  {
    icon: icon1,
    heading: "01. Challenge",
    text: "Engage in a riveting experience as you challenge yourself with dynamic quizzes at X Result",
  },
  {
    icon: icon2,
    heading: "02. Elevate",
    text: "Take your skills to new heights with strategic quiz attempts at Zoomies,",
  },
  {
    icon: icon3,
    heading: "03. Improvise",
    text: "Embrace a culture of constant improvement as you improvise and adapt with every quiz session",
  },
];

export default function Attempt_quizes({ isPricing = false }) {
  const theme = useTheme();
  const istabletScreen = useMediaQuery(theme.breakpoints.down("md"));
  const istabletScreen2 = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        backgroundImage: `url(${isPricing ? bg_image2 : bg_image})`, // Corrected background image URL
        position: "relative",
        backgroundColor: "white",
        backgroundSize: "cover",
      }}
    >
      {!isPricing && (
        <>
          <div
            style={{
              opacity: 0.3,
              background:
                "linear-gradient(191deg,rgba(95, 50, 147, 1) 0%, rgba(101, 24, 190, 1) 51%)",
            }}
            className="absolute w-[100%] h-[100%]"
          ></div>

          <div className="w-[300px] h-[400px] rounded-full border bg-[#E35F00]/50 absolute blur-3xl -left-28 top-40 md:top-36"></div>
        </>
      )}
      <div
        className="max-w-[1392px] z-10 relative mx-auto"
        style={{
          // Corrected background image URL
          backgroundSize: "cover",
          height: "100%", // Set height to 100%
          padding: istabletScreen ? "70px 50px" : "70px 50px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography
          style={{
            marginBottom: "16px",
            fontFamily: "Rowdies",
            fontSize: "35px",
          }}
        >
          Why <span style={{ color: "#F58B27" }}> Why Zoomies? </span>
        </Typography>
        <Typography
          style={{
            marginBottom: "32px",
            fontSize: "25px",
            width: istabletScreen ? "100%" : "50%",
            margin: "0 auto",
          }}
        >
          Dive into an{" "}
          <span className=" text-[#F58B27]">
            {" "}
            unparalleled quiz-taking experience
          </span>{" "}
          that's designed exclusively for those who seek knowledge through
          interactive challenges
        </Typography>
        <Grid container justifyContent="center" mt={8} sx={{ width: "100%" }}>
          {data.map((item, index) => (
            <Grid
              item
              xs={12} // mobile: full width
              sm={6} // small tablet: half width
              md={4} // desktop: one-third width
              key={index}
              my={4}
              style={{
                borderLeft:
                  index === 1 && !istabletScreen2
                    ? "1px dashed #fff"
                    : "1px solid transparent",
                borderRight:
                  index === 1 && !istabletScreen
                    ? "1px dashed #fff"
                    : "1px solid transparent",
                padding: istabletScreen ? "10px" : "16px 40px", // reduced for responsiveness
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={item.icon}
                alt={`Icon ${index}`}
                style={{ width: "60px", height: "60px", marginBottom: "16px" }}
              />
              <Typography
                className=" font-[700] e"
                style={{
                  // marginBottom: "15px",
                  marginTop: "10px",

                  // fontFamily: "Rowdies",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                {item.heading}
              </Typography>
              <Typography
                style={{ fontSize: "20px" }}
                className="font-[500] lg:p-[40px] md:p-[20px] sm:p-[10px] p-[10px]  "
              >
                {item.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
