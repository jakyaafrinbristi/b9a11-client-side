import { Link, useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";

import { Helmet } from "react-helmet-async";
import ServiceCard from "./ServiceCard";





const Home = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
             <Helmet>
				<title>
					Home
				</title>
			</Helmet>

            <Carousel></Carousel>
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
                <div className=" mt-12 text-center">
                    <Link to='/show-all'  className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Show All</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;