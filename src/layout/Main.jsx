import { Outlet } from "react-router-dom";
import LeftNav from "../NavBar/LeftNav";
import TopNav from "../NavBar/TopNav";

const Main = () => {
  return (
    <div>
      <div className="md:hidden lg:hidden block mb-5 ">
        <TopNav></TopNav>
      </div>
      <div className="grid grid-cols-5 gap-5 bg-black text-white h-screen">
        <div className="col-span-1 lg:block md:block hidden">
          <LeftNav></LeftNav>
        </div>
        <div className="col-span-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
