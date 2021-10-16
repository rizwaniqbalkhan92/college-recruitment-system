import React,{createContext} from 'react'
import {Paper,Card,CardContent,Typography, Button}  from '@material-ui/core'
import {Link,BrowserRouter as Router, Switch, Route,useHistory}  from 'react-router-dom'
import './company.css'
import AllStudents from '../companies/AllStudents'
import img1 from '../images/img1.jpg'
import CreatePost from '../companies/CreatePost'
import JobRequests from '../companies/JobRequests'
import CompanyEmpId  from '../companies/CompanyEmpId'


export const CompanyContext=createContext()



const CompaniesRoutes = (props) => {
    const history=useHistory()
  
  
  
    return (
    
    <>
    <CompanyContext.Provider value={props}>

<Router>
       <Paper className='company-platfom' elevation={3}>
           <Card className='dashboard-1'>
<CardContent>
    
    <img className='dash-img' src={img1} />
    <Typography>Rizwan Iqbal  </Typography>
<br/>
<Button variant="contained" color="primary">

    <Link style={{color:'white'}} onClick={()=>history.push('/studentLogin')}>Logout</Link>

</Button>
   <br/><br/>
   <Button fullWidth variant="contained" >

<Link style={{color:'white'}} to='/CompanyEmpId'>CompanyEmpId</Link>

</Button>
   <div style={{marginTop:20}}>

<Button fullWidth variant="contained" color="primary">

    <Link style={{color:'white'}} to='/regStudents'>All Students</Link>

</Button>

<br/>
        <br/>
    <Button fullWidth variant="contained" color="primary">

    <Link style={{color:'white'}} to='/JobRequests'>JobRequests </Link>

    </Button>

    <br/>
    <br/>
    <Button fullWidth variant="contained" >

    <Link style={{color:'white'}} to='/CreatePost'>CreatePost</Link>

    </Button>

    <br/>
    <br/>
 
 

</div>


</CardContent>
           </Card>
           <Card className='dashboard-2'>
<CardContent>
    
    <Switch>
        <Route path='/CompanyEmpId' component={CompanyEmpId} />
        <Route path='/regStudents' component={AllStudents} />
        <Route path='/CreatePost' component={CreatePost} />
        <Route path='/JobRequests' component={JobRequests} />
    </Switch>
</CardContent>

           </Card>
       </Paper>
</Router>
    </CompanyContext.Provider>
       </>
    )
}

export default CompaniesRoutes
