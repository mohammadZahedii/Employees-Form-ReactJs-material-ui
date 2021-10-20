import React from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import Grid from '@mui/material/Grid'
import { InputBase } from '@mui/material'
import { Badge } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box'

export default function Header(){

    return (
        <AppBar 
        
        position="absolute"
            sx={{
                backgroundColor:t=>t.palette.primary.light,
                width:['100%','100%','calc(100% - 320px)'],
            }}
        >
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item sx={{flex:1}}>
                        <InputBase
                            placeholder="my search box"
                            startAdornment={<SearchIcon fontSize="small"/>}
                            endAdornment={<Box 
                            sx={{
                                boxShadow:1,
                                fontSize:'12px',
                                px:'3px',
                                bgcolor:'#E8F6EF',
                                mt:'1px'
                            }}
                            
                            >Ctrl+K</Box>}
                        />
                    </Grid>
                    <Grid item >
                        <IconButton>
                            <Badge badgeContent={5} color="primary">
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
    )

}