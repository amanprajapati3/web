
import { FaArrowRight } from 'react-icons/fa6'
import Blogpage from '../components/Blogpage'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
     <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-7'>
           <h1 className='text-white text-center text-4xl mb-4 md:text-6xl'> Welcome to my Blog</h1> 
           <p className='text-white text-center pb-2 md:text-xl md:p-12'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis minima provident, ab excepturi tempore consectetur error perferendis doloremque deserunt temporibus nobis! </p> 
           <center>
           <button className=' flex text-white m-5 p-2 hover:text-orange-300 md:text-xl '> Learn More <span className='pl-2 pt-[5px]'><FaArrowRight/></span>  </button>
           </center>
     </div>
     <Blogpage/>
     <Footer/>
    </>
  )
}

export default Home