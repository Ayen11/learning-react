import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

import MovieCard from './MovieCard'

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=fbde6639';





function App() {

  const [Movies, setMovies ] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {

    searchMovies('spiderman');

  }, []);

  return (
    <div className='app'>
      <h1>MovieLoind</h1>

      <div className='search'>
        <input
        placeholder='Search for movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon}
        alt="src"
        onClick={() => searchMovies(searchTerm)}
      />
        
      </div>

      {Movies?.length > 0 //check
        ? (   //? is if true
          <div className='container'>
          {Movies.map((movie) => (
          <MovieCard Movie={movie} />
          ))}
        </div>
        ) : ( //: is else 
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )}


    </div>
  );
}

export default App;
