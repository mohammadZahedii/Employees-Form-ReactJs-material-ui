import React from 'react'
import PageHeader from './../components/pageHeader'
import EmployeesForm from './EmployeesForm'
import Paper from '@mui/material/Paper'


export default function Employees(){

    return (
        <React.Fragment>
            <PageHeader/>
            <Paper sx={{m:t=>t.spacing(2),p:t=>t.spacing(2)}}>
                <EmployeesForm/>    
            </Paper>            
        </React.Fragment>

    )
}