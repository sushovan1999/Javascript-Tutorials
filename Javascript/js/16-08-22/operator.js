(function() {
 // assignment operator (= , +=, -=, *=, /=)

 let empname = "sushovan";
 let age = 23;
 let salary = 1000;
 let currentsalary = 2000;
//  salary = salary + currentsalary;
    salary += currentsalary; //shortversion
    


 // comparison operators
 // >,>=, <, <=, ==, !=
 console.log(age>=23);//true
 console.log(age != 34); //true
 console.log(age == 23); //true(this is value check)
 // strict type check for equality(=== , !==)
 console.log(age === "23"); //false becoz value check and also type check

 //logical operators
 // &&(and) , ||(or) ,!(nor)
 //&& - both conditions are true
 console.log(empname == "sushovan" && age == 23); //true
 console.log(empname == "vijay" && age == 23); // false
 // || - atleast one condition should be true
 console.log(empname == "sushovan" || age == 23); //true
 console.log(empname == "vijay" || age == 23); //true
// ! nor operator
console.log(!(empname = "sushovan")); //false

//increment and decrement operator
let counter = 0;
// ++var means 1st print and then increment
console.log("counter =" + counter++);
console.log(counter);

//another version var++ means increment 1st and then print
console.log(++counter);
// same is for decrement

//ternary operator (?(if) | :(else))
let isempover30 = age > 30 ? true : false;
console.log(isempover30);



})()