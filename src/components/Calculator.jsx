import iconCalculator from "../assets/icons/icon-calculator.svg";
import CalculatorBtn from "./CalculatorBtn";

const Calculator = () => {
  return (
    <div className="h-3/5 w-4/5 mx-auto my-0 flex flex-col items-center">
      <div className="w-4/5 sm:w-80 mx-auto mb-8">
        <label
          htmlFor="from"
          className="block mb-2 text-sm font-medium text-gray-900 uppercase"
        >
          de:
        </label>
        <select
          name=""
          id=""
          className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:border-[#C2CD4B] focus:bg-white outline-[#C2CD4B] block w-full mb-6 p-2.5"
        >
          <option value="">---</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label
          htmlFor="to"
          className="block mb-2 text-sm font-medium text-gray-900 uppercase"
        >
          a:
        </label>
        <select
          name=""
          id=""
          className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:border-[#C2CD4B] focus:bg-white outline-[#C2CD4B] block w-full mb-6 p-2.5"
        >
          <option value="">---</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label
          htmlFor="amount"
          className="block mb-2 text-sm font-medium text-gray-900 uppercase"
        >
          importe:
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <h6 className="font-medium text-sm text-center">VES</h6>
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:border-[#C2CD4B] focus:bg-white outline-[#C2CD4B] block w-full pl-12 p-2.5 "
            placeholder="Cantidad"
          />
        </div>
      </div>
      <CalculatorBtn />
    </div>
  );
};

export default Calculator;
