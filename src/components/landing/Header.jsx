import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../fonts/fonts.css";

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className=" relative w-[100vw]  p-4 xl:w-[95vw]  max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center border-white">
          {/* Left Side */}
          <div className="border-white gap-2 flex items-end">
            <img
              src="/logo.png"
              alt="Vite logo"
              className="h-20 w-30   inline-block mr-2"
            />

            {/* Desktop Menu */}
            <div className="hidden md:inline-block text-[1.5vw] xl:text-[24px] font-[700] py-2 leading-[1rem] text-white border-white text-shadow-[0px_5px_4px_rgba(0,0,0,0.3)]">
              <a href="#" className="px-2">
                Home
              </a>
              <a href="#" className="px-2">
                About
              </a>
              <a href="#" onClick={() => navigate("/pricing")} className="px-2">
                Pricing
              </a>
              <a href="#" className="px-2">
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex mt-auto border-white py-1 gap-4 items-center">
            {/* Login Link */}
            <div className="hidden md:block">
              <a
                onClick={() => navigate("/signin")}
                href="#"
                className="text-white text-[1vw]  xl:text-[20px] underline"
              >
                Login
              </a>
            </div>

            {/* Sign-up Button */}
            <button
              id="login-btn"
              onClick={() => navigate("/signup")}
              className="hidden md:block w-[10.1vw] xl:w-[138px] xl:h-[41.27px] xl:text-[20px]  px-4 py-1 text-white text-[1vw] rounded-[10px] font-[700]"
            >
              Sign-up
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden z-10  bg-[#5F3293] duration-300 w-[90%] shadow-xl px-2 py-2    mt-4 flex flex-col absolute gap-2 text-white font-[700]">
            <a href="/" className="px-2 py-1">
              Home
            </a>
            <a href="#" className="px-2 py-1">
              About
            </a>

            <a
              onClick={() => navigate("/pricing")}
              // href="/pricing"
              className="px-2 py-1"
            >
              Pricing
            </a>
            <a href="#" className="px-2 py-1">
              Contact Us
            </a>
            <a
              onClick={() => navigate("/signin")}
              href="login"
              className="px-2 py-1 underline"
            >
              Login
            </a>
            <button
              id="login-btn"
              onClick={() => navigate("/signup")}
              className="px-4 py-1 text-white rounded-[10px] font-[700] mt-2"
            >
              Sign-up
            </button>
          </div>
        )}
      </nav>
      {/* <AppBar
        position="static"
        sx={{ backgroundColor: "rgba(95, 50, 147, 0.5)" }}
      >
        <Toolbar>
          <img src={logo} alt="Logo" style={{ height: 70, margin: '10px 20px' }} />
          <div style={{ flexGrow: 1 }} />
          <Button
            color="inherit"
            sx={{
              fontSize: "16px",
              textDecoration: "underline ",
            }}
            onClick={() =>  navigate("/signin")}
          >
            Login
          </Button>
          <Button
            sx={{
              fontSize: "16px",
              background: "linear-gradient(45deg, #351688 30%, #c9b5ff 115%)",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              margin:"0px 10px",
            }}
            onClick={() =>  navigate("/signup")}
          >
            Signup
          </Button>
        </Toolbar>
      </AppBar> */}
    </div>
  );
}

export default Header;
