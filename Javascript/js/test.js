// let sum = 0;
// for (let i = 0, j = 0; i < 5 & j < 5; ++i, j = i + 1)
// sum += i;
// console.log(sum);
// let x = 2;
// let y = 0;
// for ( ; y < 10; ++y)
// {
// if (y % x == 0)
// continue;
// else if (y == 8)
// break;
// else
// console.log(y + " ");
// }
// const a=10,b=20;
// while(a<b)
// {
// console.log("Hello");
// }
// console.log("World");
// let a = 5;
// let b = 10;
// first:
// {
// second:
// {
// third:
// {
// if (a == b >> 1)
// break second;
// }
// console.log(a);
// }
// console.log(b);
// }
// let var1 = 5;
// let var2 = 6;
// let var3;
// var3 = ++ var2 * var1 / var2 + var2;
// console.log(var3);
function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    }
    var array = [];

    for(var i = 0; i < input.length; i++) {
        if(input[i] <= 0) {
            array[1] += input[i];
      } else {
            array[0] += 1;
      }
    }
    return array;
}
let input =[1,2,3,5,6,-1,-2,-3,-4]
console.log(countPositivesSumNegatives(input));