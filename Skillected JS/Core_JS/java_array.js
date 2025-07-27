/*
Different Array()
push():
pop():
shift():
unshift():
indexOf():
includes():
reverse():
sort():
*/


let a = ["rohit","sid","mad","max","manish", "manoj"];

// a.push("tauheed");
// // a.pop()
// console.log(a);
// console.log(a.length);
// // a.pop();
// // console.log(a)
// // console.log(a.length);

// a.unshift("kaif");
// console.log(a)
// console.log(a.length)

// a.shift();
// console.log(a);
// console.log(a.length);

// console.log(a.indexOf("tauheed"));
// console.log(a.reverse());
// console.log(a.sort());
// console.log(a.includes("tauheed"));
// console.log(a.includes("rohit"));


var newa = a.slice()
console.log(newa);

a.splice(2,1,"khisi", "meow")
console.log(a);

let b = [1,2,3]
console.log(typeof(a));
let j = a.concat(b);
console.log(j);
console.log(typeof(j));
