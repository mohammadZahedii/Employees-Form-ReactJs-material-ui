import React from 'react'
import { RadioGroup } from '@mui/material'
import { FormControl } from '@mui/material'
import { FormLabel } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import Radio from '@mui/material/Radio'

export default function MyRadioGroup(props){


    const{name,value,label,onChange,items}=props
    
    console.log(items)
    return(
        <FormControl sx={{mb:1}} variant="standard" component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
                name={name}
                value={value}
                onChange={onChange}
                row
            >
                {
                    items.map(item=>(
                        <FormControlLabel value={item.id} label={item.title} key={item.id} control={<Radio/>}/>
                    ))
                }
            </RadioGroup>
        </FormControl>
    )
}