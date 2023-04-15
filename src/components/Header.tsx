import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="h-16 w-full fixed top-0 left-0 flex justify-start items-center p-4 bg-third shadow-md z-40">
      <Link to="/">📘</Link>
      <h3 className="ml-2 grow shrink-0 basis-44 font-medium uppercase">
        Cotiza Bs a $
      </h3>
    </header>
  )
}

export default Header