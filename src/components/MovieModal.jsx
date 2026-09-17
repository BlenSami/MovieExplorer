import { X } from "lucide-react";


const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className=" relative bg-white rounded-lg max-w-lg w-full mx-4 overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="w-auto h-auto  ">
           <img
            src={movie.image?.medium}
            alt=""
            className="object-contain mt-3 rounded-2xl flex   items-center"
          />
          </div>
          <button
            onClick={onClose}
            className="absolute top-1 right-1 w-8 h-8 flex items-center justify-center rounded-full bg-red-800/60 text-white text-xl cursor-pointer"
          >
            <X className="text-white" size={18} />
          </button>
        </div>

        <div className="p-5">
          <div className=" ">
            <h2 className="text-2xl font-bold">{movie.name}</h2>
            <div>
              <p className="text-sm text-gray-600 mb-2">
                📅 {movie.premiered} | ⭐ {movie.rating?.average}
              </p>
              <h1 className="text-gray-600 mb-2 text-2xl font-extrabold">Overview</h1>
              <div className="text-sm text-gray-500 mb-3">
              <span className="font-extrabold ">Language</span>   {movie.language}
                <br />
                <span className="font-extrabold ">Genres:</span> {movie.genres[0]},{movie.genres[1]},{movie.genres[2]}
              <br/> <span className="font-extrabold "> Type:</span> {movie.type}
               <br />  <span className="font-extrabold ">Summary:</span> {movie.summary}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieModal;
