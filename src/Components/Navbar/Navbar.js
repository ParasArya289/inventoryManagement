import { NavLink } from "react-router-dom";
import { RxDashboard, RxActivityLog, RxBarChart } from "react-icons/rx";
import { BiCategory } from "react-icons/bi";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <NavLink className="links">
          <RxBarChart className="link__icons" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink className="links">
          <RxDashboard className="link__icons" />
          <span>Departments</span>
        </NavLink>
        <NavLink className="links">
          <RxActivityLog className="link__icons" />
          <span>Products</span>
        </NavLink>
      </div>
    </nav>
  );
};
