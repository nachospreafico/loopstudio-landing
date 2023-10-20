import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./../../images/logo.svg";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black md:px-16 py-10 md:grid md:grid-cols-2">
      <div className="flex flex-col mb-8 md:mb-0 gap-6 justify-center md:justify-start items-center md:items-start w-full">
        <img
          src={Logo}
          className="w-[50%] max-w-[165px] z-20 md:text-left"
          alt="logo"
        ></img>
        <nav className="flex flex-col justify-center gap-4 md:text-lg cursor-pointer md:gap-6 md:flex-row">
          <a className="text-white">About</a>
          <a className="text-white">Careers</a>
          <a className="text-white">Events</a>
          <a className="text-white">Products</a>
          <a className="text-white">Support</a>
        </nav>
      </div>
      <div className="flex flex-col gap-4 md:justify-end">
        <div className="m-auto md:m-0 flex md:gap-4 flex-row md:justify-end gap-2 justify-between w-[70%] md:w-full">
          <FontAwesomeIcon
            icon={faFacebook}
            size="xl"
            className="text-white cursor-pointer md:hover:text-blue-600 duration-200"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            size="xl"
            className="text-white cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faPinterest}
            size="xl"
            className="text-white cursor-pointer md:hover:text-red-500 duration-200"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="xl"
            className="text-white cursor-pointer md:hover:text-pink-500 duration-200"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            size="xl"
            className="text-white cursor-pointer md:hover:text-red-600 duration-200"
          />
        </div>
        <p className="text-gray-500 text-center md:text-right">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
