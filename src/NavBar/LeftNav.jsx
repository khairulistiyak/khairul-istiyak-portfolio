import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import NavCategory from "./NavCategory";
import { Link } from "react-router-dom";

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
      <div className="flex justify-center my-10 mx-auto">
        <div className="avatar">
          <div className="w-40 rounded-full grayscale hover:grayscale-0">
            <img src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/370562638_3569926756616928_2142434864672384593_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGmuUqjlAWY5pOg8PvSS3T7jl4KspQ-2D2OXgqylD7YPc9PkCyPDhJpVkN2_U7A-FOWJSF5VQHte0OCcQk-MUH3&_nc_ohc=7McYGXgMJhkAX-0eGDA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfB4Xx0mwLi8_QMWPEQUqgZ6x0h1RA3SDH-ZvyykY2DHpg&oe=655C7D4F" />
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="text-center mb-3">
          <h1 className="text-center text-4xl font-semibold mb-3">
            Khairul <span className="text-blue-600 ">Istiyak</span>
          </h1>
        </div>
      </Link>

      <Link to="https://maps.app.goo.gl/5r6kkZNyFzws6gAD8">
        <div className="flex items-center gap-4 ms-10 mb-10">
          <FaLocationDot></FaLocationDot>
          <span>Mymensingh, Bangladesh</span>
        </div>
      </Link>

      <hr className="mb-5 bg-slate-800" />
      <NavCategory></NavCategory>
    </div>
  );
};

export default LeftNav;
