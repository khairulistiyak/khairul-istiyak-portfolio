
const Teams = ({ team }) => {
    console.log(team)
    const { name, photo, title } = team
    return (
        <div className="card w-60 bg-base-100 shadow-xl text-black my-5">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>

            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Teams;