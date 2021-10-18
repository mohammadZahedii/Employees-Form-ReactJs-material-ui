import React from 'react'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

export default function PageHeader(props){
    
    const {title,subtitle,icon}=props
    return(
        <Paper elevation={1} sx={{backgroundColor:'#fdfdff',mt:1,p:1}}>
            <Box sx={{display:'flex',mb:t=>t.spacing(2),ml:t=>t.spacing(2)}}>
                <Card elevation={2} sx={{padding:t=>t.spacing(1),color:'#3c44b1'}}>
                    {icon}
                </Card>
           
            <Box sx={{paddingLeft:t=>t.spacing(2),'& :last-child':{opacity:0.6}}}>
                <Typography variant="h6" component="div">
                    {title} 
                </Typography>
                <Typography variant="subtitle2" component="div" >
                    {subtitle} 
                </Typography>
            </Box>
           </Box>
        </Paper>
     

    )


}