import burguerMenu from "../assets/icon-hamburger.svg";
import { useState } from "react";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked((prevState) => !prevState);
    console.log(menuClicked);
  };
                  /* MOBILE */
  return (
    <nav class="sm:h-[24px] ">
      <ul
        className={`${
          menuClicked ? "flex" : "hidden"
        } bg-white py-[39px] w-[329px] h-[305px] absolute  left-0 right-0 mx-auto top-[106px] flex-col items-center  place-content-around after:content-[''] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-transparent after:border-b-white after:border-r-white text-DarkGrayishBlue text-xl z-10 

                    /* DESKTOP */

      

      sm:flex font-bold sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:h-full sm:py-0 sm:mt-0 sm:relative sm:text-white
      
      md:w-[500px]`}
      >
        <li class="cursor-pointer">About</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer  bg-Myyellow w-[140px] h-[56px] grid place-content-center rounded-full text-VeryDarkDesaturatedBlue font-Fraunces uppercase sm:bg-white sm:hover:bg-white/25 sm:hover:text-white">
          Contact
        </li>
      </ul>
      <div className="cursor-pointer sm:hidden" onClick={handleClick}>
        <img src={burguerMenu} alt="menu de hamburguesa" />
      </div>
    </nav>
  );
};
