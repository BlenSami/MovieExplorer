import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-10 mt-10">
      <div className="max-w-lg mb-3">
        <h1 className="text-5xl font-bold ">Discover Your Next Favorite Movie</h1>
          <p className="text-gray-600 mb-4">
         Explore and discover your favorite            
      movies from around the world.
       </p>
             <Link
        to="/movies"
        className="px-5 py-2  bg-red-600 rounded-md font-medium hover:bg-red-700 "
      >
        Explore Movies
      </Link>
      </div >

      <div className="w-full max-w-md h-64 rounded-xl bg-gradient-to-br from-red-200 via-neutral-200 to-neutral-400" >


      </div>
    </div>
  );
};

export default Hero;
