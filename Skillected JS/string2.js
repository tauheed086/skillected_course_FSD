var str = "Hello World";
console.log(str);

var arr = [];
for(var i =0; i<=str.length; i++){
  arr.push(str[i]);
}
console.log(arr);

arr[0] = "a";
arr[1] = "b";
console.log(arr)
var bag = ""
for(var i = 0; i<=arr.length; i++){
  bag = bag+arr[i];
}
console.log(bag);


var arr1 = ["Nobita", "naina", "Nirav", "dharmesh", "omkar", "niyati", "Neeraj"];

console.log(arr1);
var count = 0;
for(var i = 0; i<arr1.length; i++){
  var name = arr1[i];
  if(name[0]=="N" || name[0]=="n"){
    console.log(name)
    count++;
  }
}
console.log("In arr the name starting with n or N is:", count)
// var names = ["Nobita", "naina", "Nirav", "dharmesh", "omkar", "niyati", "Neeraj"];
// console.log(names);
// var count = 0;
// for(var i=0; i<names.length; i++){
//   var name = names[i];
//   if(name[0] == "N" || name[0] == "n"){
//     count++;
//   }
// }
// console.log("In arr the name starting with n or N is:", count)