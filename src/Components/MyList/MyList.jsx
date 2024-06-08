import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";


const MyList = () => {
    const {user} = useAuth() || {};
    const [countries, setCountres] = useState([]);
    const [control, setControl] = useState(false);
    console.log(user?.email);
    useEffect(() => {
        fetch(`https://turisom.vercel.app/countries/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setCountres(data)
        })
    }, [user?.email,control])
console.log(countries);
    const handleDelete = (id) => {
        fetch(`https://turisom.vercel.app/delete/${id}`, {
            method: 'DELETE',

        })
        .then(res => res.json())
        .then(data => {
           if (data.deletedCount > 0){
            setControl(!control)
           }
        })

    }
    return (
               
            <div className="pt-28">
            {
               countries.map(country => (
                <div className=" p-4 w-3/4 mx-auto  border border-4 bg-gradient-to-r from-red-500  via-blue-500 to-green-500 text-white m-2 mt-0 rounded-lg" key={country.id}>
                   <div className="flex justify-between">
                   <h2>Name:{country.countryName}</h2>
                    <h2>Spot:{country.touristsSpotName}</h2>
                    <h2>Cost:{country.averageCost}</h2>
                    <Link to={`/update/${country._id}`}>
                    <buttton className="btn m-2"><FaEdit /></buttton>
                    </Link>
                    <buttton
                    onClick={() => handleDelete(country._id)}
                    className="btn m-2"><RiDeleteBin6Fill />
                    </buttton>
                   </div>
                </div>
               ))
            }
            
          
        </div>
    );
};

export default MyList;