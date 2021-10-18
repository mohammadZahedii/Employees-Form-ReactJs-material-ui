import React from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material' 
import Grid from '@mui/material/Grid'
import { InputBase } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// import Box from '@mui/material'
// import {makeStyles} from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search';


// const useStyles =makeStyles({
//     root:{
//         backgroundColor:'white',
//     },
//     searchInput:{
//         opacity:'0.6',
//         padding:'0px 8px',
//         fontSize:'0.8rem',
//         '&:hover':{
//             backgroundColor:'#f2f2f2'
//         },
//         '& .MuiSvgIcon-root':{
//             marginRight:'8px'
//         }
//     },
//     btnRoot:{
//         backgroundColor:'green'
//     },
//     btnLabel:{
//         backgroundColor:'red'
//     }
    

// })

export default function Header(){

   
    return(
    <>
        <AppBar  
            sx={{width:['100%',,'calc(100% - 320px)'],ml:['0px',,'320px'],backgroundColor:'aliceblue'}}
            position="absolute"
            elevation={1}
            >
            <Toolbar
            >
            <Grid container alignItems="center">
                <Grid sx={{flex:1}}item >
                    <InputBase 
                    // className={classes.searchInput}
                    placeholder="my search Box"
                    startAdornment={<SearchIcon fontSize="small"/>}
                    />
                </Grid>
                {/* <Grid item sm></Grid> */}
                <Grid item  >
                    <IconButton >
                        <Badge  badgeContent={5} color="primary">
                            <NotificationsNoneIcon />
                        </Badge>
                    </IconButton>
                       <IconButton>
                           <Badge badgeContent={4} color="secondary">
                                <ChatBubbleOutlineIcon/>
                           </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon/>
                        </IconButton>
                </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
        <Toolbar/>
        </>
    )
}