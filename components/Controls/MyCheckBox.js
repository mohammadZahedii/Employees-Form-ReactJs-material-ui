import React from 'react'
import { FormControl,Checkbox,FormControlLabel } from '@mui/material'



export default function MyCheckBox(props){


    const{name,value,onChange,label}=props

    const convertToDefEventPara=(name,value)=>{
            return{
                target:{
                    name,value
                }
            }
    }

    
    return(
        <FormControl sx={{my:1}}>
            <FormControlLabel label={label} control={<Checkbox
                onChange={(e)=>onChange(convertToDefEventPara(name,e.target.checked))}
                checked={value}
            />}/>
        </FormControl>
    )
}