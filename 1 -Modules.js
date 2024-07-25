//Modules 
// Understanding = modules is a peace of code (minimum value ) , 
//can be used in the file once it is assigned



let sayHI = (name)=>{
    console.log(`say hi to ${name}`);
}

const namess = require(`./example`)
sayHI(namess);
