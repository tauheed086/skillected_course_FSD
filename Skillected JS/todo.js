document.querySelector("#todoForm").addEventListener("submit", myfunction);
var todolist = JSON.parse(localStorage.getItem("todo3"))||[];



function myfunction(event) {
    event.preventDefault();
    var name = document.querySelector("#itemName").value;
    var quantity = document.querySelector("#quantity").value;
    var profile = document.querySelector("#profile").value;
    var todoObj = {
        itemName:name,
        itemQty:quantity,
        itemProfile:profile
    } 
    todolist.push(todoObj);

    localStorage.setItem("todo3", JSON.stringify(todolist));
    loadtodos();
    event.target.reset();
}
console.log(todolist)

function loadtodos(){
    document.querySelector("tbody").innerHTML="";


    todolist.forEach((todo,index)=>{
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText=todo.itemName;

        var td2 = document.createElement("td");
        td2.innerText=todo.itemQty;

        var td3 = document.createElement("td");
        var img = document.createElement("img");
        img.style.width="100px";
        img.style.height="100px";
        img.style.borderRadius="50%";
        img.src = todo.itemProfile;
        td3.append(img);

        var td4 = document.createElement("td");
        var delBtn = document.createElement("button");
        delBtn.className = "delete-btn";
        delBtn.innerText="Delete";
        delBtn.addEventListener("click", ()=>deletetodos(index));
        td4.append(delBtn);

        tr.append(td1,td2,td3,td4);

        document.querySelector("tbody").append(tr);
    })
}

function deletetodos(index){
    todolist.splice(index,1);
    localStorage.setItem("todo3",JSON.stringify(todolist));
    loadtodos();
}

loadtodos();