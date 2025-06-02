
import Blogpage from '../components/Blogpage'

const Blog = () => {
  return (
   <>
    <div className='bg-gradient-to-r from-green-400 via-green-700 to-green-900 p-7'>
           <h1 className="text-white text-center text-4xl mb-4 p-5 sm:text-7xl">
          {" "}
          Blog Page
        </h1> 
     </div>
     <Blogpage/>
   </>
  )
}

export default Blog