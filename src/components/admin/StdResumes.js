import React, { useEffect, useState } from 'react'
import firebase from '../Database/Config'



const StdResumes = () => {
const [arr2,setArr]=useState([])
console.log(arr2)
    useEffect(() => {
        firebase.database().ref(`students`).on('value', (data) => {
            let data1=data?.val()
                let dataKeys = Object?.keys(data1)

            if (dataKeys){
                let array=[]
                for(let i=0; i<dataKeys?.length; i++){
                    const key=dataKeys[i]
                    let dataForm=data1[key]?.resume
                 
                    // if(dataForm){
//     var array2=[]
//     for(let j=0; j<array.length; j++){
//         const keyFinal=array[j]
//         const dataFinal=dataForm[keyFinal]
//         console.log(dataFinal)
//         // array2.push(dataFinal)

//         // const dataFinal=
//     }
    
//     setArr(array2)
// }

                }
            }


    })


    }, [])

    return (
        <div>
            <h1>StdResumes StdResumes</h1>
        </div>
    )
}

export default StdResumes
