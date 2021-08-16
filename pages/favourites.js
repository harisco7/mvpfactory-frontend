import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { getStarredMovies } from '../utils/storage';
import MovieCard from '../components/MovieCard';

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavouriteMovies = async () => {
      const movies = await getStarredMovies();
      setFavourites(movies);
    };
    fetchFavouriteMovies();
  }, []);

  return (
    <>
      <Typography variant="h4" component="h1" align="center" color="textSecondary" gutterBottom>
        MVP Factory Favourite Movies
      </Typography>
      {favourites.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </>
  );
};

export default FavouritesPage;
