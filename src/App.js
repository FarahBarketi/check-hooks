import React, { useState } from 'react';
import './App.css';
import { Data } from './Data';
import MovieList from './components/MovieList';
import Navigation from './components/Navigation';
import AddMovie from './components/AddMovie';
function App() {
  const [movies,setMovies]= useState(Data);
  const [search,setSearch]= useState("");
  const AddFilm = (newFilm) => {
    setMovies([...movies, newFilm]);
  };
  return (
    <div className="App">
    <Navigation setSearch={setSearch} search={search} />
     <MovieList movies={movies} search={search}/>
     <AddMovie AddFilm={AddFilm} />
    </div>
  );
}

export default App;
