// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: 'Broadway',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployees = {...employee}; //make a copy of the employee const

    newEmployees[key] = value; // a mutated value
    return newEmployees;

}
//console.log(updateEmployeeWithKeyAndValue())

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}
//console.log(destructivelyUpdateEmployeeWithKeyAndValue()) //this will appear as undefined since we havent put any real values

function deleteFromEmployeeByKey(employee, key){
    let anotherEmployee = {...employee};//create copy non-destructively

    delete anotherEmployee[key]; // method that deletes an item from your copy ie is non-destructive

    return anotherEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]; //deletes an item from your original ie is destructive

    return employee
}