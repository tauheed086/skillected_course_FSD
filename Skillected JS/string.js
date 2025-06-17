// var name = "Tauheed";
// for(var i=0; i<=name.length; i++){
//   console.log(name[i])
// }
// var string1 = "Python"
// var string2 = "Java"
// var string3 = `There's no use of ${string1} and ${string2}`
// console.log(string3)

function pattern1(height) {
  for (let i = 1; i <= height; i++) {
    // number of spaces before the stars
    let spaces = " ".repeat(height - i);
    // number of stars on this row
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

// console.log("Pattern 1:");
// pattern1(5);