import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Services from "../pages/Services";
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
        index:true,
        element:<Home></Home>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/service`),
      },
      {
        path:'/services',
        element:<Services></Services>
      },
      {
        path:'/add-service',
        element:<AddService></AddService>
      },
      {
        path:'/manage-service',
        element:<ManageService></ManageService>
      },
      {
        path:'/service-do',
        element:<ServiceToDo></ServiceToDo>
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
        element:<ShowAll></ShowAll>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/service`),
      },
      {
        path:'/service/:id',
        element:<ServiceDetails></ServiceDetails>,
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
      }

    ]

    },
  ]);
  export default router;
