import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators}  from 'redux'
import {AuctionBit}  from './components/Redux/Modules/action'
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import './components/Database/Config'





export const App = (props) => {


  const [email,setEmail]=useState('')

const signUp=(e)=>{
  e.preventDefault()


const auth = getAuth();
sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    console.log(email)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
}


  return (
    <div>
   <input placeholder='Enter Email...' type='email'  onChange={e=>setEmail(e.target.value)}  />
   <button onClick={signUp}>SignUp</button>
   
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps=(dispatch) => {
  bindActionCreators({
    AuctionBit
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
