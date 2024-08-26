import Lottie from "lottie-react";
import error from "../json/error.json"
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const Error = () => {
    return (
        <div>
            <Lottie className="w-[50%] mx-auto my-10" animationData={error} loop={true} />
            <div className="text-center space-y-5">
                <h1 className="text-4xl font-bold ">OPPS!PAGE NOT FOUND</h1>
                <p className="text-xl font-semibold mb-5">Sorry,the page you're looking for doesn't exist</p>
                <Link to="/">
                    <button className="btn btn-outline mt-5"><IoArrowBackSharp />
                        Return Home</button>
                </Link>







            </div>


        </div>
    );
};

export default Error;