import React from "react";
import { AppBar, Toolbar, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Header from "../../components/landing/Header";
import Attempt_quizes from "../../components/landing/Attempt_quizes";
import Footer from "../../components/landing/Footer";
import Prices from "../../components/landing/Prices";
import BackgroundImage from "../../images/backgroundImage.png";

function PricingPage() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" flex flex-col relative w-[100%] h-[100%] border overflow-hidden"
      >
        {/* <div
          className="absolute z-20  w-[100%] h-[100%] "
          style={{
            opacity: 0.8,
            // backdropFilter: "revert-layer",
            background:
              "linear-gradient(54deg,rgba(95,50,147,1) 0%, rgba(101,24,190,1) 100%)",
          }}
        ></div> */}
        <div className="relative z-30">
          <Header />
        </div>
        {/* <div className="bg-white/80 h-32 z-10  absolute -bottom-10 blur-xl  w-[100%]"></div> */}
        <div className="z-40 relative">
          <Prices />
        </div>
      </div>

      <Attempt_quizes isPricing={true} />

      <Footer />
    </div>
  );
}

export default PricingPage;
