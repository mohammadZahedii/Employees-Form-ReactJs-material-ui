import React from 'react'
import SideMenu from '../components/SideMenu'
import { CssBaseline } from '@mui/material'
import {createTheme,ThemeProvider} from '@mui/material/styles'


const theme =createTheme({
    palette:{
        primary:{
            main:'#333996',
            light:'#77ACF1',
        },
        secondary:{
            main:'#f83245',
            light:'#EB596E'
        },
        background:{
            default:'#f4f5fd'
        },
    }
})

export default function App(){

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <SideMenu />
        </ThemeProvider>
    )
}
