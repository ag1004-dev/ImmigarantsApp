var listElement = document.getElementById("lista");
var buttonElement = document.getElementById("add");
var inputElement = document.getElementById("input_todo");

var todos = [
];

function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        //Adicionando o novo texto no li todoElement
        todoElement.appendChild(todoText);
        //Adicionando o li todoElement na ul listElement
        listElement.appendChild(todoElement);
    }
}

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

function changeMeme() {
    document.getElementById("memejs").src = "ibagens/pogchamp.png";
}

function changeBack() {
    document.getElementById("memejs").src = "ibagens/resident.png";
}
