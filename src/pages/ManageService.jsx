import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';



const ManageService = () => {
    const {user}=useContext(AuthContext)
    const [services,setServices]=useState([])

    useEffect(()=>{
    
        getData()
        
    },[user])
    const getData = async ()=>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/services/${user?.email}`)
      
        console.log(user)
        console.log(data) 
        setServices(data)
        
   
    }

//    delete service
const deleteButton =async id =>{
    try{
        const { data }=await axios.delete(`${import.meta.env.VITE_API_URL}/service/${id}`)
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to  service',
                icon: 'success',
                confirmButtonText: 'service deleted'
              })
            getData()

    }
    catch(err){
console.log(err.message)
    }
}
// if(services.serviceProvider.email == user.email){
//      return toast.error('Service provider cannot apply')}




    return (
     <div>
        <Helmet>
         <title>Manage Service</title>
      </Helmet>
      <motion.div 
      variants={fadeIn("up",0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}
             className=" container px-8 mt-5 mx-auto">
                <h2 className="text-center bg-pink-50 py-5 text-2xl font-bold mb-5 underline"><span className="font-bold text-pink-500">M</span>anage <span className="font-bold text-pink-500">S</span>ervice</h2>
      </motion.div>
          
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto px-6 py-10">
       
           {
                   services.map(service=><motion.div
                 
                    variants={fadeIn("up",0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                   
                   key={service._id} className="flex  overflow-hidden bg-pink-100 p-10 rounded-lg shadow-lg mt-7">
         
                       <div className="w-full bg-cover p-5" style={{backgroundImage: `url(${service.service_image})`}}></div>
                   
                       <div className="w-full p-4 md:p-4">
                           <h1 className="text-xl font-bold text-pink-500 ">{service.service_name}</h1>
                   
                           <p className="mt-2 text-sm text-pink-500 ">{service.description}</p>
                   
                       
                   
                           <div >
                               <h1 className="text-lg font-bold text-pink-600 mt-3  md:text-xl">${service.service_price}</h1>
                            
   
                           </div>
                       
                   
                           <div className="flex gap-4 mt-3">
                           <button className="text-pink-500" onClick={()=>deleteButton(service._id)}>
                           <MdDelete />
                           
                           </button>
                           <Link className="text-pink-500" to={`/update/${service._id}`}>
                       
                           <FaRegEdit />
                           </Link>
                           </div>
                          
                           <div className=" flex items-center gap-2 mt-5 text-pink-600 font-bold">
                       
                       <img className="rounded-full w-[15%]" src={user?.photoURL} alt="" />
                       <p>{user?.displayName}</p>
                   </div>
                         
                  
                         
                         
   
                           
                           
                       </div>
                   </motion.div> )
   
               }
           </div>
   
           </div>
  
    );
};

export default ManageService;