import React,{useState,useContext} from 'react'
import {TextField,Card,CardContent,Typography,Button}  from '@material-ui/core'
import firebase from '../Database/Config'
import image from '../images/img1.jpg'
import { CompanyContext } from './CompaniesRoutes'

const CompanyEmpId = () => {
const data=useContext(CompanyContext)
const {id,email}=data.location.state
    const [img,setImage]=useState(image)
    const [name,setName]=useState('')
    const [company,setCompany]=useState('')

const HandleChange=(e)=>{
    let reader=new FileReader();
    reader.onload=()=>{
        if(reader.readyState==2){
            setImage(reader.result)
        }
    }

    reader.readAsDataURL(e.target.files[0])

}

const createcompId=()=>{
    firebase.database().ref(`company/emp_ids/${id}/`).push({
        img,
        name,
        company,
        id,
        email
    })

setCompany('')
setImage(image)
setName('')
}

    return (
        <div>
            <h2>Create Profile</h2>
            <div style={{width:450,height:500,margin:'auto'}}>
            <img src={img} style={{width:100,hieght:100,borderRadius:5}} /><br/>
<TextField  type='file' onChange={HandleChange}  /><br/><br/>
<TextField value={name} variant='outlined'  style={{marginTop:20,backgroundColor:'whitesmoke'}}  type='text' onChange={e=>setName(e.target.value)} fullWidth  label='Full Name' />
<TextField value={company} variant='outlined'  style={{marginTop:20,backgroundColor:'whitesmoke'}}  type='text' onChange={e=>setCompany(e.target.value)} fullWidth  label='Company Name' />
        <Button variant='contained' style={{marginTop:20}} color='primary' onClick={createcompId} >Creat Profile</Button>
            </div>


        </div>
    )
}

export default CompanyEmpId
