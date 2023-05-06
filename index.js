// Write your solution in this file!
const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value ){
  const updatedEmployee = {...employee};
  updatedEmployee[key] = value ;
  return updatedEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee , key , value ){
  employee[key] = value;
  return employee;
}
// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'medet'))


function deleteFromEmployeeByKey(employee, key){
  const employeeClone = {...employee};
  delete employeeClone[key];
  return employeeClone
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee
}