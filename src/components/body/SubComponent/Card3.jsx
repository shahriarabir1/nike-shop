import React from "react";
import shoe from "../../../assets/shoe5.svg";
const Card3 = () => {
  return (
    <div className="flex relative">
      <div className="w-full h-[500px] max-w-sm bg-white  rounded-2xl shadow">
        <div className="w-full">
          <img src={shoe} height="234px" width="100%" />
        </div>
        <div className="flex flex-col justify-center">
          <div
            className="text-black ml-10 mt-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "28px" }}
          >
            Pop Snikers
          </div>
          <div
            className="text-[#000000] ml-10 text-justify pr-10 mt-3"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Department of Mechatronics and Indan Engineering (MIE) in 2015. In
            undergmar program, 30 students are man time and tide wait for none
            ok
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="text-[#000000] ml-10 mt-3"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "28px",
                fontWeight: "600",
              }}
            >
              $28,000
            </div>
            <div className="text-black mt-3">
              <button
                className="bg-[#C2F45A] rounded-3xl px-7 py-3 mr-10 ease-in-out duration-150 hover:scale-110"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "14px",
                  boxShadow: "#9ca3af 1px 3px 12px",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
