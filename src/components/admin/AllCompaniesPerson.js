import React,{useEffect,useState} from 'react'
import firebase from 'firebase'
import {Paper,Card,Typography}  from '@material-ui/core'


const AllCompaniesPerson = () => {


    const [array,setArr]=useState([])
    
    console.log(array)
    useEffect(()=>{

    firebase.database().ref(`company/emp_ids`).on('value',(data)=>{
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
        <div>
            <h1>All Companies</h1>
            {
                array.map((value)=>{

                    console.log(value)
 return(

     <Paper>
                <Card>
                    <Typography></Typography>
                </Card>
            </Paper>
                        )                   

}


                )
            }
        </div>
    )
}

export default AllCompaniesPerson
