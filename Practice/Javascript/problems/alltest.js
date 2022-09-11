(function(){

    let names = ['a','b','c','d','e'];
    let slicednames = names.slice(0,-3);
    let slicednames1 = names.slice(2);
    console.log(slicednames); //[ 'a', 'b' ]
    console.log(slicednames1); //[ 'a', 'b' ]

    // let xyz= names.splice(0,3);
    // console.log(xyz); //[ 'a', 'b', 'c' ]
    // console.log(names); //[ 'd', 'e' ]

    names.splice(5,-1,"sushovan","roy");
    console.log(names);
    

})();