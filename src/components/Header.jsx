import Navbar from "./Navbar";
import iconCalculator from "../assets/icons/icon-calculator.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-main">
      <Link to="/">
        <img
          src={iconCalculator}
          alt="icono calculadora"
          className="h-8 w-8 rotate-45 transition-all hover:rotate-0"
        />
      </Link>
      <h3 className="ml-2 grow shrink-0 basis-44 font-medium uppercase">
        Cotiza Bs a $
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
