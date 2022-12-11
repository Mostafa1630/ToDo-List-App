//Setting Up Varibles
let theInput = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".taskes-content");
let taskCount = document.querySelector(".task-count span");
let taskCompleted = document.querySelector(".task-completed span");

//[1]Foucs on The Input Filed
window.onload = function(){
    theInput.focus();
}

//[2]Adding The Task
addButton.onclick = function (){
    //If The Input Empty
    if(theInput.value === ""){
        // console.log("no-value");
        Swal.fire('No Tasks To Show');
    }else{
        let notMessage = document.querySelector(".no-task-messege");

        if(document.body.contains(document.querySelector(".no-task-messege"))){
            //Remove No Task
            notMessage.remove();
        }
        //Create Span Element
        let mainSpan = document.createElement("span");
        //Create Delete Button
        let deleteButton = document.createElement("span");
        //Add Text To Span
        let addText = document.createTextNode(theInput.value);
        //Add Text To Delete Button
        let deleteText = document.createTextNode("Delete");
        //Add Text To Span 
        mainSpan.appendChild(addText);
        //Add Class To Span
        mainSpan.className = "task-box";
        //Add Text To Delete Button 
        deleteButton.appendChild(deleteText);
        //Add Class To Delete Button
        deleteButton.className = "delete";
        //Add Delete Button To Main Span
        mainSpan.appendChild(deleteButton);
        //Add Main Span To Main
        tasksContainer.appendChild(mainSpan);
        //To Remove Main Input
        theInput.value = "";
        //After To Focus New
        theInput.focus();
        //CalcuTasks
        calculateTask();
    }
};

document.addEventListener("click" , function (e) {
    //Delete Task
    if(e.target.className == "delete"){
        //Remove Current Task
        e.target.parentNode.remove();
        //Check Count Of ContainerBox 
        if(tasksContainer.childElementCount == 0){
            createNoTasks();
        }
    }

    //Finished Task
    if(e.target.classList.contains("task-box")){
        //Toggle Class Finished
        e.target.classList.toggle("finished")
    }
    //CalcuTasks
    calculateTask();
});

//Funtion To Show No Tasks
function createNoTasks(){
    //create Message Span Element
    let msgSpan = document.createElement("span");
    //create Message Text To Span Element
    let msgText = document.createTextNode("No Tasks To Show");
    //Add Text To Span
    msgSpan.appendChild(msgText);
    //Add Class To Message Span
    msgSpan.className = "no-task-messege";
    //Append Message Span To ContainerBox
    tasksContainer.appendChild(msgSpan);
}

//Function CalculateTask
function calculateTask(){
    //Calculate All Tasks
    taskCount.innerHTML = document.querySelectorAll(".taskes-content .task-box").length;
    //Calculate Completed Tasks
    taskCompleted.innerHTML = document.querySelectorAll(".taskes-content .finished").length;
}