import { AnimatedWords, Card, ImageLanding } from '@/components'
import { useSelector } from 'react-redux'
import { AppStore } from '@/app/store'
import { motion } from 'framer-motion'
import Arch from '@/assets/Arch.svg'
import RectangleGradient from '@/assets/RectangleGradient.svg'
import Points from '@/assets/Points.svg'
import RectangleShort from '@/assets/RectangleShort.svg'
import Square from '@/assets/Square.svg'
import iconCalculator from '@/assets/icons/IconCalculator.svg'
import iconNewspaper from '@/assets/icons/IconNewspaper.svg'
import iconPresentation from '@/assets/icons/IconPresentation.svg'

const HomePage = () => {
  const coins = useSelector((state: AppStore) => state.today)

  return (
    <>
      <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3}}
      className="min-h-screen w-full bg-inherit p-10 overflow-y-hidden mt-16 flex flex-col items-center md:py-24 ">
        <section className="flex flex-col items-center md:flex-row md:gap-8 mb-16 md:mb-48 lg:gap-14">
          <img
            src={Points}
            alt="more points green image"
            className="object-cover z-[-1] absolute top-0 right-[30%] h-96 w-96 rotate-90 md:right-0"
          />
          <img
            src={RectangleGradient}
            alt="rectangle gradient image"
            className="z-[-1] absolute top-5 right-0 md:top-[10rem] lg:w-[640px] lg:h-[640px] lg:top-0"
          />
          <ImageLanding />
          <div className="flex flex-col md:order-1 h-96 w-3/4">
            <AnimatedWords
              line1="Cotizador de"
              line2="Dolares a"
              line3="Bolivares"
              classText="text-4xl align-start selft-start md:text-8xl"
            />
            <img src={Arch} alt="green arch image" className="object-cover" />
            <button className="bg-secundary px-8 py-4 font-semibold text-lg hover:scale-110 transition rounded-3xl shadow-sm self-center uppercase mt-8 text-white">
              <a href="#consultar">inicia ahora</a>
            </button>
          </div>
        </section>

        <section
          id="consultar"
          className="min-h-[60vh]  w-full flex flex-col items-center justify-center relative md:mt-16"
        >
          <img
            src={RectangleShort}
            alt="green rectangle image"
            className="object-cover self-start h-4 w-14"
          />
          <AnimatedWords
            line1="Actualizaciones en tiempo real"
            classText="text-3xl my-12 mx-auto md:text-5xl"
          />
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:flex justify-center items-center md:gap-4 w-full mx-auto lg:gap-0"
          >
            {coins.map((coin, i) => (
              <Card coin={coin} key={i} />
            ))}
          </motion.div>
          <img
            src={Square}
            alt="yellow square image"
            className="object-cover self-center z-[-1] absolute top-[20%] right-[50%] my-auto md:bottom-[-20%] lg:bottom-0 lg:right-[80%]"
          />
          <img
            src={RectangleShort}
            alt="green rectangle image"
            className="object-cover self-end h-4 w-14 md:my-5 lg:my-10"
          />

          <article className="flex flex-col md:flex-row  gap-6 lg:gap-16">
            <div className="flex flex-col items-center justify-center mb-8 mt-4 ">
              <img
                src={iconCalculator}
                alt="calculator image"
                className="h-16 w-16 rotate-45"
              />
              <p className="font-light text-3xl text-center md:text-2xl">
                Ofrece calculadora de divisas.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-8">
              <img
                src={iconNewspaper}
                alt="newspaper image"
                className="h-16 w-16"
              />
              <p className="font-light text-3xl text-center md:text-2xl">
                Ofrece información actualizada del Dólar.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-8 ">
              <img
                src={iconPresentation}
                alt="presentation image"
                className="h-16 w-16"
              />
              <p className="font-light text-3xl text-center md:text-2xl">
                Ofrece noticias de economía y actualidad.
              </p>
            </div>
          </article>
        </section>
      </motion.main>
    </>
  )
}

export default HomePage
