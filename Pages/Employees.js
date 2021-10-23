import React,{useState,useEffect} from 'react'
import PageHeader from './../components/pageHeader'
import EmployeesForm from './EmployeesForm'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Input from './../components/Controls/Input'
import SearchIcon from '@mui/icons-material/Search';
import MyButton from './../components/Controls/MyButton'
import AddIcon from '@mui/icons-material/Add';
import MyTable from './../components/Controls/MyTable'
import * as employeeService from './../services/EmployeeService'



export default function Employees(){

    const[records,setRecords]=useState([])
    const[filterFn,setFilterFn]=useState({fn:item=>{
        console.log(item)
        return item
    }})

    useEffect(()=>{
       setRecords(employeeService.getAllEmployees())
    },[])

    //console.log(records)


    const handleSearch=(e)=>{
        let target = e.target
        
        setFilterFn({
            fn:items=>{
                if(target.value==="")
                    return items
                else
                    return items.filter(x=>x.fullName.toLowerCase().includes(target.value))
            }
        })

    }
    return (
        <React.Fragment>
            <PageHeader/>
            <Paper sx={{m:t=>t.spacing(2),p:t=>t.spacing(2)}}>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',p:1}}>
                    <Input
                        label="Search Employees"
                        InputProps={{
                            startAdornment:<SearchIcon sx={{color:t=>t.palette.common.black}}/>
                        }}
                        sx={{width:['60%',,'80%']}}
                        onChange={handleSearch}
                    />
                    <MyButton 
                        text="Add New"
                        startIcon={<AddIcon/>}
                        variant="outlined"
                        sx={{p:1,ml:1}}
                    />
                </Box>
                <EmployeesForm
                    setRecords={setRecords}
                />   
                <MyTable
                    filterFn={filterFn}
                    records={records}
                /> 
            </Paper>            
        </React.Fragment>

    )
}