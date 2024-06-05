import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyList = () => {
    const {user} = useContext(AuthContext)
    const [countries, setCountres] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/countries/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setCountres(data)
        })
    }, [user])
    console.log(countries);
    return (
        <div>
            <Header></Header>
            <div>
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyList;