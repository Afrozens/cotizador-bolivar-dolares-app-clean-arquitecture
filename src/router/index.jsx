import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout"
import CalculatorPage from "../pages/CalculatorPage";
import ErrorPages from "../pages/ErrorPages";
import HomePage from "../pages/HomePage";
import { DataProvider } from "../contexts/DataContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DataProvider>
        <Layout />
      </DataProvider>
    ),
    errorElement: <ErrorPages />,
    children: [
      {
        errorElement: <ErrorPages />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/calculador",
            element: <CalculatorPage />
          }
        ],
      },
    ],
  },
]);
