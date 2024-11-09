import React from "react";
import shadow from "../../../assets/bootShadow.svg";
import boot from "../../../assets//bootHome.svg";
import final from "../../../assets/Group 50.png";
import FrontProduct from "./FrontProduct";

const FrontalPart = () => {
  return (
    <div className="z-10 relative h-full mb-12">
      <div className="flex justify-between">
        <div className="max-w-screen-xl  flex flex-col flex-wrap justify-center items-between mx-auto p-4 mt-4">
          <div
            style={{
              fontFamily: "'Rajdhani', sans-serif",
            }}
            className="text-[70px] lg:text-[107px] text-[#C2F45A] my-2 lg:my-12"
          >
            COMFORT
          </div>
          <div
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: "700px",
            }}
            className="text-[35px] lg:text-[50px] mb-1 text-[#FFFFFF]"
          >
            AWAITS EVERYDAY
          </div>
          <div
            className="w-[40%] text-[#FFFFFF] text-justify font-normal lg:font-bold line-26px"
            style={{
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Department of Urban and Regional Planning Shahriar Abir my name
            Engineering (MIE) in 2015. In undergraduate time and tide wait for
            program, 30 students are admitted in the dep.
          </div>
          <div className="mt-10">
            <button
              className="bg-[#C2F45A] text-black py-4 px-8 font-[500] text-[18px] rounded-lg transition-transform ease-in-out duration-500 transform hover:scale-110"
              style={{ fontFamily: "'Roboto', sans-serif", lineHeight: "25px" }}
            >
              Shop Now <b>&rarr;</b>
            </button>
          </div>
        </div>
        <div>
          <div className="hidden lg:flex item-center absolute right-[18vw] bottom-[34vh]">
            <img src={shadow} />
          </div>
          <div className="hidden lg:flex item-center absolute right-[11vw] bottom-[19vh]  ">
            <img src={boot} className="w-[200px] lg:w-full" />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <FrontProduct />
      </div>
    </div>
  );
};

export default FrontalPart;
