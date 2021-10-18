
const KEYS={

    employees:'employees',
    employeeId:'employeeId'

}
export const getDepartmentCollection=()=>{

    return[
    
        {id:'1',title:'Development'},
        {id:'2',title:'Marketing'},
        {id:'3',title:'Accounting'},
        {id:'4',title:'HR'},
    ]

}

export const insertEmployee=(data)=>{
    let employees = getAllEmployees()
    data['id']=generateEmployeeId()
    employees.push(data)

    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export const updateEmployees=(data)=>{
    let employees = getAllEmployees()
    let recordIndex = employees.findIndex(x=>x.id == data.id)
    employees[recordIndex]={...data}
        localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export const deleteEmployees=(id)=>{
    console.log(id)
    let employees =getAllEmployees()
    employees = employees.filter(x=>x.id != id)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}
export const getAllEmployees=()=>{
    if(localStorage.getItem(KEYS.employees)==null){
        localStorage.setItem(KEYS.employees,JSON.stringify([]))
    }
    let employees = JSON.parse(localStorage.getItem(KEYS.employees))
    let departments =getDepartmentCollection();
    return employees.map(x=>({
        ...x,
        department:departments[x.departmentID-1].title
    }))
    
    

}

export function generateEmployeeId(params){
    if(localStorage.getItem(KEYS.employeeId)==null){
        localStorage.setItem(KEYS.employeeId,'0')
    }
    let id =parseInt(localStorage.getItem(KEYS.employeeId))
        localStorage.setItem(KEYS.employeeId,(id+=1).toString())
        return id


}