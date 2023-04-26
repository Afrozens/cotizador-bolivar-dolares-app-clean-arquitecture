import { motion } from 'framer-motion'
import Image from '../assets/ImageLanding.png'
import { useState } from 'react'

const ImageLanding = () => {
  const [imageLoading, setImageLoading] = useState(true)
  const [pulsing, setPulsing] = useState(true)

  const imageLoaded = () => {
    setImageLoading(false)
    setTimeout(() => setPulsing(false), 600)
  }

  return (
    <motion.img
      src={Image}
      alt="laptop with flowers ilustration"
      className="h-80 w-80 object-cover md:order-last md:h-96 md:w-96 lg:h-[480px] lg:w-[640px]"
      initial={{ height: '100px', opacity: 0 }}
      animate={{
        height: imageLoading ? '100px' : 'auto',
        opacity: imageLoading ? 0 : 1,
      }}
      transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
      onLoad={imageLoaded}
    />
  )
}

export default ImageLanding
