import { useLoaderData } from "react-router-dom";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const portfolios = useLoaderData()
  console.log(portfolios)



  return <div className=" mx-5">
    <h1 className="text-center text-xl my-5  uppercase font-Poppins font-semibold ">Portfolio</h1>
    <section>

      <div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1  gap-4">

        {
          portfolios.map(portfolio => <PortfolioCard key={portfolio._id} portfolio={portfolio}></PortfolioCard>)
        }


      </div >
    </section>
  </div>;
};

export default Portfolio;
