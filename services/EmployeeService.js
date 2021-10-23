import{DepartmentCollection} from './../Pages/EmployeesForm'

const KEYS={
    employees:'employees',
    employeeId:'employeeId'
}

// const DepartmentCollection=[

//     {id:'1',title:'Development'},
//     {id:'2',title:'Marketing'},
//     {id:'3',title:'Accounting'},
//     {id:'4',title:'HR'},
// ]

export const SetEmployees=(data)=>{
    let employees = getAllEmployees()
        data['id']=generateEmployeeId()
        employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))

}

export const getAllEmployees=()=>{

    if(localStorage.getItem(KEYS.employees)==null)
        localStorage.setItem(KEYS.employees,JSON.stringify([]))

        
   let employees = JSON.parse(localStorage.getItem(KEYS.employees))
   let department=DepartmentCollection
    return employees.map(x=>({
        ...x,
        department:department[x.departmentID-1].title

    }))
}

export const generateEmployeeId=(params)=>{
  if(localStorage.getItem(KEYS.employeeId)==null){
      localStorage.setItem(KEYS.employeeId,'0')
  }
  let id = parseInt(localStorage.getItem(KEYS.employeeId))
        localStorage.setItem(KEYS.employeeId,(id+=1).toString())
        return id
}   