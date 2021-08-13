import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
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
          <Typography component="p">{movie.Year}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieCard;
