import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useAppContext } from '../context/app';
import { LOGGED_IN_USER } from '../context/reducers/user';
import { setCurrentUser } from '../utils/storage';
import { useRouter } from 'next/router';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    margin: '0 auto',
    maxWidth: 230,
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const { dispatch } = useAppContext();
  const router = useRouter();

  return (
    <>
      <Typography variant="h4" component="h1" align="center" color="textSecondary" gutterBottom>
        Log in
      </Typography>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          id="username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={async () => {
            dispatch({
              type: LOGGED_IN_USER,
              payload: username,
            });
            await setCurrentUser(username);
            router.push('/');
          }}
        >
          Log in
        </Button>
      </form>
    </>
  );
};

export default LoginPage;
