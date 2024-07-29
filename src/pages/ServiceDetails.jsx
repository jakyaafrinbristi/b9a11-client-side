import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const ServiceDetails = () => {
    const {user}=useContext(AuthContext)
        const service = useLoaderData()
        const {service_name,service_area,service_image,service_price,description,_id}=service
 
    return (
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md container mx-auto mt-12 mb-10">
    <img className="object-cover w-full h-full" src={service_image} alt="Article"/>

    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-blue-600  dark:text-blue-400">Price:{service_price}</span>
            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 hover:underline" >{service_name}</a>
            <p className="mt-2  text-gray-600 ">{description}</p>
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

export default ServiceDetails;