(function(){

    function isPalindrome(n){
        let reverse = 0;
        for (let i = n; parseInt(i) > 0; i /= 10)
        {
            reverse = ((reverse*10) + (parseInt(i)%10));
            
            }
            return(n==reverse);
         
    }
    function printPalintherange(startfrom, endwith)
    {
        for (let i = startfrom; i <=endwith; i++)
        {
            if(isPalindrome(i))
            console.log(i)
        }
    }
    
    
    console.log(printPalintherange(1, 50));
    
})();
