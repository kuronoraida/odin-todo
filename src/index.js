import './style.css';

/* definitions */
let projectList = [];
const projectContainer = document.querySelector('.projectcontainer');

/* factories */
function createProject(name) {
    console.log('creating project');

    name = name;
    let todoList = [];

    const addTodo = (name, complete, description, date, priority) => {
        todoList.push(createTodo(name, complete, description, date, priority));
    };

    return { name, todoList, addTodo };
};

function createTodo(name, complete, description, date, priority) {
    console.log('creating todo');

    name = name;
    complete = complete;
    description = description;
    date = date;
    priority = priority;


    return { name, complete, description, date, priority };
};

/* functions */
function domUpdate() {
    projectContainer.innerHTML = '';
    for (const project of projectList) {
        // add project
        let projectElement = document.createElement('div');
        projectElement.classList.add('project');

        let nameElement = document.createElement('div');
        nameElement.classList.add('name');
        nameElement.innerHTML = project.name;
        nameElement.setAttribute('contenteditable', 'true');
        nameElement.addEventListener('input', (e) => project.name = e.target.textContent);
        projectElement.appendChild(nameElement);

        let projectDeleteButton = document.createElement('button');
        projectDeleteButton.classList.add('delete');
        projectDeleteButton.innerHTML = 'X';
        projectDeleteButton.addEventListener('click', () => {
            projectList = projectList.filter((e) => e !== project);
            domUpdate();
        });
        projectElement.appendChild(projectDeleteButton);

        projectContainer.appendChild(projectElement);

        for (const todo of project.todoList) {
            // add todo
            let todoElement = document.createElement('div');
            todoElement.classList.add('todo');

            let nameElement = document.createElement('div');
            nameElement.classList.add('name');
            nameElement.innerHTML = todo.name;
            nameElement.setAttribute('contenteditable', 'true');
            nameElement.addEventListener('input', (e) => todo.name = e.target.textContent);
            todoElement.appendChild(nameElement);

            let completeElement = document.createElement('input');
            completeElement.setAttribute('type', 'checkbox');
            completeElement.classList.add('complete');
            completeElement.checked = todo.complete;
            completeElement.addEventListener('input', (e) => todo.complete = e.target.checked);
            todoElement.appendChild(completeElement);

            let descriptionElement = document.createElement('div');
            descriptionElement.classList.add('description');
            descriptionElement.innerHTML = todo.description;
            descriptionElement.setAttribute('contenteditable', 'true');
            descriptionElement.addEventListener('input', (e) => todo.description = e.target.textContent);
            todoElement.appendChild(descriptionElement);

            let dateElement = document.createElement('input');
            dateElement.setAttribute('type', 'date');
            dateElement.classList.add('date');
            dateElement.value = todo.date;
            dateElement.addEventListener('input', (e) => todo.date = e.target.value);
            todoElement.appendChild(dateElement);

            let priorityGreenElement = document.createElement('button');
            priorityGreenElement.classList.add('priority', 'green');
            priorityGreenElement.addEventListener('click', (e) => todo.priority = 'green');
            todoElement.appendChild(priorityGreenElement);
            let priorityYellowElement = document.createElement('button');
            priorityYellowElement.classList.add('priority', 'yellow');
            priorityYellowElement.addEventListener('click', (e) => todo.priority = 'yellow');
            todoElement.appendChild(priorityYellowElement);
            let priorityRedElement = document.createElement('button');
            priorityRedElement.classList.add('priority', 'red');
            priorityRedElement.addEventListener('click', (e) => todo.priority = 'red');
            todoElement.appendChild(priorityRedElement);

            let todoDeleteButton = document.createElement('button');
            todoDeleteButton.classList.add('delete');
            todoDeleteButton.innerHTML = 'X';
            todoDeleteButton.addEventListener('click', () => {
                project.todoList = project.todoList.filter((e) => e !== todo);
                domUpdate();
            });
            todoElement.appendChild(todoDeleteButton);

            projectElement.appendChild(todoElement);
        }
        // add new todo button
        let newTodoButton = document.createElement('button');
        newTodoButton.classList.add('new');
        newTodoButton.innerHTML = '+';
        newTodoButton.addEventListener('click', () => {
            project.addTodo('New todo', false, 'Description', '2023-11-28');
            domUpdate();
        })
        projectElement.appendChild(newTodoButton);
    }
    // add new project button
    let newProjectButton = document.createElement('button');
    newProjectButton.classList.add('new');
    newProjectButton.innerHTML = '+';
    newProjectButton.addEventListener('click', () => {
        projectList.push(createProject('New project'));
        domUpdate();
    })
    projectContainer.appendChild(newProjectButton);
}

/* tests */
projectList.push(createProject('goo'));
projectList[0].addTodo('baa', false, 'description', '2023-11-28');
projectList.push(createProject('boo'));
projectList[1].addTodo('baa', true, 'description', '2023-11-28');
projectList[1].addTodo('baa', true, 'description', '2023-11-28');
projectList[1].addTodo('baa', true, 'description', '2023-11-28');
console.log(projectList);

domUpdate();