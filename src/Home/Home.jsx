import { Typewriter } from "react-simple-typewriter";
import photo from "../assets/DSC_0872-copy.png";
import NavProfile from "../NavBar/NavProfile";

const Home = () => {
  return (
    <div>
      <div className="grid justify-center"></div>
      <div
        className="lg:bg-cover md:bg-center bg-no-repeat min-h-screen opacity-10 "
        style={{
          backgroundImage: `url(https://i.postimg.cc/0NmY59B0/DSC-0872-copy.png)`,
        }}
      ></div>
      <div className="absolute top-28 grid w-screen lg:hidden">
        <NavProfile></NavProfile>
        <hr />
      </div>
      <div>
        <div className="  absolute  lg:top-52 top-[500px] lg:w-1/2  lg:left-96 text-justify me-5">
          <div className=" flex-col lg:flex-row-reverse ps-3">
            <div>
              <div className="lg:w-1/2 md:w-1/2 ">
                <h1 className="lg:text-5xl text-3xl font-bold ">
                  Hi , i'm Khairul <span className="text-blue-600">Istiyak</span>
                </h1>
                <h1 className="text-2xl" style={{ paddingTop: "2rem", margin: "auto 0", fontWeight: "normal" }}>
                  {/* Life is simple{" "} */}
                  <span className="text-blue-400 text-2xl" style={{ color: "", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={["Full stack web developer", "and", "Graphic Designer"]}
                      loop={10}
                      cursor
                      cursorStyle="|"
                      typeSpeed={90}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <p className="my-10">
                  As a Full Stack Web Developer and Graphic Designer, I navigate the digital realm with a fusion of coding expertise and artistic
                  finesse. Crafting seamless web experiences is my forte, where each line of code is an essential brushstroke in creating immersive
                  platforms. Simultaneously, my design sensibilities breathe life into concepts, shaping visually compelling narratives. What sets me
                  apart is the fluid integration of these skills, transforming websites into captivating digital journeys. With a commitment to
                  perpetual learning and a collaborative spirit, I invite you to join me in the pursuit of innovation and the creation of visually
                  stunning digital landscapes.
                </p>
              </div>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
