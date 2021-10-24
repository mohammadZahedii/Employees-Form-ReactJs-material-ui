import React from 'react'
import Button from '@mui/material/Button'





export default function ActionButton(props){

    const {size,children,onClick,Mycolor,...other}=props

    // console.log(color)
    return(
        <Button
            sx={
                Mycolor == "secondary"?
                {
                    backgroundColor:t=>t.palette.secondary.light,
                    color:t=>t.palette.secondary.main,
                    minWidth:0,
                    margin:t=>t.spacing(.5),
                    '&:hover':{
                        backgroundColor:t=>t.palette.secondary.light,
                    }

                }
                :
                {
                    backgroundColor:t=>t.palette.primary.light,
                    color:t=>t.palette.primary.main,
                    minWidth:0,
                    margin:t=>t.spacing(.5),
                    '&:hover':{
                        backgroundColor:t=>t.palette.primary.light,
                    }

                }


            }
            {...other}
            onClick={onClick}
            size={size||'small'}
        >
            {children}
        </Button>
    )


}