import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { service_name, service_area, service_image, service_price, description, _id,serviceProvider } = service

    return (
        <div>
            <Helmet>
                <title>Service details</title>
            </Helmet>
               <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md container mx-auto mt-12 mb-10">
            <img className="object-cover w-full h-full" src={service_image} alt="Article" />

            <div className="p-6">
                <div>
                    <span className=" font-medium text-blue-600  dark:text-blue-400">Price:{service_price}</span>
                    <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 hover:underline" >{service_name}</a>
                    <p className="mt-2  text-gray-600 font-semibold">{description}</p>
                </div>

                <div className="mt-4 ">
                    <h1 className="mb-4 font-bold">Provider Information:</h1>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src={serviceProvider?.photo} alt="Avatar" />
                            <p href="#" className="mx-2 font-semibold text-gray-700 " >{serviceProvider?.name}</p>
                        </div>
                        <div>
                        <Link to={`/booking/${_id}`} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Book Now</span>
                    </Link>
                        </div>
                

                    </div>
               
                </div>
            </div>
        </div>
        </div>
     
    );
};

export default ServiceDetails;