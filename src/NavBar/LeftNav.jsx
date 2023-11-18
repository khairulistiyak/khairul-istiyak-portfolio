import ActiveLink from "../share/ActiveLink/ActiveLink";
import { FcAbout, FcBusinessContact, FcGraduationCap, FcIdea, FcImageFile, FcServices } from "react-icons/fc";

const LeftNav = () => {
  return (
    <div className="">
      <div className="flex justify-center my-10 mx-auto">
        <div className="avatar">
          <div className="w-40 rounded-2xl grayscale">
            <img src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/370562638_3569926756616928_2142434864672384593_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGmuUqjlAWY5pOg8PvSS3T7jl4KspQ-2D2OXgqylD7YPc9PkCyPDhJpVkN2_U7A-FOWJSF5VQHte0OCcQk-MUH3&_nc_ohc=7McYGXgMJhkAX-0eGDA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfB4Xx0mwLi8_QMWPEQUqgZ6x0h1RA3SDH-ZvyykY2DHpg&oe=655C7D4F" />
          </div>
        </div>
      </div>
      <div className="">
        <ActiveLink to="/">
          <div className=" h-20 flex ms-5 items-center">
            <div className="mx-5">
              <FcAbout className="text-2xl grayscale"></FcAbout>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">Home</h1>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/about">
          <div className=" h-20 flex ms-5 items-center">
            <div className="mx-5">
              <FcAbout className="text-2xl grayscale"></FcAbout>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">About</h1>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/service">
          <div className=" h-20 flex ms-5 items-center">
            <div className="mx-5">
              <FcServices className="text-2xl grayscale"></FcServices>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">Service</h1>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/skills">
          <div className=" h-20 flex ms-5 items-center ">
            <div className="mx-5">
              <FcGraduationCap className="text-2xl grayscale "></FcGraduationCap>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">Skills</h1>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/portfolio">
          <div className=" h-20 flex ms-5 items-center">
            <div className="mx-5">
              <FcImageFile className="text-2xl grayscale"></FcImageFile>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">Portfolio</h1>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/contact">
          <div className=" h-20 flex ms-5 items-center">
            <div className="mx-5">
              <FcBusinessContact className="text-2xl grayscale"></FcBusinessContact>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">Contact</h1>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/contact">
          <div className=" h-20 flex ms-5 items-center">
            <div className="mx-5">
              <FcServices className="text-2xl grayscale"></FcServices>
            </div>
            <div>
              <h1 className="text-base font-Poppins text-slate-200 ">Blog</h1>
            </div>
          </div>
        </ActiveLink>
      </div>
    </div>
  );
};

export default LeftNav;
