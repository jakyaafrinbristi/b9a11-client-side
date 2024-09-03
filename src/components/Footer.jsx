import { useContext } from 'react';
import logo from '../assets/images/logo.png'
import { FaLinkedin } from "react-icons/fa6";
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const {signInWithFacebook}=useContext(AuthContext)
    const navigate =useNavigate()
    const currentYear = new Date().getFullYear();

    const handleFacebookSignIn = async () => {
		try {
			const result = await signInWithFacebook()
			console.log(result)
			navigate('/')
			toast.success('Signin Successful')
		

		}
        catch(error) {
            if (error.code === 'auth/popup-closed-by-user') {
              toast.error('The sign-in popup was closed before completing the process. Please try again.');
            } else {
                toast.error('err?.message')
            }


		}

    }
    
    return (
        <div>
            <footer className=" bg-pink-100 container mx-auto">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center text-center">

                        <img className='w-30 h-32 ' src={logo} alt="" />
                        <h1 className='font-bold text-center mb-10'><span className='text-3xl text-pink-700 font-bold'>L</span>uxe<span className='text-3xl text-pink-700 font-bold'>L</span>ooks</h1>
                    </div>

                    <hr className="my-6 border-gray-200 md:my-10 dark:border-pink-700" />

                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p className="text-sm text-pink-500 font-bold"> &copy; {currentYear} LuxeLooks. All Rights Reserved.</p>

                        <div className="flex -mx-2 items-center">


                            <button onClick={handleFacebookSignIn} className="mx-2 text-black-600 transition-colors duration-300 dark:text-black-300 hover:text-pink-500 dark:hover:text-pink-800" aria-label="Facebook">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                    </path>
                                </svg>
                            </button>
                            <FaLinkedin  className='hover:text-pink-700 text-xl' />



                        </div>
                    </div>
                </div>
            </footer>


        </div>
    );
};

export default Footer;