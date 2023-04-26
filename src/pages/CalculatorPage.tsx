import { AppStore } from '@/app/store'
import { ButtonCopy } from '@/components'
import { CoinsTypes } from '@/models'
import { useState, useEffect, ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
const CalculatorPage = () => {
  const [optionUSD, setOptionUSD] = useState<string>('')
  const [priceUSD, setPriceUSD] = useState<number>(0)
  const [priceVES, setPriceVES] = useState<number>(0)
  const coins = useSelector((state: AppStore) => state.today)

  const handleUsdChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && Number(e.target.value) <= 9999) {
      setPriceUSD(Number(e.target.value))
    }
  }
  const handleVesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && Number(e.target.value) <= 9999) {
      setPriceVES(Number(e.target.value))
    }
  }

  useEffect(() => {
    if (optionUSD === CoinsTypes.DolarToday) {
      setPriceUSD(1)
      setPriceVES(coins[0].price)
    } else if (optionUSD === CoinsTypes.DolarBcv) {
      setPriceUSD(1)
      setPriceVES(coins[1].price)
    }

    return () => {
      setPriceUSD(0.0)
      setPriceVES(0.0)
    }
  }, [optionUSD])

  useEffect(() => {
    if (optionUSD === CoinsTypes.DolarToday) {
      setPriceVES(priceUSD * coins[0].price)
    } else if (optionUSD === CoinsTypes.DolarBcv) {
      setPriceVES(priceUSD * coins[1].price)
    }
  }, [priceUSD])

  useEffect(() => {
    if (optionUSD === CoinsTypes.DolarToday) {
      setPriceUSD(priceVES / coins[0].price)
    } else if (optionUSD === CoinsTypes.DolarBcv) {
      setPriceUSD(priceVES / coins[1].price)
    }
  }, [priceVES])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[70vh] w-full bg-inherit p-10 overflow-y-hidden mt-16 flex flex-col items-center md:py-24"
    >
      <h2 className="text-4xl font-bold tracking-widest py-4 capitalize underline decoration-primary decoration-solid decoration-4 underline-offset-1 text-center md:text-5xl">
        conversor
      </h2>

      <div className="flex flex-col bg-fourth max-w-2xl h-96 w-full p-8 rounded-md shadow-md">
        <span className="text-xl font-semibold tracking-widest pt-4 pb-8 text-center md:text-2xl lg:text-3xl">
          {`USD ${priceUSD ? Number(priceUSD).toFixed(2) : 0.0} = VES ${
            priceVES ? Number(priceVES).toFixed(2) : 0.0
          }`}
        </span>

        <div>
          <div className="flex gap-6">
            <label htmlFor="usd" className="relative grow">
              <input
                type="number"
                onChange={handleUsdChange}
                min="1"
                step="0.01"
                value={priceUSD && Number(priceUSD).toFixed(2)}
                aria-label="Cantidad"
                placeholder="Cantidad"
                className="h-12 w-full rounded-3xl focus:outline-1 focus:outline-secundary pl-14 text-lg mb-6 disabled:bg-white"
                disabled={!Boolean(optionUSD)}
              />
              <div className="absolute inset-y-0 top-[-30%] left-0 pl-4 flex items-center pointer-events-none">
                USD
              </div>
            </label>
            <ButtonCopy stateCopy={String(priceUSD)} />
          </div>
          <div className="flex gap-6 justify-center w-full grow">
            <label htmlFor="ves" className="relative grow">
              <input
                type="number"
                onChange={handleVesChange}
                min="1"
                step="0.01"
                value={priceVES && Number(priceVES).toFixed(2)}
                aria-label="Cantidad"
                placeholder="Cantidad"
                className="h-12 w-full rounded-3xl focus:outline-1 focus:outline-secundary pl-14 text-lg mb-6 disabled:bg-white"
                disabled={!Boolean(optionUSD)}
              />
              <div className="absolute inset-y-0 top-[-30%] left-0 pl-4 flex items-center pointer-events-none">
                VES
              </div>
            </label>
            <ButtonCopy stateCopy={String(priceVES)} />
          </div>
        </div>

        <select
          name="coin"
          onChange={(e) => setOptionUSD(e.target.value)}
          className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:border-secundary focus:bg-white outline-secundary block w-full mb-6 p-2.5 md:text-lg cursor-pointer"
        >
          <option value="">Elige una opcion en dolares</option>
          <option value={CoinsTypes.DolarToday}>Dolar Today</option>
          <option value={CoinsTypes.DolarBcv}>Dolar BCV</option>
        </select>
      </div>
    </motion.section>
  )
}

export default CalculatorPage
