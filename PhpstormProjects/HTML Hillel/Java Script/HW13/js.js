let toDoButton = document.getElementById('ToDoButton');
toDoButton.style.background = 'yellow';
toDoButton.style.border = '1px solid orange';
toDoButton.style.borderRadius = '75px';
toDoButton.style.width = '150px';
toDoButton.style.height = '75px';

function ToDo() {
    let List = prompt("Add new point");
    if (List === null){
        return
    }
    let newToDo = document.createElement('li');
    newToDo.innerText = List;
    newToDo.classList.add('newItem');
    document.getElementById('firstToDO').appendChild(newToDo);
    let editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('editButton');
    document.getElementById('firstToDO').appendChild(editButton);
    editButton.style.marginLeft = '10px';
    editButton.onclick = function () {
        let changeItem = prompt("Change the item text", newToDo.innerText);
        if (changeItem !== null) {
            newToDo.innerText = changeItem;
        }
    }
    let removeButton = document.createElement('button');
    removeButton.innerText = 'x';
    removeButton.classList.add('removeButton');
    document.getElementById('firstToDO').appendChild(removeButton);
    removeButton.style.marginLeft = '10px';
    removeButton.style.fontWeight = 'bold';
    removeButton.style.width = 'auto';
    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.appendChild(newToDo);
    container.appendChild(editButton);
    container.appendChild(removeButton);
    document.getElementById('firstToDO').appendChild(container);
    container.style.marginBottom = '10px';
    removeButton.onclick = function () {
        let deleteItem = confirm("Are you sure you want to delete this item?");
        if (deleteItem) {
            let ulElement = document.getElementById('firstToDO');
            ulElement.removeChild(container);
        }
    }
}


