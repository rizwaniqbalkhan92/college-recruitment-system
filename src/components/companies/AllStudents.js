import { Typography,Card,CardContent ,Modal,Button} from '@material-ui/core'
import React,{useState} from 'react'
import img from '../images/img1.jpg'
import './company.css'
const AllStudents = () => {
const [open,setOpen]=useState({value:false,obj:{name:''}})
const data=[
    {image:img,name:'rizwan',experience:'this................this....'},
    {image:img,name:'rizwan',experience:'this................this....'},
    {image:img,name:'rizwan',experience:'this................this....'},
    {image:img,name:'rizwan',experience:'this................this....'},
]

    return (<>{
        data.map((value,index)=>(

      <Card className='card-std'  >
      <CardContent className='allStdInfo'>
      <img src={img} width='50px' height='50px' className='allStdImg' />
          <Typography style={{fontWeight:'bolder',marginTop:10,marginLeft:10}}>
{value.name}
          </Typography>
          <Typography style={{fontWeight:'bolder',width:300,marginTop:10,marginLeft:200}}>
{value.experience}
          </Typography>
          <Button onClick={()=>setOpen({value:true,obj:{name:'rizwan'}})}  style={{marginBottom:10,marginLeft:200}} variant="contained" className='btnView' color="primary" >View</Button>
      </CardContent>
      </Card>

        ))
    }


<Modal open={open.value} >
    <Card className='modal'>
            <Button variant='outlined' color='secondary' style={{position:'relative',left:0}} onClick={()=>setOpen({value:false,obj:{name:''}})}>X</Button>
        <CardContent>
            <img src={img}  width='100px' height='100px' style={{marginLeft:130}}  />
            <Typography style={{fontWeight:'bolder',marginLeft:30,marginTop:20}}>Name: {open.obj.name}</Typography>
            <Typography style={{fontWeight:'bolder',marginLeft:30,marginTop:20}}>Email Address: {open.obj.name}</Typography>
            <Typography style={{fontWeight:'bolder',marginLeft:30,marginTop:20}}>Experience : {open.obj.name}</Typography>
            <Typography style={{fontWeight:'bolder',marginLeft:30,marginTop:20}}>Mobile #: {open.obj.name}</Typography>
            <Typography style={{fontWeight:'bolder',marginLeft:30,marginTop:20}}>Residential Add: {open.obj.name}</Typography>


        </CardContent>
    </Card>
</Modal>

      </>
    )
}

export default AllStudents
