import ActiveLink from "../share/ActiveLink/ActiveLink";
import { FcApproval, FcInfo, FcServices } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import { MdLightMode } from "react-icons/md";

import Social from "../share/Social/Social";

const NavCategory = () => {
  return (
    <div>
      <div>
        <ActiveLink to="/about">
          <div className=" h-10 flex ms-5 items-center">
            <div className="mx-5">
              <FcInfo className="text-xl "></FcInfo>
            </div>
            <div>
              <p className="text-xs font-Poppins text-slate-200 ">About</p>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/service">
          <div className=" h-10 flex ms-5 items-center">
            <div className="mx-5">
              <FcServices className="text-xl "></FcServices>
            </div>
            <div>
              <p className="text-xs font-Poppins text-slate-200 ">Service</p>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/skills">
          <div className=" h-10 flex ms-5 items-center ">
            <div className="mx-5">
              <FcApproval className="text-xl  "></FcApproval>
            </div>
            <div>
              <p className="text-xs font-Poppins text-slate-200 ">Skills</p>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/portfolio">
          <div className=" h-10 flex ms-5 items-center">
            <div className="mx-5">
              <MdLightMode className="text-xl text-yellow-500"></MdLightMode>
            </div>
            <div>
              <p className="text-xs font-Poppins text-slate-200 ">Portfolio</p>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/contact">
          <div className=" h-10 flex ms-5 items-center">
            <div className="mx-5">
              <IoIosContact className="text-xl text-lime-500"></IoIosContact>
            </div>
            <div>
              <p className="text-xs font-Poppins text-slate-200 ">Contact</p>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/teams">
          <div className=" h-10 flex ms-5 items-center">
            <div className="mx-5">
              <FcServices className="text-xl "></FcServices>
            </div>
            <div>
              <p className="text-xs  font-Poppins text-slate-200 ">Teams</p>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/control">
          <div className=" h-10 flex ms-5 items-center">
            <div className="mx-5">
              <FcServices className="text-xl "></FcServices>
            </div>
            <div>
              <p className="text-xs font-Poppins text-slate-200 ">control</p>
            </div>
          </div>
        </ActiveLink>
        <hr />
      </div>

      <div className="mt-5 grid ms-5 ">
        <h2 className="mb-5 text-gray-700 font-bold">SOCIAL</h2>
        <Social></Social>
      </div>
    </div>
  );
};

export default NavCategory;
