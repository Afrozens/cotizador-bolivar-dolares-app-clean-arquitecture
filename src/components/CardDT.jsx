import { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";
import iconUpdate from "../assets/icons/icon-update.svg";
import iconDate from "../assets/icons/icon-date.svg";
import iconTime from "../assets/icons/icon-time.svg";
import iconArrow from "../assets/icons/icon-arrow.svg";
import logoDT from "../assets/logo-dt.jpg";

const initialValue = {
  day: "",
  hour: "",
  price: null,
};

const CardDT = () => {
  const [values, setValues] = useState(initialValue);
  const { dataApi } = useContext(DataContext);

  useEffect(() => {
    if (dataApi) {
      const { _timestamp, USD } = dataApi;
      setValues({
        day: _timestamp.dia_corta,
        hour: _timestamp.fecha,
        price: USD.dolartoday,
      });
    }
  }, [dataApi]);

  return (
    <div className="card-structure">
      <div className="flex justify-between items-center">
        <h2 className="block mt-[-4px] text-2xl sm:text-3xl font-medium">
          Dolar Today{" "}
          <span className="block mt-[-4px] text-gray-400 text-xs sm:text-sm font-normal">
            Compañia DolarToday
          </span>
        </h2>
        <img src={logoDT} className="h-12 sm:h-16 w-12 sm:w-16 mb-4" />{" "}
      </div>
      <div className="card-ribbon-front left-[-2rem]">
        <p className="card-price justify-end">{values.price}</p>
        <div className="card-ribbon-back left-0 border-l-[13px]"></div>
      </div>
      <div className="mt-4">
        <ul className="p-0 text-xs">
          <li className="card-subtitle">
            <img
              src={iconUpdate}
              alt="icono actualizando"
              className="w-[.9rem] sm:w-6"
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
              Dia: <b>{values.day}</b>
            </span>
          </li>
          <li className="card-subtitle">
            <img
              src={iconTime}
              alt="icono reloj"
              className=" w-[.9rem] sm:w-6"
            />
            <span className="sm:text-lg">
              Hora: <b className="text-[9px] sm:text-lg">{values.hour}</b>
            </span>
          </li>
        </ul>
      </div>
      <button className="card-btn">
        <a
          href="https://dolartoday.com/"
          target="_blank"
          className="font-medium text-lg"
        >
          Ver mas
        </a>
        <img
          src={iconArrow}
          alt="icono flecha"
          className="w-6 h-6 ml-2 hover:translate-x-1 transition-transform"
        />
      </button>
    </div>
  );
};

export default CardDT;
