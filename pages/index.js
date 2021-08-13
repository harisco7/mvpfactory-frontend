import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useAppContext } from '../context/app';
import { CHANGE_QUERY } from '../context/reducers/movies';
import { debounce } from 'lodash';
import { useCallback } from 'react';
import MovieResults from '../components/MovieResults';

const IndexPage = () => {
  const { dispatch } = useAppContext();

  const changeHandler = (event) => {
    dispatch({
      type: CHANGE_QUERY,
      payload: event.target.value,
    });
  };

  // a rather peculiar case of overriding eslint, because of an uncontrolled-component
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 400), [
    debounce,
    changeHandler,
  ]);

  return (
    <Box py={3}>
      <Typography variant="h4" component="h1" align="center" color="textSecondary" gutterBottom>
        MVP Factory Movie Browser
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          id="search-query"
          label="Type a movie title"
          fullWidth
          helperText="Powered by The OMDb API"
          onChange={debouncedChangeHandler}
        />
      </form>
      <MovieResults />
    </Box>
  );
};

export default IndexPage;
