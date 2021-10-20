import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import Typography from '@mui/material/Typography'

export default function PageHeader(){

    return (
        <Paper elevation={2} sx={{backgroundColor:'#fdfdff',p:2}}>
            <Box sx={{display:'flex',ml:t=>t.spacing(2)}}>
                <Box sx={{boxShadow:2,padding:t=>t.spacing(1),color:t=>t.palette.primary.main}}>
                    <PeopleAltIcon fontSize="large"/>
                </Box>
                <Box sx={{ml:t=>t.spacing(2)}}>
                    <Typography component="div" variant="h6">New Employees</Typography>
                    <Typography sx={{opacity:0.6}}component="div" variant="subtitle2">Form design with validation</Typography>
                </Box>
            </Box>
        </Paper>
    )
}