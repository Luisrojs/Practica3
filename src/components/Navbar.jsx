import burguerMenu from "../assets/icon-hamburger.svg";

export const Navbar = () => {
  return (
    <nav>
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
