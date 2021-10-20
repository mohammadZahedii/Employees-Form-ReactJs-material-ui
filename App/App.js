import React from 'react'
import SideMenu from '../components/SideMenu'
import { CssBaseline } from '@mui/material'
import {createTheme,ThemeProvider} from '@mui/material/styles'
import Header from '../components/Header'
import Box from '@mui/material/Box'
import Employees from '../Pages/Employees'



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
        borderRadius:4
    },
  
    components:{
        MuiInputBase:{
            styleOverrides:{
                root:{
                    color:'#333996',
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
        },
        MuiFormControl:{
            styleOverrides:{
                root:{
                    width:'100%'
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
            <Box
                sx={{
                    width:['100%',,'calc(100% - 320px)'],
                    ml:[,,'320px']
                }}
            >
                <Employees />
            </Box>
        </ThemeProvider>
    )
}
