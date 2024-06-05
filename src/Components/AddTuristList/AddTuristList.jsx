import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Swal from 'sweetalert2'

const AddTuristList = () => {

    const {user} = useContext(AuthContext);
    // console.log(user?.email);
    const email = user?.email;

    const handelAddProduct = event => {
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

        const newCountry = { countryName, touristsSpotName, location, averageCost, session, travelTime, photoUrl, totaVisitorsPerYear, description, email}

        console.log(newCountry)

        //send data to server
        fetch('http://localhost:5000/country', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCountry)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }


    return (
        <div>
            <Header></Header>

            <div className="bg-[#F4F3F0] p-24 w-4/5 mx-auto m-8 shadow rounded">
                <h1 className="text-3xl font-extrabold text-center text-warning">__Add Tourists Spot__</h1> <br />           
                    <form onSubmit={handelAddProduct}>
                        <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Country Name:</span>
                            </label>
                            <input type="text" name="countryName" placeholder="Country Name" className="input input-bordered w-full"  />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Spot Name:</span>
                            </label>
                            <input type="text" name="touristsSpotName" placeholder="Spot Name" className="input input-bordered w-full" required />
                        </div>                                   
                        </div>
                        <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Location:</span>
                            </label>
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Average Cost:</span>
                            </label>
                            <input type="text" name="averageCost" placeholder="Average Cost" className="input input-bordered w-full" required />
                        </div>                     
                        </div>
                        <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Travel Time:</span>
                            </label>
                            <input type="text" name="travelTime" placeholder="Travel Time" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Session:</span>
                            </label>
                            <input type="text" name="session" placeholder="Session" className="input input-bordered w-full" required />
                        </div> 
                        </div>
                        <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL:</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Total Visitor Per Years:</span>
                            </label>
                            <input type="text" name="totaVisitorsPerYear" placeholder="Total Visitor Per Years" className="input input-bordered w-full" required />
                        </div>                                        
                        </div>
                         <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description:</span>
                            </label>
                            <input type="text" name="description" placeholder="Tourists Spot Name" className="input input-bordered w-full" required />
                        </div>  <br />  
                      <input type="submit" value="Add Spots" className="btn btn-block bg-warning text-white"/>
                    </form>
           
            </div>


            <Footer></Footer>
        </div>
    );
};

export default AddTuristList;