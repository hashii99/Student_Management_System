import { Button, IconButton, Stack, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import BackgroundImage from '../assests/bckgrnd1.jpg'

// import Add from './add';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(id, name, grade, address, contact) {
    return { id, name, grade, address, contact };
}

const rows = [
    createData(1, "Tharindi Senadheera", "12A", "Delkanda", "0718901123"),
    createData(2, "Trineesha Sanduni", "12D", "Maharagama", "0703321890"),
    createData(3, "Thirani Perera", "12B", "Godagama", "0742211334"),
    createData(4, "Pasindu Guruge ", "12C", "Pannipitiya", "0702214532"),
    createData(5, "Kimuthu Kisal", "12E", "Gampaha", "0712205543"),
];

const Home = () => {
    const navigate = useNavigate()

    return (
        <div style={{ 
            paddingLeft: "3%", 
            paddingRight: "3%", 
            paddingTop: "2%", 
            paddingBottom: "2%",  
            backgroundImage:`URL(${BackgroundImage})`,
            height:'100vh'
            }}>

            <Typography sx={{ textAlign: "center", fontFamily:'cursive', color:'white' }} variant='h4'>Student Management System</Typography>
            <hr />

            <Stack sx={{marginTop:'2%', marginBottom:'1%', width:'15%'}}>
                <Button sx={{ backgroundColor: '#1a237e', color: 'white', ':hover': { backgroundColor: '#1a237e' }}} onClick={() => navigate('/add')}>
                    <AddIcon />Add New Student
                </Button>
            </Stack>

            <TableContainer component={Paper} sx={{marginTop:'1%'}}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Student ID</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Grade</StyledTableCell>
                            <StyledTableCell align="left">Contact Number</StyledTableCell>
                            <StyledTableCell align="left">Address </StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.grade}</StyledTableCell>
                                <StyledTableCell align="left">{row.contact}</StyledTableCell>
                                <StyledTableCell align="left">{row.address}</StyledTableCell>
                                <StyledTableCell align="left"><IconButton onClick={() => navigate('/update')}><EditIcon sx={{ color: 'gray' }} /></IconButton></StyledTableCell>
                                <StyledTableCell align="left"><IconButton onClick={() => navigate('/delete')}><DeleteIcon sx={{ color: 'red' }} /></IconButton></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};

export default Home;