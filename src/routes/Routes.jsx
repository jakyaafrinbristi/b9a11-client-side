import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";

import AddService from "../pages/AddService";
// import BookedService from "../pages/BookedService";
import ManageService from "../pages/ManageService";
import ServiceToDo from "../pages/ServiceToDo";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import ShowAll from "../pages/ShowAll";
import ServiceDetails from "../pages/ServiceDetails";
import Update from "../pages/Update";
import Booking from "../components/Booking";
import BookedService from "../pages/BookedService";

import PrivateRoute from "./PrivateRoute";
import ServiceCard from "../pages/ServiceCard";
import Services from "../pages/Services";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
        index:true,
        element:<Home></Home>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/service`)
      
      },
    
      {
        path:'/add-service',
        element:<AddService></AddService>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/services',
        element:<Services></Services>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/service`),
      },
      {
        path:'/services-card',
        element:<ServiceCard></ServiceCard>
      },
  
      {
        path:'/manage-service',
        element:<PrivateRoute><ManageService></ManageService></PrivateRoute>
      },
      {
        path:'/service-do',
        element:<PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
      },
    
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      },
      {
        path:'/show-all',
        element:<PrivateRoute><ShowAll></ShowAll></PrivateRoute>,
      
      },
      {
        path:'/service/:id',
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`),
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`),
      },
      {
        path:'/booking/:id',
        element:<Booking></Booking>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`),
      },

    {
      path:"/booked",
      element:<PrivateRoute><BookedService></BookedService></PrivateRoute>,
      loader:()=>fetch(`${import.meta.env.VITE_API_URL}/booking`),
    }

    ]

    },
  ]);
  export default router;
