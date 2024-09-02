import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
// import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';




const BookedService = () => {
    const { user } = useContext(AuthContext)
    const booking = useLoaderData();
    console.log(booking)
    console.log(user)




    return (
        <div>
            <Helmet>
                <title>Booked Service</title>
            </Helmet>
            <div
        className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <motion.div
                      variants={fadeIn("left",0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:false, amount:0.7}} 
                >
                <h2 className="mb-10 underline  text-2xl text-center font-bold leading-tight"><span className="text-3xl text-pink-600">B</span>ooked <span className="text-3xl text-pink-600">S</span>ervices</h2>
                </motion.div>
                <div className="overflow-x-auto">
                    {booking.length === 0 ? (
                        <p className="text-center text-lg font-semibold text-pink-600">
                            No services booked. Please check back later or book a service.
                        </p>
                    ) : (<motion.table
                    
             variants={fadeIn("right",0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}  
                    
                    className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-pink-100">
                            <tr className="text-left">
                                <th className="p-3 text-pink-700">Client Name</th>
                                <th className="p-3 text-pink-700">Email</th>
                                <th className="p-3 text-pink-700">Service Name</th>
                                <th className="p-3 text-pink-700">Service date</th>
                                <th className="p-3 text-right text-pink-700">Amount</th>
                                <th className="p-3 text-pink-700">Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                booking.map(book => <tr key={book._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p className="font-semibold text-pink-700
                                        ">{book.name}</p>
                                    </td>

                                    <td className="p-3 font-semibold text-fuchsia-600">
                                        <p>{book.email}</p>

                                    </td>
                                    <td className="p-3">
                                        <p className="font-semibold text-pink-700
                                        ">{book.service_name}</p>

                                    </td>
                                    <td className="p-3 font-bold text-fuchsia-500">
                                        {new Date(book.date).toLocaleDateString()}

                                    </td>
                                    <td className="p-3 text-right text-pink-600">
                                        <p>{book.service_price}</p>
                                    </td>

                                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                        <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${book.status === 'Pending' && 'bg-cyan-100/60 text-cyan-600'} ${book.status === 'Working' && 'bg-purple-100/60 text-purple-500'} ${book.status === 'Complete' && 'bg-fuchsia-100/60  text-fuchsia-500'} `}>
                                            <span className={`h-1.5 w-1.5 rounded-full ${book.status === 'Pending' && 'bg-cyan-500'} ${book.status === 'Working' && 'bg-purple-500 '} ${book.status === 'Complete' && 'bg-fuchsia-500'} `}></span>
                                            <h2 className='text-sm font-normal '>{book.status}</h2>
                                        </div>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </motion.table>)}

                </div>
            </div>






        </div>
    );
};

export default BookedService;