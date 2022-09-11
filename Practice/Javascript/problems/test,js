(function(){
    // function persistence(num) {
    //     let str = num.toString();
    //     if (str.length === 1) {
    //       return 0;
    //     }
    //    let nextNum = str.split('').reduce((a, b) => a * b, 1);
    //     return 1 + persistence(nextNum);
    //   }

    //   function persistence(num) {
    //     if (num.toString().length === 1) {
    //       return 0;
    //     }
    //     var mult = 1;
    //     var splitStr = num.toString().split("");
    //     for (var i = 0; i < splitStr.length; i++) {
    //       mult *= parseFloat(splitStr[i])
    //     }
    //     return 1 + persistence(parseFloat(mult));
    //   }
    function persistence(num) {
      let mul = num;
      let counter = 0;
      let res = 1;
      if (num.toString().length < 2) {
        return 0;
      } else {
        while (mul.toString().length >= 2) {
          s = "" + mul;
          for (u of s) {
            res *= parseInt(u);
          }
          counter++;
          mul = res;
          res = 1;
          if (mul.toString().length < 2) {
            return counter;
          }
        }
      }
    }
    
      
      console.log(
        persistence(999),
        persistence(39),
        persistence(4)
      );
})();