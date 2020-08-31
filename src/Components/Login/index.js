import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import Logo from '../../static/images/logo.png'
import { login } from '../../services/login';
import Context from '../../store/Context';

const intitalState = () => {
  return {
    email: '',
    password: ''
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const [ error, setError ] = useState(null);
  const [values, setValues] = useState(intitalState());
  const { setToken } = useContext(Context);
  const history = useHistory();
  const classes = useStyles();

  const onchange = e => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  const onSubmit = async e => {
    e.preventDefault()

    const { token, error } = await login(values)

    if(!token) {
      setValues(intitalState);
      return await setError(error);
    }

    setToken(token);
    return history.push('/dashboard/home')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} src={Logo} />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        { error 
        ? <Alert severity="error">{error}</Alert> 
        : <></>}
        <form className={classes.form} onSubmit={onSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={onchange}
            value={values.email}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={onchange}
            value={values.password}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
