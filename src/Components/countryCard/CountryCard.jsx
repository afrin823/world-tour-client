

const CountryCard = ({ countrys }) => {
    const { countryName, touristsSpotName, location, averageCost, session, travelTime, photoUrl, totaVisitorsPerYear, description } = countrys;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photoUrl} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{countryName}</h2>
                    <div className="card-actions justify-start">
                        <div className=" border-2 border-amber-400 rounded-full px-2">{averageCost}</div>
                        <div className=" border-2 border-rose-500 rounded-full px-4">{totaVisitorsPerYear}</div>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;