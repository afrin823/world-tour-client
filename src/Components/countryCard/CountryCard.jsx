import { Link } from "react-router-dom";

const CountryCard = ({ countrys }) => {
    const { countryName, touristsSpotName, location, averageCost, session, travelTime, photoUrl, totaVisitorsPerYear, description, _id } = countrys;
    console.log(_id);
    
    return (
        <div>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <figure>
                    <img className="w-full  h-64" src={photoUrl} alt="" />
                </figure>                
                <div className="card-body">
                    <h2 className="card-title">
                        {countryName}                 
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                       <Link to={`/details/${_id}`}> <button className="btn btn-warning text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;