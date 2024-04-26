import {
    createBrowserRouter,   
  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

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
    }
  ]);



export default routes;