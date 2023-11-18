import { Link, useLocation } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <div className="hover:bg-[#242526]">
      <Link to={to}>
        <div className={isActive ? "bg-[#242526] text-white hover:bg-[#3a3b3c]" : "text-"}>
          <div
            className={
              isActive
                ? "duration-[300ms] taos:[transform:perspective(2500px)_rotateY(-100deg)] taos:invisible taos:[backface-visibility:hidden]"
                : ""
            }
            data-taos-offset="400"
          >
            {children}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ActiveLink;
