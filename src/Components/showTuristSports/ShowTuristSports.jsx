import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const ShowTuristSports = ({ countrys }) => {
    const { countryName, touristsSpotName, location, averageCost, session, travelTime, photoUrl, totaVisitorsPerYear, description, _id } = countrys;
    return (
        <div>
                 <div>
                <div className="card w-full h-full mx-auto bg-gradient-to-r from-gray-400  via-blue-200 to-gray-400  shadow-xl">
                <figure>
                    <img className="w-full  h-64" src={photoUrl} alt="" />
                </figure>                
                <div className="card-body text-justify">
                    <h2 className="card-title">
                    Spots:{countryName}                 
                    </h2>
                    <p className="text-base">Average Cost: <span className="text-sm text-gray-700">{averageCost}</span> </p>
                    <p className="text-base">Session: <span className="text-sm text-gray-700">{session}</span> </p>
                    <div className="text-base flex">Location: <FaMapMarkerAlt /><span className="text-sm text-gray-700">{location}</span> </div>

                    <div className="text-base m-1 flex items-center">Travel time: &nbsp;<FaRegClock /> <span className="text-sm text-gray-700"> {travelTime}</span> </div>
                    <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-warning text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ShowTuristSports;