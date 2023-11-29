import ReactPlayer from "react-player";
import { Link } from "react-router-dom";


const PortfolioCard = ({ portfolio }) => {
    console.log(portfolio)
    const { video } = portfolio
    const description = portfolio.description.slice(0, 200)
    const title = portfolio.title.slice(0, 60)

    return (
        <div className="card w-full bg-transparent shadow-xl border-2 border-slate-800  mt-5">

            <figure className="w-full h-[315px]" ><ReactPlayer height="100%" url={video} /></figure>
            <div className="card-body _ ">
                <Link to={video} target="_blank"> <h2 className="card-title text-xl ">{title}</h2></Link>
                <p className="text-slate-400">{description}...</p>
                <p><Link target="_blank" className="font-bold text-blue-400" to={video}> See more</Link></p>
            </div>
        </div>

    );
};

export default PortfolioCard;