const MovieCard = ({ movie, viewDetails }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-xl hover:scale-105 transition duration-100 cursor-pointer">
      <div className="w-full h-100 overflow-hidden rounded-t-lg  ">
        <img
          src={movie.image?.medium}
          alt={movie.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <h3 className="font-bold text-lg  text-center">{movie.name}</h3>
        <div className="flex justify-center items-center gap-5">
          <p className="text-gray-600 text-sm">
            📅{movie?.premiered?.slice(0, 4)}
          </p>
          <p className="text-sm">⭐{movie?.rating?.average}</p>
        </div>
        <div className="flex justify-center mb-3">
          <button
            className="mt-3 w-[50%] py-2  text-white rounded-md font-medium bg-neutral-800 hover:bg-neutral-900 cursor-pointer "
            onClick={viewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
