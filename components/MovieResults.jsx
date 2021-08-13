import CircularProgress from '@material-ui/core/CircularProgress';
import { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '../context/app';
import { UPDATE_RESULTS } from '../context/reducers/movies';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { generateOMDBSearchEndpoint } from '../utils/api-helper';
import MovieCard from './MovieCard';

const MovieResults = () => {
  const [searching, setSearching] = useState(false);
  const { state, dispatch } = useAppContext();

  const fetchData = useCallback(
    async (searchQuery) => {
      try {
        setSearching(true);
        const response = await axios.get(generateOMDBSearchEndpoint(searchQuery));
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
      fetchData(state.searchQuery);
    }
  }, [state.searchQuery, state.searchQueryPage, fetchData]);

  if (!state.searchQuery) {
    return <div></div>;
  }

  if (searching) {
    return (
      <Box mt={3} align="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box mt={3} align="center">
      {state.searchQuery && <Box mb={3}>Search results: {state.searchResultsTotal}</Box>}
      {state.searchResults.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </Box>
  );
};

export default MovieResults;
