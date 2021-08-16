import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useAppContext } from '../context/app';
import { CHANGE_QUERY } from '../context/reducers/search';
import { debounce } from 'lodash';
import { useCallback } from 'react';
import MovieResults from '../components/MovieResults';
import SearchFilter from '../components/SearchFilter';

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
    <>
      <Typography variant="h4" component="h1" align="center" color="textSecondary" gutterBottom>
        Search for movies and series
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          id="search-query"
          label="Start typing a title"
          fullWidth
          helperText="Powered by The OMDb API"
          onChange={debouncedChangeHandler}
        />
      </form>
      <SearchFilter />
      <MovieResults />
    </>
  );
};

export default IndexPage;
