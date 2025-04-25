import burguerMenu from "../assets/icon-hamburger.svg";

export const Navbar = () => {
  return (
    <nav class=" bg-white w-[329px] h-[305px] absolute  left-0 right-0 mx-auto top-[106px] flex">
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div>
        <img src={burguerMenu} alt="icono de menu"/>
      </div>
    </nav>
  );
};
