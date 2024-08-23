import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";


const Booking = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { service_name, service_image, service_price, _id, serviceProvider } = service;
     
   const [startDate, setStartDate] = useState(new Date());

    // const navigate =useNavigate()
    const bookingHandler = async e => {
        e.preventDefault();
        if(user ?.email === serviceProvider ?.email) return toast.error('Application not Permitted')
        const form = e.target;
        const serviceId = _id;

        const service_name = form.service_name.value;
        // console.log(service_name)

        const email = user?.email;
        
        const name =user?.displayName;

        const service_price = parseFloat(form.service_price.value);
        const service_area = form.service_area.value;
        const service_address=form.service_address.value;
        const customization = form.customization.value;
        const service_image = form.service_image.value;
        const date=startDate;

        const status = 'Pending';

        const bookingData = {

            serviceId,
            service_name,
            service_price,
            email,
            name,
            service_area,
            service_image,
            service_address,
            customization,
            status,
            date,
            serviceProvider


        }
        console.log(bookingData)
        
        try{
            const { data }=await axios.post(`${import.meta.env.VITE_API_URL}/booking`,bookingData)
            console.log(data)
            toast.success('booking added Successfully')
            // navigate('/my-posted-job')
      
        
          }
          catch(err){
            console.log(err)
        
          }
    }
    return (
   
        <div>
            <Helmet>
            <title>Booking</title>
            </Helmet>
            <div className="  container px-8 py-10 mx-auto">
                <h2 className="text-center bg-pink-50 py-5 text-2xl font-bold mb-10 underline">Booking service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 ">

                    <div className="bg-pink-50 px-5 py-5">
                        {/* first row */}
                        <form onSubmit={bookingHandler}>
                            <div className="form-control md:w-full ">
                                <label className="label">
                                    <span className="label-text">Service id
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="name" id="" className="input input-bordered w-full"
                                        defaultValue={_id}
                                        placeholder="Name" />
                                </label>

                            </div>
                            <div className="md:flex">
                                <div className="form-control md:w-1/2 ">
                                    <label className="label">
                                        <span className="label-text">User Name
                                        </span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" name="name" id="" className="input input-bordered w-full"
                                            defaultValue={user?.displayName}
                                            placeholder="Name" />
                                    </label>

                                </div>
                                <div className="form-control md:w-1/2 ml-4">
                                    <label className="label">
                                        <span className="label-text">User Email
                                        </span>
                                    </label>
                                    <label className="input-group">

                                        <input type="email" name="email" id="" className="input input-bordered w-full" placeholder="email"
                                            defaultValue={user?.email} />
                                    </label>

                                </div>
                            </div>
                            {/* provider */}
                            <div className="md:flex">
                                <div className="form-control md:w-1/2 ">
                                    <label className="label">
                                        <span className="label-text">Provider Name
                                        </span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" name="name" id="" className="input input-bordered w-full"
                                            defaultValue={serviceProvider?.name}
                                            placeholder="Name" />
                                    </label>

                                </div>
                                <div className="form-control md:w-1/2 ml-4">
                                    <label className="label">
                                        <span className="label-text">ProviderEmail
                                        </span>
                                    </label>
                                    <label className="input-group">

                                        <input type="email" name="email" id="" className="input input-bordered w-full" placeholder="email"
                                            defaultValue={serviceProvider?.email} />
                                    </label>

                                </div>
                            </div>
                            {/* second row */}
                            <div className="md:flex gap-5">
                                <div className="form-control md:w-1/2 ">
                                    <label className="label">
                                        <span className="label-text">Service Name
                                        </span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" name="service_name" id="" defaultValue={service_name} className="input input-bordered w-full border-pink-200" placeholder="service_name
                                    " />
                                    </label>

                                </div>
                                <div className="form-control md:w-1/2 ">
                                    <label className="label">
                                        <span className="label-text">Service Price
                                        </span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" name="service_price" id="" defaultValue={service_price} className="input input-bordered w-full border-pink-200" placeholder="service_price" />
                                    </label>

                                </div>
                            </div>
                            {/* third row  */}


                            <div className="form-control md:w-full ">
                                <label className="label">
                                    <span className="label-text">Service Area
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="service_area" id="" className="input input-bordered w-full border-pink-200" placeholder="service_area" />
                                </label>

                            </div>
                            <div className="form-control md:w-full ">
                                <label className="label">
                                    <span className="label-text">Service Address
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="service_address" id="" className="input input-bordered w-full border-pink-200" placeholder="service_address" />
                                </label>

                            </div>
                            <div className="mt-5 mb-5 flex gap-5 w-full">
                            <div className='flex flex-col gap-2 md:w-1/2'>
                <label className='text-gray-700 ' htmlFor='customization'>
                  Customization
                </label>
                <select
                  name='customization'
                  id='customization'
                  className='border-pink-200 p-2 rounded-md'
                >
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
                
                </select>
              </div>
              <div className='flex flex-col gap-2  md:w-1/2'>
                <label className='text-gray-700'>Date</label>
  
                {/* Date picker input field */} 
                <DatePicker className="border-pink-200 p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />  
             
               

              </div>
                            </div>
                          

                            {/* fourth row */}


                            <div className="form-control md:w-full ">
                                <label className="label">
                                    <span className="label-text">Service Image
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="service_image" id=""
                                        defaultValue={service_image} className="input input-bordered w-full border-pink-200" placeholder="service_image" />
                                </label>

                            </div>







                            <input type="submit" value="Purchase" className="btn btn-block mt-5 bg-white hover:bg-pink-50 hover:text-pink-600 font-bold hover:text-xl border-pink-200" />


                        </form>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Booking;