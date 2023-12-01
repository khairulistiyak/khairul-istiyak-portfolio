
import NavCategory from "./NavCategory";
import NavProfile from "./NavProfile";

const LeftNav = () => {


  return (
    <div className="">
      <NavProfile></NavProfile>
      <hr className="mb-5 bg-slate-800" />
      <NavCategory></NavCategory>
    </div>
  );
};

export default LeftNav;
