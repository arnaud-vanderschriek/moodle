import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable({cursus}:any) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 'auto' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Courses Name</TableCell>
            <TableCell align="right">Start Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cursus.map((row:any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                 {row.name}
              </TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}