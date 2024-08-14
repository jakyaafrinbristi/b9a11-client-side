import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";




const BookedService = () => {
    const {user}=useContext(AuthContext)
    const booking=useLoaderData();
    console.log(booking)
    console.log(user)
    
    

    return (
        <div>
<div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
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
                    booking.map(book=><tr key={book._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
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
                        <td className="p-3 text-right">
                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                <span>{book.status}</span>
                            </span>
                        </td>
                    </tr>)
                }
				
			</tbody>
		</table>
	</div>
</div>
           
            
        
        
            
         
        </div>
    );
};

export default BookedService;