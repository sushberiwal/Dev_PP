let todoInput = document.querySelector(".todo-input"); // todo input
let addTodoButton = document.querySelector(".add-todo"); // add todo button
let todosList = document.querySelector(".todos-list"); // empty ul

function addTodo(){
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

        deleteButton.addEventListener("click" , function(event){
            console.log("delete todo clicked !!!");
            console.log(event);
            event.target.parentNode.remove();
        })

        listItem.append(pTag);
        listItem.append(deleteButton);
        todosList.append(listItem);
        todoInput.value = "";
    }else{
        alert("You Haven't Entered Any Todo !!!");
    }
}

addTodoButton.addEventListener("click" , function(){
    addTodo()
});

todoInput.addEventListener("keypress" , function(e){
    if(e.key == "Enter"){
        addTodo();
    }
});






