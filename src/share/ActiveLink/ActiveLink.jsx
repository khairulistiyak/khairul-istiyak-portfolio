import { NavLink, useLocation } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <div className="hover:bg-[#242526]">
      <NavLink to={to} className={isActive ? "bg-[#00000040] text-white hover:bg-[#3a3b3c] " : "grayscale hover:grayscale-0"}>
        <div>
          <div className={isActive ? " bg-[#e48511] w-1" : ""}>{children}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default ActiveLink;
