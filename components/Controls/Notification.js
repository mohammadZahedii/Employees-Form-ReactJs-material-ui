import React from 'react'
import {Snackbar} from '@mui/material'
import {Alert} from '@mui/material'


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
        sx={{position:'fixed',bottom:600}}
        anchorOrigin={{vertical:'top',horizontal:'right'}}
        open={notify.isOpen}
        autoHideDuration={5000}
        onClose={handleClose}
    >
        <Alert 
            severity={notify.type}
            onClose={handleClose}
        
        >
            {notify.message}
        </Alert>
    </Snackbar>        


)

}
