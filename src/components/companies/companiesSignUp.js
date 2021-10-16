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

  
  const CompaniesSignUp = () => {

    const history=useHistory()
    const classes = useStyles();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [keyPass,setKey]=useState('')
    
    const signUp=(e)=>{
      e.preventDefault()
      if(keyPass==='company321'){

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          alert('Successfully')
          history.push('/companiesLogin')
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert('Sorry.. Invalid')
          // ..
        });
}else{
    alert('invalid')
}
    }
    return (
      
 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Company Signup
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
            id="email"
            label="Unique Key"
            name="email"
            placeholder='company321'
            
            autoFocus
            onChange={e=>setKey(e.target.value)}
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
            onClick={signUp}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
            <Link href="/AdminLogin" variant="body2">
                {"Join as a Admin"}
              </Link><br/>
            <Link href="/studentLogin" variant="body2">
                {"Join as a Student"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/companiesLogin" variant="body2">
                {`Already Account? 
                   Join Now`}
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

export default CompaniesSignUp
