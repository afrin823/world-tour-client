import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const AddTuristList = () => {
    return (
        <div>
            <Header></Header>
                  
                <section className="p-6 w-3/4 mx-auto">
                    <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <h1 className="text-center text-3xl font-medium">Add Tourists Spot</h1>
                        <fieldset className="grid grid-cols-4  gap-6 p-3 rounded-md shadow-sm dark:bg-gray-50">                          
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 mx-auto py-12 ">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="countryName" className="text-sm">Country Name:</label>
                                    <input id="countryName" type="text" placeholder="Country Name" className="w-full input input-bordered" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="tourists_spot_name" className="text-sm">Tourists Spot Name:</label>
                                    <input id="tourists_spot_name" type="text" placeholder="Tourists Spot Name" className="w-full input input-bordered" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="location" className="text-sm">Location:</label>
                                    <input id="location" type="text" placeholder="Location" className="w-full input input-bordered" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="average_cost" className="text-sm">Average Cost:</label>
                                    <input id="average_cost" type="text" placeholder="Average Cost" className="w-full input input-bordered" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="session" className="text-sm">Session:</label>
                                    <input id="session" type="text" placeholder="Session" className="w-full input input-bordered" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="travelTime" className="text-sm">Travel Time:</label>
                                    <input id="travelTime" type="text" placeholder="Travel Time" className="w-full input input-bordered" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="photoUrl" className="text-sm">Photo URL:</label>
                                    <input id="photoUrl" type="text" placeholder="Photo URL" className="w-full input input-bordered" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="totaVisitorsPerYear " className="text-sm">Total Visitor Per Years:</label>
                                    <input id="totaVisitorsPerYear " type="text" placeholder="Total Visitor Per Years" className="w-full input input-bordered" />
                                </div>
                            
                                <div className="col-span-full ">
                                    <label htmlFor="totaVisitorsPerYear " className="description">Description:</label>
                                    <input id="description " type="text" placeholder="Description:" className="w-full input input-bordered" />
                                </div>
                                <div className="col-span-full ">
                                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Add Spot</button>
                                </div>
                            
                               
                            </div>
                        </fieldset>
                    </form>
                </section>
       

            <Footer></Footer>
        </div>
    );
};

export default AddTuristList;