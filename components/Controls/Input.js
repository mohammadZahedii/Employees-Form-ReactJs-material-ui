import React from 'react'
import { TextField } from '@mui/material'


export default function Input(props){

    const{name,label,error=null,value,onChange,...other}=props

    return (
        <TextField
            sx={{mb:t=>t.spacing(2)}}
            variant="outlined"
            name={name}
            label={label}
            value={value}
            InputLabelProps={{
                shrink:true
            }}
            onChange={onChange}
            fullWidth
            autoComplete="off"
            {...other}
            {... error && {error:true,helperText:error}}
        />
    )

}