import React from 'react'
import {Dialog,DialogTitle,DialogContent,DialogActions} from '@mui/material'
import MyButton from './MyButton'
import { Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import { Box } from '@mui/material'

export default function ConfirmDialog(props){
    
    const{confirmDialog,setConfirmDialog}=props

    return(

        <Dialog
            open={confirmDialog.isOpen}
        >
            <DialogTitle sx={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                    <Box
                        disableRipple
                        sx={{
                            backgroundColor:t=>t.palette.secondary.light,
                            borderRadius:'50%',
                            
                            px:3,
                            py:2,
                            color:t=>t.palette.secondary.main,
                            '&:hover':{
                                backgroundColor:t=>t.palette.secondary.light,
                                cursor:'default'
                            },
                            '& .MuiSvgIcon-root':{
                                fontSize:'8rem',
                                pt:.6
                            }

                        }}
                    
                    >
                        <NotListedLocationIcon/>
                    </Box>
            </DialogTitle>
            <DialogContent 
                sx={{textAlign:'center'}}
            >
                <Typography variant="h6">{confirmDialog.title}</Typography>
                <Typography variant="subtitle2">{confirmDialog.subtitle}</Typography>

            </DialogContent>

            <DialogActions sx={{justifyContent:'center'}}>
                <MyButton
                    text="No"
                    color="inherit"
                    onClick={()=>setConfirmDialog({
                        ...confirmDialog,
                        isOpen:false
                    })}
                
                />
                <MyButton
                    text="Yes"
                    color="secondary"
                    onClick={confirmDialog.onConfirm}
                
                />
            </DialogActions>


        </Dialog>

    )
}