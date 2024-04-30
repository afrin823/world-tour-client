import {
    createBrowserRouter,   
  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AllTuristSport from "../Components/AllTuristSport/AllTuristSport";
import MyList from "../Components/MyList/MyList";
import SocialLogIn from "../Components/Register/SocialLogIn";
import PrivetRoute from "../Components/privetRoute/PrivetRoute";
import AddTuristList from "../Components/AddTuristList/AddTuristList";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: 
        <Home></Home>,
        loader: () => fetch('http://localhost:5000/country')  
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/addTuristList',
      element: <AddTuristList></AddTuristList>
     
    },
    {
      path: '/allTuristSport',
      element: <AllTuristSport></AllTuristSport>
    },
    {
      path: '/myList',
      element:  <PrivetRoute>
      <MyList></MyList>
      </PrivetRoute>
    },
    {
      path: '/socialLogIn',
      element: <SocialLogIn></SocialLogIn>
    }
  ]);



export default routes;