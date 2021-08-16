import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();

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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
