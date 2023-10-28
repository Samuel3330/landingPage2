import React from "react";
import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

const Work = () => {
  return (
    <section className=" w-full overflow-hidden py-20 flex justify-center items-center flex-col gap-y-8 relative">
      <div className="flex justify-center flex-col items-center gap-3">
        <h4 className="font-title font-bold ">Trend Is The Creators NetWork</h4>
        <h1 className="font-body font-bold text-gray-900 text-2xl sm:text-4xl text-center leading-normal">
          How Does Al Video <br /> Editing Work?
        </h1>
      </div>
      <div className="w-[90%] sm:w-[75%] m-auto flex gap-y-8 flex-col lg:flex-row justify-between ">
        <div className="w-[100%] lg:w-[45%] h-48 relative">
          <RiCheckboxBlankCircleFill className="text-base absolute text-[#FFFAF4] p-2 bg-secondary rounded-full box-content top-[83px] -right-5 max-[420px]:right-0" />
          <div className="bg-secondary z-20 flex gap-4 w-[68%] max-[480px]:w-[90%] flex-col py-7 px-5 border-2 shadow-lg border-black rounded-3xl drop-shadow-[-5px_-8px_0_rgba(0,0,0,0.99)]">
            <div className="flex items-center">
              <span>
                <RiCheckboxBlankCircleFill className="text-xl" />
              </span>
              <h1 className="ml-3 font-body font-bold text-md sm:text-lg">
                Choose A Video Template
              </h1>
            </div>
            <p className="ml-8 lg:mr-12 mr-1 text-sm font-body text-gray-800 leading-7">
              Create engaging videos right from the star by using pre-made video
              templates.
            </p>
          </div>
          <div className="w-[60%] absolute top-[95px] right-1 border-b-8 border-secondary h-0 -z-10"></div>
        </div>
        <div className="w-[100%] lg:w-[45%] flex justify-end relative">
          <RiCheckboxBlankCircleFill className="text-base absolute text-[#FFFAF4] p-2 bg-[#3AA4FF] rounded-full box-content top-[83px] -left-5 max-[420px]:left-0" />
          <div className="bg-[#FFFAF4] flex gap-4 w-[68%] max-[485px]:w-[90%] flex-col py-7 px-5 border-2 border-black rounded-3xl box-border">
            <div className="flex items-center">
              <span>
                <RiCheckboxBlankCircleFill className="text-xl text-[#496396]" />
              </span>
              <h1 className="ml-3 font-body font-bold text-md sm:text-lg">
                Edit Video
              </h1>
            </div>
            <p className="ml-8 mr-1 text-sm font-body text-gray-600 leading-7">
              Customize your video footage by adding background music, text,
              transition, animations, videos.
            </p>
          </div>
          <div className="w-[60%] absolute top-[95px] left-1 border-b-8 border-[#3AA4FF] h-0 -z-10"></div>
        </div>
      </div>
      <div className="w-[90%] sm:w-[75%] m-auto flex gap-y-8 flex-col lg:flex-row justify-between ">
        <div className="w-[100%] lg:w-[45%] h-48 relative">
          <RiCheckboxBlankCircleFill className="text-base absolute text-[#FFFAF4] p-2 bg-[#9940D8] rounded-full box-content top-[83px] -right-5 max-[420px]:right-0" />
          <div className="bg-[#FFFAF4] z-20 flex gap-4 w-[68%] max-[480px]:w-[90%] flex-col py-7 px-5 border-2 border-black rounded-3xl">
            <div className="flex items-center">
              <span>
                <RiCheckboxBlankCircleFill className="text-xl text-[#B265E9]" />
              </span>
              <h1 className="ml-3 font-body font-bold text-md sm:text-lg">
                Select An AI Avatar
              </h1>
            </div>
            <p className="ml-8 lg:mr-12 mr-1 text-sm font-body text-gray-800 leading-7">
              We have 150+ AI Avatars that will act as presenters in your video
              and narrate your text.
            </p>
          </div>
          <div className="w-[60%] absolute top-[95px] right-1 border-b-8 border-[#9940D8] h-0 -z-10"></div>
        </div>
        <div className="w-[100%] lg:w-[45%] flex justify-end relative">
          <RiCheckboxBlankCircleFill className="text-base absolute text-[#FFFAF4] p-2 bg-[#F35146] rounded-full box-content top-[83px] -left-5 max-[420px]:left-0" />
          <div className="bg-[#FFFAF4] flex gap-4 w-[68%] max-[485px]:w-[90%] flex-col py-7 px-5 border-2 border-black rounded-3xl box-border">
            <div className="flex items-center">
              <span>
                <RiCheckboxBlankCircleFill className="text-xl text-[#FF6359]" />
              </span>
              <h1 className="ml-3 font-body font-bold text-md sm:text-lg">
                Generate Video
              </h1>
            </div>
            <p className="ml-8 mr-1 text-sm font-body text-gray-600 leading-7">
              Your AI-generated video is done! Share your video clip on your
              Youtube channel embed it in your LMS or simply download it.
            </p>
          </div>
          <div className="w-[60%] absolute top-[95px] left-1 border-b-8 border-[#F35146] h-0 -z-10"></div>
        </div>
      </div>
      <div className="w-[90%] sm:w-[75%] m-auto flex gap-y-8 flex-col lg:flex-row justify-between ">
        <div className="w-[100%] lg:w-[45%] h-48 relative">
          <RiCheckboxBlankCircleFill className="text-base absolute text-[#FFFAF4] p-2 bg-[#DDBB28] rounded-full box-content top-[83px] -right-5 max-[420px]:right-0" />
          <div className="bg-[#FFFAF4] z-20 flex gap-4 w-[68%] max-[480px]:w-[90%] flex-col py-7 px-5 border-2 border-black rounded-3xl">
            <div className="flex items-center">
              <span>
                <RiCheckboxBlankCircleFill className="text-xl text-[#F1D45E]" />
              </span>
              <h1 className="ml-3 font-body font-bold text-md sm:text-lg">
                Paste Your Video Script
              </h1>
            </div>
            <p className="ml-8 lg:mr-12 mr-1 text-sm font-body text-gray-800 leading-7">
              Create engaging videos right from the star by using pre-made video
              templates.
            </p>
          </div>
          <div className="w-[60%] absolute top-[95px] right-1 border-b-8 border-[#DDBB28] h-0 -z-10"></div>
        </div>
        <div className="w-[100%] lg:w-[45%] flex justify-end relative">
          <RiCheckboxBlankCircleFill className="text-base absolute text-[#FFFAF4] p-2 bg-[#00A15A] rounded-full box-content top-[83px] -left-5 max-[420px]:left-0" />
          <div className="bg-[#FFFAF4] flex gap-4 w-[68%] max-[485px]:w-[90%] flex-col py-7 px-5 border-2 border-black rounded-3xl box-border">
            <div className="flex items-center">
              <span>
                <RiCheckboxBlankCircleFill className="text-xl text-[#10BE7B]" />
              </span>
              <h1 className="ml-3 font-body font-bold text-md sm:text-lg">
                Earn More As You Go
              </h1>
            </div>
            <p className="ml-8 mr-1 text-sm font-body text-gray-600 leading-7">
              Customize your video footage by adding background music, text,
              transition, animations, videos.
            </p>
          </div>
          <div className="w-[60%] absolute top-[95px] left-1 border-b-8 border-[#00A15A] h-0 -z-10"></div>
        </div>
      </div>
      <div className="absolute top-0 xl:top-20 -z-10 -right-48 rotate-180 w-96 max-sm:blur-sm">
        <img src="art.png" alt="" className="" />
      </div>
    </section>
  );
};

export default Work;
