import React,{useState,useEffect} from 'react'
import EmployeesForm from './EmployeesForm'
import PageHeader from './../components/PageHeader'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Paper from '@mui/material/Paper'
import MyTable from './../components/controls/MyTable'
import * as employeeService from './../Services/EmployeeService'
import { InputAdornment } from '@mui/material';
import Controls from '../components/controls/Controls';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box'
import MyPopUp from '../components/controls/Popup';
import Notification from '../components/controls/Notification';
import ConfirmDialog from '../components/controls/ConfirmDialog';


const headCells=[
    {id:'fullName',label:'Employee Name'},
    {id:'email',label:'Email Address (Personal)'},
    {id:'mobile',label:'Mobile Number'},
    {id:'department',label:'Department'},
    {id:'actions',label:'Actions',disableSorting:true}
]


export default function Employees(){

    
    const[records,setRecords]=useState([])
    const[filterFn,setFilterFn]=useState({fn:items=> items})
    const[openPopup,setOpenPopUp]=useState(false)
    const[recordForEdit,setRecordForEdit]=useState(null)
    const[notify,setNotify]=useState({isOpen:false,message:'',type:''})
    const[confirmDialog,setConfirmDialog]=useState({
        isOpen:false,
        title:'',
        subtitle:''
    })

    useEffect(()=>{
        setRecords(employeeService.getAllEmployees())
    },[])
 

    const handleSearch = e =>{
        let target =e.target
        
        setFilterFn({
            fn:items=>{
                console.log(items)
                if(target.value === "")
                    return items
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            
                
                }
        })
    

    }

    const addOrEdit=(employees,resetForm)=>{
        if(employees.id == 0){
            employeeService.insertEmployee(employees)
            resetForm()
            setOpenPopUp(false) 
            setRecords(employeeService.getAllEmployees())
        }else{
            employeeService.updateEmployees(employees)
            resetForm()
            setRecordForEdit(null)
            setOpenPopUp(false) 
            setRecords(employeeService.getAllEmployees())
            setNotify({
                isOpen:true,
                message:'Submitted succesfully',
                type:'success'
            })
        }
       

    }

    const openInPopUp=(item)=>{
        setRecordForEdit(item)
        setOpenPopUp(true)
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
                message:' Deleted Successfully',
                type:'error'
            }) 
    
  
    }
    return(
        <React.Fragment>

                <PageHeader
                    title="New Employees"
                    subtitle="Form design with validation"
                    icon={<PeopleAltIcon fontSize="large"/>}
                />
                <Paper sx={{m:t=>t.spacing(5),p:t=>t.spacing(3)}}>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <Controls.Input
                            label="Search Employees"
                            InputProps={{
                                startAdornment:<InputAdornment sx={{color:t=>t.palette.common.black}} position="start">
                                    <SearchIcon/>
                                </InputAdornment>
                            }}
                            sx={{width:'80%'}}
                            onChange={handleSearch}
                        
                        />
                        <Controls.MyButton
                            text="Add New"
                            variant="outlined"
                            startIcon={<AddIcon/>}
                            size="normal"
                            onClick={()=>{setOpenPopUp(true);setRecordForEdit(null)}}
                        
                        />
                    </Box>
                    <MyTable
                        openInPopUp={openInPopUp}
                        confirmDialog={confirmDialog}
                        setConfirmDialog={setConfirmDialog}
                        onDelete={onDelete}
                        headCells={headCells}
                        filterFn={filterFn}
                        records={records}
                    />
                </Paper>
                <MyPopUp
                    title="Employee Form"
                    openPopup={openPopup}
                    setOpenPopUp={setOpenPopUp}
                >
                    <EmployeesForm
                        recordForEdit={recordForEdit}
                        addOrEdit={addOrEdit}
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