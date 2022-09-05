(function(){

    function PrintAarryNumbers(){
        let numbers = [1,25,84,45,55];
        for(let counter =0; counter < numbers.length; counter++){
            if (numbers[counter] == 25){
            continue;
        }
            console.log(numbers[counter]);
        }
        
    }
    PrintAarryNumbers();
})();