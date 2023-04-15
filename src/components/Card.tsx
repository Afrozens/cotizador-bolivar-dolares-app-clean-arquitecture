import iconUpdate from '@/assets/icons/IconUpdate.svg'
import iconDate from '@/assets/icons/IconDate.svg'
import iconTime from '@/assets/icons/IconTime.svg'
import iconArrow from '@/assets/icons/IconArrow.svg'
import LogoBCV from "@/assets/LogoBCV.jpg"

const Card = () => {
  return (
    <div className="card-structure">
      <div className="flex justify-between items-center">
        <h2 className="block mt-[-4px] text-2xl md:text-3xl font-medium">
          Dolar BCV{' '}
          <span className="block mt-[-4px] text-gray-400 text-xs md:text-md font-normal">
            Banco central de Venezuela
          </span>
        </h2>
        <img src={LogoBCV} className="h-12 md:h-16 w-12 md:w-16 mb-4" />{' '}
      </div>
      <div className="card-ribbon-front left-4 md:left-0">
        <p className="card-price">24</p>
        <div className="card-ribbon-back right-0 border-r-[13px]"></div>
      </div>
      <div className="mt-4">
        <ul className="p-0 text-xs">
          <li className="card-subtitle">
            <img
              src={iconUpdate}
              alt="icono actualizando"
              className="w-[.9rem] md:w-6 cursor-pointer"
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
              Dia: <b className="text-[9px] md:text-base">""</b>
            </span>
          </li>
          <li className="card-subtitle">
            <img
              src={iconTime}
              alt="icono reloj"
              className="w-[.9rem] md:w-6"
            />
            <span className="md:text-lg">
              Hora:{' '}
              <b className="text-[9px] md:text-base">""</b>
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
  )
}

export default Card
