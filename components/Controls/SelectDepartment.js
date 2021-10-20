import React from 'react'
import { FormControl,MenuItem,FormLabel,InputLabel } from '@mui/material'
import { Select } from '@mui/material'


export default function SelectDepartment(props){

    const{name,value,onChange,label,options}=props

    return(
        <FormControl sx={{mb:2}} variant="outlined">
            <InputLabel>{label}</InputLabel>
            <Select
                name={name}
                value={value}
                label={label}
                onChange={onChange}
            >
                <MenuItem value="">None</MenuItem>
                {
                    options.map(item=>(
                        <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                    ))
                }
            </Select>


        </FormControl>
    )
}