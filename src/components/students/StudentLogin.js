import React,{useState} from 'react'
// import {Link}  from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import firebase from '../Database/Config'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebse from '../Database/Config'
import {useHistory}  from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
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

  
  const StudentLogin = () => {

    const history=useHistory()
    const classes = useStyles();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const signIn=(e)=>{
      e.preventDefault()
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
    // Signed ine
    alert('successfully')
    var user = userCredential.user;
    console.log(user)
    history.push({
      pathname:"/students",
      state:{id:user.uid ,email:user.email}
    })
  
 
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('error',errorMessage)
  });
    }
    return (
      
 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Student Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e=>setEmail(e.target.value)}
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
            autoComplete="current-password"
            onChange={e=>setPassword(e.target.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            <Link href="/AdminLogin" variant="body2">
                {"Join as a Admin"}
              </Link><br/>
            <Link href="/companiesLogin" variant="body2">
                {"Join as a Company"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/studentSignUp" variant="body2">
                {`Don't have an account?
                   Create Account`}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>


        



   
    )
}

export default StudentLogin
