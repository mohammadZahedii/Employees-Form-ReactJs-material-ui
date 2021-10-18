import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import { FormControl } from '@mui/material'

export default function MyCheckBox(props){

 const{name,label,onChange}=props

const convertToDefEventPara=(name,value)=>{

    return{
        target:{
            name,value
        }
    }
}

    return(
        <FormControl sx={{my:1}}>
          <FormControlLabel
            control={<Checkbox 
                onChange={e=>onChange(convertToDefEventPara(name,e.target.checked))}
            />}
            label={label}
          />
        </FormControl>
    )
}