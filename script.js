const template = document.querySelector("template");
const toDo = document.querySelector(".todo-list");
const input = document.querySelector(".input-text")

// let taskArray = [
//     {
//         id: "0",
//         title: "my task",
//         dateCreated: "14010510",        
//         isDone: true
//     },
//     {
//         id: "1",
//         title: "my second task",
//         dateCreated: "14010510",        
//         isDone: false
//     }
// ]

let taskCount = 0;
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
       taskCreator();
    }
});

function taskCreator () {
    const clone = template.content.cloneNode(true);
    const taskText = clone.querySelector(".p-class");
    const item = clone.querySelector(".item")
    taskText.textContent = document.querySelector(".input-text").value;
    console.log("tasktest: ",taskText);

    item.id = "task"+taskCount
    taskCount++;

    console.log(clone);
    toDo.appendChild(clone);
}

function doneCheck (e) {
    let itemClicked = e.srcElement || e.target;
    document.querySelector("#"+itemClicked.id).classList.add("item-done")        
    // let isDone = true;
    // if (isDone) {
    //     let isDone = false;        
    // } else {
    //     let isDone = true;
    // }
    // console.log(isDone);
    // if (isDone) {
    // } else {
    //     document.querySelector("#"+itemClicked.id).classList.remove("item-done")        
    // }
}
