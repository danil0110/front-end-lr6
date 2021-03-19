const inputField = document.querySelector('form input'),
      addBtn = document.querySelector('form button'),
      todoList = document.querySelector('.todo-list');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!inputField.value) {
        alert('Не указано название задачи!');
    } else {
        todoList.innerHTML += `
            <li class="todo-item">
                <div>
                    <div class="check"></div>
                    <span class="todo-text">${inputField.value}</span>
                </div>
                <button class="delete-item">
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        `;

        // const newItem = document.createElement('li'),
        //       div = document.createElement('div'),
        //       check = document.createElement('div'),
        //       todoText = document.createElement('span'),
        //       deleteBtn = document.createElement('button'),
        //       icon = document.createElement('i');

        // newItem.classList.add('todo-item');
        // check.classList.add('check');
        // todoText.classList.add('todo-text');
        // todoText.textContent = inputField.value;
        // deleteBtn.classList.add('delete-item');
        // icon.classList.add('fas', 'fa-trash');
        
        // div.append(check);
        // div.append(todoText);
        // deleteBtn.append(icon);
        // newItem.append(div);
        // newItem.append(deleteBtn);

        // deleteBtn.addEventListener('click', () => {
        //     deleteBtn.parentNode.remove(); 
        // });

        // todoList.append(newItem);

        inputField.value = '';
    }
});

todoList.addEventListener('click', (e) => {
    const elem = e.target;
    if (elem.classList.contains('delete-item')) {
        elem.parentNode.remove();
    } else if (elem.tagName == 'I') {
        elem.parentNode.parentNode.remove();
    }
});

todoList.addEventListener('click', (e) => {
    const elem = e.target;
    if (elem.classList.contains('check')) {
        elem.classList.toggle('completed');
    };
});