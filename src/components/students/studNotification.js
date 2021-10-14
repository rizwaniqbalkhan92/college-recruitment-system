import React,{useContext,useState,useEffect}  from 'react'
import {Card,Paper,CardContent,Typography}  from '@material-ui/core'
import './std.css'
import img1 from '../images/img1.jpg'
import {Context1}  from './StudRouting'
import firebase from '../Database/Config'

const StudNotification = () => {
    const ContextUse=useContext(Context1)
    let {id,email}=ContextUse.location.state
    const [array,setArray]=useState([])
console.log(array)
const num=[
    {num:1,img:img1},
    {num:2,img:img1},
    {num:3,img:img1},
    {num:4,img:img1},
]

const apply=()=>{
    alert('........')
}
useEffect(()=>{

    if(id){

        firebase.database().ref(`students/${id}/notifications`).on('value',(dataNotification)=>{
            let data=dataNotification?.val()
            let dataKeys=Object?.keys(data)


            if(data){
                let arr=[]
                for(let i=0; i<dataKeys?.length; i++){
                    const dataKey2=dataKeys[i]
                    const dataFormatted=data[dataKey2]
                    const objData={dataFormatted,key:dataKey2}
                    arr.push(objData)



                }


setArray(arr)
            }






        }
    )
}
    else
    {
        alert('Please.. Wait')
    }
    
    
},[])



    return (<>
            <Typography>NOTIFICATIONS</Typography>
        <Paper className='paperNoti' elevation={3}>

            {array ?
                array.map((value,ind)=>(
                    <Card className='notifiCard' key={ind} onClick={()=>alert('...........')}>
                        <CardContent className='notifi'>

              {/* <img className='notiImages' src={value?.dataFormatted?.img} /> */}
                            <Typography>  {value.dataFormatted.emailJobCreator}</Typography>
                            <Typography> Hello!    {value?.dataFormatted?.message}</Typography>
                      
                        </CardContent>
                    </Card>
                )): <h1>Loading..........</h1>
            }
        </Paper></>
    )
}

export default StudNotification
