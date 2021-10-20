import React,{useState} from 'react'
import Input from './../components/Controls/Input'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import MyRadioGroup from '../components/Controls/MyRadioGroup'
import SelectDepartment from '../components/Controls/SelectDepartment'
import MyDatePicker from '../components/Controls/MyDatePicker'
import MyCheckBox from './../components/Controls/MyCheckBox'
import MyButton from '../components/Controls/MyButton'


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

const DepartmentCollection=[

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

export default function EmployeesForm(){


    const[values,setValues]=useState(initialValues)
    
    const handleInputChange=(e)=>{
        const{name,value}=e.target
        setValues({
            ...values,[name]:value
        })

    }


    return(
        <Box component="form" sx={{p:3}} >
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                    <Input
                        name="fullName"
                        value={values.fullName}
                        label="Full Name"
                        onChange={handleInputChange}
                    />
                    <Input
                        name="email"
                        value={values.email}
                        label="Email"
                        onChange={handleInputChange}
                    />
                    <Input
                        name="mobile"
                        value={values.mobile}
                        label="Mobile"
                        onChange={handleInputChange}
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
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}