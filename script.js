let template = document.querySelector("template");
let toDo = document.querySelector(".todo-list")

// console.log(input);

let input = document.querySelector(".input-text")

// const item = clone.querySelector(".title");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        // event.preventDefault();
        const clone = template.content.cloneNode(true);
        const taskText = clone.querySelector(".p-class");
        taskText.textContent = document.querySelector(".input-text").value;
        console.log("tasktest: ",taskText);

        console.log(clone);
        toDo.appendChild(clone);
    }
});

