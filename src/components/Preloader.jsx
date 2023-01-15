import { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";

const Preloader = () => {
  const [isReceived, setIsReceived] = useState(false);
  const { dataApi } = useContext(DataContext);

  useEffect(() => {
    if (dataApi) {
      setIsReceived(true)
    }
  }, [dataApi]);

  return (
    <div className={`min-h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-gray-300 z-50  transition-all ${isReceived && "opacity-0 hidden"}`}>
      <div className="h-2 w-20 relative bg-lime-500 rounded-lg animate-moverSides before:content-[''] before:absolute before:h-2 before:rounded-lg before:left-6 before:bg-yellow-500 before:top-[20px] before:w-12 before:animate-moverSides after:content-[''] after:absolute after:h-2 after:rounded-lg after:left-6 after:bg-lime-600 after:top-[-20px] after:w-16 after:animate-moverSides"></div>
    </div>
  );
};

export default Preloader;
