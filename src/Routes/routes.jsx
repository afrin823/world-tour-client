import {
    createBrowserRouter,   
  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddTuristList from "../Components/AssTuristList/AddTuristList";
import AllTuristSport from "../Components/AllTuristSport/AllTuristSport";
import MyList from "../Components/MyList/MyList";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
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
      element: <MyList></MyList>
    }
  ]);



export default routes;