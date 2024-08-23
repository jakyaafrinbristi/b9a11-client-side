import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
// import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";




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
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                <div className="overflow-x-auto">
                    {booking.length === 0 ? (
                        <p className="text-center text-lg font-semibold text-gray-600">
                            No services booked. Please check back later or book a service.
                        </p>
                    ) : (<table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Client Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Service Name</th>
                                <th className="p-3">Service date</th>
                                <th className="p-3 text-right">Amount</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                booking.map(book => <tr key={book._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{book.name}</p>
                                    </td>

                                    <td className="p-3">
                                        <p>{book.email}</p>

                                    </td>
                                    <td className="p-3">
                                        {book.service_name}

                                    </td>
                                    <td className="p-3">
                                        {new Date(book.date).toLocaleDateString()}

                                    </td>
                                    <td className="p-3 text-right">
                                        <p>{book.service_price}</p>
                                    </td>

                                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                        <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${book.status === 'Pending' && 'bg-blue-100/60 text-blue-500'} ${book.status === 'Working' && 'bg-emerald-100/60 text-emerald-500'} ${book.status === 'Complete' && 'bg-red-100/60  text-red-500'} `}>
                                            <span className={`h-1.5 w-1.5 rounded-full ${book.status === 'Pending' && 'bg-blue-500'} ${book.status === 'Working' && 'bg-emerald-500 '} ${book.status === 'Complete' && 'bg-red-500'} `}></span>
                                            <h2 className='text-sm font-normal '>{book.status}</h2>
                                        </div>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>)}

                </div>
            </div>






        </div>
    );
};

export default BookedService;