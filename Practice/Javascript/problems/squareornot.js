(function(){
    
function squareOrSquareRoot(array) {
    let newelements = [];
    for (let i = 0; i < array.length; i++){
        let initial = array[i];
        let sqrt = Math.sqrt(initial);
      if (Number.isInteger(sqrt) == true){
        newelements.push(sqrt)
      } else if(Number.isInteger(sqrt) == false) {
        newelements.push(initial*initial);
      }
    }
    return newelements;  
  }

      let a =[ 4, 3, 9, 7, 2, 1]
      console.log(squareOrSquareRoot(a));
})();