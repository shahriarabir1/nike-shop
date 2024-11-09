import React from "react";
import { PiFacebookLogoLight } from "react-icons/pi";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
const FooterElement = () => {
  return (
    <div className="h-full lg:h-[610px] w-full bg-[#FFFFFF] text-black">
      <div className="flex flex-col items-center lg:flex-row justify-between mx-10">
        <div className="flex flex-col my-10">
          <div
            className="text-black "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "26px",
              fontWeight: "900",
            }}
          >
            SOCIAL MEDIA
          </div>
          <div className="flex">
            <div>
              <PiFacebookLogoLight
                className="mt-6"
                style={{
                  color: "black",
                  fontSize: "80px",
                }}
              />
            </div>
            <div className="w-16 h-16 border-[3px] border-black rounded-full flex justify-center items-center mt-8 ml-4">
              <AiFillYoutube
                style={{
                  color: "black",
                  width: "44px",
                  height: "21px",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className="my-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "27px",
              fontWeight: "900",
            }}
          >
            Quick Line
          </div>
          <ul
            className="flex flex-col h-[264px] justify-between"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "20px",
              fontWeight: "900",
            }}
          >
            <Link to="">Home</Link>
            <Link to="">About</Link>
            <Link to="">Contact</Link>
            <Link to="">Drive</Link>
            <Link to="">Question Bank</Link>
            <Link to="">Department Head</Link>
          </ul>
        </div>
        <div>
          <div
            className="my-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "27px",
              fontWeight: "900",
            }}
          >
            Resource
          </div>
          <ul
            className="flex flex-col h-[240px] justify-between"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "20px",
              fontWeight: "900",
            }}
          >
            <li>Cart</li>
            <li>Checkout</li>
            <li>Terms/Condition</li>
            <li>My Account</li>
            <li>Job Link</li>
          </ul>
        </div>
        <div>
          <div
            className="my-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "27px",
              fontWeight: "900",
            }}
          >
            Contact Us
          </div>
          <ul
            className="flex flex-col h-[240px] justify-between"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "20px",
              fontWeight: "900",
            }}
          >
            <li className="flex items-center">
              <div>
                <AiFillPhone style={{ fontSize: "60px" }} />
              </div>
              <div>+8801719665557</div>
            </li>
            <li className="flex items-center">
              <div>
                <GrLocation style={{ fontSize: "60px" }} />
              </div>
              <div>Raojan,Chittagong</div>
            </li>
            <li className="flex items-center">
              <div>
                <HiOutlineMail style={{ fontSize: "60px" }} />
              </div>
              <div>shahriarabirjob@gmail.com</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterElement;
