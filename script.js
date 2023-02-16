const template = document.querySelector("template");
const toDo = document.querySelector(".todo-list");
const input = document.querySelector(".input-text")
let taskModel = {
    id: "0",
    title: "my task",
    dateCreated: "14010510",        
    isDone: true
};
let taskArray = []
let taskCount = taskArray.length;
readLocal()
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        taskCreator();
        document.querySelector(".input-text").value = "";
    }
});

function taskCreator () {
        
    const clone = template.content.cloneNode(true);
    const taskText = clone.querySelector(".p-class");
    const item = clone.querySelector(".item")
    taskText.textContent = document.querySelector(".input-text").value;
    item.id = "task"+taskCount
        

    //task array is filling here ->
    taskModelClone = {...taskModel}
    taskModelClone.id = taskCount;
    taskModelClone.title = taskText.textContent; 
    taskModelClone.dateCreated = new Date(); 
    taskModelClone.isDone = false; 
    
    taskArray.push(taskModelClone);
    console.log(taskArray);
    
    taskCount++;

    toDo.appendChild(clone);
    
    writeLocal();

}

function doneCheck (e) {
    let itemClicked = e.srcElement || e.target;
    console.log(itemClicked.id);
    let taskId = itemClicked.id.replace("task",""); 
    console.log(taskId);
    if (!taskArray[taskId].isDone) {
        document.querySelector("#"+itemClicked.id).classList.add("item-done")
        taskArray[taskId].isDone = true;
    } else {
        document.querySelector("#"+itemClicked.id).classList.remove("item-done")
        taskArray[taskId].isDone = false;
    }
    console.log(taskArray[taskId]);
    writeLocal();
    
}

function writeLocal() {
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    console.log("writeLocal...");
}

function readLocal() {
    taskArray = JSON.parse(localStorage.getItem("tasks") || "[]");
    for (let i = 0; i < taskArray.length; i++) {
        const clone = template.content.cloneNode(true);
        const taskText = clone.querySelector(".p-class");
        const item = clone.querySelector(".item")
        taskText.textContent = taskArray[i].title;
        item.id = "task"+taskCount
        taskCount++;
        toDo.appendChild(clone);
        
        if (taskArray[i].isDone) {
            document.querySelector("#task"+i).classList.add("item-done")
            taskArray[i].isDone = true;
        } else {
            document.querySelector("#task"+i).classList.remove("item-done")
            taskArray[i].isDone = false;
        }
    }
    console.log(taskArray);

}

// localStorage.clear()