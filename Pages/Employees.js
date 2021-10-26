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
import Notification from './../components/Controls/Notification'
import ConfirmDialog from '../components/Controls/ConfirmDialog'



export default function Employees(){

    const[records,setRecords]=useState([])
    const[filterFn,setFilterFn]=useState({fn:item=>{
        return item
    }})
    const[openPopUp,setOpenPopUp]=useState(false)
    const[notify,setNotify]=useState({    
        isOpen:false,
        message:'',
        type:''})

    const[recordForEdit,setRecordForEdit]=useState(null)
    const[confirmDialog,setConfirmDialog]=useState({
        isOpen:false,
        title:'Are you sure to delete this records?',
        subtitle:"You can't undo this operation",
    })


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
        if(employees.id == 0){
            employeeService.SetEmployees(employees)
            resetForm()
            setOpenPopUp(false)
            setRecords(employeeService.getAllEmployees())
            setNotify({
                isOpen:true,
                message:'successfully submited',
                type:'success'
            })

        }else{
        employeeService.updateEmployees(employees)
        resetForm()
        setOpenPopUp(false)
        setRecords(employeeService.getAllEmployees())
        setNotify({
            isOpen:true,
            message:'succusfully Edited',
            type:'success'
        })
    }


    }
    const openInPopUp=(item)=>{
        setOpenPopUp(true)
        setRecordForEdit(item)


    }

    const onDelete=(id)=>{
        setConfirmDialog({
            ...confirmDialog,
            isOpen:false
        })
        employeeService.deleteEmployees(id)
        setRecords(employeeService.getAllEmployees())
        setNotify({
            isOpen:true,
            message:'Deleted successfully',
            type:'error'
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
                        onClick={()=>setOpenPopUp(true)}
                    />
                </Box>
            
                <MyTable
                    filterFn={filterFn}
                    records={records}
                    openInPopUp={openInPopUp}
                    confirmDialog={confirmDialog}
                    setConfirmDialog={setConfirmDialog}
                    onDelete={onDelete}
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
                        recordForEdit={recordForEdit}
                        setRecordForEdit={setRecordForEdit}
                    />
                </MyPopUp>
                <Notification
                    notify={notify}
                    setNotify={setNotify}
                
                />
                <ConfirmDialog
                    confirmDialog={confirmDialog}
                    setConfirmDialog={setConfirmDialog}
                
                />
        </React.Fragment>

    )
}