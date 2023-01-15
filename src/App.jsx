import CalculatorSection from "./components/CalculatorSection";
import Header from "./components/Header";
import Main from "./components/Main";
import Preloader from "./components/Preloader";
import { DataProvider } from "./contexts/DataContext";

const App = () => {
  return (
    <div>
      <DataProvider>
        <Preloader />
        <Header />
        <Main />
        <CalculatorSection />
      </DataProvider>
    </div>
  );
};

export default App;
