
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    // const {user}=useContext(AuthContext)




    const { service_name, service_image, service_price, service_area, description, _id, serviceProvider } = service


    return (
        <div className="max-w-2xl overflow-hidden bg-gray rounded-lg shadow-md bg-pink-50 ">
            <img className="object-cover w-full h-64" src={service_image} alt="Article" />

            <div className="p-5 ">
                <div>
                    <div className="flex justify-between items-center">
                        <button className="font-bold text-pink-400 rounded-full bg-white px-2">Price:{service_price}</button>
                        <button className="mt-2 px-2  bg-white font-bold text-pink-400 rounded-full ">{service_area}</button>

                    </div>
                    <h3 className="block mt-2 text-xl font-semibold text-pink-500   hover:underline  ">{service_name}</h3>
                    <p className=" text-gray-900 mt-5 ">{description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src={serviceProvider?.photo} alt="Avatar" />
                            <p href="#" className="mx-2 font-semibold text-pink-600" >{serviceProvider?.name}</p>
                        </div>


                    </div>
                    <Link to={`/service/${_id}`} className="px-2 py-2 rounded-full bg-white"> <GoArrowRight className="text-pink-500" /></Link>
                </div>

            </div>

        </div>



    );
};

export default ServiceCard;