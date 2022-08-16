(function() {
    // variables and constants
    const conpanyname = "XYZ corporation"
    // companyname = "ABC corporation" //error
    // let and var -changes
    // let follows block scoping and var follows functional scoping
    // let variables are not hoisted while var variables are hoisted
    // cannot redeclare let keywords but var can be redeclared
    var empid = 12345;
    let salary = 10000;
    console.log(empid);
    console.log(salary);
    var empid = 3456; //redeclaring
    console.log(empid); //3456
    // let salary = 10000; //error
    
})() //IIFE