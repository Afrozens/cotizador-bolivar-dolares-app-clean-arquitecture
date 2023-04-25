import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <section className='min-h-screen w-full bg-inherit p-10 overflow-y-hidden mt-16 flex flex-col items-center md:py-24'>
      <img src="https://media1.giphy.com/media/Ss5nyLJYk0hY5HgnH9/giphy.gif?cid=ecf05e47uov0qkkv64mo8vlav6zsho165e6cy1muyb48jhuw&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="gift 404 " />
      <h2 className='text-center text-4xl text-red-500 uppercase p-4'>error 404</h2>
      <button onClick={() => navigate("/")} className="bg-red-500 px-8 py-4 font-semibold text-lg hover:scale-110 transition rounded-3xl shadow-sm self-center uppercase mt-8 text-white">
              Volver
            </button>
    </section>
  )
}

export default ErrorPage