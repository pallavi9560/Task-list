const newTodoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTodo() {
    const newTodoText = newTodoInput.value.trim(); 

    if (newTodoText === '') {
        
        newTodoInput.style.borderColor = 'red';
        newTodoInput.setAttribute('placeholder', 'Please enter a task');
        newTodoInput.focus();
        return;
    }

   
    newTodoInput.style.borderColor = '';
    newTodoInput.setAttribute('placeholder', '');

    newTodoInput.value = '';

   
    const listItem = document.createElement('li');
    const completeCheckbox = document.createElement('input');
    const todoText = document.createElement('span');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    
    completeCheckbox.type = 'checkbox';
    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';

  
    listItem.appendChild(completeCheckbox);
    listItem.appendChild(todoText);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    
    todoText.textContent = newTodoText;

    
    todoList.appendChild(listItem);

    
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    
    editBtn.addEventListener('click', function() {
        if (editBtn.textContent === 'Save') {
            todoText.textContent = todoText.querySelector('input').value;
            editBtn.textContent = 'Edit';
        } else {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = todoText.textContent;
            todoText.textContent = '';
            todoText.appendChild(input);
            input.style.width = 'calc(100% - 20px)'; 
            editBtn.textContent = 'Save';
        }
    });
}

addBtn.addEventListener('click', addTodo);


newTodoInput.addEventListener('input', function() {
    newTodoInput.style.borderColor = '';
});
