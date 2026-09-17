
const SearchBar =({query,onChangeQuery})=>{

    return(
        <div>
            <input type="text"
            placeholder="Search movies..."
            className="border-2 border-black-400 rounded-xl p-2"
            value={query}    
            onChange={(e)=>onChangeQuery(e.target.value)}
            
            
            
            />
            


        </div>

    )
}

export default SearchBar;