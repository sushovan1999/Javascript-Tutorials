// function areYouPlaying(name) {
//   if (name[0] === 'R' || name[0] === 'r') {
//     return `${name} plays banjo`;
//   } else {
//     return `${name} does not play banjo`;
//   }
// }
// areYouPlaying("adam");
function SeriesSum(n) {
  let result = 0;
  let reverage = 1;
  for (let i = 0; i < n; i += 1) {
    if (i === 0) {
      result = 1;
    } else {
      reverage += 3;
      result = result + (1 / reverage);
    }
  }
  return result.toFixed(2);
};
console.log(SeriesSum(3));