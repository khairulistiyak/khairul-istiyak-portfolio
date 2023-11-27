import { useState } from "react";


const AdminControl = () => {

    const [portfolios, setPortfolio] = useState();

    const handlePortfolio = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const portfolioData = { title, photo, description };

        fetch('http://localhost:5000/portfolio', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(portfolioData),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
        // .catch((error) => console.error('Error:', error));
    };


    return (
        <div>
            <div className=" lg:grid lg:justify-center text-black resize pt-10 gap-3 md:mt-52 p-5">
                <form onSubmit={handlePortfolio} className="form-control">

                    <div>
                        <div className="mt-5">
                            <textarea name="title" type="text" className="textarea textarea-bordered h-14 lg:w-[700px] w-full md:w-96 resize-none bg-transparent border-slate-500 text-white focus:text-xl focus:bg-white focus:text-black " placeholder="Title"></textarea>

                        </div>
                        <div className="mt-5">
                            <textarea name="description" className="textarea textarea-bordered h-14 lg:w-[700px] w-full md:w-96 resize-none bg-transparent border-slate-500 text-white focus:text-xl focus:bg-white focus:text-black " placeholder="Description"></textarea>

                        </div>
                        <div className="mt-5">
                            <textarea name="photo" className="textarea textarea-bordered h-14 lg:w-[700px] w-full md:w-96 resize-none bg-transparent border-slate-500 text-white focus:text-xl focus:bg-white focus:text-black " placeholder="Photo URL"></textarea>
                        </div>
                    </div>

                    <button className=" btn w-full mt-5 bg-blue-700 text-xl text-white border-none hover:bg-blue-800">
                        <input type="submit" value="Post" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminControl;

// grid justify-center h-screen items-center w-full text-black