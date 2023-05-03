var input = document.getElementById("addTask");
var list = document.getElementById("tareas");
var empty = document.querySelector("empty");

function addTask(){
    let li = document.createElement("li");
    li.innerHTML =input.value;
    if(input.value == ''){
        alert("Debes agregar algo a la lista");
    }
    else{      
        li.appendChild(remove());
        list.appendChild(li);
    }
    input.value = "";
}

function remove(){
    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "✖";
    deleteBtn.addEventListener('click', (e) =>{
        const item = e.target.parentElement;
        list.removeChild(item);
    })
    return deleteBtn;
}

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("addBtn").click();
        input.value = "";
    }
});