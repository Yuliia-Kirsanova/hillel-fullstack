let todoList = [];

function showModalForm() {
    document.getElementById('form-modal').classList.add('d-block');
}

function hideModalForm() {
    document.getElementById('form-modal').classList.remove('d-block');
}

function init() {
    const storedTodoList = localStorage.getItem('todo');
    if (storedTodoList){
        todoList = JSON.parse(storedTodoList);
        todoList.forEach((item) => createHtmlTodoItem(item));
    }

}

function create() {
    document.getElementById('form-title').value = '';
    document.getElementById('form-uuid').value = '';
    document.getElementById('form-description').value = '';

    showModalForm()
}

function edit(uuid) {
    const title = document.getElementById(`title-${uuid}`).innerText;
    const description = document.getElementById(`description-${uuid}`).innerText;

    document.getElementById('form-title').value = title;
    document.getElementById('form-uuid').value = uuid;
    document.getElementById('form-description').value = description;
    showModalForm()
}

function remove(uuid) {
    const decision = confirm('Are you sure?');
    if (decision) {
        todoList = todoList.filter(item => item.uuid !== uuid);
        localStorage.setItem('todo', JSON.stringify(todoList));
        const itemToRemove = document.getElementById(`item-${uuid}`);
        if (itemToRemove) {
            itemToRemove.remove();
        }
    }
}

function save(data) {
    if (!data.uuid) {
        data.uuid = generateUuid();
    }
    let index = todoList.findIndex((item) => item.uuid === data.uuid);
    if (index === -1) {
        todoList.push(data);
        createHtmlTodoItem(data);
    }
    else {
        todoList[index] = data;
        editHtmlTodoItem(data);
    }

    localStorage.setItem('todo', JSON.stringify(todoList));
}

function createHtmlTodoItem(data) {
    let liElement = document.createElement('li');
    liElement.id = `item-${data.uuid}`;
    liElement.innerHTML = `
    <div id="title-${data.uuid}">${data.title}</div>
    <div id="description-${data.uuid}">${data.description}</div>
    <div>
        <button data-uuid="${data.uuid}" class="btn btn-warning btn-sm edit-button">Edit</button>
        <button data-uuid="${data.uuid}" class="btn btn-danger btn-sm remove-button">Remove</button>
    </div>`
    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    liElement.querySelector('.edit-button').addEventListener('click', function (event) {
        edit(event.target.dataset.uuid);
    })
    liElement.querySelector('.remove-button').addEventListener('click', function (event) {
        remove(event.target.dataset.uuid);
    })
    document.getElementById('todo').appendChild(liElement);
}

function editHtmlTodoItem(data) {
    const editedLi = document.getElementById(`item-${data.uuid}`);
    if (editedLi) {
        editedLi.querySelector(`#title-${data.uuid}`).innerText = data.title;
        editedLi.querySelector(`#description-${data.uuid}`).innerText = data.description;
    }
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('form-title').value;
    const uuid = document.getElementById('form-uuid').value;
    const description = document.getElementById('form-description').value;
    const data = {
        uuid,
        title,
        description,
    };
    if (validateForm(data)) {
        save(data);
        hideModalForm();
    }
})

function validateForm(data) {
    clearErrors();

    let decision = true;

    if (!data.title) {
        document.getElementById('form-title-invalid-feedback').innerText = 'Title field is required.';
        document.getElementById('form-title').classList.add('is-invalid');
        decision = false;
    } else if (data.title.length > 255) {
        document.getElementById('form-title-invalid-feedback').innerText = 'Title field must contain less than 255 characters.';
        document.getElementById('form-title').classList.add('is-invalid');
        decision = false;
    } else if (!data.title.trim()) {
        document.getElementById('form-title-invalid-feedback').innerText = 'Title field cannot consist only of spaces.';
        document.getElementById('form-title').classList.add('is-invalid');
        decision = false;
    } else if (!data.description.trim()) {
        document.getElementById('form-description-invalid-feedback').innerText = 'Description field cannot consist only of spaces.';
        document.getElementById('form-description').classList.add('is-invalid');
        decision = false;
    } else if (data.description.innerHTML) {
        data.description = data.description.innerText;
    }
    return decision;

}

function clearErrors() {
    document.getElementById('form-title').classList.remove('is-invalid');
}

function generateUuid() {
    return Math.random().toString(16).slice(2);
}

init();
