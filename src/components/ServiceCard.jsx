import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";


const ServiceCard = ({service}) => {
    const {user}=useContext(AuthContext)
 
    const {service_name,service_area,service_image,service_price,description,}=service
 
    return (
           <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md">
    <img className="object-cover w-full h-64" src={service_image} alt="Article"/>

    <div className="p-5">
        <div>
            <span className=" font-medium text-blue-600 dark:text-blue-400">Price:{service_price}</span>
            <h3  className="block mt-2 text-xl font-semibold text-black  hover:underline"  >{service_name}</h3>
            <p className="  text-gray-600 mt-5">{description}</p>
        </div>

        <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                    <img className="object-cover h-10 rounded-full" src={user ?.photoURL} alt="Avatar"/>
                    <p href="#" className="mx-2 font-semibold text-gray-700 " >{user ?.displayName}</p>
                </div>
                
                
            </div>
        </div>
    </div>
   
</div>

            
        
    );
};

export default ServiceCard;