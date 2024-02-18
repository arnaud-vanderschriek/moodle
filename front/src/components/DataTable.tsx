import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
  name: string,
  startDate: string,
  endDate: string,
  description?: string,
  userID?: number,
) {
  return { name, startDate, endDate, description, userID };
}

const rows = [
  createData('Math', "15-01-2024", "15-01-2024", "Marc", 4.0),
  createData('ASP.NET', "15-01-2024",  "15-01-2024", "Antoine", 4.3),
  createData('Python',  "15-01-2024",  "15-01-2024", "khun", 6.0),
  createData('French',  "15-01-2024",  "15-01-2024", "Padraig", 4.3),
  createData('NodeJS',  "15-01-2024",  "15-01-2024", "Angelina", 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Courses Name</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">Professeur</TableCell>
            <TableCell align="right">Local</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                 {row.name}
              </TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
              <TableCell align="right">{row.endDate}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.userID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}