import ImageLanding from '@/assets/ImageLanding.png'
import Arch from '@/assets/Arch.svg'
import RectangleGradient from '@/assets/RectangleGradient.svg'
import Points from '@/assets/Points.svg'
import RectangleShort from '@/assets/RectangleShort.svg'
import Square from '@/assets/Square.svg'
import iconCalculator from '@/assets/icons/IconCalculator.svg'
import iconNewspaper from '@/assets/icons/IconNewspaper.svg'
import iconPresentation from '@/assets/icons/IconPresentation.svg' 
import { Card } from '@/components'
import { useSelector } from 'react-redux'
import { AppStore } from '@/app/store'

const HomePage = () => {
  const coins = useSelector((state: AppStore) => state.today)

  return (
    <>
      <main className="min-h-screen w-full bg-inherit p-10 overflow-y-hidden mt-16 flex flex-col items-center md:py-24 ">
        <section className="flex flex-col items-center md:flex-row md:gap-8 md:mb-6 lg:gap-14">
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
          <img
            src={ImageLanding}
            alt="laptop with flowers ilustration"
            className="h-80 w-80 object-cover md:order-last md:h-96 md:w-96 lg:h-[480px] lg:w-[640px]"
          />
          <div className="flex flex-col md:order-1 h-96 w-3/4">
            <h1 className="text-4xl font-bold md:text-8xl align-start selft-start">
              <b className="underline decoration-primary decoration-solid decoration-8 underline-offset-1">
                Cotizador
              </b>{' '}
              de Dolares a Bolivares
            </h1>
            <img src={Arch} alt="green arch image" className="object-cover" />
            <button className="bg-secundary px-8 py-4 font-semibold text-lg hover:scale-110 transition rounded-3xl shadow-sm self-center uppercase mt-8 text-white">
              Inicia ahora
            </button>
          </div>
        </section>

        <section id='consultar' className="min-h-[60vh]  w-full flex flex-col items-center justify-center relative md:mt-16">
          <img
            src={RectangleShort}
            alt="green rectangle image"
            className="object-cover self-start h-4 w-14"
          />
          <h2 className="text-3xl font-bold my-12 mx-auto md:text-5xl">
            <b className="underline decoration-primary decoration-solid decoration-8 underline-offset-1">
              Actualizaciones
            </b>{' '}
            en tiempo real.
          </h2>
          <div className="md:flex justify-center items-center md:gap-4 w-full mx-auto lg:gap-0">
            {coins.map((coin, i) => (
              <Card coin={coin} key={i}/>
            ))}
          </div>
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
      </main>
    </>
  )
}

export default HomePage
