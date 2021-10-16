import React from 'react'
import './home.css'
import {Card,Typography,Button}  from '@material-ui/core'
import { useHistory } from 'react-router'
const Home = () => {

    const history=useHistory()
    return (
        <div className='bodyHome'>

        <div className="main">

<Card className='card'>
<Typography className='text'>
The main objective of the UBIT is to impart quality education and conduct research in computer science and information technology. Through structured degree programs, intensive training courses for professionals, academicians, and researchers by organizing workshops and training courses. The main elements of the program focus on human research development in the field of IT. Specially designed research projects in computers, hardware & software engineering, IT, telecommunications software technologies, high tech data analysis techniques and modern trends in CS/IT. The UBIT complex is comprised of three blocks. The institute has state-of-the-art computer facilities and leased line circuits. There are several lecture rooms, discussion rooms, computer laboratories, and faculty offices. Rooms for holding teleconferencing, discussions, and training sessions are also provided for sessions on specialized topics. Library, administrative offices, filing room, prayer rooms, ladies common room also form a part of the UBIT establishment. The UBIT complex was completed in 2006. Some facts about the complex are as follows:

</Typography>
</Card>

<div className='btns'>

    <Button variant="contained" onClick={()=>history.push('/studentLogin')} color='primary'>Student</Button>
    <Button variant="contained"  onClick={()=>history.push('/AdminLogin')} color='secondary'>Admin</Button>
    <Button variant="contained"  onClick={()=>history.push('/companiesLogin')} color='success'>Company</Button>
</div>
        </div>

        </div>
    )
}

export default Home
