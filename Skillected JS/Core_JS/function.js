// // // function add(a,b){
// //   var a = 2;
// //   var b = 9;
// //   var sum = a+b;
// //   console.log(sum)
// //   // return sum;
// // // }
// // // var out = add(1,1);
// // // console.log(out)

// function oddeven(a) {
//   if (a % 2 === 0) {
//     // console.log("even")
//     return "even";
//   } else {
//     // console.log("odd")
//     return "odd";
//   }
// }

// // oddeven(9);
// var out = oddeven(2)
// console.log(out)

// var out2 = oddeven(4)
// console.log(out2)

function primeornot(a){
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return "not prime";
    }
  }
  return "prime";
}

// Example usage:
console.log(primeornot(13)); // Output: "prime"
console.log(primeornot(20)); // Output: "not prime"
console.log(primeornot(2));  // Output: "prime"
console.log(primeornot(1));  // Output: "not prime"