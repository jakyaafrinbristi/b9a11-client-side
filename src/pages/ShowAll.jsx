import { useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";


const ShowAll = () => {
    const services =useLoaderData()
    console.log(services)
    return (
        <div>
               <div className="container mx-auto px-8 py-10 ">
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }

                </div>
             
            </div>
            
        </div>
    );
};

export default ShowAll;