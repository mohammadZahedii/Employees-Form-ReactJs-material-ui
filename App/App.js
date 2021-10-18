import React from 'react'
import SideMenu from '../components/SideMenu'
import Box from '@mui/material/Box'
import Header from '../components/Header'
import { CssBaseline } from '@mui/material'
import {createTheme,ThemeProvider} from '@mui/material/styles' 
import Employees from '../Pages/Employees'


const theme =createTheme({

    palette:{
        primary:{
            main:"#333996",
            light:"#3c44b126"
        },
        secondary:{
            main:"#f83245",
            light:"#f8324526"
        },
        background:{
            default:"#f4f5fd"
        },
    
    },
    shape:{
        borderRadius:'4px'
    },
    components:{
        MuiFormControl:{
            styleOverrides:{
                root:{
                    width:'100%'
                }
            }
        },
        MuiInputBase:{
            styleOverrides:{
                root:{
                    color:'blue',
                    opacity:'0.6',
                    padding:'0px 8px',
                    '&:hover':{
                        backgroundColor:'#f2f2f2'
                    },
                    '& .MuiSvgIcon-root':{
                        marginRight:'8px'
                    }
                }
            }
         
        },
        MuiSnackbar:{
            styleOverrides:{
                anchorOriginTopRight:{
                    position:'fixed',
                    bottom:'480px',

                }
            }
        },
        MuiDialog:{
            styleOverrides:{
                paper:{
                    padding:'16px',
                    position:'absolute',
                    top:'40px'
                }
            }
        },
        MuiIconButton:{
            defaultProps:{
                disableRipple:true
            }
        }
    }
    
})

export default function App(){

    return(
        <ThemeProvider theme={theme}>
            <SideMenu />
            <Header/>
            <Box sx={{ml:['0px','0px','320px'],width:['100%',,'calc(100% - 320px)']}}>
                <Employees/>
            </Box>
            <CssBaseline/>
        </ThemeProvider>
    )
}
