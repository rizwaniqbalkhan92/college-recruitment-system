import { Paper,Typography,Button,Card } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import firebase from '../Database/Config'
const StdApplied = () => {

    const [array, setArray] = useState([])
const deletePost=(key)=>{

// firebase.database().ref(`admin/applied/${key}`).remove()


}
    console.log(array)
    useEffect(() => {

        firebase.database().ref(`admin/applied`).on('value', (data) => {
            let data2 = data.val()
            let dataKey = Object.keys(data2)
            if (dataKey) {
                let arr = []
                for (let i = 0; i < dataKey.length; i++) {
                    const key = dataKey[i]
                    const dataForm = data2[key]
                    const obj = { data: dataForm, key }
                    arr.push(obj)
                    setArray(arr)

                }
                setArray(arr)
            }
        })
    }, [])

    return (
        <div>
            <h1>All Applied Students</h1>
<Paper style={{height:600,overflow:'scroll'}}>
    { array!==undefined || array!==null ? 
array.map((value,ind)=>(
    <Card style={{height:500,width:400,backgroundColor:'lightblue',marginLeft:300,marginTop:50,marginBottom:50}} >
    <img src={value.data.image} style={{width:350,height:200,marginTop:30}} />
    <Typography style={{fontSize:20}}>Name:{value.data.fullName} </Typography>
    <Typography style={{fontSize:20}}>Cnic {value.data.cnic} </Typography>
    <Typography style={{fontSize:20}}>Mobile # : {value.data.mobile} </Typography>
    <Typography style={{fontSize:20}}>Address # : {value.data.address} </Typography>
    <div style={{display:'flex',justifyContent:'space-between',width:200,marginLeft:100,marginTop:30}}> 
    <Button colot='danger'  onClick={()=>deletePost(value.key)} style={{height:40,marginTop:10}} variant="contained" >Delete</Button>
    <Button colot='primary' style={{height:40,marginTop:10}} variant="contained">Update</Button>
</div>
</Card>

)):<h1>Loading............</h1>
    }
</Paper>


        </div>
    )
}

export default StdApplied
