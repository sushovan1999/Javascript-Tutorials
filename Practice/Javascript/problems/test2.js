(function(){
function abbrevName(name){
    let splitarr= name.split(" ")
    let firstletteruppercase= splitarr.map(el => el[0].toUpperCase())
    return firstletteruppercase.join(".")
 }
 console.log(abbrevName("sushovan roy"));
})();