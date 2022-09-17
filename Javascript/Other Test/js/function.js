(function(){

    // function checkaadhar(openaccount){
    //     var aadharvalid = apiresponse;
    //     if(aadharvalid) {
    //         openaccount(); //callback
    //     }
    //     else {
    //         console.log("aadhar validation failed");
    //     }
    // }
    // function openaccount() {

    // }
    // function doKYC() {
    //     checkaadhar(openaccount)
    // }

    // hoisting
    // function add(a,b){
    //     return a+b;
    // }
    // var output = add(5,2)
    // console.log(output)

    // function outerfunction(c){
    //     return c;
    // }
    // var add =function(a,b){
    //     return a+b;
    // }
    // var output = outerfunction(add);
    // console.log(output(5,4));
    
    function outerfunction(addfunc){
        //some complex tasks
        var a = 100;
        var b = 50;
        var output = addfunc(a,b); //callback
        console.log(output)
    }
    var add =function(a,b){
        return a+b;
    }
    outerfunction(add);
})(); 