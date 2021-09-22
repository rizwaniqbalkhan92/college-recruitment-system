import React,{createContext} from 'react'
import {Link,BrowserRouter as Router, Route, Switch}  from 'react-router-dom'

import CreatePost from './CreatePost'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import studNotification from './studNotification'
import StdViewPost from './StdViewPost'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export const Context1=createContext()

const StudRouting = (props) => {
    // console.log()
    const classes = useStyles();
    return (


        <div className={classes.root}>
     <Context1.Provider  value={props}>

        <Router>
       
                 <AppBar position="static">
          <Toolbar>
 
          <Typography>{ props.location.state.email }</Typography>
            <Typography variant="h6" className={classes.title}>
            <Link  to='/students/createPost' >Resume</Link>
              
            </Typography>
            <Typography variant="h6" className={classes.title}>
            <Link  to='/students/post' >Post</Link>
              
            </Typography>
            <Typography variant="h6" className={classes.title}>
            <Link  to='/students/notification' >Notification</Link>
              
            </Typography>

            <Button color="inherit">
            <Link  to='/studentLogin' >
            Logout

            </Link>
            </Button>
          </Toolbar>
        
        </AppBar>
        <Switch>
               
                <Route   path='/students/createPost' component={CreatePost} />
                <Route  path='/students/notification' component={studNotification} />
                <Route  path='/students/post' component={StdViewPost} />



            </Switch>
        </Router>
     </Context1.Provider>
      </div>





       
    )
}






export default StudRouting
