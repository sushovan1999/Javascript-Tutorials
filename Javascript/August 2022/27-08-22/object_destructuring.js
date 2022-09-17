(function(){
    let learner = {
        name : "XYZ",
        age: 24,
        location: "Jaipur"
    }

    console.log(learner.age);

    let {name:firstName, age,location,course} = learner; //In object destructuring boyh keys should be matched
    console.log(firstName); // here name:firstname is alias, if we print firstname, o/p = undefined.
    console.log(course);

    let Employee = {
        personal : {
            name:"",
            age:"",
            gender: ""
        },
        identification : {
            aadhar: "",
            pan: ""
        },
        marks : {
            pcm : {
                physics: 70,
                chemistry: 98
            }
        }
    }

    let {marks}=Employee; // in object it doesnot maintain index value it directly map using keys thats why we don't write {,,marks}
    console.log(marks);
    let chem = Employee.marks.pcm.chemistry;
    let physic = Employee.marks.pcm.physics;
    let {marks : {pcm : {chemistry, physics}}} = Employee;
    console.log(chemistry);
    console.log(physics);

})();