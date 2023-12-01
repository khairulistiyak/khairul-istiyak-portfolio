import { useLoaderData } from "react-router-dom";


const EditPortfolio = () => {
    const editPortfolio = useLoaderData()
    const handleEditPortfolio = (event) => {
        event.preventDefault();
        const form = event.target;
        const video = form.video.value;
        const title = form.title.value;
        const description = form.description.value;
        const updatePortfolio = { video, title, description }
        fetch(`http://localhost:5000/portfolio/${editPortfolio._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatePortfolio)
        })

    }

    return (
        <div>
            <div className=" lg:grid lg:justify-center text-black resize  gap-3 md:mt-10 p-5 ">
                <h1 className="text-white uppercase 2xl">Edit-PortFolio</h1>
                <form onSubmit={handleEditPortfolio} className="form-control">

                    <div>
                        <div className="mt-5">
                            <textarea name="video" defaultValue={editPortfolio.video} className="textarea textarea-bordered h-14 lg:w-[700px] w-full md:w-96 resize-none bg-transparent border-slate-500 text-white focus:text-xl focus:bg-white focus:text-black " placeholder="Edit Video URL"></textarea>
                        </div>

                        <div className="mt-5">
                            <textarea name="title" type="text" defaultValue={editPortfolio.title} className="textarea textarea-bordered h-20 lg:w-[700px] w-full md:w-96 resize-none bg-transparent border-slate-500 text-white focus:text-xl focus:bg-white focus:text-black " placeholder="Edit Title"></textarea>

                        </div>
                        <div className="mt-5">
                            <textarea name="description" defaultValue={editPortfolio.description} className="textarea textarea-bordered h-52 lg:w-[700px] w-full md:w-96 resize-none bg-transparent border-slate-500 text-white focus:text-xl focus:bg-white focus:text-black " placeholder="Edit Description"></textarea>

                        </div>


                    </div>

                    <button className=" btn w-full mt-5 bg-blue-700 text-xl text-white border-none hover:bg-blue-800">
                        <input type="submit" value="Update" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditPortfolio;