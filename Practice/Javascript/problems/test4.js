function scramble(str1, str2) {
    var first; //longer string
    var second; //shorter string
  
    if(str1 || str2 === "undefined") {
      return false;
    }
  
    if(str1.length > str2.length) {
      first = str1;
      second = str2
    } else if(str2.length > str1.length) {
      first = str2;
      second = str1;
    }
  
    for (i=0; i<second.length; i++) {
      if (first.indexOf(second[i]) === -1) {
        return false;
      }
    }
  
    return true;
  
  }
  console.log(scramble('jscripts','javascript'));