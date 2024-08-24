
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    // const {user}=useContext(AuthContext)


    
 
    const {service_name,service_image,service_price,description,_id, serviceProvider}=service

 
    return (
           <div className="max-w-2xl overflow-hidden bg-gray rounded-lg shadow-md dark:bg-gray-900 ">
    <img className="object-cover w-full h-64" src={service_image} alt="Article"/>

    <div className="p-5 ">
        <div>
            <span className=" font-medium text-blue-600 dark:text-blue-400">Price:{service_price}</span>
            <h3  className="block mt-2 text-xl font-semibold text-gray-900  hover:underline dark:text-gray-200 ">{service_name}</h3>
            <p className="  text-gray-600 mt-5 dark:text-gray-200">{description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
                <div className="flex items-center">
                    <img className="object-cover h-10 rounded-full" src={serviceProvider?.photo} alt="Avatar"/>
                    <p href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" >{serviceProvider ?.name}</p>
                </div>
                
                
            </div>
           <Link to={`/service/${_id}`} className="px-2 py-2 rounded-full bg-teal-100"> <GoArrowRight /></Link>
        </div>
   
    </div>
   
</div>

            
        
    );
};

export default ServiceCard;