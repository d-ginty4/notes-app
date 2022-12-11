import { Outlet } from "react-router-dom";
import NavbarTop from "../components/NavbarTop";
import NavbarSide from "../components/NavbarSide";

const Layout = () => {
  return (
    <>
      <NavbarTop/>
      <NavbarSide/>
      <Outlet />
    </>
  );
};

export default Layout;
