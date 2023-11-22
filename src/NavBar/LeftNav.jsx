import { useEffect, useState } from "react";
import NavCategory from "./NavCategory";
import { Link } from "react-router-dom";
import NavProfile from "./NavProfile";

const LeftNav = () => {
  const [navLists, setNavList] = useState([""]);
  // console.log(navLists);
  useEffect(() => {
    const url = "nav.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNavList(data);
      });
  }, []);

  return (
    <div className="">
      <NavProfile></NavProfile>
      <hr className="mb-5 bg-slate-800" />
      <NavCategory></NavCategory>
    </div>
  );
};

export default LeftNav;
