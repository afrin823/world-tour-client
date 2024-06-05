import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Countdown from "../Countdown/Countdown";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CountryCard from "../countryCard/CountryCard";
import Temperature from "../temperature/Temperature";
import { useTypewriter, Cursor } from 'react-simple-typewriter'





const Home = () => {
  const [text] = useTypewriter({
    words: ['__Tourists Spots__', '__Tourists Spots__', '__Tourists Spots__'],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
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
        <h2 className="text-center">
          <span className='text-3xl  font-bold bg-gradient-to-r from-red-500  via-blue-500 to-green-500 text-transparent bg-clip-text'>{text}</span>
          <Cursor cursorColor='red' />
        </h2>

        <div className="m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            allCountrys.map(countrys => <CountryCard
              key={countrys._id}
              countrys={countrys}
            ></CountryCard>)
          }
        </div>
      </div>
      <Temperature></Temperature>
      <Footer></Footer>
    </div>
  );
};


export default Home;