import React from 'react'
import Button from '@mui/material/Button'


export default function MyButton(props){
    
    const{text,color,variant,size,onClick,...other}=props

    return(
        <Button
            variant={variant || 'contained'}
            color={color || 'primary'}
            size={size || 'large'}
            onClick={onClick}
            {...other}
        >
            {text}
        </Button>
    )
}