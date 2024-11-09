import React, { useState } from "react";
import shoe from "../../../assets/shoe1.svg";
import { AiFillStar } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
const Product1 = () => {
  const [love, setLove] = useState("#FFFFFF");
  const color = () => {
    love === "#FFFFFF" ? setLove("#FF0000") : setLove("#FFFFFF");
  };
  return (
    <div className="max-w-screen-xl  flex flex-col flex-wrap justify-center items-between mx-auto p-4 mt-4">
      <div className="w-[290px] h-[170px] border-2 rounded-lg p-4">
        <div className="flex justify-between">
          <div>
            <img src={shoe} />
          </div>
          <div className="flex flex-col justify-between">
            <div
              className="mr-2 cursor-pointer text-[18px] text-[#FFFFFF]"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "500" }}
            >
              Jordan Sniker
            </div>
            <div className="flex flex-row">
              <div className="mr-2">
                <AiFillStar />
              </div>
              <div className="text-[9px]"> &#40;4.6&#41;</div>
            </div>
            <div className="flex flex-row justify-between ">
              <div
                className="text-[#FFFFFF]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: "600",
                  fontSize: "24px",
                }}
              >
                $1200
              </div>
              <button
                className="mt-[5px] mr-2 cursor-pointer ease-in duration-150 hover:scale-110"
                style={{ fontSize: "22.44px", color: `${love}` }}
              >
                <BsFillSuitHeartFill onClick={color} />
              </button>
            </div>

            <div
              className="text-[#B9E757] cursor-pointer ease-in duration-150 hover:scale-110"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "13px" }}
            >
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product1;
