import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
      minHeight:600,
      overflow:'scroll'
    },
  });
  
  function createData(name, calories, fat, carbs, protein,fname,class2,ok) {
    return { name, calories, fat, carbs, protein,fname,class2,ok };
  }
  
  const rows = [
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
      {name:'rizwan',email:'rizwan@gmail.com',experience:'2 years',college:'govt National'},
  ];


const JobRequests = () => {
    const classes = useStyles();
    return (
        <TableContainer >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.college}</TableCell>
                <TableCell align="right">{row.experience}</TableCell>
                <Button variant='outlined' >View</Button>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default JobRequests
