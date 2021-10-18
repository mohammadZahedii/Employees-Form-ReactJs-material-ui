import React from 'react'
import { Snackbar } from '@mui/material'
import { Alert } from '@mui/material'

export default function Notification(props){

    const{notify,setNotify}=props


    const handleClose=(event,reason)=>{
        if(reason === 'clickAway'){
            return;
        }
        setNotify({
            ...notify,
            isOpen:false
        })
    }
    return(
        <Snackbar
           
            anchorOrigin={{vertical:'top',horizontal:'right'}}
            open={notify.isOpen}
            autoHideDuration={1000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={notify.type}
            >
                {notify.message}
            </Alert>
        </Snackbar>
    )

}