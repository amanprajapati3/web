import React from "react";
import { useState } from "react";
import { data } from "../Data/data";
import "./Blogpage.css";

const Blogpage = () => {
  const [categorys, setcategorys] = useState(data);

  //using filter
  const filterType = (category) => {
    setcategorys(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <>
      <h1 className="text-2xl font-bold m-5 sm:text-5xl">Category</h1>
      <hr />

      <div className="m-4 pl-2 p-2 flex gap-5 text-red-600 font-sans sm:text-2xl sm:justify-center sm:gap-20 sm:m-6">
            <button onClick={() => setcategorys(data)} className="hover:text-red-950">All</button>
            <button onClick={() => filterType("Artificial Intelligent")} className="hover:text-red-950">
              Artificial Intelligent
            </button>
            <button onClick={() => filterType("Fintech")} className="hover:text-red-950">FinTech</button>
            <button onClick={() => filterType("Startup")} className="hover:text-red-950">Startups</button>
      </div>

      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 ">
        {categorys.map((item, index) =>(
            <div key={index} className="m-5 mb-12 pb-2" id="container">
                <img  src={item.img} alt="img" />  
                <div className="m-4 font-bold md:text-xl">
                    <p>Title: {item.title}</p>
                    <p>Published: {item.Published}</p>
                    <p>Author: {item.author}</p>
                    <p>Category: {item.category}</p>
                </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default Blogpage;
