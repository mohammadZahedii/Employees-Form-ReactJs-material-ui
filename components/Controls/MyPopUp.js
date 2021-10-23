import React from 'react'
import Dialog from '@mui/material/Dialog'
import { Typography } from '@mui/material'
import { DialogTitle,DialogContent } from '@mui/material'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'


export default function MyPopUp(props){

    const {openPopUp,children,setOpenPopUp,title}=props


    return (
        <Dialog open={openPopUp} onClose={()=>setOpenPopUp(false)} maxWidth="md">
            <DialogTitle>
                <Box>
                    <Typography component="div" variant="h6">{title}</Typography>
                </Box>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>

        </Dialog>




    )

}