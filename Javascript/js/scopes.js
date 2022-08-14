(function(){
    // console.log(a);
    var b = 10; //outside add function(global scope)

    function innerfunction(){       //functional scope
        var a = 5;      //inside add function

        if (true) {     //block scope
            var m = 20; // if we use "let m = 20;" we got an error bcoz let keyword follows block scoping and var doesnot follow block scoping
            console.log("m =" + m);
        }
        console.log("outside block =" + m);
        console.log("add function a =" + a);
        console.log("add function b =" + b);
        
    }
    //Global Function
    innerfunction();
    console.log("Globally b = " + b);
    console.log("Globally a = " + a);
    

})();