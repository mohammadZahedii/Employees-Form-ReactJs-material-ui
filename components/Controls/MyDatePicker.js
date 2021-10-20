import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import TextField from '@mui/material/TextField'



export default function MyDatePicker(props){

    const{name,value,onChange,label}=props

    const convertToDefEventPara=(namee,valuee)=>{

        return{
            target:{
                name:namee,value:valuee    
            }
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker 
                    label={label}
                    value={value}
                    onChange={date=>onChange(convertToDefEventPara(name,date))}
                    renderInput={(params)=><TextField {...params}/>}
                
                />
        </LocalizationProvider>
    )

}