import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="flex gap-5 items-center mr">
      <Link to="https://www.facebook.com/khairulistiyak/">
        <div className="hover:text-blue-700">
          <FaFacebook className="text-2xl "></FaFacebook>
        </div>
      </Link>
      <div className="hover:text-blue-900">
        <Link to="https://www.linkedin.com/in/khairulistiyak/">
          <FaLinkedinIn className="text-2xl"></FaLinkedinIn>
        </Link>
      </div>
      <div className="hover:text-gray-400">
        <Link to="https://github.com/khairulistiyak">
          <FaGithub className="text-2xl"></FaGithub>
        </Link>
      </div>
      <div className="hover:text-red-500">
        <Link to="https://youtube.com/khairulistiyak">
          <FaYoutube className="text-2xl"></FaYoutube>
        </Link>
      </div>
    </div>
  );
};

export default Social;
