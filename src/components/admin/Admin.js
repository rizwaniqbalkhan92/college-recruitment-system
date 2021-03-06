import React from 'react'
import {Link,BrowserRouter as Router, Route, Switch,useHistory}  from 'react-router-dom'
import {Card,CardContent,Button,Typography,Paper }  from '@material-ui/core'
import './admin.css'
import StdApplied from './StdApplied'

// import CompanyNotifications from './StdHire'
import StdResumes from './StdResumes'
import StdPost from './StdPost'
import img from '../images/img1.jpg'
import AdminSingnUp from './AdminSignUp'


const Admin = () => {
const history=useHistory()
    return (
     <Router>
   

<Paper className='paper-admin' elevation={0}>
<Card className='admin-dash1'>
    <CardContent>
    <div >
      
        <img style={{width:100,height:100,borderRadius:100}}  src={img}  /><br/><br/>
        <Button  onClick={()=>history.push('/adminSignUp')} variant='contained' color='secondary'>Logout
            {/* <Link style={{color:'white',textDecoration:'none'}} to='/adminSignUp' >Logout</Link> */}
        </Button><br/><br/>

    </div>
    <div style={{marginTop:20}} >
        
        <Button fullWidth variant='contained' color='primary'>
            <Link style={{color:'white',textDecoration:'none'}} to='/admin/stdApplied' >Students Applied</Link>
        </Button><br/><br/>
        <Button fullWidth variant='contained' color='primary'>
            <Link style={{color:'white',textDecoration:'none'}} to='/admin/stdResumes' >StudentsResumes</Link>
        </Button><br/><br/>
        <Button fullWidth variant='contained' color='primary'>
            <Link style={{color:'white',textDecoration:'none'}} to='/admin/stdPost' >Company Job Post</Link>
        </Button><br/><br/>
        {/* <Button fullWidth variant='contained' color='primary'>
            <Link style={{color:'white',textDecoration:'none'}} to='/admin/companyDecisions' >Company Decision</Link>
        </Button><br/><br/> */}
  

    </div>
    </CardContent>
</Card>
<Card className='admin-dash2'>
    <CardContent>
     
        <Switch>
          
           
            <Route path='/admin/stdApplied' component={StdApplied} />
        

            <Route path='/admin/stdPost' component={StdPost} />
       
            <Route path='/admin/stdResumes' component={StdResumes} />

        </Switch>
    </CardContent>
</Card>

</Paper>


     </Router>
    )
}

export default Admin
