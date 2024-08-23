import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

 
 
 const PrivateRoute = ({children}) => {
 const {user,loading}=useContext(AuthContext)
 const location = useLocation()
 if (loading) return <p><span className="loading loading-dots loading-lg"></span>

</p>
 if (user) return children
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
 };
 
 export default PrivateRoute;