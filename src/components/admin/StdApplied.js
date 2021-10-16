import { Paper, Typography,TextField, Button, Card, Modal } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import firebase from '../Database/Config'
const StdApplied = () => {

    const [array, setArray] = useState([])
    const [cnic, setCnic] = useState('')
    const [open, setOpen] = useState(false)
    const [company, setComp] = useState('')
    const [eduJourney, setEdJourney] = useState('')
    const [endDate, setEndDate] = useState('')
    const [extraSkills, setSkills] = useState('')
    const [fathername, setFatheraName] = useState('')
    const [fullName, setFullName] = useState('')
    const [image, setImg] = useState('')
    const [issueDate, setIssueDate] = useState('')
    const [lastCollege, setLastCollege] = useState('')
    const [lastJob, setLastJob] = useState('')

    const [mobile, setMob] = useState('')
    const [startDate, setStartDate] = useState('')
    const [responsibilities, setResponse] = useState('')
    const [address, setAddress] = useState('')
    const [email2, setEmail2] = useState('')
    const [lastDegree, setLastDegree] = useState('')
    const [img, setImageChange] = useState('')



    const deletePost = (key) => {

        firebase.database().ref(`admin/applied`).child(key).remove().then(success => alert('success fully delete', success)).catch(error => alert(error.message))


    }
    // const updatePost = (key) => {
    //     const obj = {
    //         fullName: 'iqbal iqbla'
    //     }

    //     firebase.database().ref(`admin/applied/${key}`).update({
    //         value: obj
    //     })

    // }
    // console.log(array)



    const updatePost = (key) => {

        const updateObj = {
            address,
            cnic,
            company,
            eduJourney,
            email2,
            endDate,
            extraSkills,
            fathername,
            fullName,
            image:img,
            issueDate,
            lastCollege,
            lastDegree,
            lastJob,
            mobile,
            responsibilities,
            startDate,
            key
        }
        console.log(updateObj)

        firebase.database().ref(`admin/applied`).child(key).update(updateObj).then(success => {
            alert('successfully updated', success)
      
        }
        ).catch(error => alert(error.message))





    }

    const HandleChange = (e) => {
        let reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState == 2) {
                setImageChange(reader.result)



            }
        }
        reader.readAsDataURL(e.target.files[0])
    }




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
            <Paper style={{ height: 600, overflow: 'scroll' }}>
                {array !== undefined || array !== null ?
                    array.map((value, ind) => (
                        <Card style={{ height: 500, width: 400, backgroundColor: 'lightblue', marginLeft: 300, marginTop: 50, marginBottom: 50 }} >
                            <img src={value.data.image} style={{ width: 350, height: 200, marginTop: 30 }} />
                            <Typography style={{ fontSize: 20 }}>Name:{value.data.fullName} </Typography>
                            <Typography style={{ fontSize: 20 }}>Cnic {value.data.cnic} </Typography>
                            <Typography style={{ fontSize: 20 }}>Mobile # : {value.data.mobile} </Typography>
                            <Typography style={{ fontSize: 20 }}>Address # : {value.data.address} </Typography>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: 200, marginLeft: 100, marginTop: 30 }}>
                                <Button colot='danger' onClick={() => deletePost(value.key)} style={{ height: 40, marginTop: 10 }} variant="contained" >Delete</Button>
                                <Button colot='primary' onClick={() => setOpen({value:true,key:value.key})} style={{ height: 40, marginTop: 10 }} variant="contained">Update</Button>
                            </div>
                        </Card>

                    )) : <h1>Loading............</h1>
                }
                <Modal open={open ? open.value : ''}>
                    <Card style={{ width: 600, height: 800, marginTop: 10, marginLeft: 400 ,overflow:'scroll'}}>
                        <Button variant='contained' color='secondary' style={{ width: 40, height: 40, borderRadius: 10 }} onClick={() => setOpen({ value: false, key: '' })}>x</Button>
                        <Typography style={{ marginLeft: 150, fontSize: 30 }}>Update Company Post</Typography>
                        <div style={{ width: 300, marginLeft: 150, height: 200, marginTop: 20, flexDirection: 'column', display: 'flex', justifyContent: 'space-between' }}>
                            <TextField variant='outlined' type='file' placeholder='change Image' onChange={HandleChange} /><br />
                            <TextField variant='outlined'  placeholder='change Require Skills' onChange={e => setStartDate(e.target.value)} /><br />

                            <TextField onChange={e =>setEmail2 (e.target.value)}  variant='outlined' placeholder='change Email' /><br />
                            <TextField onChange={e => setLastDegree(e.target.value)}  variant='outlined' placeholder='change Degree' /><br />
                            <TextField onChange={e => setAddress(e.target.value)} variant='outlined' placeholder='change Address' /><br />
                            <TextField onChange={e =>setResponse (e.target.value)}  variant='outlined' placeholder='change Responsibilites' /><br />
                            <TextField onChange={e => setCnic(e.target.value)}  type='number' variant='outlined' placeholder='change cnic' /><br />
                            <TextField onChange={e => setEdJourney(e.target.value)} variant='outlined' placeholder='change Journey' /><br />
                            <TextField onChange={e => setEndDate(e.target.value)} type='date' variant='outlined' placeholder='change End Date' /><br />
                            <TextField onChange={e => setFatheraName(e.target.value)}variant='outlined' placeholder='change Father Name' /><br />
                            <TextField onChange={e => setFullName(e.target.value)}  variant='outlined' placeholder='change Full name' /><br />
                            {/* <TextField onChange={e => setImg(e.target.value)} variant='outlined' placeholder='change Require Experience' /><br /> */}
                            <TextField onChange={e => setIssueDate(e.target.value)}  type='date'  variant='outlined' placeholder='change date' /><br />
                            <TextField onChange={e => setLastCollege(e.target.value)}  variant='outlined' placeholder='change  college' /><br />
                            <TextField onChange={e => setComp(e.target.value)}  variant='outlined' placeholder='change company' /><br />
                            <TextField onChange={e => setSkills(e.target.value)} variant='outlined' placeholder='change Skills' /><br />
                            <TextField onChange={e => setLastJob(e.target.value)}  variant='outlined' placeholder='change last Job' /><br />
                            <TextField onChange={e => setMob(e.target.value)}  variant='outlined' type='number' placeholder='change mobile number' /><br />


                            <Button variant='contained' color='primary' onClick={() => updatePost(open.key)}>Confirm</Button>
                        </div>
                    </Card>

                </Modal>

            </Paper>


        </div>
    )
}

export default StdApplied
