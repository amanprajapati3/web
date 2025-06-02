import { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../Data/data";
import "./Blogpage.css";

const Blogpage = () => {
  const [categorys, setcategorys] = useState(data);

  //using filter
  const filterType = (category) => {
    setcategorys(
      data.filter((item) => item.category === category)
    );
  };

  return (
    <>
      <h1 className="text-2xl font-bold m-5 sm:text-4xl">Category</h1>
      <hr />

      <div className="m-4 pl-2 p-2 flex gap-5 sm:gap-16 text-red-600 font-sans sm:text-xl sm:justify-center sm:m-6">
        <button onClick={() => setcategorys(data)} className="hover:text-red-950">All</button>
        <button onClick={() => filterType("Artificial Intelligent")} className="hover:text-red-950">
          Artificial Intelligent
        </button>
        <button onClick={() => filterType("Fintech")} className="hover:text-red-950">FinTech</button>
        <button onClick={() => filterType("Startup")} className="hover:text-red-950">Startups</button>
      </div>

      <div className="flex justify-center flex-wrap gap-2 lg:mx-5">
        {categorys.map((item, index) => (
          <Link
            key={index}
            to={`/blog-details/${item.id}`}
            className="m-1 mb-3 hover:cursor-pointer overflow-hidden pb-2 transition-all duration-300 block"
            id="container"
          >
            <img
              src={item.img}
              alt="img"
              className="lg:w-[400px] overflow-hidden transition-all duration-300 hover:scale-110 w-[300px] h-[200px] lg:h-[300px]"
            />
            <div className="m-4 md:text-xl">
              <center>
                <p className="font-bold text-center text-xl w-[280px] py-2">{item.title}</p>
              </center>
              <p className="font-medium text-[18px]">Published: {item.Published}</p>
              <p className="font-medium text-[18px]">Author: {item.author}</p>
              <p className="font-medium text-[18px]">Category: {item.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blogpage;
