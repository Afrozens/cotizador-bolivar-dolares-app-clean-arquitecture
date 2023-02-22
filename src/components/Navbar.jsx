import { useState } from "react";
import iconHamburguer from "../assets/icons/icon-hamburguer.svg";
import NavbarMobile from "./NavbarMobile";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getDate } from "../data/dolarTodayGets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: date } = useQuery({ queryKey: ["date"], queryFn: getDate });
  return (
    <>
      <button
        onClick={() => {
          setIsMenuOpen(true);
        }}
        className={`lg:hidden ${isMenuOpen && "hidden"}`}
      >
        <img
          src={iconHamburguer}
          alt="icono hamburguesa"
          className="h-10 w-10"
        />
      </button>
      {isMenuOpen && (
        <NavbarMobile
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          date={date}
        />
      )}
      <nav className="hidden lg:block">
        <ul className="flex gap-8 text-lg font-bold">
          <li className="nav-li">
            <Link to="/calculador">Calcular</Link>
          </li>
          <li className="nav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-li">
            <a target="_blank" href="https://github.com/Afrozens">
              Contacto
            </a>
          </li>
          <li className="text-xl text-[#84BA63]">{date}</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
