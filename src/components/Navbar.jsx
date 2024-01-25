import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../images/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <BrowserRouter>
      <div className="bg-transparent w-full mx-auto">
        <nav className="w-full flex justify-between items-center mx-auto max-w-[1080px] py-3 px-4 md:px-0">
          {/* logo */}
          <div className="flex items-center justify-between w-full md:mx-auto">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            {/* open & close menu */}
            <div onClick={handleClick} className="md:hidden z-40">
              {open ? (
                <FaTimes size={25} className="text-white cursor-pointer" />
              ) : (
                <FaBars size={25} className="text-white cursor-pointer" />
              )}
            </div>
          </div>
          {/* navigation */}
          <div className="hidden items-center md:flex">
            <ul className="flex justify-between gap-6 text-white  text-[14px] items-center">
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Discover
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {/* overlay */}
          {open ? (
            <div className="bg-black/60 fixed w-full h-screen z-20 top-0 left-0"></div>
          ) : (
            ""
          )}

          {/* Mobile */}
          <div
            className={`fixed top-[100px] w-3/4 h-[40%] z-50 duration-500 bg-white ease-in-out py-[10px] px-[10px] rounded-md ${
              open ? "left-[75px]" : "left-[-100%]"
            }`}
          >
            <ul className="flex flex-col justify-between gap-6 text-Black font-bold">
              <li className="border-b-[1px] border-b-gray-300 pb-6 pl-2">
                <a href="#" className="hover:underline underline-offset-8">
                  About
                </a>
              </li>
              <li className="border-b-[1px]  border-b-gray-300 pb-6 pl-2">
                <a href="#" className="hover:underline underline-offset-8">
                  Discover
                </a>
              </li>
              <li className="pb-2 pl-2">
                <a href="#" className="hover:underline underline-offset-8">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
