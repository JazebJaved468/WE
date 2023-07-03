function calculate(a,b){
    let add = a + b;
    let subtract = a - b;
    let multiply = a * b ;

    return([add,subtract,multiply]);
}


let res1, res2, res3;
[res1, res2, res3] =calculate(16,10);       // assigning values to array of variables one by one

console.log(res1);
console.log(res2);
console.log(res3);