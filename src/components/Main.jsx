import imgMobile from "../assets/mobile/image-header.jpg";
import imgDesktop from "../assets/desktop/image-header.jpg";
import arrow from "../assets/icon-arrow-down.svg";

export const Main = () => {
  return (
    <main>
      <picture>
        <source media="(max-width:640px)" srcSet={imgMobile} />
        <source media="(min-width:641px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="Background header" />
      </picture>
      <p class="absolute font-Fraunces text-[40px] uppercase font-bold
      tracking-[6.25px] text-white text-center w-[327px] top-[144px] left-0 right-0 mx-auto
      
      sm:w-[600px] ">We are creatives</p>
      <img class="absolute top-[294px] left-0 right-0 mx-auto sm:top-[220px]" src={arrow} alt="Flecha"/>
    </main>
  );
};
