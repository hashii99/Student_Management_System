import React from 'react';
import { FormControl, FormLabel, TextField, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddImage from '../assests/addimage.jpg';


const Add = () => {
    const navigate = useNavigate()

    return (
            <div style={{
                paddingLeft: "3%", paddingRight: "3%", paddingTop: "2%", paddingBottom: "2%",
                width:'100%',
                height:'100vh',
                height: '100vh',
                backgroundImage:`URL(${AddImage})`

            }}>

                <Typography variant='h4' sx={{ textAlign: 'center', color: '#4a148c', fontFamily: 'cursive' }}>Add New Student</Typography>
                <hr style={{ width: '70%' }} />

                <FormControl sx={{ backgroundColor: '#efebe9', padding: '3%', width: '40%', marginLeft: '25%', marginTop: '3%', borderRadius: '10%' }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%' }}>
                        <Stack>
                            <FormLabel>First Name</FormLabel>
                            <TextField></TextField>
                        </Stack>

                        <Stack>
                            <FormLabel>Last Name</FormLabel>
                            <TextField></TextField>
                        </Stack>
                    </Stack>

                    <Stack sx={{ marginBottom: '2%' }}>
                        <FormLabel>Grade</FormLabel>
                        <TextField></TextField>
                    </Stack>

                    <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%' }}>
                        <Stack>
                            <FormLabel> Contact Number</FormLabel>
                            <TextField></TextField>
                        </Stack>

                        <Stack>
                            <FormLabel>Address</FormLabel>
                            <TextField></TextField>
                        </Stack>
                    </Stack>

                    <Stack sx={{ marginTop: '2%' }}>
                        <Button sx={{ backgroundColor: '#4a148c', color: 'white', ':hover': { backgroundColor: '#4a148c' } }} onClick={() => navigate('/')}>Submit</Button>
                    </Stack>
                </FormControl>
            </div >
       
    )
};

export default Add;