import { FcServices } from "react-icons/fc";
import { Link } from "react-router-dom";


const TopNav = () => {
  return (
    <div className="navbar bg-transparent">

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">

          <li>
            <details className="">
              <summary></summary>
              <ul className="p-2  bg-slate-900">
                <li>
                  <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                  <Link>

                    <FcServices className="text-xl "></FcServices> <small>Servicre</small>
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="flex">
        <a className="btn btn-ghost text-xl">Istiyak</a>
        <a className="btn btn-ghost text-xl">Istiyak</a>
      </div>
    </div>
  );
};

export default TopNav;
