import React from 'react'
import { RadioGroup } from '@mui/material'
import { FormControl } from '@mui/material'
import { FormLabel } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import { Radio } from '@mui/material'


export default function MyRadioGroup(props){

    const{name,label,value,onChange,items}=props
    
return(
    <FormControl sx={{mb:1}} variant="standard"  component="fieldset">
        <FormLabel component="legend" >{label}</FormLabel>
        <RadioGroup 
            name={name}
            value={value}
            onChange={onChange}
            row
        >
            {
                items.map((item,index)=>(
                    <FormControlLabel key={index} value={item.id} control={<Radio/>} label={item.title}/>
                ))

            }
          
        </RadioGroup>
    </FormControl>

    )

}