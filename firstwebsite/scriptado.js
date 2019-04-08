var listElement = document.getElementById("lista");
var buttonElement = document.getElementById("add");
var inputElement = document.getElementById("input_todo");

var todos = JSON.parse(localStorage.getItem("listTodo")) || [];
renderTodos();	

function renderTodos(){
	listElement.innerHTML = '';

	for(todo of todos){
		var todoElement = document.createElement("li");
		var todoText = document.createTextNode(todo);
		var removeButton = document.createElement("a");
		var buttonText = document.createTextNode(" -");
		var pos = todos.indexOf(todo);

		removeButton.setAttribute("onclick", 'deleteTodo(' + pos + ')');
		removeButton.setAttribute("href", "#");
		removeButton.appendChild(buttonText);

		//Adicionando o novo texto no li todoElement
		todoElement.appendChild(todoText);
		todoElement.appendChild(removeButton);
		//Adicionando o li todoElement na ul listElement
		listElement.appendChild(todoElement);
	}
}

function addTodo(){
	var todoText = inputElement.value;
	if(todoText !== ''){
		todos.push(todoText);
		inputElement.value = '';
		renderTodos();
		saveToStorage();
	}
}

function deleteTodo(pos){
	todos.splice(pos, 1);
	renderTodos();
	saveToStorage();
}

function saveToStorage(){
	localStorage.setItem('listTodo', JSON.stringify(todos));
}

buttonElement.onclick = addTodo;

function changeMeme() {
  document.getElementById("memejs").src = "ibagens/pogchamp.png";
}

function changeBack() {
  document.getElementById("memejs").src = "ibagens/resident.png";
}
