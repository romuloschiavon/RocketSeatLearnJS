var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('List_ToDos')) || [];

function renderToDos(){ 
    listElement.innerHTML = '';
    
    for (todo of todos)
    {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var brElement = document.createElement('br');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteToDos(' + pos + ')');

        var linkText = document.createTextNode('Delete');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(brElement);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
renderToDos()

function addToDos(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderToDos();
    saveToStorage();
}

buttonElement.onclick = addToDos;

function deleteToDos(pos){
    todos.splice(pos, 1);
    renderToDos();
    saveToStorage();    
}

function saveToStorage(){
    
    
    localStorage.setItem('List_ToDos', JSON.stringify(todos));
}