import { Link } from 'react-router-dom';
import first from '../assets/images/female-visagiste-doing-makeup.jpg';
import second from '../assets/images/happy-woman-makeup-artist-with-brushes.jpg';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const About = () => {
    return (
        <div className="container mx-auto mt-16 mb-16 ">

            <div className='flex flex-col lg:flex-row justify-around'>
                <div className="w-[80%] lg:relative lg:w-[30%] lg:h-[300px] bg-pink-50 ml-10  ">
                    {/* First Image */}
                    <motion.div 
                           variants={fadeIn("right",0.2)}
                           initial="hidden"
                           whileInView={"show"}
                           viewport={{once:false, amount:0.7}}
                     className="w-full lg:absolute top-6 right-[-90px] lg:w-[70%]">
                        <img className="w-full h-auto object-cover" src={first} alt="" />
                    </motion.div>

                    {/* Second Image */}
                    <motion.div
                            variants={fadeIn("right",0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false, amount:0.7}}
                     className="w-full lg:absolute bottom-[-40px] left-[-30px] lg:w-[70%]">
                        <img className="w-full h-auto object-cover" src={second} alt="" />
                    </motion.div>
                </div>
                <motion.div
                
                
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                
                >
                    <h1 className='font-bold text-3xl text-center mt-5 mb-5 underline'><span className='text-pink-400 text-4xl'>A</span>bout <span className='text-pink-400 text-4xl'>U</span>s</h1>
                    <p className='max-w-xl px-6 font-semibold text-gray-500'>  At Beauty Bliss, we believe in enhancing your natural beauty with expert services and a personalized touch.
                        Our team of professionals is dedicated to helping you look and feel your best, whether you're preparing
                        for a special occasion or just indulging in some well-deserved self-care.</p>
                        <motion.div
                         
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                        
                        
                        className='mt-5 text-center'>
                    <Link to='/show-all' type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">More Info</Link>
                    </motion.div>
                </motion.div>
            </div>

        </div>
    );
};

export default About;
