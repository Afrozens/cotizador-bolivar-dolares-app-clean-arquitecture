import { motion } from "framer-motion";
import CardContainer from "../components/CardContainer";

const HomePage = () => {
  return (
    <main className="h-[130vh] lg:h-screen w-full mt-16 bg-gray-200 ">
      <div className="h-2/6 w-full p-2 relative text-center bg-fond-main">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="my-2 sm:mt-8 text-xl sm:text-5xl font-bold tracking-[0.3rem] uppercase"
        >
          Calcula tus bolivares
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-2 text-md sm:text-xl font-light tracking-[0.3rem] uppercase"
        >
          Con las tazas mas populares
        </motion.h2>
      </div>
      <CardContainer />
    </main>
  );
};

export default HomePage;
