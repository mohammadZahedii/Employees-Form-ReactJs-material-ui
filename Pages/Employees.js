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
import MyPopUp from '../components/Controls/MyPopUp'


export default function Employees(){

    const[records,setRecords]=useState([])
    const[filterFn,setFilterFn]=useState({fn:item=>{
        console.log(item)
        return item
    }})
    const[openPopUp,setOpenPopUp]=useState(false)

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

    const addOrEdit=(employees,resetForm)=>{
        employeeService.SetEmployees(employees)
        resetForm()
        setOpenPopUp(false)
        setRecords(employeeService.getAllEmployees())



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
                        onClick={()=>setOpenPopUp(true)}
                    />
                </Box>
            
                <MyTable
                    filterFn={filterFn}
                    records={records}
                /> 
            </Paper> 
            <MyPopUp
                    title="Employee Form"
                    openPopUp={openPopUp}
                    setOpenPopUp={setOpenPopUp}
                >
                    <EmployeesForm
                        setRecords={setRecords}
                        addOrEdit={addOrEdit}
                    />
                </MyPopUp>           
        </React.Fragment>

    )
}