import { Paper,Modal,Button, TextField } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import {Card,Typography}  from '@material-ui/core'
// import Modal from '@material-ui/core/Modal'
import firebase from '../Database/Config'
const StdPost = () => {
const [arr,setArr] =useState([])
const [open,setOpen] =useState({value:false,key:''})
const [reqSkills,setReqSkills] =useState('')
const [reqExp,setReqExp] =useState('')
const [imgChange,setImageChange] =useState('')


const deletePost=(key)=>{

firebase.database().ref(`company/createJob`).child(key).remove().then(success=>alert('successfully deleted',success)).catch(error=>alert(error.message))


}
const updatePost=(key)=>{

const updateObj={
    JobReqSkills:reqSkills,
    jobExp:reqExp,
    imgPreview:imgChange,
    key,
}
console.log(updateObj)

    firebase.database().ref(`company/createJob`).child(key).update(updateObj).then(success=>
        {
            alert('successfully updated',success)
        setImageChange(' ')
        setReqExp(' ')
        setReqSkills(' ')
        }
    ).catch(error=>alert(error.message))





}

const HandleChange=(e)=>{
    let reader=new FileReader()
    reader.onload=()=>{
    if(reader.readyState==2){
        setImageChange(reader.result)
  
      
    
    }
    }
    reader.readAsDataURL(e.target.files[0])
    }


useEffect(()=>{

        firebase.database().ref(`company/createJob`).on('value',(data)=>{
            let data2=data.val()
            let dataKeys=Object.keys(data2)
            if(dataKeys){
                let array=[]
                for(let i=0; i<dataKeys.length; i++){
                    const key=dataKeys[i]
                    const dataForm=data2[key]
                    const obj={data:dataForm,key}
                    array.push(obj)
                }
                setArr(array)
            }
        })
    },[])
    return (<>
       <Paper style={{height:700,overflow:'scroll'}}>
           {
               arr!==undefined || arr!==null ? arr.map((value,ind)=>(
<Card style={{height:500,width:400,backgroundColor:'lightblue',marginLeft:300,marginTop:50,marginBottom:50}} >
    <img src={value.data.imgPreview} style={{width:350,height:200,marginTop:30}} />
    <Typography style={{fontSize:20}}>Person Email:{value.data.email} </Typography>
    <Typography style={{fontSize:20}}>Req Skills: {value.data.JobReqSkills} </Typography>
    <Typography style={{fontSize:20}}>Req Experience : {value.data.jobExp} </Typography>
    <div style={{display:'flex',justifyContent:'space-between',width:200,marginLeft:100,marginTop:30}}> 
    <Button colot='danger'  onClick={()=>deletePost(value.key)} style={{height:40,marginTop:10}} variant="contained" >Delete</Button>
    <Button colot='primary' onClick={()=>setOpen({value:true,key:value.key})}  style={{height:40,marginTop:10}} variant="contained">Update</Button>
</div>
</Card>

               )): <h1>Loading....</h1>
           }

<Modal   open={open ? open.value : ''}>
<Card style={{width:600,height:400,marginTop:100,marginLeft:400}}>
<Button  variant='contained' color='secondary' style={{width:40,height:40,borderRadius:10}} onClick={()=>setOpen({value:false,key:''})}>x</Button>
    <Typography style={{marginLeft:150,fontSize:30}}>Update Company Post</Typography>
<div style={{width:300,marginLeft:150,height:200,marginTop:20,flexDirection:'column',display:'flex',justifyContent:'space-between'}}>
<TextField variant='outlined'  type='file' placeholder='change Image'  onChange={HandleChange} /><br/>
<TextField variant='outlined' value={reqSkills} placeholder='change Require Skills'  onChange={e=>setReqSkills(e.target.value)} /><br/>

<TextField onChange={e=>setReqExp(e.target.value)} value={reqExp} variant='outlined' placeholder='change Require Experience' /><br/>


<Button variant='contained' color='primary'  onClick={()=>updatePost(open.key)}>Confirm</Button>
</div>
</Card>

</Modal>
       </Paper>
</>
    )
}

export default StdPost
