import { motion } from "framer-motion";
import iconUpdate from "../assets/icons/icon-update.svg";
import iconDate from "../assets/icons/icon-date.svg";
import iconTime from "../assets/icons/icon-time.svg";
import iconArrow from "../assets/icons/icon-arrow.svg";
import logoDT from "../assets/logo-dt.jpg";
import { useQuery } from "react-query";
import { getCoin } from "../data/dolarTodayGets";

const CardDT = () => {
  const { data: coin, isLoading } = useQuery({
    queryKey: ["coinDT"],
    queryFn: () => getCoin("DT"),
    refetchOnWindowFocus: true,
    cacheTime: 0,
    staleTime: 0,
  });
  return (
    <div className="card-structure">
      <div className="flex justify-between items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="block mt-[-4px] text-2xl md:text-3xl font-medium"
        >
          Dolar Today{" "}
          <span className="block mt-[-4px] text-gray-400 text-xs md:text-md font-normal"></span>
        </motion.h2>
        <img src={logoDT} className="h-12 md:h-16 w-12 md:w-16 mb-4" />{" "}
      </div>
      <div className="card-ribbon-front left-[-2rem]">
        <motion.p
          initial={{ scaleY: 0.5, color: "#fde047" }}
          animate={isLoading && { scaleY: 1, color: "#000" }}
          transition={{ duration: 1 }}
          className="card-price justify-end"
        >
          {coin ? coin.price.toFixed(2) : ""}
        </motion.p>
        <div className="card-ribbon-back left-0 border-l-[13px]"></div>
      </div>
      <div className="mt-4">
        <ul className="p-0 text-xs">
          <li className="card-subtitle">
            <motion.img
              initial={{ rotate: 15 }}
              animate={isLoading && { rotate: 360 }}
              whileTap={{ rotate: 360 }}
              transition={{ duration: 5 }}
              src={iconUpdate}
              alt="icono actualizando"
              className="w-[.9rem] md:w-6 cursor-pointer  "
            />
            <span className="md:text-lg">
              <b>Ultima actualizacion:</b>
            </span>
          </li>
          <li className="card-subtitle">
            <img
              src={iconDate}
              alt="icono calendario"
              className="w-[.9rem] md:w-6"
            />
            <span className="md:text-lg">
              Dia:{" "}
              <motion.b
                initial={{ color: "#fff" }}
                animate={isLoading && { color: "#4B5563" }}
                transition={{ delay: 0.5, duration: 2 }}
              >
                {coin ? coin.day : ""}
              </motion.b>
            </span>
          </li>
          <li className="card-subtitle">
            <img
              src={iconTime}
              alt="icono reloj"
              className=" w-[.9rem] md:w-6"
            />
            <span className="md:text-lg">
              Hora:{" "}
              <motion.b
                initial={{ color: "#fff" }}
                animate={isLoading && { color: "#4B5563" }}
                transition={{ delay: 0.5, duration: 2 }}
                className="text-[9px] md:text-base"
              >
                {coin ? coin.hour : ""}
              </motion.b>
            </span>
          </li>
        </ul>
      </div>
      <button className="card-btn">
        <a
          href="https://dolartoday.com/"
          target="_blank"
          className="font-medium text-lg flex"
        >
          Ver mas
          <img
            src={iconArrow}
            alt="icono flecha"
            className="w-6 h-6 ml-2 hover:translate-x-1 transition-transform"
          />
        </a>
      </button>
    </div>
  );
};

export default CardDT;
