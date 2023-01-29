import { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";

const Preloader = () => {
  const [isReceived, setIsReceived] = useState(false);
  const { dataApi, error } = useContext(DataContext);
  useEffect(() => {
    if (dataApi) {
      setIsReceived(true)
    }
  }, [dataApi]);

  return (
    <div className={`preloader-font ${isReceived && "opacity-0 hidden"}`}>
      <div className="preloader"></div>
    </div>
  );
};

export default Preloader;
