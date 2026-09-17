
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import MovieModal from "../components/MovieModal";

const Movies = () => {
    const[searchMovie,setSearchMovie] =useState("");
     const [movies, setMovies] = useState([]);
    
     const[selectedMovie, setSelectedMovie] = useState(null);

        useEffect(()=>{
        const fetchMovies = async()=>{
        let url  =`https://api.tvmaze.com/shows`;

        if(searchMovie){
          url=`https://api.tvmaze.com/search/shows?q=${searchMovie}`;
        }

        const response = await fetch(url);
        const data = await response.json();
         
        if(searchMovie){
          setMovies(data.map((movie)=>movie.show))
        }else{
          setMovies(data);
        }
            
              
        
    }
    fetchMovies();
  
    
},[searchMovie])


  return (
    <div className="max-w-7xl mx-auto px-6">
       <h1 className="text-3xl   text-center font-bold  pt-10">Movies</h1>
       <div className="flex  justify-center">
        <SearchBar  query={searchMovie} onChangeQuery={setSearchMovie}/>
       </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 p-8 ">
       {movies.map((movie)=>
       <MovieCard  movie={movie} viewDetails={()=> setSelectedMovie(movie)}  />
     )}
     {
      selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={()=> setSelectedMovie(null)}/>
      )
     }
     {/* <div className="p-8">
  {movies.length > 0 && <MovieCard movie={movies[0]} />}
</div> */}
        </div>
    </div>
  )
};

export default Movies;
