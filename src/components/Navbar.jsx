import { useState } from "react";
import iconHamburguer from "../assets/icons/icon-hamburguer.svg";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <button onClick={() => {setIsMenuOpen(true)}} className={`lg:hidden ${isMenuOpen && "hidden"}` }>
    <img
      src={iconHamburguer}
      alt="icono hamburguesa"
      className="h-10 w-10"
    />
  </button>
  {isMenuOpen && <NavbarMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}
      <nav className="hidden lg:block">
        <ul className="flex gap-8 text-lg font-bold">
          <li className="cursor-pointer decoration-4 decoration-[#84BA63] hover:underline">
            Calcular
          </li>
          <li className="cursor-pointer decoration-4 decoration-[#84BA63] hover:underline">
            Contacto
          </li>
          <li className="text-xl text-[#84BA63]">Enero 15, 2023</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
