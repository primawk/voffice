import NavbarDashboard from "../components/NavbarDashboard";
import SidebarDashboard from "../components/SidebarDashboard";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavbarDashboard />
      <SidebarDashboard />
      <div className="h-full pl-40 pt-16 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
