import logo from "../assets/logo.svg";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header class=" absolute w-full px-6 pt-8  font-Barlow">
      <div class="flex place-content-between">
        <img src={logo} alt="Logo" />
        <Navbar />
      </div>
    </header>
  );
};
