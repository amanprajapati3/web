import { useParams, Link } from "react-router-dom";
import { data } from "../Data/data";
import Footer from "./Footer";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const blog = data.find((item) => item.id === Number(id));

  return (
    <>
    <div className="md:p-5 p-1 sm:mx-5 lg:mx-12 ">
      <button className=" bg-gray-700 hover:bg-gray-900 active:scale-90 px-2 py-1 rounded-xl md:mb-5 text-white  ">
        <Link to="/" className="sm:text-xl w-fit">
        Back To List
      </Link>
      </button>
      <div className="items-center ">
         <h1 className="text-center text-xl sm:text-2xl md:text-4xl font-semibold md:py-8 py-5 px-2 sm:px-0">{blog.title}</h1>
         <div className="flex justify-center  flex-wrap lg:flex-nowrap gap-3">
            <div className="lg:w-[50%] flex items-center w-full border-2 md:p-3 ">
            <img src={blog.img} alt="" className="w-full" />
            </div>
            <div className="lg:w-[50%] w-full">
                <div className="flex justify-between md:p-3 p-1">
                  <p className="sm:text-xl"><b>Author:-</b>{blog.author}</p>
                  <p className="sm:text-xl"><b>Published:-</b>{blog.Published}</p>
                </div>
                <h1 className="md:p-3 p-1 text-xl font-bold">About The Blog</h1>
              <p className="md:p-3 p-2 text-xl">{blog.detail}</p>
            </div>
         </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default BlogDetailsPage;
