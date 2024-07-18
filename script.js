// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Todo List Array
let todos = [];

// Function to create a new todo item
function addTodo(todoText) {
    const todo = {
        id: Date.now(),
        text: todoText,
    };

    todos.push(todo);
    renderTodo(todo);
}

// Function to render todo items
function renderTodo(todo) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
        <span>${todo.text}</span>
        <div class="actions">
            <button onclick="deleteTodo(${todo.id})">Delete</button>
            <button onclick="updateTodoPrompt(${todo.id}, '${todo.text}')">Update</button>
        </div>
    `;
    todoList.appendChild(todoItem);
}

// Function to delete a todo item
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// Function to update a todo item
function updateTodoPrompt(id, text) {
    const updatedText = prompt('Update todo:', text);
    if (updatedText) {
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.text = updatedText;
            }
            return todo;
        });
        renderTodos();
    }
}

// Function to render all todos
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(renderTodo);
}

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        addTodo(todoText);
        todoInput.value = '';
    }
});

// Initial render
renderTodos();
