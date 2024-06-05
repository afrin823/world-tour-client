// import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { useLoaderData } from "react-router-dom";



const Details = () => {
    const country = useLoaderData();
    console.log(country);
    const { countryName, touristsSpotName, location, averageCost, session, travelTime, photoUrl, totaVisitorsPerYear, description } = country;
    

    // const showAllCountry = allCountrys.find(showAllCountry => showAllCountry._id === _id);
    // console.log(showAllCountry);
    return (
        <div>
             <Header></Header>
             <div className="mt-8 w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full  bg-slate-100 rounded-xl">
            <img className="w-full  mx-auto p-8" src={photoUrl} alt="" />
        </div>
        <div className="cols-span-1">
            <h2 className="text-4xl font-bold mb-2">country: {countryName}</h2>
            <h3 className="text-xl mb-3">session: {session}</h3>
            <hr />
            <h2 className="text-xl my-2 font-bold">Cost: {averageCost}</h2>
            <hr />
            <p className="my-2 text-justify"><span className="font-bold">Lcation: {location}</span> </p>
            <p className="my-2 text-justify"><span className="font-bold">Spot: {touristsSpotName}</span> </p>
            <p className="my-2 text-justify"><span className="font-bold">Year: {totaVisitorsPerYear}</span> </p>
            <p className="my-2 text-justify"><span className="">Description: {description}</span> </p>
            <div className="flex mt-2 my-3"><span className="">travelTime: {travelTime}</span> 
                 <div className="card-actions gap-4">
                        <div className="badge py-2 font-medium px-4 bg-slate-100 text-[#4cd137]"></div>
                        <div className="badge  font-medium py-2 px-4 bg-slate-100 text-[#4cd137]"></div>
                    </div>
            </div>
            <hr />
           
            <div className="flex gap-4 my-12">
            <button  className="btn w-full btn-accent text-white">View Details</button>
            </div>
        </div>
        </div>
        
        </div>
       <Footer></Footer>
        </div>
    );
};

export default Details;