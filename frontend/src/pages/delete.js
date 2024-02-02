import { FormControl, FormLabel, TextField, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';
import Image from '../assests/remove.jpeg';

const Delete = () => {
    const navigate = useNavigate()
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', overflow:'hidden'}}>
            <div style={{
                width:'40%',
                height:'100vh',
                backgroundSize:'cover',
                backgroundImage:`URL(${Image})`
            }}/>

            <div style={{ 
                paddingLeft: "3%", paddingRight: "3%", paddingTop: "2%", paddingBottom: "2%", 
                backgroundColor: '#d1c4e9', 
                height: '100vh',
                width:'60%'
            }}>

                <FormControl sx={{ backgroundColor: '#efebe9', padding: '3%', width: '60%', height:'30%', marginLeft: '15%', marginTop: '15%', borderRadius: '10%' }}>
                    <Stack sx={{ marginBottom: '2%' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#1a237e' }}>Remove a Student</Typography>
                    </Stack>

                    <hr style={{ width: '100%', marginBottom: '2%' }} />

                    <Stack sx={{ marginBottom: '2%' }}>
                        <Typography>Are you sure?</Typography>
                    </Stack>

                    <hr style={{ width: '100%', marginBottom: '2%' }} />

                    <Stack sx={{ marginTop: '5%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Button sx={{ backgroundColor: 'red', color: 'white', ':hover': { backgroundColor: 'red' }, width: '40%' }} onClick={() => navigate('/')}>DELETE</Button>
                        <Button sx={{ backgroundColor: 'gray', color: 'white', ':hover': { backgroundColor: 'gray' }, width: '40%' }} onClick={() => navigate('/')}>CANCEL</Button>
                    </Stack>
                </FormControl>

            </div>
        </div>
    )

};

export default Delete;