

const PortfolioCard = ({ portfolio }) => {
    console.log(portfolio)
    const { title, photo, description } = portfolio
    return (
        <div>
            <div className="card w-96  glass">
                {/* <figure><iframe src="https://cars-doctor-74d3b.web.app/" name="myIFrame" scrolling="auto" width="100%" height="100%" ></iframe>
      </figure> */}
                <div className="hero "  >
                    <div>
                        {/* <img className="h-60 w-full" src="" alt="" /> */}
                    </div>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">

                        <div className="max-w-md ">
                            {/* <figure><iframe src="https://cars-doctor-74d3b.web.app/" name="myIFrame" scrolling="auto" width="100%" height="100%" ></iframe>
      </figure> */}
                            <img className="" src={photo} alt="" />

                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{description}</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;