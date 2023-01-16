import Navbar from "./Navbar";
import iconCalculator from "../assets/icons/icon-calculator.svg";

const Header = () => {
  return (
    <header className="h-16 w-full fixed top-0 left-0 flex justify-start items-center p-4 bg-white shadow-lg z-40">
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
