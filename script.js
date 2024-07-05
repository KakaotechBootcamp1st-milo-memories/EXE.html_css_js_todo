document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form'); 
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        if (input.value.trim() === '') return;


        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.addEventListener('change', toggleComplete);

        const span = document.createElement('span');
        span.textContent = input.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '삭제';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', deleteTodo);

        const li = document.createElement('li');
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        input.value = '';
    }

    function toggleComplete(e) {
        e.target.closest('li').classList.toggle('completed');
    }

    function deleteTodo(e) {
        e.target.closest('li').remove();
    }
});