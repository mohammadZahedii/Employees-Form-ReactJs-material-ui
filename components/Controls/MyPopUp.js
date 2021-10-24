import React from 'react'
import Dialog from '@mui/material/Dialog'
import { Typography } from '@mui/material'
import { DialogTitle,DialogContent } from '@mui/material'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'
import ActionButton from './ActionButton'

export default function MyPopUp(props){

    const {openPopUp,children,setOpenPopUp,title}=props


    return (
        <Dialog open={openPopUp} onClose={()=>setOpenPopUp(false)} maxWidth="md">
            <DialogTitle sx={{pr:0}}>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Typography component="div" variant="h6">{title}</Typography>
                    <ActionButton
                        Mycolor="secondary"
                        onClick={()=>setOpenPopUp(false)}
                    
                    >
                        <CloseIcon/>
                    </ActionButton>
                </Box>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>

        </Dialog>




    )

}