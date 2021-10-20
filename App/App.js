import React from 'react'
import SideMenu from '../components/SideMenu'
import { CssBaseline } from '@mui/material'
import {createTheme,ThemeProvider} from '@mui/material/styles'
import Header from '../components/Header'

const theme =createTheme({
    palette:{
        primary:{
            main:'#333996',
            light:'#A2D2FF',
        },
        secondary:{
            main:'#f83245',
            light:'#EB596E'
        },
        background:{
            default:'#f4f5fd'
        },
      
    },
    shape:{
        borderRadius:'4px'
    },
  
    components:{
        MuiInputBase:{
            styleOverrides:{
                root:{
                    color:'#333996',
                    backgroundColor:'#E8F6EF',
                    opacity:'0.6',
                    padding:'0 8px',
                    borderRadius:'4px',
                    '&:hover':{
                        backgroundColor:'#f2f2f2'
                    },
                    '& .MuiSvgIcon-root':{
                        marginRight:'8px'
                    }
                }
            }
        }
    }
})

export default function App(){

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <SideMenu />
            <Header/>
        </ThemeProvider>
    )
}
