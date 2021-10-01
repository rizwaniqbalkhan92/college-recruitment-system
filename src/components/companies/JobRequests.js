import React, { useEffect, useState } from "react";
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    minHeight: 600,
    overflow: "scroll",
  },
});

function createData(name, calories, fat, carbs, protein, fname, class2, ok) {
  return { name, calories, fat, carbs, protein, fname, class2, ok };
}

const rows = [
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
  {
    name: "rizwan",
    email: "rizwan@gmail.com",
    experience: "2 years",
    college: "govt National",
  },
];

const JobRequests = () => {
  const classes = useStyles();
  const [allStdApp, setAllStdApp] = useState([]);
  const [open, setOpen] = useState({ value: false, obj: { name: "" } });

  useEffect(() => {
    firebase
      .database()
      .ref(`company/allAppliedStudents/${"KJ577BrjU2PsBEbfMLwc5HJRY9B3"}`)
      .on("value", (data) => {
        const dataEmp = data.val();
        let keys = Object.keys(data.val());
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
  }, []);

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allStdApp.map((row) => (
          
              <TableRow>
            
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <TableCell align="right">{row.data2.cnic}</TableCell>
                <TableCell align="right">{row.data2.email2}</TableCell>
                <TableCell align="right">{row.data2.email2}</TableCell>

                <Button
                  variant="outlined"
                  onClick={() =>
                    setOpen({ value: true, obj:row})
                  }
                >
                  View
                </Button>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
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
            {/* <img src={img}  width='100px' height='100px' style={{marginLeft:130}}  /> */}
            <Typography
              style={{ fontWeight: "bolder", marginLeft: 30, marginTop: 20 }}
            >
              Name: {open.obj.name}
            </Typography>
            <Typography
              style={{ fontWeight: "bolder", marginLeft: 30, marginTop: 20 }}
            >
              Email Address: {open.obj.name}
            </Typography>
            <Typography
              style={{ fontWeight: "bolder", marginLeft: 30, marginTop: 20 }}
            >
              Experience : {open.obj.name}
            </Typography>
            <Typography
              style={{ fontWeight: "bolder", marginLeft: 30, marginTop: 20 }}
            >
              Mobile #: {open.obj.name}
            </Typography>
            <Typography
              style={{ fontWeight: "bolder", marginLeft: 30, marginTop: 20 }}
            >
              Residential Add: {open.obj.name}
            </Typography>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default JobRequests;
