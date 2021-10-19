import React from 'react'
import Box from '@mui/material/Box'


export default function SideMenu(){

    return(
        <Box sx={{
            width:[,,'320px'],
            height:'100%',
            backgroundColor:t=>t.palette.primary.main,
            position:'absolute',
            top:0,
            left:0,
        }}>
        </Box>
    )
}