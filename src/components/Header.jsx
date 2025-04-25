import logo from "../assets/logo.svg";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header class="relative bg-red-500">
      <img src={logo} alt="Logo" />
      <Navbar />
    </header>
  );
};
