import React, { useState } from "react";
import nike from "../../assets/nike.svg";
import { FaUser } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(!search);
  };
  return (
    <div className="relative z-20">
      <nav className="bg-[#2a2828] border-gray-200 mt-7 dark:bg-gray-900">
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src={nike} className="h-8 mr-3" alt="Flowbite Logo" />
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white text-[19px] hover:text-[#C2F45A]  font-medium rounded-lg  px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FaUser />
            </button>
            <button
              type="button"
              className="text-white text-[29px] hover:text-[#C2F45A]  font-medium rounded-lg  px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <IoMdNotificationsOutline />
            </button>
            <button
              type="button"
              className="text-white text-[29px] hover:text-[#C2F45A]  font-medium rounded-lg  px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <AiOutlineSearch onClick={handleSearch} />
            </button>
            <div
              className={`absolute top-20 mt-5 flex justify-end mr-[18vw] ${
                search ? "flex" : "hidden"
              }`}
            >
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block px-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  lg:w-[15vw]  md:w-[20vw] sm:w-[20vw] focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={handleNav}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full  md:flex  md:w-auto md:order-1 ${
              open ? "flex" : "hidden"
            } `}
            id="navbar-cta"
          >
            <ul className="flex flex-col  text-white text-[18px] font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-500 bg-opacity-50  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#2a2828] ">
              <li>
                <Link
                  to="/"
                  className="block   py-2 pl-3 pr-4   rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500  hover:text-[#C2F45A]"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block   py-2 pl-3 pr-4   rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500  hover:text-[#C2F45A]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="block   py-2 pl-3 pr-4   rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500  hover:text-[#C2F45A]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block   py-2 pl-3 pr-4   rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500  hover:text-[#C2F45A]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
