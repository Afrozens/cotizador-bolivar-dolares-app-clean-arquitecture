import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import iconCopy from "../assets/icons/icon-copy.svg";

const BtnCopy = ({ stateCopy }) => {
  return (
    <div>
      <CopyToClipboard text={stateCopy}>
      <motion.button whileHover={{backgroundColor: "#9CA3AF"}} transition={{duration: 0.3 }} onClick={() => toast.success('Texto copiado', {position: 'bottom-right', duration: 1500})} className="bg-gray-300 text-gray-800 font-bold py-2 px-2 rounded items-center inline-flex">
        <motion.img initial={{scale: 0.9}} whileHover={{scale: 1.1, rotate: 15}} transition={{duration: 1}} className="w-8 h-8" src={iconCopy} alt="boton copiar" />
      </motion.button>
    </CopyToClipboard>

    <Toaster />
    </div>
  );
};

export default BtnCopy;
