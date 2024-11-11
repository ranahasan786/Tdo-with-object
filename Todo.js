var idCount = 0;
var todos = [];


function addTodo() {
    var inpVal = document.getElementById('inp');

  
    if (inpVal.value.trim() === "") {
        alert("Please add a Todo task!");
        return;
    }

    todos.push({
        id: idCount,
        title: inpVal.value
    });

    inpVal.value = ""; 
    idCount++; 
    render(); 
}


function render() {
    var todoElem = document.getElementById('todos');
    todoElem.innerHTML = ""; 

    
    for (let i = 0; i < todos.length; i++) {
        var elem = document.createElement('div');
        elem.setAttribute("class", "todo");

        var textElem = document.createElement('p');
        textElem.textContent = todos[i].title;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteTodo(todos[i].id);
        };

        
        var updateButton = document.createElement('button');
        updateButton.textContent = "Update";
        updateButton.onclick = function() {
            updateTodo(todos[i].id);
        };

       
        elem.appendChild(textElem);
        elem.appendChild(deleteButton);
        elem.appendChild(updateButton);
        todoElem.appendChild(elem);
    }
}


function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render(); 
}

function updateTodo(id) {
    var inpVal = document.getElementById('inp');

    
    if (inpVal.value.trim() === "") {
        alert("Updated Todo cannot be empty!");
        return;
    }


    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos[i].title = inpVal.value;
            break;
        }
    }
    inpVal.value = ""; 
    render();
}
