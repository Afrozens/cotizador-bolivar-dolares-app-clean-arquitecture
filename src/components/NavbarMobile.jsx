import iconCross from "../assets/icons/icon-cross.svg"

const NavbarMobile = ({setIsMenuOpen, date}) => {
  return (
    <>
      <button onClick={() => {setIsMenuOpen(false)}}>
    <img
      src={iconCross}
      alt="icono X"
      className="h-10 w-10"
    />
  </button>
      <nav className="min-h-screen w-full top-16 left-0 z-20 fixed bg-[#000000c0]">
        <ul className="h-48 w-full flex flex-col items-center fixed top-16 left-0 bg-white rounded-b-lg shadow-lg z-40 gap-8 text-2xl font-bold">
          <li className="nav-li">
            Calcular
          </li>
          <li className="nav-li">
            Contacto
          </li>
          <li className="ml-4 text-xl self-start text-[#84BA63]">{date}</li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarMobile