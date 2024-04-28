import {
    createBrowserRouter,   
  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddTuristList from "../Components/AssTuristList/AddTuristList";
import AllTuristSport from "../Components/AllTuristSport/AllTuristSport";
import MyList from "../Components/MyList/MyList";
import SocialLogIn from "../Components/Register/SocialLogIn";
import PrivetRoute from "../Components/privetRoute/PrivetRoute";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: 
        <Home></Home>   
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
      element: <PrivetRoute>
      <AddTuristList></AddTuristList>
      </PrivetRoute>
    },
    {
      path: '/allTuristSport',
      element: <AllTuristSport></AllTuristSport>
    },
    {
      path: '/myList',
      element: <MyList></MyList>
    },
    {
      path: '/socialLogIn',
      element: <SocialLogIn></SocialLogIn>
    }
  ]);



export default routes;