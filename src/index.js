import './style.css';
import { arrayMoveMutable } from 'array-move';
import imageTrash from './img/trash-can.svg'
import imagePlus from './img/plus-thick.svg'
import imageUp from './img/arrow-up-bold.svg'
import imageDown from './img/arrow-down-bold.svg'


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
function today() {
    return new Date().toJSON().slice(0, 10);
}

function domUpdate() {
    projectContainer.innerHTML = '';
    for (const project of projectList) {
        // add project
        let projectElement = document.createElement('div');
        projectElement.classList.add('project');

        let buttonBox = document.createElement('div');
        buttonBox.classList.add('titlebox');
        projectElement.appendChild(buttonBox);

        let nameElement = document.createElement('div');
        nameElement.classList.add('name');
        nameElement.innerHTML = project.name;
        nameElement.setAttribute('contenteditable', 'true');
        nameElement.addEventListener('input', (e) => project.name = e.target.textContent);
        nameElement.oninput = (() => storageSet());
        buttonBox.appendChild(nameElement);

        let projectDeleteButton = document.createElement('button');
        projectDeleteButton.classList.add('deleteproject');
        projectDeleteButton.innerHTML = '<img class="icon" src="' + imageTrash +'">';
        projectDeleteButton.addEventListener('click', () => {
            if (window.confirm('Really delete?')) {
                projectList = projectList.filter((e) => e !== project);
                domUpdate();
            }
        });
        buttonBox.appendChild(projectDeleteButton);

        projectContainer.appendChild(projectElement);

        for (const todo of project.todoList) {
            // add todo
            let todoElement = document.createElement('div');
            todoElement.classList.add('todo');
            todoElement.classList.add(todo.priority);
            if (todo.complete) {
                todoElement.classList.add('complete');
            }

            let nameElement = document.createElement('div');
            nameElement.classList.add('name');
            nameElement.innerHTML = todo.name;
            nameElement.setAttribute('contenteditable', 'true');
            nameElement.addEventListener('input', (e) => todo.name = e.target.textContent);
            nameElement.oninput = (() => storageSet());
            todoElement.appendChild(nameElement);

            let descriptionElement = document.createElement('div');
            descriptionElement.classList.add('description');
            descriptionElement.innerHTML = todo.description;
            descriptionElement.setAttribute('contenteditable', 'true');
            descriptionElement.addEventListener('input', (e) => todo.description = e.target.textContent);
            descriptionElement.oninput = (() => storageSet());
            todoElement.appendChild(descriptionElement);

            let buttonBox = document.createElement('div');
            buttonBox.classList.add('buttonbox');
            todoElement.appendChild(buttonBox);

            let priorityGreenElement = document.createElement('button');
            priorityGreenElement.classList.add('priority', 'green');
            priorityGreenElement.addEventListener('click', (e) => {
                todo.priority = 'green';
                e.target.parentElement.parentElement.classList.replace('yellow', 'green');
                e.target.parentElement.parentElement.classList.replace('red', 'green');
                storageSet();
            });
            buttonBox.appendChild(priorityGreenElement);

            let priorityYellowElement = document.createElement('button');
            priorityYellowElement.classList.add('priority', 'yellow');
            priorityYellowElement.addEventListener('click', (e) => {
                todo.priority = 'yellow';
                e.target.parentElement.parentElement.classList.replace('green', 'yellow');
                e.target.parentElement.parentElement.classList.replace('red', 'yellow');
                storageSet();
            });
            priorityYellowElement.oninput = (() => storageSet());
            buttonBox.appendChild(priorityYellowElement);

            let priorityRedElement = document.createElement('button');
            priorityRedElement.classList.add('priority', 'red');
            priorityRedElement.addEventListener('click', (e) => {
                todo.priority = 'red';
                e.target.parentElement.parentElement.classList.replace('green', 'red');
                e.target.parentElement.parentElement.classList.replace('yellow', 'red');
                storageSet();
            });
            priorityRedElement.oninput = (() => storageSet());
            buttonBox.appendChild(priorityRedElement);

            let dateElement = document.createElement('input');
            dateElement.setAttribute('type', 'date');
            dateElement.classList.add('date');
            dateElement.value = todo.date;
            dateElement.addEventListener('input', (e) => todo.date = e.target.value);
            dateElement.oninput = (() => storageSet());
            buttonBox.appendChild(dateElement);

            let completeElement = document.createElement('input');
            completeElement.setAttribute('type', 'checkbox');
            completeElement.checked = todo.complete;
            completeElement.addEventListener('input', (e) => {
                todo.complete = e.target.checked;
                if (e.target.checked) {
                    e.target.parentElement.parentElement.classList.add('complete');
                } else {
                    e.target.parentElement.parentElement.classList.remove('complete');
                }
                domUpdate();
            });
            completeElement.oninput = (() => storageSet());
            buttonBox.appendChild(completeElement);

            let todoDeleteButton = document.createElement('button');
            todoDeleteButton.classList.add('deletetodo');
            todoDeleteButton.innerHTML = '<img class="icon" src="' + imageTrash +'">';
            todoDeleteButton.addEventListener('click', () => {
                if (window.confirm('Really delete?')) {
                    project.todoList = project.todoList.filter((e) => e !== todo);
                    domUpdate();
                }
            });
            buttonBox.appendChild(todoDeleteButton);

            let todoUpButton = document.createElement('button');
            todoUpButton.innerHTML = '<img class="icon" src="' + imageUp +'">';
            todoUpButton.addEventListener('click', () => {
                let todoIndex = project.todoList.findIndex((e) => e === todo);
                if (todoIndex > 0) {
                    arrayMoveMutable(project.todoList, todoIndex, todoIndex - 1);
                    domUpdate();
                }
            });
            buttonBox.appendChild(todoUpButton);

            let todoDownButton = document.createElement('button');
            todoDownButton.innerHTML = '<img class="icon" src="' + imageDown +'">';
            todoDownButton.addEventListener('click', () => {
                let todoIndex = project.todoList.findIndex((e) => e === todo);
                if (todoIndex < project.todoList.length - 1) {
                    arrayMoveMutable(project.todoList, todoIndex, todoIndex + 1);
                    domUpdate();
                }
            });
            buttonBox.appendChild(todoDownButton);

            projectElement.appendChild(todoElement);
        }
        // add new todo button
        let newTodoButton = document.createElement('button');
        newTodoButton.classList.add('newtodo');
        newTodoButton.innerHTML = '<img class="icon" src="' + imagePlus +'">';
        newTodoButton.addEventListener('click', () => {
            project.addTodo('New todo', false, 'Description', today(), 'green');
            domUpdate();
        })
        projectElement.appendChild(newTodoButton);
    }
    // add new project button
    let newProjectButton = document.createElement('button');
    newProjectButton.classList.add('newproject');
    newProjectButton.innerHTML = '<img class="icon" src="' + imagePlus +'">';
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
        return;
    } else {
        localStorage.setItem('projectList', JSON.stringify(projectList));
    };
}

function storageGet() {
    if (!storageAvailable('localStorage')) {
        return;
    } else if (localStorage.getItem('projectList')) {
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

storageGet();
domUpdate();