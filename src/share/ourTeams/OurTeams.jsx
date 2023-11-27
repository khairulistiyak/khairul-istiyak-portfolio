import { useLoaderData } from "react-router-dom";
import Teams from "./Teams";


const OurTeams = () => {
    const teams = useLoaderData()
    console.log(teams)
    return (
        <div>
            <h1>Our Teams</h1>
            <div className=" grid  lg:grid-cols-6  justify-center my-5">
                {teams.map(team => <Teams key={team.name} team={team}></Teams>)}
            </div>
        </div>
    );
};

export default OurTeams;