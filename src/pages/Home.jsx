import { Link, useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";

import { Helmet } from "react-helmet-async";
import ServiceCard from "./ServiceCard";
import About from "./About";
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import Services from "./Services";




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
       
            <About></About>

        <Services></Services>
          
                    
            
                <motion.div 
                   variants={fadeIn("up",0.3)}
                   initial="hidden"
                   whileInView={"show"}
                   viewport={{once:false, amount:0.6}}
                className=" mt-12 text-center mb-10">
                    <Link to='/show-all'  className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-pink-700 transition-colors duration-300 ease-out border-2 border-pink-800 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-pink-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Show All</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-pink-800 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </Link>
                </motion.div>
            </div>
       
    );
};

export default Home;