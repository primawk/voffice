// import { useSelector } from 'react-redux';

import {
  FaHome,
  FaShoppingBag,
  FaUserAlt,
  FaShoppingCart,
  FaFileAlt,
} from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const SidebarDashboard = () => {
  const DashboardLink = ({ children, icon, to, end, notification }) => {
    return (
      <NavLink to={to} end={end}>
        {({ isActive }) => (
          <div
            className={`flex items-center gap-3 my-1 px-4 py-3 text-white border-1-4 border-transparent hover:bg-pink-900 transition ${
              isActive ? "bg-pink-900" : "bg-transparent"
            }`}
          >
            <div className="relative">
              {notification && (
                <span className="h-2 w-2 rounded-full bg-red-500 absolute top-0 -right-[2px]"></span>
              )}
              {icon}
            </div>
            {children}
          </div>
        )}
      </NavLink>
    );
  };

  return (
    <div className="fixed left-0 top-0 w-40 h-full bg-pink-800 shadow-md z-[14]">
      <Link to="/">
        <div className="text-white font-bold text-base p-5 bg-pink-800 flex flex-col items-center gap-3">
          <img src="/IlLogoWhite.png" alt="" className="w-16 2xl:w-[80px]" />
          vOffice
        </div>
      </Link>
      <div className="py-5">
        <DashboardLink icon={<FaHome />} to={"rooms"} end>
          Rooms
        </DashboardLink>

        <DashboardLink icon={<FaShoppingBag />} to={"bookings"}>
          Bookings
        </DashboardLink>
      </div>
    </div>
  );
};

export default SidebarDashboard;
