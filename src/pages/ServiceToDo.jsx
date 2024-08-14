import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const ServiceToDo = () => {
    const {user} =useContext(AuthContext);
    const [services,setServices]=useState([])
    useEffect(()=>{
        getData()
    },[user])
    const getData=async()=>{
        const {data} =await axios(`${import.meta.env.VITE_API_URL}/booking/${user?.email}`)
        console.log(data)
        console.log(user)
        setServices(data)
    }
    const handleStatusChange = async (serviceId, prevStatus, newStatus) => {
        if (prevStatus === newStatus) {
          return console.log('sorry bhai');
        }
    
        try {
          const response = await axios.patch(`${import.meta.env.VITE_API_URL}/booking/${serviceId}`, {
            status: newStatus,
          });
    
          console.log('Status updated:', response.data);
    
          // Update the services state with the new status
          setServices(services.map(service =>
            service._id === serviceId ? { ...service, status: newStatus } : service
          ));
        } catch (error) {
          console.error('Error updating status:', error);
        }
      };
   
    return (
        <div className="container mx-auto px-8 mt-12 mb-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {
            services.map(service=> <div  key={service._id}className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md bg-gray-600">
                <img className="object-cover w-full h-64" src={service.service_image} alt="Article"/>
            
                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Price:{service.service_price}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"  role="link">{service.service_name}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Service Area:{service.service_area}</p>
                  
                    </div>
                    <div className="mb-10">
                    <div className='flex flex-col gap-2 md:w-3/4'>
                    <label className='text-gray-700' htmlFor={`status-${service._id}`}>
                  Status
                </label>
                <select
                  name={`status-${service._id}`}
                  id={`status-${service._id}`}
                  className='border-pink-200 p-2 rounded-md'
                  value={service.status}
                  onChange={(e) => handleStatusChange(service._id, service.status, e.target.value)}
                >
                  <option value='Pending'>Pending</option>
                  <option value='Working'>Working</option>
                  <option value='Complete'>Completed</option>
                </select>
              </div>
                    </div>
            
                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={service.serviceProvider?.photo}/>
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200"role="link">{service.serviceProvider?.name}</a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{new Date(service.date).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            </div>)
        }
 
            
        </div>
    );
};

export default ServiceToDo;