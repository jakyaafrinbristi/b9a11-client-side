import { Link } from "react-router-dom"

const Slide = ({image,text}) => {
 
    return (
      <div
        className='w-full bg-center bg-cover h-[30rem] lg:h-[46rem]'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className='flex items-center justify-center w-full h-full '>
          <div className='text-center'>
            <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
              {text}
            </h1>
            <br />
            <Link to="/add-service" className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-pink-400 rounded-md lg:w-auto hover:bg-pink-600 focus:outline-none focus:bg-pink-200'>
            Pamper Yourself
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  export default Slide