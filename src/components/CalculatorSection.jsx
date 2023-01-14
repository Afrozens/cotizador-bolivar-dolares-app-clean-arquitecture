import Calculator from './Calculator'

const CalculatorSection = () => {
  return (
    <section className='h-screen w-full flex flex-col justify-evenly items-center bg-gray-200'>
        <h2 className='text-2xl sm:text-3xl mt-16 font-bold text-center tracking-[0.3rem]'>Conversor de Divisas</h2>
        <h3 className='mb-2 text-lg sm:text-xl font-light text-center tracking-[0.3rem]'>Convierte Bolívares a Dólares a través de las tasas de DolarToday</h3>
        <Calculator />
    </section>
  )
}

export default CalculatorSection