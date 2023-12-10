const data = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');


function addTask(){
    if(data.value === ''){
        alert("Please enter a something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=data.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    data.value='';
    // saveData();
}


listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // saveData();
    }
    else if(e.target.tagName === "SPAN"){
          e.target.parentElement.remove();
        //   saveData();
    }
}, false);

//  if you want to store data  than remove commment part
// function saveData(){
//      localStorage.setItem("data", listcontainer.innerHTML);
// }

// function showData(){
//     listcontainer.innerHTML = localStorage.getItem("data");
// }
// showData();