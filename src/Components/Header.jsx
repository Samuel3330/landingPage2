import { useState } from "react";

//Icons
import { RiMenuFill, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="fixed z-50 top-0 w-full flex flex-row justify-center items-center ">
      <div
        className={`fixed max-sm:w-[100%] bg-white xl:bg-primary xl:h-[12vh] grid xl:grid-cols-5 items-center w-[78%] m-auto ${
          showMenu ? "top-0 justify-center text-center " : "-top-full "
        } xl:static left-0 xl:mt-10 max-xl:grid-rows-5 h-[100vh] transition-all duration-500`}
      >
        <div className="xl:border-[3px] xl:border-black h-full flex items-center justify-center xl:border-r-0">
          <div className="xl:w-[40%] w-[20%] p-0 flex justify-center items-center">
            <img src="logoAbu.png" className="w-[50%]" alt="" />
          </div>
          <div className="w-[50%] flex justify-start  items-center">
            <h1 className="text-lg font-title font-bold">Abu-Studio</h1>
          </div>
        </div>
        <nav
          className={`gap-20 max-xl:pl-24 xl:border-[3px] max-xl:row-span-3 xl:col-span-3 xl:border-black h-full flex items-start xl:items-center justify-center max-xl:flex-col`}
        >
          <a href="#" className="font-title hover:font-bold text-sm">
            Home
          </a>
          <a href="#" className="font-title hover:font-bold text-sm">
            How to work
          </a>
          <a href="#" className="font-title hover:font-bold text-sm">
            Faq
          </a>
          <a href="#" className="font-title hover:font-bold text-sm">
            About Us
          </a>
        </nav>
        <div className="xl:border-[3px] xl:border-black h-full flex items-center max-xl:pl-24 xl:justify-center xl:border-l-0">
          <button className="border-black p-3 bg-secondary shadow-lg px-8 border-2 font-title font-bold text-sm z-10 border-r-[3px] border-b-[3px] hover:bg-black hover:text-white transition-all duration-500">
            Get in Touch
          </button>
        </div>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-2xl fixed top-10 right-0 mr-10 bg-secondary border-2 border-black xl:hidden p-2 z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenuFill />}
      </button>
    </header>
  );
};

export default Header;
