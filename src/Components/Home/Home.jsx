import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Countdown from "../Countdown/Countdown";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CountryCard from "../countryCard/CountryCard";




const Home = () => {
    const allCountrys = useLoaderData();

    return (
       <div>
        <Header></Header>
      <Outlet></Outlet>
  
        <div>
            <Banner></Banner>
            <Countdown></Countdown>
        </div>       
        <div className="m-20">
          <h2 className="text-3xl text-center font-extrabold">__Tourists Spots__</h2>
        <div className="m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {
        allCountrys.map(countrys => <CountryCard
        key={countrys._id}
        countrys={countrys}
        ></CountryCard>)
       }
        </div>
        </div>
        <Footer></Footer>
       </div>
    );
};


export default Home;