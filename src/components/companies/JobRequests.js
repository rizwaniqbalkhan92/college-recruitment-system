import React, { useEffect, useState, useContext } from "react";
import firebase from "../Database/Config";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Modal, CardContent, Card, Typography } from "@material-ui/core";
import { CompanyContext } from './CompaniesRoutes'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    minHeight: 600,
    overflow: "scroll",
  },
});

function createData(name, email, address, lastEdu) {
  return { name, email, address, lastEdu };
}





const JobRequests = () => {
  const context = useContext(CompanyContext)
  let id2 = context.location.state.id
  let email = context.location.state.email

  const classes = useStyles();
  const [allStdApp, setAllStdApp] = useState([]);
  const [open, setOpen] = useState({ value: false, obj: { name: "" } });
  
 
  useEffect(() => {
    if (id2) {

 firebase
        .database()
        .ref(`company/allAppliedStudents/${id2}`)
        .on("value", (data) => {
          const dataEmp = data?.val();
          let keys = Object.keys(data.val());
          // console.log(dataEmp)
          var array = [];

          if (dataEmp) {
            for (var i = 0; i < keys.length; i++) {
              const key = keys[i];
              const data2 = dataEmp[key];
              const obj = { data2, key };
     
              array.push(obj);

              setAllStdApp(array);
            }
          } else {
            alert("empty....!");
          }
        });

    }
  }, [id2]);
 
  const selectionForInterView=(obj)=>{

    if(obj){
    
    
      const selectionMessage={
        name:  obj?.data2?.fullName,
        email:obj?.data2?.email2,
        cnic:obj?.data2?.cnic,
        img:obj?.data2?.image,
        address:obj?.data2?.address,
        key:obj.key,
        keyStd:obj.data2.key,
        emailJobCreator:email,
        message:'Congratulation You have selected for interview so please come in interview '
    
    }
      
    const key=obj.data2.key
   
      firebase.database().ref(`students/${key}/notifications`).push(selectionMessage)
      
      
    }
    }
  const rejectForInterview=(obj)=>{

    if(obj){
    
    
      const selectionMessage={
        name:  obj?.data2?.fullName,
        email:obj?.data2?.email2,
        cnic:obj?.data2?.cnic,
        img:obj?.data2?.image,
        address:obj?.data2?.address,
        key:obj.key,
        keyStd:obj.data2.key,
        emailJobCreator:email,
        message:"Sorry You have Not Selected for interview ,Don't Worry Try next time"
    
    }
      
    const key=obj.data2.key
   
      firebase.database().ref(`students/${key}/notifications`).push(selectionMessage)
      
      
    }
    }
  return (
    <>

    
      <TableContainer >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
             
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email&nbsp;(g)</TableCell>
              <TableCell align="right">Address&nbsp;(g)</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody   style={{height:100,overflow:'scroll'}}   >
            {  allStdApp ?
            allStdApp.map((row) => (

              <TableRow  style={{overflowY:'scroll'}}>

                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <img src={row.data2.image}  style={{width:50,height:50,marginTop:40}} />
                <TableCell align="right">{row?.data2?.fullName}</TableCell>
               
                <TableCell align="right">{row?.data2?.jobTitle}</TableCell>
                <TableCell align="right">{row?.data2?.responsibilities}</TableCell>
           
           

                <Button
                  variant="outlined"
                  onClick={() =>
                    setOpen({ value: true, obj:row })
                  }
                >
                  View
                </Button>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            )
            
            
            ) :<h1>Loading.....</h1>   }
          </TableBody>
     
     
     
     
        </Table>


      </TableContainer>
      <Modal open={open.value}>

        <Card className="modal">
          <Button
            variant="outlined"
            color="secondary"
            style={{ position: "relative", left: 0 }}
            onClick={() => setOpen({ value: false, obj: { name: "" } })}
          >
            X
          </Button>
          <CardContent>
            <img src={open.obj?.data2?.image}  width='100px' height='100px' style={{marginLeft:130}}  />
            <Typography
              style={{ fontWeight: "bolder", marginLeft: 30, marginTop: 20 }}
            >
              {/* Name: {open.data2.jobTitle} */}
            </Typography>
            <Typography
              style={{ fontWeight: "bolder", marginLeft: 30, marginTop: 20 }}
            >
              Email Address: ''
            </Typography>
            <Typography
              style={{ fontWeight: "bolder", marginLeft: 30, marginTop: 20 }}
            >
              Experience : ''
            </Typography>
            <Typography
              style={{ fontWeight: "bolder", marginLeft: 30, marginTop: 20 }}
            >
              Mobile #: ''
            </Typography>
            <Typography
              style={{ fontWeight: "bolder", marginLeft: 30, marginTop: 20 }}
            >
              Residential Add:''
            </Typography>
            <Button onClick={()=>selectionForInterView(open.obj)}>Select</Button>
            <Button  onClick={()=>rejectForInterview(open.obj)}>Reject</Button>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default JobRequests;
