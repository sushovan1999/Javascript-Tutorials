(function(){

    function findArmstrongno(num){
        let temp = num;
        let sum = 0;       
        while(temp > 0){
           let Reminder = temp % 10;
           sum += (Reminder * Reminder * Reminder);
           temp = parseInt((temp / 10));
        }
        if(sum == num){
            console.log("this is an armstrong no");
        }else {
            console.log("Not an armstrong no");
        }
    }

        console.log((findArmstrongno(153)));
})();