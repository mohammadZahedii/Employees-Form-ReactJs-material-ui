import React from 'react'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import {DialogTitle,DialogContent} from '@mui/material'
import Box from '@mui/material/Box'
import Controls from './Controls'
import CloseIcon from '@mui/icons-material/Close';


export default function MyPopUp(props){

    const {title,children,openPopup,setOpenPopUp}=props
    return(
        <Dialog open={openPopup} maxWidth="md" >
            <DialogTitle sx={{pr:0}}>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Typography component="div" variant="h6">{title}</Typography>
                    <Controls.ActionButton
                        color="secondary" 
                        onClick={()=>setOpenPopUp(false)}
                    >
                        <CloseIcon />
                    </Controls.ActionButton>
                </Box>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    ) 
}