import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavProfile = () => {
  return (
    <div>
      <div className="flex justify-center my-10 mx-auto">
        <div className="avatar">
          <div className="w-40 rounded-full grayscale hover:grayscale-0">
            <img src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/370562638_3569926756616928_2142434864672384593_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGmuUqjlAWY5pOg8PvSS3T7jl4KspQ-2D2OXgqylD7YPc9PkCyPDhJpVkN2_U7A-FOWJSF5VQHte0OCcQk-MUH3&_nc_ohc=dynkrAX8_zMAX_kemNW&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBXbVKRg7BtCoowp2qWcGo45EBihkzfjhil83sk3Q1tMg&oe=6566608F" />
          </div>
        </div>
      </div>

      <div className="ms-3 lg:ms-0">
        <Link to="/">
          <div className="text-center mb-3">
            <h1 className="text-center text-4xl font-semibold mb-3">
              Khairul <span className="text-blue-600 ">Istiyak</span>
            </h1>
          </div>
        </Link>

        <Link to="https://maps.app.goo.gl/5r6kkZNyFzws6gAD8">
          <div className="flex items-center gap-4 lg:ms-10 mb-10">
            <FaLocationDot></FaLocationDot>
            <span>Mymensingh, Bangladesh</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavProfile;
