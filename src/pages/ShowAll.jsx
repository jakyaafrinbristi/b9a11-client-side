import { useLoaderData } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import ServiceCard from "./ServiceCard";



const ShowAll = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <Helmet>
                <title>Show All</title>
            </Helmet>
            <div className="container mx-auto px-8 py-10 ">
                <label className="input input-bordered flex items-center gap-2 mb-12 w-[50%] ml-44">
                    <input type="text" className="grow" placeholder="Search" />
               
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>

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