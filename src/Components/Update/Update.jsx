import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useContext } from "react";
import Type from "./Type";



const Update = () => {
    const { user } = useContext(AuthContext); 
          
    const updateSpot = useLoaderData();

 
    
    console.log(updateSpot); 

    const { countryName, touristsSpotName, location, averageCost, session, travelTime, photoUrl, totaVisitorsPerYear, description, _id } = updateSpot;

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;

        const countryName = form.countryName.value;
        const touristsSpotName = form.touristsSpotName.value;
        const location = form.location.value;
        const averageCost = form.averageCost.value;
        const session = form.session.value;
        const travelTime = form.travelTime.value;
        const photoUrl = form.photoUrl.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const description = form.description.value;
        const email = user?.email;

        const newCountry = { countryName, touristsSpotName, location, averageCost, session, travelTime, photoUrl, totaVisitorsPerYear, description, email }

        console.log(newCountry);


        fetch(`https://turist-server-62kir9amm-afrins-projects.vercel.app//country/update1/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCountry)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "YAY",
                        text: "Successfully Update the Spots",
                    });
                    window.location.reload()
                }
            })
    }



    return (
        <div>

            <div className="bg-[#F4F3F0] p-24 w-4/5 mx-auto m-8 shadow rounded mt-0">
                {/* todo some thing */}
                <Type />
                <form onSubmit={handleUpdate}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Country Name:</span>
                            </label>
                            <input type="text" name="countryName" placeholder="Country Name" defaultValue={countryName} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Spot Name:</span>
                            </label>
                            <input type="text" name="touristsSpotName" placeholder="Spot Name" defaultValue={touristsSpotName} className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Location:</span>
                            </label>
                            <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Average Cost:</span>
                            </label>
                            <input type="text" name="averageCost" defaultValue={averageCost} placeholder="Average Cost" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Travel Time:</span>
                            </label>
                            <input type="text" name="travelTime" defaultValue={travelTime} placeholder="Travel Time" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Session:</span>
                            </label>
                            <input type="text" name="session" defaultValue={session} placeholder="Session" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL:</span>
                            </label>
                            <input type="text" name="photoUrl" defaultValue={photoUrl} placeholder="Photo URL" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Total Visitor Per Years:</span>
                            </label>
                            <input type="text" name="totaVisitorsPerYear" defaultValue={totaVisitorsPerYear} placeholder="Total Visitor Per Years" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description:</span>
                        </label>
                        <input type="text" name="description" placeholder="Tourists Spot Name" defaultValue={description} className="input input-bordered w-full" required />
                    </div>  <br />
                    <input type="submit" value="update" className="btn btn-block bg-gradient-to-r from-red-500  via-blue-500 to-green-500 text-white" />
                </form>

            </div>

        </div>
    );
};

export default Update;