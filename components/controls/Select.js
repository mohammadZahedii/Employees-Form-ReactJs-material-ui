import React from 'react'
import { FormControl,InputLabel,MenuItem, Select } from '@mui/material'
import { FormHelperText } from '@mui/material'
export default function MySelect(props){

    const{label,name,value,error=null,onChange,options}=props

    return(
        <FormControl sx={{mb:2}} variant="outlined" {...error && {error:true}}>
            <InputLabel>{label}</InputLabel>
            <Select
                name={name}
                value={value}
                onChange={onChange}
                label={label}
            
            >
                <MenuItem value="">None</MenuItem>
                {

                    options.map(item=>(
                        <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                    ))

                }
            </Select>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}