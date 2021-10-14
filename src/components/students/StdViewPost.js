import React,{useState,useEffect,useContext} from 'react'
import {Card,Paper,Button, Typography } from '@material-ui/core'
// import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import './std.css'
import img from '../images/img1.jpg'
import {Context1}  from './StudRouting'
import firebase from '../Database/Config'

const data=[
    {name:'rizwan',Company:'SoftSyncDev',imgProfile:img,add:'this job only those who wnt to do job in free , an experience with 2 years',status:false},
    {name:'rizwan',Company:'SoftSyncDev',imgProfile:img,add:'this job only those who wnt to do job in free , an experience with 2 years',status:true},
    {name:'rizwan',Company:'SoftSyncDev',imgProfile:img,add:'this job only those who wnt to do job in free , an experience with 2 years',status:false},
    {name:'rizwan',Company:'SoftSyncDev',imgProfile:img,add:'this job only those who wnt to do job in free , an experience with 2 years',status:false},
    {name:'rizwan',Company:'SoftSyncDev',imgProfile:img,add:'this job only those who wnt to do job in free , an experience with 2 years',status:true},
]

const StdViewPost = () => {
const [finalData,setFinalData]=useState([])
// const [valuej,setvaluej]=useState('')
// console.log(valuej)
    const ContextUse=useContext(Context1)
    const {id,email}=ContextUse.location.state
    // const [info,setInfo]=useState('')
    // const [empInfoData,setInfoData]=useState({})
    // console.log(empInfoData)
    // const apply=()=>{
    //     firebase.database().ref(`students/${id}/resume`).on('value',(data)=>{
    //         const key=Object.keys(data.val())
    //         const realData=data.val()[key]
    //         firebase.database().ref(`admin/applied`).push(realData)
    //     })
        
    // }
const apply=(value,numEmp)=>{
    
   

    firebase.database().ref(`students/${id}/resume`).on('value',(data)=>{
                const key=Object.keys(data.val())
                const realData=data.val()[key]
                realData ['jobTitle']=value
                realData ['key']=id
                console.log(realData)
                console.log(numEmp)
                firebase.database().ref(`admin/applied`).push(realData)
                firebase.database().ref(`company/allAppliedStudents/${numEmp}`).push(realData)
            })


}

    // const [status,setStatus]=useState('')
 useEffect(()=>{
     
firebase.database().ref(`company/createJob`).on('value',(datan)=>{
    var keys=Object.keys(datan?.val())
    var dataUnformate=datan?.val()
if(keys){
var array=[]
for(var i=0; i<keys.length; i++){
    const key=keys[i]
    const dataReal=dataUnformate[key]
    // setInfo(dataReal.id)
    
    
    if(dataReal !==undefined && dataReal!==null){
        



         firebase.database().ref(`company/emp_ids/${dataReal?.id}`).on('value',(dataInfo)=>{
            
                const key=Object?.keys(dataInfo?.val())
                const empData=dataInfo?.val()[key]
                const obj={data:dataReal,key:key,empData:empData}
                array.push(obj)
           
            // setInfoData(empData)
            
        })
    }
  

}


setFinalData(array)
}else{
    alert('sorry....')
}

})

},[])   



 console.log(finalData)




    return (
        <>

<Paper elevation={3}  style={{height:592,overflow:'auto'}}>

          {finalData ?
            finalData.map((value)=>(
                  <Card className='viewPost' style={{height:450,width:500 }}>
                      <CardContent>
                      <span style={{display:'flex',flexDirection:'row',borderRadius:5,backgroundColor:'green',color:'white'}}>
                           <img src={  value.empData.img ? value.empData.img : ''  } style={{width:40,borderRadius:50,height:40,marginTop:5,marginLeft:15}} />
                            <span style={{display:'flex',marginLeft:15,flexDirection:'column'}}>

                          <Typography>{value.empData.name ?value.empData.name : '' }</Typography>
                          <Typography>{value.empData.company ? value.empData.company : ''}</Typography>
                            </span>
                      </span>
                      <span>
                            <Typography  style={{height:90}}>{value.data.JobReqSkills }  </Typography>
                   
                         <img className='imgPost'  src={value.data.imgPreview} />
                      </span>
                      <br/>
                      <Button fullWidth variant="contained" onClick={()=>apply(value.data.JobReqSkills,value.empData.id)} color="primary">{value.data.status===false ? 'Apply Now' : 'Applied' }</Button>
                      </CardContent>
                  </Card>
              )) : <h2>Loading....</h2>
          }
</Paper>
        </>
    )
}

export default StdViewPost
