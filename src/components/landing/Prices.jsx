import "../../fonts/fonts.css";
import Month from "../../images/monthly.png"; // Import your image
import tick from "../../images/tick.svg"; // Import your image

import Annually from "../../images/Group.svg"; // Import your second image
import BiAnnually from "../../images/Bi-Annually.png"; // Import your chart image
const plans = [
  {
    title: "1 Month",
    price: "10,000.00",
    features: 5,
    isPopular: false,
    image: Month,
  },
  {
    title: "Bi-Annually",
    price: "52,000.00",
    features: 7,
    isPopular: true,
    image: BiAnnually,
  },
  {
    title: "Annually",
    price: "100,000.00",
    features: 5,
    isPopular: false,
    image: Month,
  },
];

export default function Prices() {
  return (
    <div>
      <h2 className="font-[700] mx-auto flex justify-center text-white text-[32px]  xl:text-[4vw] mt-10">
        Pricing Plan
      </h2>
      <div className="flex flex-col md:flex-row gap-5 lg:gap-8 xl:gap-10 px-5  justify-center max-w-[15]   my-20 mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative pt-6   pb-10 w-full rounded-b-[34px]  md:rounded-b-[44px] lg:rounded-b-[60px] font-[700] ${
              plan.isPopular
                ? "bg-gradient-to-b from-purple-400 lg:h-[697px] md:h-[540px] xl:w-[451px] xms:w-[80vw] w-[90vw] mx-auto md:mx-0  via-purple-500  to-purple-700 text-white shadow-2xl  "
                : "bg-[#F5F5F5] text-gray-800 shadow-lg border  lg:h-[615px] md:h-[515px]  xms:w-[80vw]  w-[90vw] mx-auto md:mx-0 xl:w-[394px] border-gray-200"
            }`}
          >
            {/* User Icon */}
            <div className="flex justify-center">
              <div className={`p-3 `}>
                <img
                  src={plan.image}
                  alt={plan.title}
                  className={`${
                    plan.isPopular
                      ? "w-[63.9px] h-[58px] "
                      : "w-[26px] h-[40px] "
                  }`}
                />
              </div>
            </div>

            {/* Plan Title */}
            <h3
              className={`lg:text-[36px] text-[24px] font-[700] text-center mb-8 ${
                plan.isPopular ? "text-white" : "text-[#5B5B5D]"
              }`}
            >
              {plan.title}
            </h3>

            {/* Features */}
            <div className="">
              {Array.from({ length: plan.features }).map((_, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-3">
                  <div
                    className={`px-1  md:ml-33  py-1 rounded-full ${
                      plan.isPopular
                        ? " mb-1 lg:mb-3 ml-5 lg:ml-10  "
                        : "mb-1 lg:mb-2 ml-5 lg:ml-10 "
                    }`}
                  >
                    {plan.isPopular ? (
                      <img
                        src={Annually}
                        alt="Tick icon"
                        className="w-[80%]  lg:w-[100%]"
                      />
                    ) : (
                      <img src={tick} alt="Tick icon" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Price */}
            <div
              className={`text-center flex ${
                plan.isPopular
                  ? "  mt-5 lg:mt-14 md:pl-8  pl-12  xl:pl-16 lg:pl-14"
                  : "mt-28 pl-12 md:pl-8   lg:pl-12"
              }   gap-2    mx-auto `}
            >
              <div
                className={`font-medium mb-1 ${
                  plan.isPopular
                    ? "text-white/80 md:text-xl text-2xl lg:text-[26px] xl:text-[36px]"
                    : "text-gray-500 md:text-xl text-2xl lg:text-[26px] xl:text-3xl "
                }`}
              >
                PKR
              </div>
              <div
                className={` font-bold ${
                  plan.isPopular
                    ? "text-white md:text-xl text-2xl lg:text-[26px] xl:text-[36px] "
                    : "text-purple-600 md:text-xl text-2xl lg:text-[26px] xl:text-3xl "
                }`}
              >
                {plan.price}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mb-10 xl:mb-20">
        <button
          id="login-btn"
          className="lg:text-[20px] md:text-[16px] xl:text-[22px] py-2 lg:py-2 xl:py-3 rounded-[10px] text-white font-semibold mx-auto px-6 md:px-8 lg:px-10 leading-[22px]  "
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
