import { motion } from "framer-motion";
import {  useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPrices } from "../data/dolarTodayGets";
import BtnCopy from "./BtnCopy";

const Calculator = () => {
  const [priceSelect, setPriceSelect] = useState("");
  const [coinReference, setCoinReference] = useState("");
  const [priceUSD, setPriceUSD] = useState("");
  const [priceVES, setPriceVES] = useState("");

  const { data: coinsDollars } = useQuery({
    queryKey: ["coinsDollars"],
    queryFn: getPrices,
  });
  useEffect(() => {
    if (priceSelect === "DT") {
      setPriceVES(coinsDollars.dolarToday);
      setCoinReference(coinsDollars.dolarToday);
      setPriceUSD(1);
    } else if (priceSelect === "BCV") {
      setPriceVES(coinsDollars.dolarBCV);
      setCoinReference(coinsDollars.dolarBCV);
      setPriceUSD(1);
    } else {
      setPriceUSD("");
      setPriceVES("");
    }
  }, [priceSelect]);

  useEffect(() => {
    if (priceUSD >= 1) {
      setPriceVES(priceUSD * coinReference);
    }
  }, [priceUSD]);

  useEffect(() => {
    if (priceVES.length >= 1) {
      setPriceUSD(priceVES / coinReference);
    }
  }, [priceVES]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-3/5 w-4/5 mx-auto my-0 flex flex-col items-center"
    >
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
        <div className="relative mb-6 flex">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <h6 className="font-medium text-sm text-center">USD</h6>
          </div>
          <input
            type="number"
            className="calculator-input mr-2"
            value={priceUSD && Number(priceUSD).toFixed(2)}
            onChange={(e) => priceSelect && setPriceUSD(e.target.value)}
            placeholder="Cantidad"
            min={0}
          />
          <BtnCopy stateCopy={priceUSD} />
        </div>
        <div className="relative mb-6 flex">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <h6 className="font-medium text-sm text-center">VES</h6>
          </div>
          <input
            type="number"
            className="calculator-input mr-2"
            onChange={(e) => priceSelect && setPriceVES(e.target.value)}
            value={priceVES && Number(priceVES).toFixed(2)}
            placeholder="Cantidad"
            min={0}
          />
          <BtnCopy stateCopy={priceVES} />
        </div>
      </div>
    </motion.div>
  );
};

export default Calculator;
