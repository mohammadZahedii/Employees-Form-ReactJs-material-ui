import React from 'react'
import {Dialog,DialogTitle,DialogContent,DialogActions} from '@mui/material'
import Controls from './Controls'
import { Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';

export default function ConfirmDialog(props){

    const{confirmDialog,setConfirmDialog}=props

    return(
        <Dialog
            open={confirmDialog.isOpen}
        >
            <DialogTitle sx={{justifyContent:'center',display:'flex'}}>
                <IconButton disableRipple 
                sx={{
                    
                    backgroundColor:t=>t.palette.secondary.light,
                    color:t=>t.palette.secondary.main,
                    
                    '&:hover':{
                        backgroundColor:t=>t.palette.secondary.light,
                        cursor:'default'
                    },
                    '& .MuiSvgIcon-root':{
                        fontSize:'8rem'
                    }

                }}>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{textAlign:'center'}}>
                <Typography variant="h6">{confirmDialog.title}</Typography>
                <Typography variant="subtitle2">{confirmDialog.subtitle}</Typography>

            </DialogContent>
            <DialogActions sx={{justifyContent:'center'}}>
                <Controls.MyButton
                    text="No"
                    onClick={()=>setConfirmDialog({
                        ...confirmDialog,
                        isOpen:false
                    })}
                    color="inherit"
                />
                 <Controls.MyButton
                    text="Yes"
                    color="secondary"
                    onClick={confirmDialog.onConfirm}
                />
            </DialogActions>
        </Dialog>
    )
}