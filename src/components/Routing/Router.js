import React from 'react'
import {BrowserRouter as Router , Route, Switch , Link , useHistory }  from 'react-router-dom'
import AdminSignUp from '../admin/AdminSignUp'
import AdminLogin from '../admin/AdminLogin'
import companiesLogin from '../companies/CompaniesLogin'
import CompaniesSignUp from '../companies/companiesSignUp'
import StudRouting from '../students/StudRouting'
import StudentLogin from '../students/StudentLogin'
import StudentSignUp from '../students/StudentSignUp'
import CompaniesRoutes from '../companies/CompaniesRoutes'
import Admin from '../admin/Admin'
import Home from '../Home'
const Routers=()=>{

return(
    <Router>
        <Switch>
            {/* <Route  exact path='/' component={AdminLogin}  /> */}
            <Route  exact={true} path='/' component={Home}  />
            <Route  path='/admin' component={Admin}  />
            <Route   path='/students' component={StudRouting}  />
            <Route   path='/studentSignUp' component={StudentSignUp}  />
            <Route   path='/studentLogin' component={StudentLogin}  />

            <Route  path='/adminSignUp' component={AdminSignUp}  />
            <Route  path='/AdminLogin' component={AdminLogin}  />
            <Route  path='/companiesLogin' component={companiesLogin}  />
            <Route  path='/company' component={CompaniesRoutes}  />
            <Route  path='/companiesSignUp' component={CompaniesSignUp}  />
        </Switch>
    </Router>
)

}





export default Routers


