import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const {
    data: dataApi,
    error,
    loading,
  } = useFetch("https://s3.amazonaws.com/dolartoday/data.json");

  const data = { dataApi, error, loading };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataProvider };
export default DataContext;
