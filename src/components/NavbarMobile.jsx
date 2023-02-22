import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import iconCross from "../assets/icons/icon-cross.svg";

const variants = {
  open: { opacity: 1, height: "300px" },
  closed: { opacity: 0, height: "50px" },
};

const NavbarMobile = ({ isMenuOpen, setIsMenuOpen, date }) => {
  return (
    <>
      <button
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        <img src={iconCross} alt="icono delete" className="h-10 w-10" />
      </button>
      <nav className="min-h-screen w-full top-16 left-0 z-20 fixed bg-[#000000c0]">
        <motion.ul
          layout
          initial={{ height: "60px" }}
          animate={isMenuOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.3 }}
          className="h-80 w-full flex flex-col justify-evenly items-center fixed top-16 left-0 bg-white rounded-b-lg shadow-lg z-40 gap-8 text-2xl font-bold"
        >
          <motion.li
            initial={{ color: "#fff", opacity: 0 }}
            animate={{ color: "#000", opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="nav-li mt-4"
          >
            <Link
              to="/calculador"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Calcular
            </Link>
          </motion.li>
          <motion.li
            initial={{ color: "#fff", opacity: 0 }}
            animate={{ color: "#000", opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="nav-li"
          >
            <Link
              to="/"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            initial={{ color: "#fff", opacity: 0 }}
            animate={{ color: "#000", opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="nav-li"
          >
            <a
              onClick={() => {
                setIsMenuOpen(false);
              }}
              target="_blank"
              href="https://github.com/Afrozens"
            >
              Contacto
            </a>
          </motion.li>
          <motion.li
            initial={{ color: "#ffffff0", opacity: 0 }}
            animate={{ color: "#84BA63", opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="ml-4 text-xl self-start"
          >
            {date}
          </motion.li>
        </motion.ul>
      </nav>
    </>
  );
};

export default NavbarMobile;
