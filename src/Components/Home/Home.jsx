import {  useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Countdown from "../Countdown/Countdown";
import CountryCard from "../countryCard/CountryCard";
import Temperature from "../temperature/Temperature";
import Type from "../Update/Type";


const Home = () => {

  const allCountrys = useLoaderData();



  return (
    <div className="pt-28">
        <Banner></Banner>
        <Countdown></Countdown>
   
      <div className="!mt-0 ">
      <Type></Type>

        <div className="m-20 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {
            allCountrys.slice(0,6).map(countrys => <CountryCard
              key={countrys._id}
              countrys={countrys}
            ></CountryCard>)
          }
        </div>
      </div>
      <Temperature></Temperature>
    
    </div>
  );
};


export default Home;