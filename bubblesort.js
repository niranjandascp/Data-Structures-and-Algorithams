// let arr = [5, 3, 8, 4, 2];

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }
// console.log(arr); 


let arr = [5,3,8,4,2]

for (let i = 0 ; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
    }
  }
}
console.log(arr)