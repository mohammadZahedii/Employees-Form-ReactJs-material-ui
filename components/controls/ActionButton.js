import React from 'react'
import Button from '@mui/material/Button'
// import { useTheme } from '@mui/material/styles';
// import {makeStyles} from '@mui/styles'



// const style={
//     root:{
//        minWidth:0,
//        margin:t=>t.spacing(0.5), 
//        backgroundColor:theme=>theme.palette.secondary.light,

//     },
//     secondary:{
//         color:theme=>theme.palette.secondary.main
//     },
//     primary:{
//         backgroundColor:theme=>theme.palette.primary.light,
//         color:theme=>theme.palette.primary.main
//     }
// }


// const useStyles=makeStyles((theme)=>({
//     root:{
//         minWidth:0,
//         margin:theme.spacing(0.5), 
//         backgroundColor:theme.palette.secondary.light,
 
//      },
//      secondary:{
//          color:theme.palette.secondary.main
//      },
//      primary:{
//          backgroundColor:theme.palette.primary.light,
//          color:theme.palette.primary.main
//      }

    
// }))


export default function ActionButton(props){

    const{color,children,onClick,size}=props

    // const classes=useStyles()
    return(
        <Button
            sx={
            color=='secondary'?
            {backgroundColor:t=>t.palette.secondary.light,
            color:t=>t.palette.secondary.main,
            minWidth:0,margin:t=>t.spacing(0.5),
            '&:hover':{backgroundColor:t=>t.palette.secondary.light}
            }
            :{backgroundColor:t=>t.palette.primary.light,
             color:t=>t.palette.primary.main,
             minWidth:0,margin:t=>t.spacing(0.5),
             '&:hover':{backgroundColor:t=>t.palette.primary.light}

            }
        }
            onClick={onClick}
            size={size||'normal'}
        >
            {children}
        </Button>
    )
}