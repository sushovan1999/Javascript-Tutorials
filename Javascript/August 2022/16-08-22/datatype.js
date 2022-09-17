(function() {
//NUmber
// Explicit data type
 var empid = new Number(123456);
 console.log(empid);
 // Implicit data type
 var empage = 33; //defined empage as a number variable
 console.log(typeof(empid));
 console.log(typeof(empage));
 //JS is a loosely typed language
 empage = "45";// u redefined as a string variable
 console.log(typeof(empage));
 //string
 let empname = "sushovan";
 console.log(typeof(empname));

 let empaddress=  String("wb");
 console.log(typeof(empaddress));
 // boolean
 let isempmarried = true;
 console.log(typeof(isempmarried));

 let isempindian = Boolean(false);
 console.log(typeof(isempindian));
 // undefined
 var empstatus;
 console.log(typeof(empstatus));

 // null (it releases memory)
 var emppassportapplicationstatus = null;
 console.log(typeof(emppassportapplicationstatus));

 //function
    var calculateempsalary = function() {
        //some logic
    }
    console.log(typeof(calculateempsalary));

// object
    var employee = {}; //empty object
    console.log(typeof(employee));

    employee = "vijay"
    console.log(typeof(employee));
    


})() //IIFE