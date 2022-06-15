// import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

import { FaBell, FaUserAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const NavbarDashboard = () => {
  const { auth } = useAuth();

  return (
    <div className="h-16 bg-white shadow-sm pl-80 pr-8 fixed z-[12] w-full top-0 left-0 flex items-center">
      <div className="ml-auto flex items-center">
        {auth && <span className="mr-3">Halo, {auth.username}</span>}
      </div>
    </div>
  );
};

export default NavbarDashboard;
