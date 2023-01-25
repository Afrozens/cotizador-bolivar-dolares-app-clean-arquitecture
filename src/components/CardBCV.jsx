import { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";
import { motion } from "framer-motion";
import iconUpdate from "../assets/icons/icon-update.svg";
import iconDate from "../assets/icons/icon-date.svg";
import iconTime from "../assets/icons/icon-time.svg";
import iconArrow from "../assets/icons/icon-arrow.svg";
import logoBCV from "../assets/logo-bcv.jpg";

const initialValue = {
  day: "",
  hour: "",
  price: null,
};

const CardBCV = () => {
  const [values, setValues] = useState(initialValue);
  const { dataApi, loading } = useContext(DataContext);

  useEffect(() => {
    if (dataApi) {
      const { _timestamp, USD } = dataApi;
      setValues({
        day: _timestamp.dia_corta,
        hour: _timestamp.fecha,
        price: USD.sicad2,
      });
    }
  }, [dataApi]);
  return (
    <div className="card-structure">
      <div className="flex justify-between items-center">
        <h2 className="block mt-[-4px] text-2xl sm:text-3xl font-medium">
          Dolar BCV{" "}
          <span className="block mt-[-4px] text-gray-400 text-xs sm:text-sm font-normal">
            Banco central de Venezuela
          </span>
        </h2>
        <img src={logoBCV} className="h-12 sm:h-16 w-12 sm:w-16 mb-4" />{" "}
      </div>
      <div className="card-ribbon-front left-4 sm:left-0">
        <motion.p
          initial={{ scaleY: 0.5, color: "#fde047" }}
          animate={loading && { scaleY: 1, color: "#000" }}
          transition={{ duration: 1 }}
          className="card-price"
        >
          {values.price && (values.price).toFixed(2)}
        </motion.p>
        <div className="card-ribbon-back right-0 border-r-[13px]"></div>
      </div>
      <div className="mt-4">
        <ul className="p-0 text-xs">
          <li className="card-subtitle">
            <motion.img
              initial={{ rotate: 15 }}
              animate={loading && { rotate: 360 }}
              whileTap={{ rotate: 360 }}
              transition={{ duration: 5 }}
              src={iconUpdate}
              alt="icono actualizando"
              className="w-[.9rem] sm:w-6 cursor-pointer"
            />
            <span className="sm:text-lg">
              <b>Ultima actualizacion:</b>
            </span>
          </li>
          <li className="card-subtitle">
            <img
              src={iconDate}
              alt="icono calendario"
              className="w-[.9rem] sm:w-6"
            />
            <span className="sm:text-lg">
              Dia:{" "}
              <motion.b
                initial={{ color: "#fff" }}
                animate={loading && { color: "#4B5563" }}
                transition={{delay: 0.5, duration: 2 }}
              >
                {values.day}
              </motion.b>
            </span>
          </li>
          <li className="card-subtitle">
            <img
              src={iconTime}
              alt="icono reloj"
              className="w-[.9rem] sm:w-6"
            />
            <span className="sm:text-lg">
              Hora:{" "}
              <motion.b
                initial={{ color: "#fff" }}
                animate={loading && { color: "#4B5563" }}
                transition={{delay: 0.5, duration: 2 }}
                className="text-[9px] sm:text-lg"
              >
                {values.hour}
              </motion.b>
            </span>
          </li>
        </ul>
      </div>
      <button className="card-btn">
        <a
          href="https://www.bcv.org.ve/"
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

export default CardBCV;
