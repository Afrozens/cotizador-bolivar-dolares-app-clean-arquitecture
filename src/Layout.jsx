import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Preloader from "./components/Preloader";

const Layout = () => {
  return (
    <>
        <Preloader />
        <Header />
        <div>
          <Outlet />
        </div >
    </>
  );
};

export default Layout;
