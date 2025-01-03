import { useLoaderData } from "react-router-dom";



const Details = () => {
    const country = useLoaderData();
    console.log(country);
    const { countryName, touristsSpotName, location, averageCost, session, travelTime, photoUrl, totaVisitorsPerYear, description } = country;
    

    
    return (
        <div>
       
             <div className="mt-0 w-full pt-36 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full  bg-slate-100 rounded-xl">
            <img className="w-full  mx-auto p-8" src={photoUrl} alt="" />
        </div>
        <div className="cols-span-1">
            <h2 className="text-4xl font-bold mb-2 text-gray-300">country: {countryName}</h2>
            <h3 className="text-xl mb-3 text-gray-300">session: {session}</h3>
            <hr />
            <h2 className="text-xl my-2 font-bold text-gray-300">Cost: {averageCost}</h2>
            <hr />
            <p className="my-2 text-justify text-gray-300"><span className="font-bold">Lcation: {location}</span> </p>
            <p className="my-2 text-justify text-gray-300"><span className="font-bold text-gray-300">Spot: {touristsSpotName}</span> </p>
            <p className="my-2 text-justify text-gray-300"><span className="font-bold">Year: {totaVisitorsPerYear}</span> </p>
            <p className="my-2 text-justify text-gray-300"><span className="">Description: {description}</span> </p>
            <div className="flex mt-2 my-3 text-gray-300"><span className="">travelTime: {travelTime}</span> 
            
            </div>
            <hr />
           {/* details  */}
            <div className="flex gap-4 my-12">
            <button  className="btn w-full btn-accent text-gray-300">View Details</button>
            </div>
        </div>
        </div>
        
        </div>
  
        </div>
    );
};

export default Details;