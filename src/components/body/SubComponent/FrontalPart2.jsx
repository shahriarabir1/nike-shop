import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";

const FrontalPart2 = () => {
  return (
    <div className="h-full  bg-[#403F3F]">
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          className="border-2 border-[#B9E757] w-screen text-center text-[#B9E757] rounded-lg py-2 mt-10"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: "700px",
            fontSize: "65px",
          }}
        >
          Our Best Collection
        </div>
        <div className="flex flex-col w-screen items-between">
          <div className="flex flex-col items-center lg:flex-row justify-between my-20">
            <div className="mb-12">
              <Card1 />
            </div>
            <div className="mb-12">
              <Card2 />
            </div>
            <div>
              <Card3 />
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row justify-between my-20">
            <div className="mb-12">
              <Card4 />
            </div>
            <div className="mb-12">
              <Card5 />
            </div>
            <div>
              <Card6 />
            </div>
          </div>
          <div className="mb-20  flex justify-center">
            <button
              className="bg-[#C2F45A] text-[#000000] rounded-lg py-5 px-10 ease-in-out duration-500 hover:scale-110"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "500",
                fontSize: "20px",
              }}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontalPart2;
