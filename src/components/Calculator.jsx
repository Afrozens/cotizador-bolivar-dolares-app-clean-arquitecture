import { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";

const Calculator = () => {
  const [priceSelect, setPriceSelect] = useState("");
  const [coinsDollars, setCoinsDollars] = useState({});
  const [coinReference, setCoinReference] = useState("");
  const [priceUSD, setPriceUSD] = useState("");
  const [priceVES, setPriceVES] = useState("");

  const { dataApi, error, loading } = useContext(DataContext);

  useEffect(() => {
    if (dataApi) {
      const { USD } = dataApi;
      setCoinsDollars({
        dolarToday: USD.dolartoday,
        dolarBCV: USD.sicad2,
      });
    }
  }, [dataApi]);

  useEffect(() => {
    if (priceSelect === "DT") {
      setPriceVES(coinsDollars.dolarToday);
      setCoinReference(coinsDollars.dolarToday);
      setPriceUSD(1);
    } else if (priceSelect === "BCV") {
      setPriceVES(coinsDollars.dolarBCV);
      setCoinReference(coinsDollars.dolarBCV);
      setPriceUSD(1);
    }
  }, [priceSelect]);

  useEffect(() => {
    if (priceUSD >= 1) {
      setPriceVES(priceUSD * coinReference);
    }
  }, [priceUSD]);

  return (
    <div className="h-3/5 w-4/5 mx-auto my-0 flex flex-col items-center">
      <div className="w-4/5 sm:w-80 mx-auto mb-8">
        <label htmlFor="coin" className="calculator-label">
          Moneda:
        </label>
        <select
          name="coin"
          onChange={(e) => setPriceSelect(e.target.value)}
          className="calculator-select"
        >
          <option value="">Elige una opcion en dolares</option>
          <option value="DT">Dolar Today</option>
          <option value="BCV">Dolar BCV</option>
        </select>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <h6 className="font-medium text-sm text-center">USD</h6>
          </div>
          <input
            type="text"
            className="calculator-input"
            value={priceUSD}
            onChange={(e) => setPriceUSD(e.target.value)}
            placeholder="Cantidad"
          />
        </div>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <h6 className="font-medium text-sm text-center">VES</h6>
          </div>
          <input
            type="text"
            className="calculator-input"
            value={priceVES && Number(priceVES).toFixed(2)}
            placeholder="Cantidad"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
