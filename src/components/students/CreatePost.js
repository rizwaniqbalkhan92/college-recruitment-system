import React,{useState,useContext} from 'react'
import firebase from '../Database/Config'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { CardContent ,TextField, Card, Typography, Button} from '@material-ui/core';
import './std.css'
import {Context1}  from './StudRouting'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },

    },
    
  }));



const CreatePost = () => {
  const ContextUse=useContext(Context1)
  const {id,email}=ContextUse.location.state
  // =props.location.state
  const [fullName,setFullname]=useState('')
  const [fathername,setFathername]=useState('')
  const [cnic,setCnic]=useState('')
  const [email2,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [address,setAddress]=useState('')
  const [img,setImage]=useState('')
  const [lastCollege,setCollege]=useState('')
  const [lastDegree,setLastDegree]=useState('')
  const [issueDate,setIssueDate]=useState('')
  const [extraSkills,setExtraSkills]=useState('')
  const [eduJourney,setEduJourney]=useState('')
  const [lastJob,setLastJob]=useState('')
  const [company,setCompany]=useState('')
  const [startDate,setStartDate]=useState('')
  const [endDate,setEndDate]=useState('')
  const [responsibilities,setResponsibilities]=useState('')
  const [workingJourney,setWorkingJourney]=useState('')




    const classes = useStyles();
    const HandleChange=(e)=>{
      let reader=new FileReader()
      reader.onload=()=>{
      if(reader.readyState==2){
        setImage(reader.result)
        // console.log(reader.result)
        
      
      }
      }
      reader.readAsDataURL(e.target.files[0])
      }
const createResume=()=>{
  const resume={
    fullName,
    fathername,
    cnic,
    email2,
    mobile,
    address,
    image:img,
    lastCollege,
    lastDegree,
    issueDate,
    extraSkills,
    eduJourney,
    lastJob,
    company,
    startDate,
    endDate,
    responsibilities,
    workingJourney

  }
// const key=firebase.database().ref(`students/${id}/resume`).push().key

firebase.database().ref(`students/${id}/resume`).push(resume)
}

firebase.database().ref(`students/${id}/resume`).on('value',(data)=>{
  const key=Object.keys(data.val())
  const dataBig=data.val()[key]
  console.log(dataBig)
})



    return (
        <div>
          
      <Paper  style={{width:1300,marginLeft:30,marginRight:30,marginTop:10,height:570}} elevation={3}  >
{/* <Card style={{width:1000,marginLeft:150,height:500}}>
    <CardContent>
<Typography>CREATE PROFILE</Typography>
    </CardContent>
</Card> */}
<span style={{display:'flex'}}>

<Paper style={{width:433.33,height:570,overflow:'auto'}} elevation={3} > 
<Typography style={{marginTop:10}}>Personal Details</Typography>


<TextField id="standard-basic"   onChange={e=>setFullname(e.target.value)}  label="Full Name" /><br/>
<TextField id="standard-basic"   onChange={e=>setFathername(e.target.value)}  label="Father Name" /><br/>
<TextField id="standard-basic"   onChange={e=>setCnic(e.target.value)}  label="CNIC #" /><br/>
<TextField id="standard-basic"   onChange={e=>setEmail(e.target.value)}  label="Email Address" /><br/>
<TextField id="standard-basic"   onChange={e=>setMobile(e.target.value)}  label="Mobile #" /><br/>
<TextField id="standard-basic"   onChange={e=>setAddress(e.target.value)}  label="Residencial Address" /><br/>
<span className='img-preview-sp'>
<TextField id="fileInput" onChange={HandleChange} label="Profile Image" type='file' />
    <img src={img} id='img-preview' />

</span>


</Paper>














<div>

<Paper style={{width:433.33,height:520,overflow:'auto'}} elevation={3} > 
<Typography style={{marginTop:10}}>Qualification </Typography>

<TextField id="standard-basic" onChange={e=>setCollege(e.target.value)} label="Last School/College" />
<TextField id="standard-basic"  onChange={e=>setLastDegree(e.target.value)} label="Last Degree/Certification" />
<TextField id="standard-basic"  onChange={e=>setIssueDate(e.target.value)} type='date' label="Issue Date" />
<TextField   className='extraSkills' onChange={e=>setExtraSkills(e.target.value)} label="Extra Skills"   variant="outlined"    rows={8}   />
<TextField id="standard-basic"  onChange={e=>setEduJourney(e.target.value)} label="Share Your Educational Jouney" />





</Paper>
<Button style={{marginTop:8,width:200}}  onClick={createResume}  variant="contained" color="primary">
 Create Profile
</Button>
</div>
<Paper style={{width:433.33,height:570,overflow:'auto'}} elevation={3} > 
<Typography style={{marginTop:10}}>Experience </Typography>
<TextField id="standard-basic"  onChange={e=>setLastJob(e.target.value)} label="Last Job/Internship" />
<TextField id="standard-basic"  onChange={e=>setCompany(e.target.value)} label="Company Name" />


<TextField id="standard-basic" onChange={e=>setStartDate(e.target.value)} type='date' label="start from" />
<TextField id="standard-basic"  onChange={e=>setEndDate(e.target.value)} type='date' label="to" />

<TextField   className='extraSkills' label="Your Duties" onChange={e=>setWorkingJourney(e.target.value)}  rows={8}      />
<TextField id="standard-basic" onChange={e=>setResponsibilities(e.target.value)} label="Share Your Working Jouney" />
</Paper>
</span>

      </Paper>




        </div>
    )
}

export default CreatePost
