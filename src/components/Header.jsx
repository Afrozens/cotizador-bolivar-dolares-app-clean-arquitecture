import Navbar from "./Navbar";
import iconCalculator from "../assets/icons/icon-calculator.svg";

const Header = () => {
  return (
    <header className="header-main">
      <a href="#">
        <img
          src={iconCalculator}
          alt="icono calculadora"
          className="h-8 w-8 rotate-45 transition-all hover:rotate-0"
        />
      </a>
      <h3 className="ml-2 grow shrink-0 basis-44 font-medium uppercase">
        Cotiza Bs a $
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
