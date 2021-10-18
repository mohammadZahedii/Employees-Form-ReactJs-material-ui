import React,{useEffect,useState} from 'react'
import Grid from '@mui/material/Grid'
// import { TextField } from '@mui/material'
// import Input from './../components/controls/input'
// import MyRadioGroup from './../components/controls/RadioGroup'
import Controls from './../components/controls/Controls'
import * as employeeService from './../Services/EmployeeService'
import MyCheckBox from '../components/controls/Checkbox'
import MyDatePicker from '../components/controls/DatePicker'
import MyButton from './../components/controls/Button'
import Box from '@mui/material/Box'


const genderItems=[
    {id:'male',title:'Male'},
    {id:'female',title:'Female'},
    {id:'other',title:'Other'},
]
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

export default function EmployeesForm(props){

  const{addOrEdit,recordForEdit}=props
  const[values,setValues]=useState(initialValues)
  const[errors,setErrors]=useState({})
  const[validateOnChange,setValidateOnChange]=useState(true)  

    const handleInputChange=e=>{
        console.log(e)
        const {name,value}=e.target  
        setValues({...values,[name]:value})
        if(validateOnChange){
            validate({[name]:value})
        }
        }
    const resetForm=()=>{
        setValues(initialValues)
        setErrors({})
        } 
    const validate=(fieldValues = values)=>{
        let temp ={...errors}
            if('fullName' in fieldValues){
                temp.fullName=fieldValues.fullName?"":"This filed is required"
            }
            if('email' in fieldValues){
                temp.email= (/$^|.+@.+..+/).test(fieldValues.email)?"":"Email is not valid"
            }
            if('mobile' in fieldValues){
                temp.mobile= fieldValues.mobile.length > 9?"":"Minimum 10 number required"
            }
            if('departmentID' in fieldValues){
                temp.departmentID= fieldValues.departmentID.length !== 0 ? "" :"This field is required"
            }

        setErrors({
            ...temp
        })
        
        if(fieldValues === values){
            return Object.values(temp).every(x=>x==="")

        }
        }
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        //validate()
        if(validate()){
        //window.alert('submited!')
            addOrEdit(values,resetForm)
        }
        }

    useEffect(()=>{
        if(recordForEdit!=null){
            setValues({
                ...recordForEdit
            })
        }

    },[recordForEdit])

    return(
        <Box component="form" onSubmit={handleSubmit} sx={{p:3,'& .MuiFormControl-root':{mr:3}}}>
            <Grid container spacing={5} >
                <Grid item xs={6} >
                    <Controls.Input
                        name="fullName"
                        value={values.fullName}
                        label="Full Name"
                        onChange={handleInputChange}
                        error={errors.fullName}
                        
                    />
                    <Controls.Input
                        name="email"
                        value={values.email}
                        label="Email"
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                     <Controls.Input
                        name="mobile"
                        value={values.mobile}
                        label="Mobile"
                        error={errors.mobile}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="city"
                        //error={errors.fullName}
                        value={values.city}
                        label="City"
                        onChange={handleInputChange}
                    />
                    
                    
                </Grid>
                <Grid item xs={6}>
                    <Controls.MyRadioGroup
                        name="gender"
                        value={values.gender}
                        label="Gender"
                        items={genderItems}
                        onChange={handleInputChange}
                    />
                    <Controls.MySelect
                        name="departmentID"
                        label="Department"
                        error={errors.departmentID}
                        value={values.departmentID}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                    
                    />
                    
                        <MyDatePicker
                            label="Hire Date"
                            name="hireDate"
                            value={values.hireDate}
                            onChange={handleInputChange}
                        />
                   
                    <MyCheckBox
                        label="Permanent Employee"
                        name="isPermanent"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    
                    />
                    <Box>
                        <MyButton
                            text="submit"
                            type="submit"
                            sx={{mr:1}}
                        
                        />
                            <MyButton
                            text="Reset"
                            color="inherit"                            
                            onClick={resetForm}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )


}