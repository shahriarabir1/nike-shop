import React from "react";
import CardTest1 from "./CardTest1";

const Testi = () => {
  return (
    <div className="bg-[#403F3F] h-full w-full">
      <div className="max-w-screen-xl  flex flex-col flex-wrap justify-center items-between mx-auto p-4 ">
        <div
          className="text-center text-[#C2F45A] mt-10"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: "700",
            fontSize: "65px",
          }}
        >
          Our Testimonial
        </div>
        <div
          className="text-center text-[#FFFFFF]"
          style={{
            fontFamily: " 'Poppins', sans-serif",
            fontWeight: "500",
            fontSize: "28px",
          }}
        >
          The Standard of Web Design and Development
        </div>
        <div
          className="text-center text-[#FFFFFF]"
          style={{
            fontFamily: " 'Poppins', sans-serif",
            fontWeight: "500",
            fontSize: "28px",
          }}
        >
          Design your dream and develop realistic
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-between mt-12">
          <div className="mb-12">
            <CardTest1 />
          </div>
          <div className="mb-12">
            <CardTest1 />
          </div>
          <div className="mb-12">
            <CardTest1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testi;
