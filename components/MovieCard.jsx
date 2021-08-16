import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import styles from './MovieCard.module.css';
import { isMovieStarred, setMovieStarred } from '../utils/storage';
import { useState, useEffect } from 'react';

const MovieCard = ({ movie }) => {
  const [starred, setStarred] = useState(false);

  useEffect(() => {
    const checkIfStarred = async (id) => {
      setStarred(await isMovieStarred(id));
    };
    checkIfStarred(movie.imdbID);
  }, [movie.imdbID]);

  const changeStarred = async () => {
    if (await setMovieStarred(movie, !starred)) {
      setStarred(!starred);
    }
  };

  return (
    <Box mb={3}>
      <Card className={styles.card}>
        <CardMedia className={styles.poster} image={movie.Poster} title={movie.Title} />
        <CardContent align="left">
          <Typography color="textSecondary" gutterBottom>
            {movie.Type}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            <strong>{movie.Title}</strong>
          </Typography>
          <Typography component="p">
            {movie.Year}
            {starred ? (
              <StarIcon className={styles.star} onClick={changeStarred} />
            ) : (
              <StarOutlineIcon className={styles.star} onClick={changeStarred} />
            )}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieCard;
