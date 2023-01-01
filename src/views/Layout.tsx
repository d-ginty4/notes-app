import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Layout/Navbar";
import { Sidebar } from "../components/Layout/Sidebar";
import { useState } from "react";
import { useGlobalContext } from "../hooks/context";
const Layout: React.FC = () => {
  // Hooks
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const {main} = useGlobalContext()

  return (
    <>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main ref={main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
