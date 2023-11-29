import './style.css';

/* definitions */
let projectList = [];
const projectContainer = document.querySelector('.projectcontainer');

/* factories */
function createProject(name) {
    name = name;
    let todoList = [];

    const addTodo = (name, complete, description, date, priority) => {
        todoList.push(createTodo(name, complete, description, date, priority));
    };

    return { name, todoList, addTodo };
};

function createTodo(name, complete, description, date, priority) {
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
    storageSet();
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

function storageSet() {
    if (!storageAvailable('localStorage')) {
        console.log('Local storage unavailable.');
    } else {
        console.log('Setting local storage.');
        localStorage.setItem('projectList', JSON.stringify(projectList));
    };
}

function storageGet() {
    if (!storageAvailable('localStorage')) {
        console.log('Local storage unavailable.');
    } else if (localStorage.getItem('projectList')) {
        console.log('Getting local storage.');
        let gotProjectList = JSON.parse(localStorage.getItem('projectList'));
        // recreate project list from got project list to preserve methods
        projectList = [];
        for (let projectIndex = 0; projectIndex < gotProjectList.length; projectIndex++) {
            // create project
            projectList.push(createProject(gotProjectList[projectIndex].name));
            for (let todoIndex = 0; todoIndex < gotProjectList[projectIndex].todoList.length; todoIndex++) {
                // create todo
                projectList[projectIndex].todoList.push(createTodo(
                    gotProjectList[projectIndex].todoList[todoIndex].name,
                    gotProjectList[projectIndex].todoList[todoIndex].complete,
                    gotProjectList[projectIndex].todoList[todoIndex].description,
                    gotProjectList[projectIndex].todoList[todoIndex].date,
                    gotProjectList[projectIndex].todoList[todoIndex].priority
                ));
            }
        }
    };
}


/* tests */
projectList.push(createProject('goo'));
projectList[0].addTodo('baa', false, 'description', '2023-11-28');
projectList.push(createProject('boo'));
projectList[1].addTodo('baa', true, 'description', '2023-11-28');
projectList[1].addTodo('baa', true, 'description', '2023-11-28');
projectList[1].addTodo('baa', true, 'description', '2023-11-28');

storageGet();
domUpdate();