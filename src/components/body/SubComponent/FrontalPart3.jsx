import React, { useState } from "react";
import trad from "../../../assets/trading1.svg";
import trad2 from "../../../assets/trading2.svg";
const FrontalPart3 = () => {
  const [size, setSize] = useState(false);
  const handleSize = () => {
    setSize(!size);
  };
  return (
    <div className="h-full  bg-[#FFFFFF] bg-opacity-[95%] w-full">
      <div className="max-w-screen-xl  flex flex-col flex-wrap justify-center items-between mx-auto p-4">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div
              className="border-2 rounded-lg border-black text-[#403F3F] p-5 mt-20 w-full text-center"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: "700",
                fontSize: "65px",
              }}
            >
              Trending Today
            </div>
            <div
              className="text-[#403F3F] mb-6 mt-4"
              style={{
                fontFamily: " 'Poppins', sans-serif",
                fontWeight: "600",
                fontSize: "40px",
              }}
            >
              Powerstride Pro
            </div>
            <div
              className="text-black w-full"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "400",
                fontSize: " 23px",
                lineHeight: "31px",
              }}
            >
              Department of Mechatronics and Industrial rakib hasan man
              Engineering (MIE) in 2015. In undergraduate time and tidetim
              program, 30 students are admitted
            </div>
            <div
              className="flex flex-row my-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <div
                className="text-[#403F3F]"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: "600",
                  fontSize: "30px",
                }}
              >
                Size:
              </div>
              <div style={{ fontSize: "17px", fontWeight: "600" }}>
                <button
                  onClick={handleSize}
                  className={`bg-[#C2F45A] px-5 py-2 ml-5  rounded-lg text-[#403F3F] border-blue-400 hover:border-2`}
                  style={{ boxShadow: "#9ca3af 1px 3px 12px" }}
                >
                  43
                </button>

                <button
                  className="bg-[#C2F45A] px-5 py-2 ml-5 rounded-lg text-[#403F3F] border-blue-400 hover:border-2"
                  style={{ boxShadow: "#9ca3af 1px 3px 12px" }}
                >
                  44
                </button>
                <button
                  className="bg-[#C2F45A] px-5 py-2 ml-5 rounded-lg text-[#403F3F] border-blue-400 hover:border-2"
                  style={{ boxShadow: "#9ca3af 1px 3px 12px" }}
                >
                  45
                </button>
                <button
                  className="bg-[#C2F45A] px-5 py-2 ml-5 rounded-lg text-[#403F3F] border-blue-400 hover:border-2"
                  style={{ boxShadow: "#9ca3af 1px 3px 12px" }}
                >
                  46
                </button>
              </div>
            </div>
            <div>
              <button
                className="bg-[#C2F45A] text-[#403F3F] px-12 py-4 rounded-lg ease-in-out duration-300 hover:scale-110"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: "600",
                  fontSize: "20px",
                  boxShadow: "#9ca3af 1px 3px 12px",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="ml-[100px] mt-20">
            <img src={trad} />
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="mr-[100px] mt-20">
            <img src={trad2} width="436px" height="509px" />
          </div>
          <div className="flex flex-col mb-12">
            <div
              className="border-2 rounded-lg border-black text-[#403F3F] p-5 mt-20 w-full text-center"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: "700",
                fontSize: "65px",
              }}
            >
              Most Selling
            </div>
            <div
              className="text-[#403F3F] mb-6 mt-4"
              style={{
                fontFamily: " 'Poppins', sans-serif",
                fontWeight: "600",
                fontSize: "40px",
              }}
            >
              Rainwash Classic
            </div>
            <div
              className="text-black w-full"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "400",
                fontSize: " 23px",
                lineHeight: "31px",
              }}
            >
              Department of Mechatronics and Industrial rakib hasan man
              Engineering (MIE) in 2015. In undergraduate time and tidetim
              program, 30 students are admitted
            </div>
            <div
              className="flex flex-row my-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <div
                className="text-[#403F3F]"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: "600",
                  fontSize: "30px",
                }}
              >
                Size:
              </div>
              <div style={{ fontSize: "17px", fontWeight: "600" }}>
                <button
                  className="bg-[#C2F45A] px-5 py-2 ml-5 rounded-lg text-[#403F3F]  border-blue-400 hover:border-2"
                  style={{ boxShadow: "#9ca3af 1px 3px 12px" }}
                >
                  43
                </button>
                <button
                  className="bg-[#C2F45A] px-5 py-2 ml-5  rounded-lg text-[#403F3F] border-blue-400 hover:border-2"
                  style={{ boxShadow: "#9ca3af 1px 3px 12px" }}
                >
                  44
                </button>
                <button
                  className="bg-[#C2F45A] px-5 py-2 ml-5  rounded-lg text-[#403F3F] border-blue-400 hover:border-2"
                  style={{ boxShadow: "#9ca3af 1px 3px 12px" }}
                >
                  45
                </button>
                <button
                  className="bg-[#C2F45A] px-5 py-2 ml-5 rounded-lg text-[#403F3F] border-blue-400 hover:border-2"
                  style={{ boxShadow: "#9ca3af 1px 3px 12px" }}
                >
                  46
                </button>
              </div>
            </div>
            <div>
              <button
                className="bg-[#C2F45A] text-[#403F3F] px-12 py-4 rounded-lg ease-in-out duration-300 hover:scale-110"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: "600",
                  fontSize: "20px",
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

export default FrontalPart3;
