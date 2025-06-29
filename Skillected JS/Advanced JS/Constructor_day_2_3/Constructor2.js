
let arr = JSON.parse(localStorage.getItem("product1"))||[];



function product(n,c,i,p,g){
    this.name = n;
    this.category = c;
    this.image = i;
    this.price = p;
    this.gender = g;
}


function products(e){
    e.preventDefault();
    let form = document.getElementById("add");
    let name = form.name.value;
    let category = form.category.value;
    let image = form.image.value;
    let price = form.price.value;
    let gender = form.gender.value;

    let p1 = new product(name,category,image,price,gender)

    arr.push(p1)
    console.log("arr",arr)

    localStorage.setItem("product1",JSON.stringify(arr))
    form.reset()
}