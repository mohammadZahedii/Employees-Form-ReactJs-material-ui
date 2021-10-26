import React,{useState,useEffect} from 'react'
import Input from './../components/Controls/Input'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import MyRadioGroup from '../components/Controls/MyRadioGroup'
import SelectDepartment from '../components/Controls/SelectDepartment'
import MyDatePicker from '../components/Controls/MyDatePicker'
import MyCheckBox from './../components/Controls/MyCheckBox'
import MyButton from '../components/Controls/MyButton'
import * as employeesService from './../services/EmployeeService'

const initialValues={
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentID:'',
    hireDate:new Date(),
    isPermanent:false
}

export const DepartmentCollection=[

    {id:'1',title:'Development'},
    {id:'2',title:'Marketing'},
    {id:'3',title:'Accounting'},
    {id:'4',title:'HR'},
]
const genderItem=[
    {id:'male',title:'Male'},
    {id:'female',title:'Female'},
    {id:'other',title:'Other'},
]

export default function EmployeesForm(props){

    const{setRecords,addOrEdit,recordForEdit,setRecordForEdit}=props

    const[values,setValues]=useState(initialValues)
    const[errors,setErrors]=useState({})


    const handleInputChange=(e)=>{
        const{name,value}=e.target
        setValues({
            ...values,[name]:value
        })
        validate({[name]:value})

    }

        
    const validate=(fieldValues=values)=>{
        let temp={...errors}
        if('fullName' in fieldValues){
             temp.fullName=fieldValues.fullName?"":"This field is required"
        }
        if('email' in fieldValues){
             temp.email=(/$^|.+@.+..+/).test(fieldValues.email)?"":"Email is not valid"
        }
        if('mobile' in fieldValues){
            temp.mobile=fieldValues.mobile.length>9?"":"Minimum 10 number required"
        }
        if('departmentID' in fieldValues){
            temp.departmentID=fieldValues.departmentID.length !== 0 ?"": "This field is required"
        }
        setErrors(temp)
        if(fieldValues === values){
             return Object.values(temp).every(x=>x==="")

        }

    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        if(validate()){
             addOrEdit(values,handleReset)
        }
    }

    const handleReset=()=>{

        setErrors({})
        setValues(initialValues)
    }

    useEffect(()=>{
        if(recordForEdit != null){
            setValues({
                ...recordForEdit
            })

        }
      
    },[recordForEdit])
    return(
        <Box component="form" sx={{p:3}} onSubmit={handleSubmit} >
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                    <Input
                        name="fullName"
                        value={values.fullName}
                        label="Full Name"
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Input
                        name="email"
                        value={values.email}
                        label="Email"
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Input
                        name="mobile"
                        value={values.mobile}
                        label="Mobile"
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Input
                        name="city"
                        value={values.city}
                        label="City"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MyRadioGroup
                        items={genderItem}
                        name="gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        label="Gender"
                    />
                    <SelectDepartment
                        name="departmentID"
                        value={values.departmentID}
                        error={errors.departmentID}
                        label="Department"
                        onChange={handleInputChange}
                        options={DepartmentCollection}
                    />
                    <MyDatePicker
                        label="Hire Date"
                        name="hireDate"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    <MyCheckBox
                        name="isPermanent"
                        value={values.isPermanent}
                        label="Permanent Employee"
                        onChange={handleInputChange}
                    />
                    <Box>
                        <MyButton
                            text="Submit"
                            type="submit"
                            sx={{mr:1}}
                            
                        />
                        <MyButton
                            text="Reset"
                            color="inherit"
                            onClick={handleReset}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}