import CircularProgress from '@material-ui/core/CircularProgress';
import { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '../context/app';
import { GET_RESULTS_PAGE, UPDATE_RESULTS } from '../context/reducers/movies';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { generateOMDBSearchEndpoint } from '../utils/api-helper';
import MovieCard from './MovieCard';
import Button from '@material-ui/core/Button';

const MovieResults = () => {
  const [searching, setSearching] = useState(false);
  const { state, dispatch } = useAppContext();

  const fetchData = useCallback(
    async (searchQuery, page) => {
      try {
        setSearching(true);
        const response = await axios.get(generateOMDBSearchEndpoint(searchQuery, page));
        dispatch({
          type: UPDATE_RESULTS,
          payload: {
            results: response.data?.Search || [],
            total: response.data?.totalResults,
          },
        });
      } catch (error) {
        dispatch({
          type: UPDATE_RESULTS,
          payload: {
            results: [],
            total: 0,
          },
        });
      }
      setSearching(false);
    },
    [dispatch]
  );

  useEffect(() => {
    if (state.searchQuery?.length > 1) {
      fetchData(state.searchQuery, state.searchResultsPage);
    }
  }, [state.searchQuery, state.searchResultsPage, fetchData]);

  if (!state.searchQuery) {
    return <div></div>;
  }

  return (
    <Box mt={3} align="center">
      {state.searchQuery && !searching && (
        <Box mb={3}>Search results: {state.searchResultsTotal}</Box>
      )}
      {state.searchResults.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
      {searching && (
        <Box>
          <CircularProgress />
        </Box>
      )}
      {!searching && (
        <Box>
          <Button
            variant="contained"
            onClick={() =>
              dispatch({ type: GET_RESULTS_PAGE, payload: state.searchResultsPage + 1 })
            }
          >
            Load more
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default MovieResults;
