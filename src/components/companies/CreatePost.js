import { Typography ,Card,Paper,CardContent,TextField, Button } from '@material-ui/core'
import React,{useState,useContext,useEffect} from 'react'
import img from '../images/img1.jpg'
import firebase from '../Database/Config'
  import { CompanyContext } from './CompaniesRoutes'



const CreatePost = () => {
    const data=useContext(CompanyContext)

    const {id,email}=data.location.state
    console.log(id)
const [imgPreview,setPreview]=useState(img)
   const [jobTitle,setJobTitle]=useState('')
   const [jobExp,setJobExperience]=useState('')
   const [JobReqSkills,setJobReqSkills]=useState('')
//    const [post,setPost]=useState({})
//    console.log(post)
const HandleImage=(e)=>{
    let reader=new FileReader();
    reader.onload=()=>{
        if(reader.readyState==2){
            setPreview(reader.result)
        }
    }

reader.readAsDataURL(e.target.files[0])

}
const CreateJob=()=>{
    // useEffect(()=>{
    //     firebase.database().ref(`company/emp_ids/${id}/`).on('value',(data2)=>{
    //         // const key=Object.keys(data2.val())
    //         // const formateData=data2.val()[key]
    //         console.log(data2.val())
    //         // setPost(formateData)
    //     })
    // },[])


    
    const job={
        id,
        imgPreview,
        jobTitle,
        jobExp,
        JobReqSkills,
        status:false,
        email
    }
    
    firebase.database().ref(`company/createJob/`).push(job)
    
setJobExperience('')
setJobReqSkills('')
setJobTitle('')
setPreview(img)
}



    return (<>
<Typography style={{fontSize:32,fontWeight:'bold'}}>CREATE JOB</Typography>
<span className='imgPreview'>
<img src={imgPreview} width='100px' height='100px'  />

</span>
<TextField  onChange={HandleImage} style={{width:104,marginBottom:5,marginTop:50,marginLeft:40}} type='file'/>
        <Paper elevation={0} className='paperCreateJob'>



<TextField onChange={e=>setJobTitle(e.target.value)} value={jobTitle} style={{marginBottom:10}} fullWidth id="outlined-basic" label="JOB TITLE" variant="outlined" />




<TextField onChange={e=>setJobExperience(e.target.value)} value={jobExp} fullWidth style={{marginBottom:10}} id="outlined-basic" label="JOB EPERIENCE" variant="outlined" />


<TextField  onChange={e=>setJobReqSkills(e.target.value)} value={JobReqSkills} fullWidth style={{marginBottom:10}} id="outlined-basic" label="JOB REQUIRED SKILLS" variant="outlined" />

<Button variant='outlined' color='primary' onClick={CreateJob} >CREATE JOB</Button>


            
        </Paper></>
    )
}

export default CreatePost
