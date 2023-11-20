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
          <div className=" h-14 flex ms-5 items-center">
            <div className="mx-5">
              <FcInfo className="text-2xl "></FcInfo>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">About</h1>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/service">
          <div className=" h-14 flex ms-5 items-center">
            <div className="mx-5">
              <FcServices className="text-2xl "></FcServices>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">Service</h1>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/skills">
          <div className=" h-14 flex ms-5 items-center ">
            <div className="mx-5">
              <FcApproval className="text-2xl  "></FcApproval>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">Skills</h1>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/portfolio">
          <div className=" h-14 flex ms-5 items-center">
            <div className="mx-5">
              <MdLightMode className="text-2xl text-yellow-500"></MdLightMode>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">Portfolio</h1>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/contact">
          <div className=" h-14 flex ms-5 items-center">
            <div className="mx-5">
              <IoIosContact className="text-2xl text-lime-500"></IoIosContact>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">Contact</h1>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/contact">
          <div className=" h-14 flex ms-5 items-center">
            <div className="mx-5">
              <FcServices className="text-2xl "></FcServices>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">Blog</h1>
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
