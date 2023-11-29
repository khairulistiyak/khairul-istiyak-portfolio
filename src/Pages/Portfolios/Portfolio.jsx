import { useLoaderData } from "react-router-dom";
import PortfolioCard from "./PortfolioCard";


const Portfolio = () => {
  const portfolios = useLoaderData()
  console.log(portfolios)
  return <div>
    <h1 className="text-center text-5xl my-10 uppercase font-Poppins font-semibold ">Portfolio</h1>
    <section>
      <div className="grid lg:grid-cols-3 2xl:grid-cols-4 gap-5  ">

        {
          portfolios.map(portfolio => <PortfolioCard key={portfolio._id} portfolio={portfolio}></PortfolioCard>)
        }

      </div >
    </section>
  </div>;
};

export default Portfolio;
