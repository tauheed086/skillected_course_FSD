//1
function greet(name){
  
  return function(){
    console.log(`hi ${name}`)
  }
}

const greetname = greet("tauheed")
greetname()

//2

function outer(){
  let count = 0;

  return function(){
    count++
    console.log(count)
  }
}

const createcounter = outer();
createcounter();
createcounter();
createcounter();
createcounter();

//3
function outer1(){
  let count = 4

  function inner(){
    console.log(`count is: ${count}`)
  }
  return inner;
}
const closeFunc = outer1();
closeFunc();

//4
function delay(name){
  setTimeout(function(){
    console.log(`hi ${name}`)
  }, 2000);
}
delay("tauheed")

function outer(){
  let count = 0;
  return function(){
    count++;
    console.log(count);
  }
}

const counter = outer()
counter();
counter();

