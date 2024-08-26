

import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "./ServiceCard";




const ShowAll = () => {
    const [itemsPerPage, setItemsPerPage] = useState(2)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)

    const [services, setServices] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/show-all?page=${currentPage}&size=${itemsPerPage}`)
            setServices(data)


        }

        getData()

    }, [currentPage, itemsPerPage])
    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/service-count`)

            setCount(data.count)

        }

        getCount()

    }, [])

    console.log(count)
    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)
    // handle pagination button
    const handlePaginationButton = (value) => {
        console.log(value)
        setCurrentPage(value)

    }

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
                <div className="flex justify-center mt-12 space-x-1 dark:text-gray-800">
                    {/* previous button */}
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePaginationButton(currentPage - 1)}
                        title="previous" type="button" className="inline-flex mt-1 items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100
                        hover:bg-pink-500  hover:text-white">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    {pages.map(btnNum => (
                        <button
                            onClick={() => handlePaginationButton(btnNum)}
                            key={btnNum}
                            className={`hidden ${currentPage === btnNum ? 'hover:bg-pink-500  hover:text-white' : ''}  px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline `}
                        >
                            {btnNum}
                        </button>
                    ))}


                    <button 
                    disabled = {currentPage === numberOfPages}
                    onClick={()=>handlePaginationButton(currentPage + 1)}
                    title="next" type="button" className="inline-flex items-center  mt-1 justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100 hover:bg-pink-500  hover:text-white">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>







            </div>

        </div>
    );
};

export default ShowAll;
// 
