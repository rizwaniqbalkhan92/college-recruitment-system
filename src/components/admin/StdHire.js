import React, { useState, useEffect } from 'react'
import firebase from '../Database/Config'
import { Card, Typography, Paper, Modal, Button } from '@material-ui/core'
const CompanyNotification = () => {
    const [arr, setArr] = useState([])
    useEffect(() => {
        firebase.database().ref(`students`).on('value', (data) => {
            let data1 = Object.values(data?.val())
            let dataKeys = Object?.keys(data?.val())
            console.log(data1, dataKeys)
            if (dataKeys) {
                let array = []
                for (let i = 0; i < data1?.length; i++) {
                    const obj = data1[i]
                    if (obj.notifications && !obj.notifications.length &&obj.notifications !== undefined) {
                        console.log(obj.notifications)
                        Object.values(obj.notifications).forEach(obj => {
                            array.push(obj)
                        });
                        console.log(array)
                        // array=[...array,{...obj.notifications}]
                    }
                    // let dataForm = data1[key]?.notifications
                    // console.log(array)
                    // if (dataForm) {

                    //     array = [...array, { ...dataForm }]
                    //     console.log(data.val())
                    // }


                }
                setArr(array)
                console.log(array)
            }


        })


    }, [])



    return (
        <div>
            <h1>Companies Decision</h1>

            {
                arr !== undefined || arr !== null ?
                    arr.map((value, ind) => {

                        console.log(Object.values(value))

                        return (
                            <Card key={ind} style={{ height: 50, marginBottom: 10 }}>

                                {/* <Typography>{Object.values(Object.values(value)}</Typography> */}



                            </Card>
                        )
                    }) : console.log('')


            }



        </div>
    )
}

export default CompanyNotification
