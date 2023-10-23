import React from "react";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#000000] overflow-hidden relative -z-50">
      <div className="absolute top-0 -left-48 -rotate-90 w-96 -z-10 max-sm:blur-sm">
        <img src="art.png" alt="" className="" />
      </div>
      <div className="absolute top-1/2 b bg-[#2B79BC] -z-10 rounded-full -right-64 w-72 h-72"></div>
      <div className="flex  flex-wrap py-44 w-[95%] sm:w-[85%] gap-y-8 m-auto items-top xl:justify-around justify-start">
        <div className="flex px-8 flex-col gap-y-4 w-full sm:w-[80%] lg:w-[25%]">
          <div className="flex gap-2 flex-row items-center">
            <img
              src="logoAbu.png"
              alt=""
              className="h-10 w-10 p-2 bg-white rounded-full"
            />
            <h1 className="text-2xl font-bold text-white font-title">
              <span className="text-secondary">Abu</span>-Studio
            </h1>
          </div>
          <p className="text-white flex leading-normal font-body flex-wrap text-sm sm:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            distinctio nesciunt eaque reiciendis veniam officia nulla...
          </p>
          <nav className="flex gap-x-4 py-2">
            <a href="#" className="text-2xl text-[#AD6748]">
              <BiLogoFacebook />
            </a>
            <a href="#" className="text-2xl text-white">
              <BiLogoTwitter />
            </a>
            <a href="#" className="text-2xl text-white">
              <BiLogoInstagram />
            </a>
          </nav>
        </div>
        <div className="flex px-8 flex-col gap-4">
          <h1 className="text-white text-2xl font-bold font-body">Services</h1>
          <nav className="text-white flex flex-col gap-y-3 text-sm sm:text-md">
            <a href="#" className="text-white text-md">
              Consectetur
            </a>
            <a href="#" className="text-white text-md">
              Campaigns
            </a>
            <a href="#" className="text-white text-md">
              Branding
            </a>
            <a href="#" className="text-white text-md">
              Neque eu
            </a>
          </nav>
        </div>
        <div className="flex flex-col px-8 gap-4">
          <h1 className="text-white text-2xl font-bold font-body">RESOURCES</h1>
          <nav className="text-white text-sm sm:text-md flex gap-y-3 flex-col">
            <a href="#" className="text-white text-md">
              Our Work
            </a>
            <a href="#" className="text-white text-md">
              Bolg
            </a>
            <a href="#" className="text-white text-md">
              Team
            </a>
            <a href="#" className="text-white text-md">
              Careers
            </a>
          </nav>
        </div>
        <div className="flex flex-col px-8 gap-4">
          <h1 className="text-white text-2xl font-bold font-body">Help</h1>
          <nav className="text-white text-sm sm:text-md flex gap-y-3 flex-col">
            <a href="#" className="text-white text-md">
              FAQs
            </a>
            <a href="#" className="text-white text-md">
              Contact Us
            </a>
          </nav>
        </div>
        <div className="flex flex-col px-8 gap-4">
          <h1 className="text-white text-2xl font-bold font-body">
            Ready <br /> to get started?
          </h1>
          <button className="p-3 bg-secondary shadow-lg px-8 font-title font-bold text-sm z-10 rounded-lg border-2 border-black transition-all duration-500 drop-shadow-[4px_3px_0_white] cursor-pointer">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="w-full bg-[#141D25] p-8 sm:py-12">
        <div className="flex  flex-wrap w-[95%] sm:w-[85%] gap-y-8 m-auto items-top xl:justify-around justify-start">
          <div className="w-[70%]">
            <h3 className="text-white text-lg font-medium">
              c2023.All Right Reserved.
            </h3>
          </div>
          <div className="flex gap-8">
            <span className="text-white text-lg font-medium">
              Terms & Conditions
            </span>
            <span className="text-white text-lg font-medium">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
