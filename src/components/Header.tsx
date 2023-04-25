import { Link } from 'react-router-dom'
import Exchange from '@/assets/Exchange.png'
import iconHamburger from '@/assets/icons/IconHamburger.svg'
import iconCross from "@/assets/icons/IconCross.svg"
import {  useSelector } from 'react-redux'
import {  useState } from 'react'
import { AppStore } from '@/app/store'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const { dateShort } = useSelector((state: AppStore) => state.time)

  return (
    <>
      <header className="h-16 w-full fixed top-0 left-0 flex justify-between  items-center py-4 bg-third shadow-md z-40 px-8">
        <div className="text-center cursor-pointer hover:scale-110 transition">
          <Link to="/">
            <img
              src={Exchange}
              alt="exchange logotype"
              className="object-cover h-8 w-8 mx-auto"
            />
          </Link>
          <h3 className="ml-2 grow shrink-0 basis-44 font-medium uppercase">
            Cotiza Bs a $
          </h3>
        </div>
        {!isOpen ? (
          <button className="z-[99]" onClick={() => setIsOpen(!isOpen)}>
            <img
              src={iconHamburger}
              alt="hamburguer icon"
              className="h-12 w-12 cursor-pointer hover:scale-110"
            />
          </button>
        ) : (
          <button className="z-[99]" onClick={() => setIsOpen(!isOpen)}>
            <img
              src={iconCross}
              alt="quit icon"
              className="h-12 w-12 cursor-pointer hover:scale-110"
            />
          </button>
        )}
        {isOpen && (
          <nav className="w-full h-full px-16 pt-32 fixed top-0 right-0 bg-third flex flex-col gap-4 shadow-md sm:w-96 sm:h-72 sm:absolute sm:right-6 sm:top-16 sm:p-8  z-[50] ">
            <ul
              className="w-full h-36 flex flex-col gap-12 font-light text-3xl tracking-widest sm:gap-4"
              onClick={() => setIsOpen(false)}
            >
              <li className="hover:scale-110 transition">
                <Link to="/">Inicio</Link>
              </li>
              <li className="hover:scale-110 transition">
                <Link to="/">Consulta</Link>
              </li>
              <li className="hover:scale-110 transition">
                <Link to="/calculadora">Calcula</Link>
              </li>
              <li className="hover:scale-110 transition">
                <a href="">Noticias</a>
              </li>
              <li className="text-2xl sm:text-lg text-secundary font-bold self-end">
                {dateShort}
              </li>
            </ul>
          </nav>
        )}
      </header>
  
    </>
  )
}

export default Header
