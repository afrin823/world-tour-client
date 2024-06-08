import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
                <div className=" mx-auto">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
              </div>
        </div>
    );
};

export default Root;