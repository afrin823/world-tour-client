import { useLoaderData } from "react-router-dom";
import ShowTuristSports from "../showTuristSports/ShowTuristSports";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const AllTuristSport = () => {
    const allCountrys = useLoaderData();
    return (
        <div>
            <Header></Header>
            <div className="m-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                
               
             
                    {
                        allCountrys.map(countrys => <ShowTuristSports
                            key={countrys._id}
                            countrys={countrys}
                        ></ShowTuristSports>)
                    }
               


            </div>




            <Footer></Footer>
        </div>
    );
};

export default AllTuristSport;