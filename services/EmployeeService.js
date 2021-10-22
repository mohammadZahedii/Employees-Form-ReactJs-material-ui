

const KEYS={
    employees:'employees',
    employeeId:'employeeId'
}


export const SetEmployees=(data)=>{
    let employees = getAllEmployees()
        data['id']=generateEmployeeId()
        employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))

}

export const getAllEmployees=()=>{

    if(localStorage.getItem(KEYS.employees)==null)
        localStorage.setItem(KEYS.employees,JSON.stringify([]))
   return JSON.parse(localStorage.getItem(KEYS.employees))
}

export const generateEmployeeId=(params)=>{
  if(localStorage.getItem(KEYS.employeeId)==null){
      localStorage.setItem(KEYS.employeeId,'0')
  }
  let id = parseInt(localStorage.getItem(KEYS.employeeId))
        localStorage.setItem(KEYS.employeeId,(id+=1).toString())
        return id
}   