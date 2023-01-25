import Calculator from "./Calculator";
import { motion } from "framer-motion";

const CalculatorSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[80vh] w-full flex flex-col justify-evenly items-center bg-gray-200"
    >
      <h2 className="text-2xl sm:text-4xl mt-16 p-2 font-bold text-center tracking-[0.4rem]">
        Conversor de Divisas
      </h2>
      <h3 className=" text-lg sm:text-2xl mb-2 p-2 font-light text-center tracking-[0.3rem]">
        Convierte Bolívares a Dólares a través de las tasas de DolarToday
      </h3>
      <Calculator />
    </motion.section>
  );
};

export default CalculatorSection;
