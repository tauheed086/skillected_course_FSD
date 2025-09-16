import React, { useState } from 'react'

const Movie = () => {

  
  const [query, setQuery] = useState('')

  
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()


  const url = `https://www.omdbapi.com/?apikey=thewdb&s=${query}`;

  const searchMovies = async () => {
    // API call to fetch movies will go herecl
    if (!query) return
    setLoading(true)
    setError('')

    try {
      const response=  await fetch(url)
      const data = await response.json()
      if (data.Search){
      setMovies(data.Search)
      console.log(data.Search)
      setLoading(false)
      }else{
        setError("No movies found")
        setLoading(false)
      }
    } catch (error) {
      setError("Failed to fetch movies")
      setLoading(false)
    }
  }


  return (
    <div className="app-container">
      <div className="app-content">
        <h1 className=' app-title'>🎬 Movie Search</h1>
        <div className="search-bar">
          <input type="text" className='search-input' placeholder='Search for movies' onChange={(e)=> setQuery(e.target.value)}/>
          
          <button className='search-button' onClick={searchMovies}>🔎</button>
          
        </div>
        {loading && <p className='loading-text'>Loading...</p>}
        {error && <p className='error-text'>{error}</p>}
        <div className="movies-grid">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} alt={movie.Title} 
              className='movie-poster'/>
              <h3 className='movie-title'>{movie.Title}</h3>
              <p className='movie-year'>{movie.Year}</p>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Movie