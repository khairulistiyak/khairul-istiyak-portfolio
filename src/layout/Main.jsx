import { Outlet } from "react-router-dom";
import LeftNav from "../NavBar/LeftNav";
import TopNav from "../NavBar/TopNav";

const Main = () => {
  return (
    <div className="2xl:mx-auto 2xl:container">
      <div className="md:hidden lg:hidden block mb-5 ">
        <TopNav></TopNav>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-6  bg-gradient-to-b from-[#161c34] via-[#140f38] to-[#000000] text-white  ">
        <div className="lg:col-span-1  md:col-span-2 lg:block md:block hidden bg-gradient-to-t from-[#161c34] via-[#04030d] to-[#000000] text-white  ">
          <LeftNav></LeftNav>
        </div>
        <div className="lg:col-span-5  m:col-span-4 justify-center   ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
