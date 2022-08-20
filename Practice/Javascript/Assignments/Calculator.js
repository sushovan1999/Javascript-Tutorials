(function(){

    function add(a,b) {
        console.log(a+b);
        return add;
    }
    function sub(a,b) {
        console.log(a-b);
        return sub;
    }
    function multiply(a,b) {
        console.log(a*b);
        return multiply;
    }
    function div(a,b) {
        console.log(a/b);
        return div;
    }
    console.log(add(50,100));
    console.log(sub(500,100));
    console.log(multiply(50,10));
    console.log(div(1000,100));
})();