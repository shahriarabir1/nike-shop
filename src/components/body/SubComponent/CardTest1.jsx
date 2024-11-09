import React from "react";
import abir from "../../../assets/Shahriar Abir.png";
import { AiFillStar } from "react-icons/ai";
const CardTest1 = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full h-[500px] max-w-sm bg-[#FFFFFF] border border-gray-200 rounded-lg shadow ">
        <div className="flex justify-end px-4 pt-4">
          <div
            id="dropdown"
            className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Export Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between h-[500px] py-10">
          <img
            className="w-[120px] h-[120px] mb-3 rounded-full shadow-lg"
            src={abir}
            alt="Bonnie image"
          />
          <h5
            className="mb-1 text-xl font-medium text-gray-900 dark:text-white"
            style={{
              fontFamily: " 'Poppins', sans-serif",
              fontWeight: "600",
              fontSize: "25px",
            }}
          >
            Shahriar Abir
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Full Stack Software Engineer
          </span>
          <span
            className="text-sm text-[#000000] text-center mx-5 mt-5"
            style={{
              fontFamily: "'Roboto' ,sans-serif",
              fontSize: "15px",
            }}
          >
            Full Stack Developer in web application, android and desktop
            application. Web Development with MERN stack , Android with React
            Native and Software development with Python and C++. Also expert in
            Machine Learning and Deep Learning and deploy those AI into
            application.
          </span>
          <span className="text-sm text-[#000000] text-center m-5 flex">
            <AiFillStar style={{ color: "#C2F45A", fontSize: "25px" }} />
            <AiFillStar style={{ color: "#C2F45A", fontSize: "25px" }} />
            <AiFillStar style={{ color: "#C2F45A", fontSize: "25px" }} />
            <AiFillStar style={{ color: "#C2F45A", fontSize: "25px" }} />
            <AiFillStar style={{ color: "#C2F45A", fontSize: "25px" }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTest1;
