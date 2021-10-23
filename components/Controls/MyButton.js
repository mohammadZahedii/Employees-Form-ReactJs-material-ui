import React from 'react'
import Button from '@mui/material/Button'



export default function MyButton(props){

const{text,size,variant,color,...other}=props

    return (
        <Button
            variant={variant || 'contained'}
            color={color || 'primary'}
            size={size || 'medium'}
            {...other}
            
        >
            {text}
        </Button>
    )
}