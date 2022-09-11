(function(){
// function getEqual(testArray) {
//     for (let i = 0; i < testArray.length; i++) {
//       let startSum = getSum(testArray.slice(0, i));
//       let endSum = getSum(testArray.slice(i + 1));
  
//       if (startSum === endSum) {
//         return i;
//       }
//     }
  
//     return -1;
//   }
  
//   function getSum(array) {
//     return array.reduce((accum, elem) => { return accum += elem }, 0);
//   }

//   // console.log(getEqual([1,100,50,-51,1,1]));
//   console.log(getEqual([20,10,30,10,10,15,35]));
function findEvenIndex(arr)
{
  let left = 0;
  let right = arr.reduce((s,n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}
// console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([20,10,30,10,10,15,35]));
})();
