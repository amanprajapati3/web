
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-red-400 via-red-700 to-red-900 p-7 sm:p-20">
        <h1 className="text-white text-center text-4xl mb-4 p-5 sm:text-7xl">
          {" "}
          About Page
        </h1>
      </div>
      <h1 className="text-3xl m-3 sm:text-4xl sm:p-5">About Us</h1>
      <hr />
      <div className=" md:flex  ">
        <div className=" md:w-2/3">
          <h1 className="text-green-900 text-3xl lg:pl-10 lg:text-4xl font-mono px-3 md:w-fit">
            We inform, help and support the creative community
          </h1>
          <p className="py-2 px-5 lg:text-xl lg:pl-10 lg:pt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            delectus omnis odit pariatur quisquam corporis optio recusandae.
            Consequuntur, vero itaque. A doloribus illo numquam fugit
            accusantium. Ipsam corrupti fugiat dicta? <span className="hidden lg:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae exercitationem aliquid non, aspernatur voluptates.</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            delectus omnis odit pariatur quisquam corporis optio recusandae.
            Consequuntur, vero itaque. A doloribus illo numquam fugit
            accusantium. Ipsam corrupti fugiat dicta?
          </p>
        </div>
        <div className=" flex justify-center">
          <img
            className="lg:w-[350px] w-[300px] rounded-2xl mb-5"
            src="https://websitedemos.net/creative-blog-02/wp-content/uploads/sites/916/2021/07/tall-ad-02.jpg"
            alt=""
          />
        </div>
      </div>
      <center>
        <button className="p-2 mb-3 bg-slate-900 text-cyan-300 rounded-xl hover:text-slate-900 hover:bg-cyan-300 sm:text-xl sm:p-3 sm:mb-10">
          Know More
        </button>
      </center>

      {/* Adding footer */}

      <Footer />
    </>
  );
};

export default About;
