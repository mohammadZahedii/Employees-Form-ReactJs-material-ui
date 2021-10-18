import React from 'react'
// import Box from '@mui/material/Box'
import {withStyles} from '@mui/styles'



const Mycomponent=withStyles({
    root:{
        display:'none',
        '@media (min-width: 960px)':{
            display:'flex'
        },
        flexDirection:'column',
        position:'absolute',
        left:'0px',
        top:'0px',
        width:'320px',
        height:'100%',
        backgroundColor:'#253053'
    },
   
})(({classes})=><div className={classes.root}/>)

function SideMenu(props){
    
    return(
      <Mycomponent/>
    )
}

export default SideMenu