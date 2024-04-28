import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Countdown from "../Countdown/Countdown";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";



const Home = () => {
    return (
       <div>
        <Header></Header>
      <Outlet></Outlet>
        <div>
            <Banner></Banner>
            <Countdown></Countdown>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Home;