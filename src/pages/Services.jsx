import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <div className="container mx-auto px-8 py-10 ">
                <h1 className="text-center font-bold text-2xl underline">Service Card</h1>
                <p className="max-w-2xl mx-auto text-center my-10 text-gray-500">Experience the luxury and convenience of professional beauty treatments at your doorstep, where skilled specialists transform your home into a personal spa, offering everything from rejuvenating facials and relaxing massages to exquisite manicures and hairstyling</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        services.slice(0, 6).map(service => <ServiceCard
                            key={service._id}
                            service={service}
                         
                        ></ServiceCard>)
                    }

                </div>
                </div>
        </div>
    );
};

export default Services;