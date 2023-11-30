import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";


const PortfolioCard = ({ portfolio }) => {

    const [pickPortfolio, setPickPortfolio] = useState()
    console.log(portfolio)
    const { video, _id } = portfolio
    const description = portfolio.description.slice(0, 100)
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
        <div className="card w-full bg-transparent shadow-xl border-2 border-slate-800  mt-5">

            <figure className="w-full h-[200px]" ><ReactPlayer height="100%" url={video} /></figure>
            <div className="card-body text-justify py-3 px-5">
                <Link to={video} target="_blank"> <h2 className="card-title text-sm ">{title}</h2></Link>
                <p className="text-slate-400 text-sm">{description}<Link target="_blank" className="font-bold text-blue-400 text-sm" to={video}> ..See more</Link></p>
                <p></p>


                <div className="grid">

                    <div className="mt-2 ">



                        <button onClick={() => handleDelete(_id)} className="  bg-red-600 text-white me-5  rounded px-4 py-1 ">Delete</button>
                        <button onClick={() => handleDelete(_id)} className=" bg-blue-600 text-white me-5  rounded px-4 py-1  ">Edit</button>
                    </div>
                </div>
            </div>
            {/* modal  */}




        </div>

    );
};

export default PortfolioCard;