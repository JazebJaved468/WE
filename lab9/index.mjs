// Task 1
import { Circle, Cylinder } from "./circle.mjs";


// Circle Object
console.log("\n\n------------Circle Data------------")
let small_circle = new Circle(6,7,8);
small_circle.showData();
small_circle.area();

// Cylinder Object
console.log("\n\n------------Cylinder Data------------")
let small_cyl = new Cylinder(5,4,3,3);
small_cyl.showData();
small_cyl.volume();


// Task 2
import { Employee }  from "./employee.mjs";
import { PartTimeEmployee, PermanentEmployee } from "./sub_employees.mjs";

console.log("\n\n------------Normal Employee Details------------")
let emp = new Employee("jazeb", 30, "karachi", 120000, "manager");
emp.empDetails();

console.log("\n\n------------Peramnent Employee Details------------")
let permEmp = new PermanentEmployee("jazeb", 30, "karachi", 120000, "manager", 30000);
permEmp.empDetails();

console.log("\n\n------------Part Time Employee Details------------")
let partTimeEmp = new PartTimeEmployee("jazeb", 30, "karachi", 120000, "manager", 4);
partTimeEmp.empDetails();
