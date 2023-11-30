import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About";
import Home from "../Home/Home";
import Skills from "../Pages/skills";

import Contact from "../Pages/Contact";
import OurTeams from "../share/ourTeams/ourTeams";
import AdminControl from "../Provider/AdminControl/AdminControl";
import Portfolio from "../Pages/Portfolios/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <About></About>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
        loader: () => fetch('http://localhost:5000/portfolio')
      },
      {
        path: "/portfolio:id",
        element: <Portfolio></Portfolio>,
        loader: ({ params }) => fetch(`http://localhost:5000/portfolio/${params.id}`)
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/teams",
        element: <OurTeams></OurTeams>,
        loader: () => fetch('teams.json')
      },
      {
        path: "/control",
        element: <AdminControl></AdminControl>,
        loader: () => fetch('http://localhost:5000/portfolio')

      },
    ],
  },
]);

export default router;
