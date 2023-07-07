class Employee {
    constructor(name, emp_num, address, salary, designation) {
      this.name = name;
      this.emp_num = emp_num;
      this.address = address;
      this.salary = salary;
      this.designation = designation;
    }

    empDetails(){
        console.log(`Employee Name : ${this.name}`);
        console.log(`Employee Number : ${this.emp_num}`);
        console.log(`Employee Address : ${this.address}`);
        console.log(`Employee Salary : ${this.salary}`);
        console.log(`Employee Designation : ${this.designation}`);
    }
}

export {Employee};