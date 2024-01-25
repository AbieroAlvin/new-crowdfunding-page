import logo from "../images/logo-mastercraft.svg";
import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import TriggerModalButton from "./Buttons/TriggerModalButton";

import About from "./About";
import { FaBookmark } from "react-icons/fa";

const Hero = () => {
  const { backers, money } = useContext(AppContext);
  const [bookmark, setBookmark] = useState(false);

  const toggleBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
    <div className="flex flex-col items-center justify-center font-primary absolute top-[-4rem] w-full gap-8 max-w-[680px]">
      <div className="flex flex-col items-center px-8 rounded-xl shadow-xl w-[90%] relative py-6 bg-white">
        <img src={logo} alt="/" className="absolute top-[-2rem]" />
        <div className="text-center py-4">
          <h1 className="text-2xl text-Black font-bold ">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-Darkgray pt-4">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>
        <div className="flex w-full gap-2 md:space-x-32 py-4 justify-between">
          <TriggerModalButton
            text="Back this project"
            className="bg-Moderatecyan px-[3.1rem] hover:bg-Darkcyan lg:px-11"
          />

          <div
            className="flex items-center md:bg-gray-200 md:rounded-full md:pr-7 group cursor-pointer"
            onClick={toggleBookmark}
          >
            <span
              className={` ${
                bookmark ? "bg-Moderatecyan" : "bg-gray-400"
              } p-4 rounded-full cursor-pointer group-hover:bg-green-500`}
            >
              <FaBookmark
                size={16}
                className={`${bookmark ? "text-gray-300" : "text-gray-700"}`}
              />
            </span>
            <span
              className={`hidden font-bold md:block md:pl-4 
          ${bookmark ? "text-Moderatecyan" : "text-gray-700"}`}
            >
              {bookmark ? "Bookmarked" : "Bookmark"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-8 rounded-xl shadow-xl w-[90%]  py-6 bg-white gap-6">
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-16 md:items-center md:justify-between">
          <div className="flex flex-col text-center gap-2 items-center md:border-r-[1px] md:border-Darkgray md:pr-8">
            <span className="text-3xl font-bold">
              ${money.toLocaleString()}
            </span>
            <span className="text-Darkgray pb-1 md:pb-0">
              of $100,000 backed
            </span>
            <div className="w-[60%] bg-Darkgray h-[1px] md:hidden"></div>
          </div>

          <div className="flex flex-col text-center gap-2 items-center md:border-r-[1px] md:border-Darkgray md:pr-8">
            <span className="text-3xl font-bold">
              {backers.toLocaleString()}
            </span>
            <span className="text-Darkgray pb-1 md:pb-0">total backers</span>
            <div className="w-[70%] bg-Darkgray h-[1px] md:hidden"></div>
          </div>
          <div className="flex flex-col text-center gap-2 md:pr-8">
            <span className="text-3xl font-bold">56</span>
            <span className="text-Darkgray">days left</span>
          </div>
        </div>

        <div className="w-full h-[14px] rounded-full bg-gray-300">
          <div className="w-[70%] rounded-full bg-Moderatecyan h-full"></div>
        </div>
      </div>

      <About />
    </div>
  );
};

export default Hero;
