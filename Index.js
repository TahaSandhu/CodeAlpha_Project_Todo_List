const data = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

// this function add task  
function addTask(){
    if(data.value === ''){
        alert("Please enter a something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=data.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML='\u00d7';
        liElement.appendChild(span)
    }
    data.value='';
    saveData();
}

// create a event to check the task 
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
          e.target.parentElement.remove();
          saveData();
    }
}, false);

// 
function saveData(){
     localStorage.setItem("data", listcontainer.innerHTML);
}

function showData(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showData();