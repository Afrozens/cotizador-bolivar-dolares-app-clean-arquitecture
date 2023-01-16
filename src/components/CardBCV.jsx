import { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";
import iconUpdate from '../assets/icons/icon-update.svg'
import iconDate from '../assets/icons/icon-date.svg'
import iconTime from '../assets/icons/icon-time.svg'
import iconArrow from '../assets/icons/icon-arrow.svg'
import logoBCV from '../assets/logo-bcv.jpg'

const initialValue = {
  day: "",
  hour: "",
  price: null,
};

const CardBCV = () => {
  const [values, setValues] = useState(initialValue);
  const {dataApi} = useContext(DataContext)

  useEffect(() => {
    if (dataApi) {
      const {_timestamp, USD} = dataApi
      setValues({
        day: _timestamp.dia_corta,
        hour: _timestamp.fecha,
        price: USD.sicad2,
      })
    }
  }, [dataApi])
  return (
    <div className="w-64 sm:w-96 mx-auto mt-2 mb-12 my-0 px-8 pt-4 pb-8 rounded-xl border border-b-4 border-gray-600 shadow-md bg-white">
      <div className="flex justify-between items-center">
        <h2 className="block mt-[-4px] text-2xl sm:text-3xl font-medium">
          Dolar BCV <span className="block mt-[-4px] text-gray-400 text-xs sm:text-sm font-normal">Banco central de Venezuela</span>
        </h2>
        <img
          src={logoBCV}
          className="h-12 sm:h-16 w-12 sm:w-16 mb-4"
        />{" "}
      </div>
      <div className="w-56 sm:w-[23.5rem] relative ml-[-0.65rem] py-1 px-4 rounded-t-md rounded-b-md bg-yellow-300">
        <p className="m-0 pt-2 flex text-3xl font-medium before:content-['VES'] before:mr-1 before:font-light before:text-[14px] sm:before:text-[18px]  after:content-['/_1$'] after:ml-1 after:font-light after:text-[14px] sm:after:text-[18px]">{values.price}</p>
        <div className="h-0 w-0 absolute bottom-[-20px] right-0 border-t-[13px] border-t-green-500 border-b-[10px] border-r-[13px] z-[-6]"></div>
      </div>
      <div className="mt-4">
        <ul className="p-0 text-xs">
          <li className="text-gray-600 mb-1 flex text-center gap-2">
          <img src={iconUpdate} alt="icono actualizando" className="w-[.9rem] sm:w-6"/>
            <span className='sm:text-lg'>
              <b>Ultima actualizacion:</b>
            </span>
          </li>
          <li className="text-gray-600 mb-1 flex text-center gap-2">
            <img src={iconDate} alt="icono calendario" className="w-[.9rem] sm:w-6"/>
            <span className='sm:text-lg'>
              Dia: <b>{values.day}</b>
            </span>
          </li>
          <li className="text-gray-600 mb-1 flex text-center gap-2">
            <img src={iconTime} alt="icono reloj" className="w-[.9rem] sm:w-6"/>
            <span className="sm:text-lg">
              Hora: <b className="text-[9px] sm:text-lg">{values.hour}</b>
            </span>
          </li>
        </ul>
      </div>
      <button className="flex justify-center items-center text-center mt-6 py-1 sm:py-2 px-4 sm:px-6 font-bold bg-[#84BA63] border border-b-transparent rounded-full pointer transition-all hover:bg-[#C2CD4B] active:scale-95">
        <a href="https://www.bcv.org.ve/" target="_blank" className="font-medium text-lg">Ver mas</a>
        <img src={iconArrow} alt="icono flecha" className='w-6 h-6 ml-2 hover:translate-x-1 transition-transform'/>
      </button>
    </div>
  );
};

export default CardBCV;
