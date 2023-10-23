import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ title, description, mode = false, isOn = false }) => {
  const [showMenu, setShowMenu] = useState(isOn, true);
  const colorWhite = mode ? "text-black" : "text-white";
  return (
    <div className="w-full">
      <div
        className={`w-[95%] sm:w-[90%] lg:w-[60%] flex m-auto flex-col rounded-xl bg-red-300 justify-center items-center transition-all duration-500 shadow-lg ${
          mode ? "drop-shadow-[-5px_-6px_0_rgba(0,0,0,0.90)]" : ""
        }`}
      >
        <div
          className={`flex h-32 sm:h-20 w-full items-center justify-center rounded-t-xl  ${
            mode ? "bg-secondary" : "bg-black"
          }`}
        >
          <div
            className={`w-[10%] flex items-center justify-start text-center border-r-2 h-[100%] ${
              showMenu ? "border-b-2" : "border-b-none"
            } ${mode ? "border-black" : "border-white"}`}
          >
            <span className={`text-3xl font-bold ${colorWhite}`}>Q</span>
          </div>
          <div
            className={`border-black pl-6 h-full items-center flex w-[70%] transition-all duration-500 ${
              showMenu ? "border-b-2" : "border-none"
            } ${mode ? "border-black" : "border-white"}`}
          >
            <p
              className={`text-md sm:text-xl font-title font-bold ${colorWhite}`}
            >
              {title}
            </p>
          </div>
          <div
            className={`h-full flex justify-end items-center w-[10%] ${
              showMenu ? "border-b-2" : "border-b-none"
            } ${mode ? "border-black" : "border-white"}`}
          >
            <button onClick={() => setShowMenu(!showMenu)} className="text-2xl">
              {showMenu ? (
                <IoIosArrowUp
                  className={`cursor-pointer transition-all duration-500 ${colorWhite}`}
                />
              ) : (
                <IoIosArrowDown
                  className={`cursor-pointer transition-all duration-500 ${colorWhite}`}
                />
              )}
            </button>
          </div>
        </div>
        <div
          className={`w-full flex items-center justify-center rounded-b-xl ${
            showMenu ? "h-32 sm:h-20 " : "h-0"
          } ${mode ? "bg-secondary" : "bg-black"} transition-all duration-500`}
        >
          <div
            className={`w-[10%] items-center justify-start text-center h-[100%] border-r-2 transition-all duration-500 ${
              showMenu ? "flex" : "hidden"
            } ${mode ? "border-black" : "border-white"}`}
          >
            <span className={`text-3xl font-bold ${colorWhite}`}>A</span>
          </div>
          <div
            className={`pl-6 h-full items-center flex w-[70%] transition-all duration-500 ${
              showMenu ? "flex delay-500" : "hidden"
            } ${mode ? "border-black" : "border-white"}`}
          >
            <p className={`font-title text-sm font-bold ${colorWhite}`}>
              {description}
            </p>
          </div>
          <div
            className={`h-full flex justify-end items-center w-[10%] ${
              mode ? "border-black" : "border-white"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
