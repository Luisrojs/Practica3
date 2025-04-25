import burguerMenu from "../assets/icon-hamburger.svg";
import { useState } from "react";

export const Navbar = () => {

  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked(prevState=>!prevState

    );
    console.log(menuClicked)
  };
  

  return (
    <nav class="">
      <ul className={`bg-white py-[39px] w-[329px] h-[305px] absolute  left-0 right-0 mx-auto top-[106px] flex-col items-center  place-content-around after:content-[''] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-transparent after:border-b-white after:border-r-white text-DarkGrayishBlue text-xl ${menuClicked ? 'flex' : 'hidden'}`}>

        <li class="cursor-pointer bg-Myyellow w-[140px] h-[56px] grid place-content-center rounded-full">
          About
        </li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer font-Fraunces text-VeryDarkDesaturatedBlue">
          Contact
        </li>
      </ul>
      <div className="cursor-pointer" onClick={handleClick}>
        <img src={burguerMenu} alt="menu de hamburguesa" />
      </div>
    </nav>
  );
};
