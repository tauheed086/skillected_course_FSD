function fetchdata(callback){
  console.log("fetching data...");
  setTimeout(function(){
    console.log("data received");
    callback();
  },2000);
}
function showdata(){
  console.log("now display here...")
}

fetchdata(showdata)

//2

function add(num1,num2,callback){
  let result = num1+num2
  console.log("sum is:"+ result)
  callback();
}
function done(){
  console.log("processing...")
}

add(2,3,done)