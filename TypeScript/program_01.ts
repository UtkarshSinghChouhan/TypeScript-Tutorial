function addNumber(num1 : number,  num2 : number) : number{
    return num1 + num2;
}

let sum : number = addNumber(10, 20);

console.log(`Sum of the two number is ${sum}.`);



// Steps required for compilation:

// Step - 01 => tsc filename.ts         //it will generate a javscript file.

// Step - 02 => node filename.js