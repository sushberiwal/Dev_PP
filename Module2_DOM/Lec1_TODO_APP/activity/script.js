let todoInput = document.querySelector(".todo-input"); // todo input
let addTodoButton = document.querySelector(".add-todo"); // add todo button
let todosList = document.querySelector(".todos-list"); // empty ul

addTodoButton.addEventListener("click" , function(){
    let todo = todoInput.value;
    // "" , 0 , false , undefined
    if(todo){
        let listItem = document.createElement("li"); // it creates a element
        listItem.classList.add("todo-item"); // it adds class to a element
        // <li class="todo-item"></li>;

        let pTag = document.createElement("p");
        pTag.classList.add("todo");
        pTag.innerHTML = todo;
        // <p class="todo">Learn HTML !!!</p>

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.innerHTML = "DELETE";
        // <button class="delete-task">DELETE</button>

        listItem.append(pTag);
        listItem.append(deleteButton);

        todosList.append(listItem);
        todoInput.value = "";
    }
});

// todoInput.addEventListener("keypress" , function(e){
//     if(e.key == "Enter"){
//         console.log("Enter pressed !!!");
//     }
// });

{/* <li>
    <p class="todo"></p>
    <button class="delete-task">DELETE</button>
</li> */}






