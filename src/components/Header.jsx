import logo from "../assets/logo.svg";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header class="absolute bg-red-500 flex place-content-between w-full px-6 pt-8 font-Barlow font-bold">
      <img src={logo} alt="Logo" />
      <Navbar />
    </header>
  );
};
