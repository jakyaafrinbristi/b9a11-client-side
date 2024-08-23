import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const AddService = () => {
    const { user } = useContext(AuthContext)
    // const navigate =useNavigate()
    const serviceHandler = async e => {
        e.preventDefault();
        const form = e.target;

        const service_name = form.service_name.value;
        // console.log(service_name)
        const email = form.email.value;
        const service_price = parseFloat(form.service_price.value);
        const service_area = form.service_area.value;
        const service_image = form.service_image.value;
        const description = form.description.value;

        const beautyService = {
            service_name,
            service_price,
            service_area,
            service_image,
            description,
            serviceProvider: {
                email,
                name: user?.displayName,
                photo: user?.photoURL
            }
        }
        console.log(beautyService)


        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/service`, beautyService)
            console.log(data)
            toast.success('service added Successfully')
            // navigate('/my-posted-job')


        }
        catch (err) {
            console.log(err)

        }

    }
    return (
        <div>
            <Helmet>
                <title>Add-Service</title>
            </Helmet>
            <div className="  container px-8 py-10 mx-auto">
                <h2 className="text-center bg-pink-50 py-5 text-2xl font-bold mb-10 underline">Add service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 ">

                    <div className="bg-pink-50 px-5 py-5">
                        {/* first row */}
                        <form onSubmit={serviceHandler}>
                            <div className="md:flex">
                                <div className="form-control md:w-1/2 ml-4">
                                    <label className="label">
                                        <span className="label-text">Name
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
                                        <span className="label-text">Email
                                        </span>
                                    </label>
                                    <label className="input-group">

                                        <input type="email" name="email" id="" className="input input-bordered w-full" placeholder="email"
                                            defaultValue={user?.email} />
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

                                        <input type="text" name="service_name" id="" className="input input-bordered w-full border-pink-200" placeholder="service_name" />
                                    </label>

                                </div>
                                <div className="form-control md:w-1/2 ">
                                    <label className="label">
                                        <span className="label-text">Service Price
                                        </span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" name="service_price" id="" className="input input-bordered w-full border-pink-200" placeholder="service_price" />
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

                            {/* fourth row */}


                            <div className="form-control md:w-full ">
                                <label className="label">
                                    <span className="label-text">Service Image
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="service_image" id="" className="input input-bordered w-full border-pink-200" placeholder="service_image" />
                                </label>

                            </div>






                            <div className='flex flex-col gap-2 mt-4'>
                                <label className='text-gray-700 ' htmlFor='description'>
                                    Service Description
                                </label>
                                <textarea
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-pink-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    name='description'
                                    id='description'
                                ></textarea>
                            </div>
                            <input type="submit" value="Add" className="btn btn-block mt-5 bg-white hover:bg-pink-50 hover:text-pink-600 font-bold hover:text-xl border-pink-200" />


                        </form>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default AddService;
