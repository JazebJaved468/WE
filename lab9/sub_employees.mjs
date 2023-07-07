
import { Employee } from "./employee.mjs";

class PermanentEmployee extends Employee{
    constructor(name, emp_num, address, salary, designation, bonus){
        super(name, emp_num, address, salary, designation);
        this.bonus = bonus;
    }    
    empDetails(){
        super.empDetails();
        console.log(`Employee Bonus : ${this.bonus}`);
    }
}

class PartTimeEmployee extends Employee{
    constructor(name, emp_num, address, salary, designation, hours){
        super(name, emp_num, address, salary, designation);
        this.hours = hours;
    }   
    empDetails(){
        super.empDetails();
        console.log(`Employee Hours : ${this.hours}`);
    }
}


export {PartTimeEmployee, PermanentEmployee};