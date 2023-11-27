import { useLoaderData } from "react-router-dom";
import PortfolioCard from "../Provider/AdminControl/Portfolio/PortfolioCard";

const Portfolio = () => {
  const portfolios = useLoaderData()
  console.log(portfolios)
  return <div className="grid ">

    {
      portfolios.map(portfolio => <PortfolioCard key={portfolio._id} portfolio={portfolio}></PortfolioCard>)
    }

  </div >;
};

export default Portfolio;
