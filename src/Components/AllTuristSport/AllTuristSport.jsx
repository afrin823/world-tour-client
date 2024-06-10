import { useLoaderData } from "react-router-dom";
import ShowTuristSports from "../showTuristSports/ShowTuristSports";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";



const AllTuristSport = () => {
    const allCountries = useLoaderData();

    const [sort, setSort] = useState(false);
    const sortAllCountries = [...allCountries].sort((spotOne, spotTwo) => {
        return parseInt(spotOne.averageCost) - parseInt(spotTwo.averageCost)
    })
    const handleSorting = () => {
        setSort(!sort)
    }
    console.log(sort);
    return (
        <div>
            <div className="text-center ">
                <div className="dropdown mt-28">
                    <div tabIndex={0} role="button" className="badge badge-outline p-4 badge-secondary">
                        <h2 className="text-purple-600 font-bold">Sort By</h2>
                        <MdArrowDropDown className="text-3xl font-bold"></MdArrowDropDown>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] shadow bg-base-100 rounded-box w-40">
                        <button onClick={handleSorting} className="badge badge-outline mb-2 badge-primary font-semibold">Average Cost</button>
                        <button className="badge badge-outline badge-secondary font-semibold">Visitors</button>
                    </ul>
                </div>
            </div>

            <div className="m-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">



                {
                    sort ?
                        <>
                            {
                                sortAllCountries.map(countrys => <ShowTuristSports
                                    key={countrys._id}
                                    countrys={countrys}
                                ></ShowTuristSports>)
                            }
                        </>
                        :
                        <>
                            {
                                allCountries.map(countrys => <ShowTuristSports
                                    key={countrys._id}
                                    countrys={countrys}
                                ></ShowTuristSports>)
                            }
                        </>
                }



            </div>


       </div>
    );
};

export default AllTuristSport;