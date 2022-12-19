import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Outlet />
    </>
  );
};

export default Layout;
