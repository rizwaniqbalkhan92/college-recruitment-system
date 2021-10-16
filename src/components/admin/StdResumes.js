import { Card, Typography, Paper ,Modal,Button} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import firebase from '../Database/Config'
// import Modal  from '@material-ui/Modal'


const StdResumes = () => {
    const [open,setOpen]=useState(false)
    const [arr2, setArr] = useState([])
    useEffect(() => {
        firebase.database().ref(`students`).on('value', (data) => {
            let data1 = data?.val()
            let dataKeys = Object?.keys(data1)

            if (dataKeys) {
                let array = []
                for (let i = 0; i < dataKeys?.length; i++) {
                    const key = dataKeys[i]
                    let dataForm = data1[key]?.resume

                    if (dataForm) {

                        array = [...array, { ...dataForm }]
                    }
                    // array.push(dataForm)
                    // console.log(dataForm)

                    //                     if(dataForm){
                    //     var array2=[]
                    //     for(let j=0; j<array.length; j++){
                    //         const keyFinal=array[j]
                    //         const dataFinal=dataForm[keyFinal]
                    //         console.log(dataFinal)
                    //         // array2.push(dataFinal)

                    //         // const dataFinal=
                    //     }

                    // }

                }
                setArr(array)
                console.log(array)
            }


        })


    }, [])
    useEffect(() => {
        console.log(arr2)

    }, [arr2])

    return (
        <div>
            <h1 onClick={() => console.log(arr2)}>Students Resumes</h1>
            {
                arr2 !== null || arr2 !== undefined ?
                    Object.values(arr2).map((value) => (
                        Object.values(value).length
                            ?
                            <Paper>
                                <Card style={{ height: 60, justifyContent:'space-between',display:'flex' ,marginBottom:10}} onClick={() => console.log()}>
                                    <img src={Object.values(value)[0].image}  style={{width:50,marginTop:10,height:50,borderRadius:50}} />
                                    <Typography >{Object.values(value)[0].address}</Typography><br />
                                    <Typography>{Object.values(value)[0].address}</Typography>
                                    <Button style={{height:40,marginTop:10}} variant="outlined" color='primary' onClick={()=>setOpen({obj:Object.values(value)[0],open:true})}>View</Button>
                                   
                                </Card>
                            </Paper>
                            : null
                    )) : null

            }

<Modal open={open}>
<Paper style={{width:550,marginLeft:400,marginTop:60}}>
        <Button variant='contained' color='primary' onClick={()=>setOpen(false)}>X</Button>
    <Card  style={{width:500,height:600,marginLeft:0}}>
   
        <img  src={open?  open.obj.image : '' }  style={{width:150,marginLeft:200, borderRadius:10,marginTop:10,height:150}} />
        <Typography style={{fontSize:25,color:'black'}}>Name :{open? open.obj.fullName: ''}</Typography>
        <Typography style={{fontSize:25,color:'black'}}>Email:{open? open.obj.email2: ''}</Typography>
        <Typography style={{fontSize:25,color:'black'}}>Mobile # :{open? open.obj.mobile: ''}</Typography>
        <Typography style={{fontSize:25,color:'black'}}>Address # :{open ? open.obj.address:''}</Typography>
        <Typography style={{fontSize:25,color:'black'}}>Cnic #: {open? open.obj.cnic: ''}</Typography>
        <Typography style={{fontSize:25,color:'black'}}>Qualification: {open? open.obj.lastDegree: ''}</Typography>
        <Typography style={{fontSize:25,color:'black'}}>Last College: {open? open.obj.lastCollege: ''}</Typography>
        <Typography style={{fontSize:25,color:'black'}}>Last Job{open? open.obj.lastJob: ''}</Typography>
        <Typography style={{fontSize:25,color:'black'}}>Responsibilities: {open? open.obj.responsibilities: ''}</Typography>
        <Typography style={{fontSize:25,color:'black'}}>Working Journey:{open? open.obj.workingJourney: ''}</Typography>
        <Typography style={{fontSize:25,color:'black'}}>Extra Skills:{open? open.obj.extraSkills: ''}</Typography>
   
    </Card> 
</Paper>
</Modal>
        </div>
    )
}

export default StdResumes
