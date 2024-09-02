import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';


const ServiceToDo = () => {
  const navigate =useNavigate()
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([])
  useEffect(() => {
    getData()
  }, [user])
  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/booking/${user?.email}`)
    // console.log(data)
    // console.log(user)
    setServices(data)
  }
  const handleStatusChange = async (serviceId, prevStatus, newStatus) => {
    if (prevStatus === newStatus) {
      return console.log('Sorry, the status is already set to the selected option.');
    }

    try {
      const response = await axios.patch(`${import.meta.env.VITE_API_URL}/booking/${serviceId}`, {
        status: newStatus,
       
     
 
       
      }
   );

      console.log('Status updated:', response.data);

      // Update the services state with the new status
      setServices(services.map(service =>
        service._id === serviceId ? { ...service, status: newStatus } : service
       
      ));
      navigate('/booked')
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Service-to-do</title>
      </Helmet>
      <motion.div
             variants={fadeIn("up",0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}
             className="container px-8 py-10 mx-auto">
                <h2 className="text-center bg-pink-50 py-5 text-2xl font-bold mb-10 underline"><span className="text-pink-600">S</span>ervice-<span className="text-pink-600">T</span>o-<span className="text-pink-600">D</span>o</h2>
                </motion.div>
      
      <div className="container mx-auto px-8 mt-12 mb-10 grid grid-cols-1 md:grid-cols-3 gap-5">


        {services.length > 0 ? (
          services.map(service =>(
           <motion.div 
           variants={fadeIn("up",0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}
           key={service._id} className="max-w-2xl overflow-hidden  rounded-lg shadow-md mt-10 mb-10 bg-pink-50">
            <img className="object-cover w-full h-64 " src={service.service_image} alt="Article" />

            <div className="p-6">
              <div className="flex justify-between items-center">
                <span className="font-bold text-pink-600 dark:text-pink-400">Price:{service.service_price}</span>
                <button className="mt-2 px-2  bg-white font-bold text-pink-400 rounded-full ">{service.service_area}</button>

              </div>
              <div>
                <a href="#" className="block mt-2 text-xl font-semibold text-gray-600 hover:underline" role="link">{service.service_name}</a>
                <div>
                <p className="font-semibold mt-3">Address:<span className="text-pink-500 ml-2">{service.service_address}</span></p>
                <p className="font-semibold mt-3">Customization:<span className="text-pink-500 ml-2">{service.customization}</span></p>

              
                </div>
            

              </div>
              <div className="mb-10">
                <div className='flex flex-col lg:flex-row  gap-5 items-center '>
                  <label className='text-gray-700 mt-3  font-bold' htmlFor={`status-${service._id}`}>
                    Status:
                  </label>
                  <select
                    name={`status-${service._id}`}
                    id={`status-${service._id}`}
                    className='border-pink-200 rounded-md mt-2'
                    value={service.status}
                    onChange={(e) => handleStatusChange(service._id, service.status, e.target.value)}
                  >
                    <option className="text-pink-500 bg-pink-100" value='Pending'>Pending</option>
                    <option className="text-pink-500 bg-pink-100" value='Working'>Working</option>
                    <option className="text-pink-500 bg-pink-100" value='Complete'>Completed</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <img className="object-cover h-10 rounded-full" src={service.serviceProvider?.photo} />
                    <a href="#" className="mx-2 font-semibold text-gray-700 " role="link">{service.serviceProvider?.name}</a>
                  </div>
                  <span className="mx-1 text-xs font-semibold text-pink-600">{new Date(service.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </motion.div>))
          )
          : (
            <p className="text-center text-pink-600 font-bold text-lg">No services found.</p>
          )}
        


      </div>
    </div>

  );
};

export default ServiceToDo;