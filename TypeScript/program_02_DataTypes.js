// Datatypes
//  => number
//  => string
//  => boolean
//  => any
//  => enum
// Homogeneous Arrays
var arr = ["Utkarsh", " Mayank", "Sandhya", "Sunder"];
console.log(arr);
console.log(arr.length);
// console is an inbuild object and log is the function in thata inbuild oobject.
// Heterogenous Array
var arr1 = [123, "raj", false, { name: "Utkarsh" }];
console.log(arr1);
//alert, confirm, prompt => similar to javascript
// ENUM is a class with keyword "enum" which is collection of constant values.
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male); //it will return the index values
console.log(Gender.Female);
console.log(Gender[0]); //it will return the values
console.log(Gender[1]);
// UNION TYPE => Here we make use if the pipe symbil
var sn; //now the variable "sn" can hold both string and number datatypes.
sn = "Utkarsh";
sn = 10;
console.log(sn);
function doubleMe(x) {
    if (typeof (x) === "number") {
        console.log(x * 2);
    }
    else if (typeof (x) === "string") {
        console.log(x + " " + x);
    }
}
// ARROW FUNCTION
var doubleNum = function (num) { return num * 2; };
var hello = function (name) {
    return "Hello ".concat(name, ".");
};
console.log(hello("Utkarsh"));
// ARRAY OF ARROW FUNCTIONS
var arr1 = [];
for (var i = 0; i < 10; i++) {
    arr1.push(function () { return i; });
}
for (var i = 0; i < 10; i++) {
    console.log(arr1[i]());
}
