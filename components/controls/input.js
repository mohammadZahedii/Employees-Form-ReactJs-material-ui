import { TextField } from '@mui/material'
import React from 'react'


export default function Input(props){

    const {name,label,error=null,value,onChange,...other}=props
    return(

        <TextField
            sx={{mb:t=>t.spacing(2),width:'80%'}}
            variant="outlined"
            label={label}
            value={value}
            name={name}
            onChange={onChange}
            autoComplete="off"
            InputLabelProps={{
                shrink:true
            }}
            {...other}
        
            {...error && {error:true,helperText:error}}
        />
    )
}