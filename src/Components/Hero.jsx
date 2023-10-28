import React from "react";

//Icons

import { SlControlPlay } from "react-icons/sl";
import { TbThumbUpFilled } from "react-icons/tb";
const Hero = () => {
  return (
    <section className="overflow-hidden w-full min-h-[100vh] lg:h-[100vh] py-20 lg:pt-44 bg-primary relative">
      <div className="absolute top-0 xl:top-20 blur-sm -left-48 -rotate-90 w-96 z-0 max-sm:blur-sm">
        <img src="art.png" alt="" className="" />
      </div>
      <div className="grid grid-cols-1 w-[95%] lg:grid-cols-2 sm:w-[90%] xl:w-[78%] m-auto gap-2 gap-y-24 max-w-[1750px] justify-center items-center z-10">
        <div className="xl:gap-8 gap-3 flex flex-col justify-start py-10">
          <span className="font-title lg:text-lg font-bold z-10 xl:text-left text-right">
            Creators Studio
          </span>
          <div className="z-10">
            <h1 className="md:text-6xl xl:text-left text-4xl text-right font-bold font-body">
              Al Video Editor
            </h1>
            <h1 className="md:text-6xl xl:text-left text-4xl text-right font-bold font-body text-[#2F80ED]">
              For Creators
            </h1>
          </div>
          <p className="text-md text-gray-700 xl:text-left text-right z-40">
            Create and videos from text using 'Al video editor. Generate
            profesional videos in just a few minutes.
          </p>
          <div className="flex xl:gap-8 gap-6 items-center py-2 z-20 justify-center xl:justify-start max-[350px]:flex-col">
            <button className="relative xl:px-9 px-4 xl:p-5 p-2 bg-secondary border-[2px] border-black font-bold font-body text-sm xl:text-xl drop-shadow-[5px_5px_0_rgba(0,0,0,0.90)]">
              Edit video with AI
            </button>

            <button className="flex border-[2px] mt-1 border-black items-center text-left xl:pr-12 pr-5 xl:p-6 p-3 rounded-md xl:text-xl text-sm font-body justify-start gap-4">
              {" "}
              <SlControlPlay className="xl:text-xl text-md text-left" /> Watch
              Video
            </button>
          </div>
        </div>
        <div className=" xl:p-4 relative w-full">
          <div className="absolute md:-top-40 -top-24 left-0 rotate-90 z-10">
            <img src="art.png" alt="" />
          </div>
          <div className="w-[75%] flex justify-center items-center m-auto">
            <img
              src="oficina.jpg"
              alt=""
              className="w-full h-auto m-auto bg-cover z-20 bg-[#6F3CD8] sm:border-x-[20px] border-x-[10px] sm:border-y-[10px] border-y-[5px] border-[#6F3CD8] rounded-lg"
            />
          </div>
          <div className="w-[60%] absolute h-72 xl:h-96 -top-20 xl:-top-3 left-8 flex border-x-[20px] border-y-[10px] border-[#6F3CD8] items-center z-0 rounded-lg blur-sm"></div>
          <span className="absolute bg-[#9840C2] p-2 xl:p-4 rounded-full xl:right-0 right-16 xl:-top-10 -top-20 z-40 -rotate-45">
            <TbThumbUpFilled className="text-xl xl:text-3xl text-white" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
