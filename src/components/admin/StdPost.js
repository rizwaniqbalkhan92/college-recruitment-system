import { Typography,Paper,Card,Button } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import firebase from '../Database/Config'
const StdPost = () => {
const [arr,setArr]=useState([])

// const deletePost=(key)=>{

// firebase.database().ref(`company/createJob${key}`)


// }
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
    return (
       <Paper style={{height:700,overflow:'scroll'}}>
           {
               arr!==undefined || arr!==null ? arr.map((value,ind)=>(
<Card style={{height:500,width:400,backgroundColor:'lightblue',marginLeft:300,marginTop:50,marginBottom:50}} >
    <img src={value.data.imgPreview} style={{width:350,height:200,marginTop:30}} />
    <Typography style={{fontSize:20}}>Person Email:{value.data.email} </Typography>
    <Typography style={{fontSize:20}}>Req Skills: {value.data.JobReqSkills} </Typography>
    <Typography style={{fontSize:20}}>Req Experience : {value.data.jobExp} </Typography>
    <div style={{display:'flex',justifyContent:'space-between',width:200,marginLeft:100,marginTop:30}}> 
    <Button colot='danger'  style={{height:40,marginTop:10}} variant="contained" >Delete</Button>
    <Button colot='primary' style={{height:40,marginTop:10}} variant="contained">Update</Button>
</div>
</Card>

               )): <h1>Loading....</h1>
           }

       </Paper>
    )
}

export default StdPost
