import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const PortfolioCard = ({ portfolio }) => {

    const { video, _id } = portfolio;
    const description = portfolio.description.slice(0, 120)
    const title = portfolio.title.slice(0, 60)

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {


                    fetch(`http://localhost:5000/portfolio/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });


                        })

                }
            })
    }

    return (
        <div>
            <div className="card w-full bg-transparent shadow-xl h-96 border-2 border-slate-800  mt-5">
                <figure className="w-full h-[200px]" ><ReactPlayer height="100%" url={video} /></figure>
                <div className="card-body text-justify py-3 px-5">
                    <Link to={video} target="_blank"> <h2 className="card-title text-sm ">{title}</h2></Link>
                    <p className="text-slate-400 text-sm">{description}<Link target="_blank" className="font-bold text-blue-400 text-sm" to={video}> ..See more</Link></p>
                    <p></p>
                    <div className="grid">

                        <div className="mt-2 ">

                            <button onClick={() => handleDelete(portfolio._id)} className="  bg-red-600 text-white me-5  rounded px-4 py-1 ">Delete</button>
                            <Link to={`/editPortfolio/${_id}`}>

                                <button className=" bg-blue-600 text-white me-5  rounded px-4 py-1  ">Edit</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* modal  */}

            </div>
        </div>

    );
};

export default PortfolioCard;