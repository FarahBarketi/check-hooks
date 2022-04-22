import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies,search}) {
  return (
    <div style={{ display:"flex", flexWrap:"wrap", gap:"20px" }}>
        {movies
        .filter((el)=> el.title === search)
        .map((movie) =>(<MovieCard movie={movie}/>
        ))}
    </div>
  )
}

export default MovieList