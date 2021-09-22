import React,{useContext}  from 'react'
import {Card,Paper,CardContent,Typography}  from '@material-ui/core'
import './std.css'
import img1 from '../images/img1.jpg'
import {Context1}  from './StudRouting'
import firebase from '../Database/Config'

const StudNotification = () => {
    const ContextUse=useContext(Context1)
    const {id,email}=ContextUse.location.state
const num=[
    {num:1,img:img1},
    {num:2,img:img1},
    {num:3,img:img1},
    {num:4,img:img1},
]



    return (<>
            <Typography>NOTIFICATIONS</Typography>
        <Paper className='paperNoti' elevation={3}>

            {
                num.map((value,ind)=>(
                    <Card className='notifiCard' key={ind} onClick={()=>alert(value.num)}>
                        <CardContent className='notifi'>

              <img className='notiImages' src={value.img} />
                            <Typography>{value.num}</Typography>
                            {/* <button onClick={apply}>apply</button> */}
                        </CardContent>
                    </Card>
                ))
            }
        </Paper></>
    )
}

export default StudNotification
