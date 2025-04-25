import imgMobile from "../assets/mobile/image-header.jpg";
import imgDesktop from "../assets/desktop/image-header.jpg"


export const Main = () => {
  return (
    <main>
      <picture>
        <source media="(max-width:640px)" srcSet={imgMobile} />
        <source media="(min-width:641px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="Background header" />
      </picture>
    </main>
  );
};
