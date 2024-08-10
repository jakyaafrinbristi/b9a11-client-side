import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from 'sweetalert2'



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
    console.log(services)
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




    return (
        <div className="container mx-auto px-6 py-10">
           
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
        {
                services.map(service=><div     key={service._id} className="flex  overflow-hidden bg-white rounded-lg shadow-lg ">
                    <div className="w-full bg-cover p-5" style={{backgroundImage: `url(${service.service_image})`}}></div>
                
                    <div className="w-full p-4 md:p-4">
                        <h1 className="text-xl font-bold text-gray-800 ">{service.service_name}</h1>
                
                        <p className="mt-2 text-sm text-gray-600 ">{service.description}</p>
                
                    
                
                        <div >
                            <h1 className="text-lg font-bold text-gray-700 mt-3  md:text-xl">${service.service_price}</h1>
                         

                        </div>
                    
                
                        <div className="flex gap-4 mt-3">
                        <button onClick={()=>deleteButton(service._id)}>
                        <MdDelete />
                        
                        </button>
                        <button>
                    
                        <FaRegEdit />
                        </button>
                        </div>
                        <div className="mt-5 font-semibold "> user information:
                        <div className=" flex items-center gap-2 mt-2">
                    
                    <img className="rounded-full w-[15%]" src={user?.photoURL} alt="" />
                    <p>{user?.displayName}</p>
                </div>
                        </div>
               
                      
                      

                        
                        
                    </div>
                </div> )

            }
        </div>

        </div>
    );
};

export default ManageService;