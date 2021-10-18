import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import { TextField } from '@mui/material'
// import { Box } from '@mui/material'


export default function MyDatePicker(props){


    const{value,name,onChange,label}=props

    const convertToDefEventPara=(namee,valuee)=>{
        console.log(name,value)
        return{
                target:{
                    name:namee,value:valuee
                }
            }
    }
    

    return(
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    
                    label={label}
                    value={value}
                    views={['year','month','day']}
                    onChange={date=>onChange(convertToDefEventPara(name,date))}
                    renderInput={(params)=><TextField {...params}/>}
                />
             </LocalizationProvider>

            
        
    )
}