// var e_commerce={
//     product : ["earphone","earbuds","earpod"],
//     quantity : [4,1,2],
//     price : [100,50,200],
//     total_price:function() {
//         var sum=0;
//         for (var i=0;i<this.quantity.length;i++){
//             sum = sum+this.quantity[i]*this.price[i];
//         }
//         console.log("total_price", sum)
//     }   
// }
// e_commerce.total_price();


//2

var amazon = [
    {name: "speaker", price: 10000, rating: 2},
    {name: "cooker", price: 1000, rating: 5},
    {name: "playstation", price: 20000, rating: 4},
    {name: "sony", price: 10099, rating: 2.8},
    {name: "walkman", price: 1040, rating: 3},
]
// for (var i=0;i<amazon.length; i++){
//     if(amazon[i].name === "sony"){
//         console.log(amazon[i])
//     }
// }

for(var i =0; i<amazon.length; i++){
    if (amazon[i].price>=10000){
        console.log(amazon[i])
    }
}