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
import Details from "../Components/Details/Details";
import CountryCard from "../Components/countryCard/CountryCard";
import Update from "../Components/Update/Update";
import Root from "../Components/Root/Root";




  const routes = createBrowserRouter([
   {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: 
          <Home></Home>,
          loader: () => fetch('https://turisom.vercel.app/country')  
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
        element: <PrivetRoute><AddTuristList></AddTuristList></PrivetRoute>
       
      }, 
      {
        path: '/allTuristSport',
        element: <PrivetRoute><AllTuristSport></AllTuristSport></PrivetRoute>,
        loader: () => fetch('https://turisom.vercel.app/country') 
      },
      {
        path: '/myList',
        element:  <PrivetRoute><MyList></MyList></PrivetRoute>
      },
      {
        path: '/countryCard',
        element: <PrivetRoute>
          <CountryCard></CountryCard>
        </PrivetRoute>
      },
      {
        path: '/socialLogIn',
        element: <SocialLogIn></SocialLogIn>
      },
      {
        path: '/details/:id',
        element: <PrivetRoute><Details></Details></PrivetRoute>,
        loader: ({params}) => fetch(`https://turisom.vercel.app/country/one/${params.id}`)    
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`https://turisom.vercel.app/country/one/${params.id}`) 
      }
    ]
   }
    

  ]);



export default routes;