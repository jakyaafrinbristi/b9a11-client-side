import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AddService from "../pages/AddService";
import BookedService from "../pages/BookedService";
import ManageService from "../pages/ManageService";
import ServiceToDo from "../pages/ServiceToDo";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
        index:true,
        element:<Home></Home>
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
    ]

    },
  ]);
  export default router;
