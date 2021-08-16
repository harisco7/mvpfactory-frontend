import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useAppContext } from '../context/app';
import Link from 'next/link';
import { useEffect } from 'react';
import { getCurrentUser } from '../utils/storage';
import { LOGGED_IN_USER } from '../context/reducers/user';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  user: {
    textTransform: 'uppercase',
    marginLeft: 20,
    fontWeight: 'bold',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    (async () => {
      if (!state.user) {
        const currentUser = await getCurrentUser();
        dispatch({
          type: LOGGED_IN_USER,
          payload: currentUser,
        });
      }
    })();
  }, [dispatch, state.user]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <a className={classes.navLink}>MVP Factory Demo App</a>
            </Link>
          </Typography>
          <Button color="inherit">
            <Link href="/favourites" className={classes.navLink}>
              <a className={classes.navLink}>Favourites</a>
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/login" className={classes.navLink}>
              <a className={classes.navLink}>Login</a>
            </Link>
          </Button>
          <Typography variant="body1" className={classes.user}>
            {state.user}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
