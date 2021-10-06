import { Typography, Card, CardContent, Modal, Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import img from '../images/img1.jpg'
import firebase from '../Database/Config'
import './company.css'
const AllStudents = () => {
    const [open, setOpen] = useState({ value: false, obj: { name: '' } })
    const [value1, setValue1] = useState([])
// console.log(open)

    const data = [
        { image: img, name: 'rizwan', experience: 'this................this....' },
        { image: img, name: 'rizwan', experience: 'this................this....' },
        { image: img, name: 'rizwan', experience: 'this................this....' },
        { image: img, name: 'rizwan', experience: 'this................this....' },
    ]
    useEffect(() => {
        let arr = []
        firebase.database().ref(`students`).on('value', (data) => {
            var keys = Object.keys(data.val())
            var data2 = data.val()


            if (keys) {
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i]
                    let data3 = data2[key]
                    let resKey = Object.keys(data3.resume)

                    if (resKey) {


                        for (let k = 0; k < resKey.length; k++) {
                            const keyFormatData = resKey[k]
                            const dataFormatted = data3.resume[keyFormatData]
                            // console.log(dataFormatted)
                            // let obj = { data: dataFormatted, key: keyFormatData }
                            arr.push(dataFormatted)

                            setValue1(arr)
                        }

                    }

                    // const dataNew=data3.resume[resKey]
                    // arr.push(dataNew)




                }
                // setValue1(arr)
            }

            // else{

            // }

        }
        )


    }, [])

    return (<>{

        value1.map((value, index) => {
            // console.log(value)

            return (


                <Card key={index}  className='card-std'  >
                    <CardContent className='allStdInfo'>
                        <img src={value.image} width='50px' height='50px' className='allStdImg' />
                        <Typography style={{ fontWeight: 'bolder', marginTop: 10, marginLeft: 10 }}>
                            {value.fullName}
                        </Typography>
                        <Typography style={{ fontWeight: 'bolder', width: 300, marginTop: 10, marginLeft: 200 }}>
                            {value.email2}
                        </Typography>
                        <Button onClick={() => setOpen({ value: true, obj:value  })} style={{ marginBottom: 10, marginLeft: 200 }} variant="contained" className='btnView' color="primary" >View</Button>
                    </CardContent>
                </Card>

            )
    })}



        <Modal open={open.value} >
            <Card className='modal'>
                <Button variant='outlined' color='secondary' style={{ position: 'relative', left: 0 }} onClick={() => setOpen({ value: false, obj: { name: '' } })}>X</Button>
                <CardContent>
                    <img src={open.obj.image} width='100px' height='100px' style={{ marginLeft: 130 }} />
                    {/* <Typography style={{fontWeight:'bolder',marginLeft:30,marginTop:20}}>Name: {value.address}</Typography> */}
                    <Typography style={{ fontWeight: 'bolder', marginLeft: 30, marginTop: 20 }}>Email Address: {open.obj.email2}</Typography>
                    <Typography style={{ fontWeight: 'bolder', marginLeft: 30, marginTop: 20 }}>Experience : {open.obj.fullName}</Typography>
                    <Typography style={{ fontWeight: 'bolder', marginLeft: 30, marginTop: 20 }}>Mobile #: {open.obj.mobile}</Typography>
                    <Typography style={{ fontWeight: 'bolder', marginLeft: 30, marginTop: 20 }}>Residential Add: {open.obj.address}</Typography>


                </CardContent>
            </Card>
        </Modal>

    </>
    )
}

export default AllStudents
