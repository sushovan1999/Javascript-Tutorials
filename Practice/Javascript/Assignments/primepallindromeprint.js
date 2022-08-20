(function(){

    function isPalindrome(n){
        let reverse = 0;
        for (let i = n; parseInt(i) > 0; i /= 10)
        {
            reverse = ((reverse*10) + (parseInt(i)%10));
            
            }
            return(n==reverse);
         
    }

    function isPrime(i) {
        let counter = 2;
        let prime = true;
        while(counter < i/2) {
            if(i % counter == 0){
                prime = false;
                break;
            }

            counter++;
        }

        return prime;
    }
    function printPrimePalintherange(startfrom, endwith)
    {
        for (let i = startfrom; i <=endwith; i++)
        {
            if(isPalindrome(i) && isPrime(i))
            console.log(i)
        }
    }
    
    
    console.log(printPrimePalintherange(1, 50));
})();

