import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import styles from './SearchFilter.module.css';
import { useAppContext } from '../context/app';
import { range } from 'lodash';
import { CHANGE_QUERY_FILTER } from '../context/reducers/search';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SearchFilter = () => {
  const classes = useStyles();
  const { state, dispatch } = useAppContext();

  return (
    <div className={styles.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="year-filter">Year</InputLabel>
        <Select
          native
          value={state.searchQueryFilters.year}
          onChange={(e) =>
            dispatch({
              type: CHANGE_QUERY_FILTER,
              payload: { year: e.target.value, type: state.searchQueryFilters.type },
            })
          }
          inputProps={{
            name: 'year',
            id: 'year-filter',
          }}
        >
          <option aria-label="None" value="" />
          {range(1950, 2021).map((n) => (
            <option key={`option-${n}`} value={n}>
              {n}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="type-filter">Type</InputLabel>
        <Select
          native
          value={state.searchQueryFilters.type}
          onChange={(e) =>
            dispatch({
              type: CHANGE_QUERY_FILTER,
              payload: { type: e.target.value, year: state.searchQueryFilters.year },
            })
          }
          inputProps={{
            name: 'type',
            id: 'type-filter',
          }}
        >
          <option aria-label="All" value="" />
          <option aria-label="Movie" value="movie">
            Movie
          </option>
          <option aria-label="Series" value="series">
            Series
          </option>
          <option aria-label="Episode" value="episode">
            Episode
          </option>
        </Select>
      </FormControl>
    </div>
  );
};

export default SearchFilter;
