import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { getStarredMovies } from '../utils/storage';
import MovieCard from '../components/MovieCard';

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    (async () => {
      const movies = await getStarredMovies();
      setFavourites(movies);
    })();
  }, []);

  return (
    <>
      <Typography variant="h4" component="h1" align="center" color="textSecondary" gutterBottom>
        Favourite Movies
      </Typography>
      {favourites.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </>
  );
};

export default FavouritesPage;
