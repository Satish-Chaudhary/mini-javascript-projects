// let btn = document.getElementById("Add");
let input = document.getElementById("input-field");
let item_list = document.getElementById("task-list");

function addtask(){
    if (input.value === '') {
        alert('you must write something!');
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        item_list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    savedata();
};
item_list.addEventListener("click",(e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data", item_list.innerHTML);
}
function showTask(){
    item_list.innerHTML = localStorage.getItem("data");
}
showTask();