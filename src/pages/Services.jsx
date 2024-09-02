import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';


const Services = () => {
    const services = useLoaderData()
    console.log(services)
    return (
    
            <div className="container mx-auto px-8 py-10 mt-10 mb-10">
                
              <motion.div
                 variants={fadeIn("up",0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once:false, amount:0.7}}>
              <h1 className="text-center font-bold text-2xl underline"><span className="text-pink-600 text-3xl">P</span>opular <span className="text-pink-600 text-3xl">S</span>ervices</h1>
              <p className="max-w-2xl mx-auto text-center my-10 text-gray-500">Experience the luxury and convenience of professional beauty treatments at your doorstep, where skilled specialists transform your home into a personal spa, offering everything from rejuvenating facials and relaxing massages to exquisite manicures and hairstyling</p>
              </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        services.slice(0, 6).map(service => <ServiceCard
                            key={service._id}
                            service={service}
                         
                        ></ServiceCard>)
                    }

                </div>
                </div>
      
    );
};

export default Services;