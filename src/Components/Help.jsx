import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";

const Help = () => {
  return (
    <section className="py-20 w-full bg-[#FAEDDE] overflow-hidden">
      <div className="flex items-center justify-center flex-col lg:flex-row w-[90%] lg:w-[78%] m-auto">
        <div className="lg:w-[50%] w-[100%] lg:p-8 p-2 flex flex-col gap-5">
          <h4 className="font-title font-bold sm:text-md text-sm">
            HOW IT WORKS
          </h4>
          <h1 className="text-3xl xl:text-5xl font-bold xl:leading-[4rem]">
            How Clould AI Help Your <br /> Workflow?
          </h1>
          <p className="xl:text-sm text-lg text-gray-600 xl:mr-24">
            We don't call you "creators" for nothing! Every piece of content
            created on insense is a piece of art - and for each of these master
            pieces, there's a Brand ready to appreciate it!
          </p>
          <p className="xl:text-sm text-lg text-gray-600 xl:mr-24">
            We don't call you "creators" for nothing! Every piece of content
            created on insense is a piece of art
          </p>
          <button className="relative flex justify-between items-center rounded-lg mt-12 sm:w-[70%] w-[100%] xl:pl-9 pl-4  bg-secondary text-left font-bold font-body xl:text-xl drop-shadow-[-5px_-6px_0_rgba(0,0,0,0.90)] shadow-lg">
            We find and match you with <br /> the best brand.
            <div className="h-full bg-[#DCEA32] rounded-r-lg rounded-b-lg py-9 px-5">
              <SlArrowRight className=" text-5xl max-[420px]:text-lg" />
            </div>
          </button>
        </div>
        <div className="lg:w-[50%] w-[100%]">
          <img src="help.svg" alt="" className="w-full" />
        </div>
      </div>
      <div className="w-full relative flex justify-center items-center">
        <PiArrowBendDoubleUpRightBold className="absolute rotate-180 text-[#D6DDEA] text-[100px] lg:text-[190px]" />
      </div>
    </section>
  );
};

export default Help;
