//Modules 
// Understanding = modules is a peace of code (minimum value ) , 
//can be used in the file once it is assigned
//to import from another file use "const <variable> = require('filename')
//to export use "module.export ={variavle name}";


console.log("hello");

const letter = require('./2modules.js');
console.log(letter);