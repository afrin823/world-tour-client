import { Link } from "react-router-dom";

const CountryCard = ({ countrys }) => {
    const { countryName,  averageCost,  photoUrl, totaVisitorsPerYear, description, _id } = countrys;
    console.log(_id);
    
    return (
        <div>
                <div className="card w-full h-full ml-6 mx-auto bg-base-300  shadow-xl">
                <figure>
                    <img className="w-full  h-64" src={photoUrl} alt="" />
                </figure>                
                <div className="card-body">
                    <h2 className="card-title">
                        {countryName}                 
                    </h2>
                    <p>{description}</p>
                    <div className="flex items-center justify-between">
                    <button className="btn btn-outline btn-error rounded-full">Cost: {averageCost}</button>
                    <button className="btn btn-outline btn-success rounded-full">Visitors :{totaVisitorsPerYear}</button>
                    </div><br />
                    <div className="card-actions justify-center w-full">
                       <Link to={`/details/${_id}`}> <button className="btn btn-warning w-96 text-center items-center text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;