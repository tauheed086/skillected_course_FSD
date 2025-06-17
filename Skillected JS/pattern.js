// 1.
console.log("Output 1:")

var n=5;
for(var i=1; i<=n; i++){
  var str ="";
  for(var j=1; j<=n-i; j++){
    str= str+" ";
  }

  for(k=1; k<=2*i-1; k++){
    str= str+"*";
  }
  console.log(str);
}

//2.

console.log("Output 2:")

var n=5;
for(var i=1; i<=n; i++){
  var a="";
  for(var j=1; j<=n; j++){
    if(i==1 || i==n || j==1 || j==n){
      a=a+"*";
    }else{
      a = a+" ";
    }
  }
  console.log(a);
}

console.log("3:")
for(var a =1; a<=5; a++){
  var b ="";
  for(var c=1; c<=a; c++){
    b= b+c+" ";
  }
  console.log(b);
}
//lower pyramid;
for(var a=4; a>=1; a--){
  var b ="";
  for(var c=1; c<=a; c++){
    b=b+c+" ";
  }
  console.log(b);
}


console.log("4:")

for(var a=1; a<=4; a++){
  console.log("*")
}
var b = "";
for(var c=1; c<=5;c++){
  b += "* ";
}
console.log(b.trim());
