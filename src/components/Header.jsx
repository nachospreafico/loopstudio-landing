import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import HeaderImg from "./../../images/desktop/image-hero.jpg";
import Logo from "./../../images/logo.svg";

import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="relative h-screen">
      <div className="absolute top-6 md:top-10 px-6 flex flex-row justify-between items-center w-full">
        <img src={Logo} className="w-[50%] max-w-[165px] z-20" alt="logo"></img>
        <FontAwesomeIcon
          icon={nav ? faX : faBars}
          size="xl"
          onClick={() => setNav(!nav)}
          className="md:hidden text-white z-20 duration-300"
        />
        <nav className="hidden md:flex flex-row gap-8">
          <a className="text-white py-1 hover:border-b-2 cursor-pointer">
            About
          </a>
          <a className="text-white py-1 hover:border-b-2 cursor-pointer">
            Careers
          </a>
          <a className="text-white py-1 hover:border-b-2 cursor-pointer">
            Events
          </a>
          <a className="text-white py-1 hover:border-b-2 cursor-pointer">
            Products
          </a>
          <a className="text-white py-1 hover:border-b-2 cursor-pointer">
            Support
          </a>
        </nav>
      </div>
      <img
        src={HeaderImg}
        alt="hero section image"
        style={{ filter: "brightness(80%)" }}
        className="object-cover h-screen w-screen absolute z-[-1]"
      />
      <div className="border-2 max-w-[310px] md:max-w-[600px] md:text-7xl md:p-6 p-4 text-5xl absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%] md:left-6 md:translate-x-[0]">
        <h2 className="text-white font-thin ">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h2>
      </div>
      <nav
        className={` bg-black fixed h-screen w-screen z-10 duration-200 md:hidden ${
          nav ? "left-[0]" : "left-[-100%]"
        }`}
      >
        <div className="absolute top-[50%] translate-y-[-50%] left-8 flex flex-col">
          <a className="text-white py-1 hover:border-b-2 cursor-pointer text-2xl font-thin">
            ABOUT
          </a>
          <a className="text-white py-1 hover:border-b-2 cursor-pointer text-2xl font-thin">
            CAREERS
          </a>
          <a className="text-white py-1 hover:border-b-2 cursor-pointer text-2xl font-thin">
            EVENTS
          </a>
          <a className="text-white py-1 hover:border-b-2 cursor-pointer text-2xl font-thin">
            PRODUCTS
          </a>
          <a className="text-white py-1 hover:border-b-2 cursor-pointer text-2xl font-thin">
            SUPPORT
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
