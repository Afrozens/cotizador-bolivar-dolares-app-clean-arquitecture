import CalculatorBtn from "./CalculatorBtn";

const Calculator = () => {
  return (
    <div className="h-3/5 w-4/5 mx-auto my-0 flex flex-col items-center">
      <div className="w-4/5 sm:w-80 mx-auto mb-8">
        <label htmlFor="from" className="calculator-label">
          de:
        </label>
        <select name="" id="" className="calculator-select">
          <option value="">---</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label htmlFor="to" className="calculator-label">
          a:
        </label>
        <select name="" id="" className="calculator-select">
          <option value="">---</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label htmlFor="amount" className="calculator-label">
          importe:
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <h6 className="font-medium text-sm text-center">VES</h6>
          </div>
          <input
            type="text"
            className="calculator-input"
            placeholder="Cantidad"
          />
        </div>
      </div>
      <CalculatorBtn />
    </div>
  );
};

export default Calculator;
