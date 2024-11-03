import {  useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Countdown from "../Countdown/Countdown";
import CountryCard from "../countryCard/CountryCard";
import Temperature from "../temperature/Temperature";
import CountText from "../Countdown/CountText";


const Home = () => {

  const allCountrys = useLoaderData();



  return (
    <div className="pt-28">
        <Banner></Banner>
        <div className=" w-[90%] mx-auto">
        <marquee className="text-gray-300 text-xl" direction="">World Tour: Developed an interactive travel platform that allows users to explore global destinations, create itineraries, and share travel experiences. Key features include detailed destination guides, user-generated content, trip planning tools, and a community forum for travel discussions. Designed for a seamless user experience with responsive design for access on both mobile and desktop devices.</marquee>
        </div>
     
        <Countdown></Countdown>
      
   
      <div className="!mt-0 ">
    <CountText></CountText>

        <div className="m-20  grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
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