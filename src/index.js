import './style.css';

/* definitions */
let projectList = [];
const projectContainer = document.querySelector('.projectcontainer');

/* factories */
function createProject(name) {
    console.log('creating project');

    name = name;
    let todoList = [];

    const addTodo = (name) => {
        todoList.push(createTodo(name));
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
    for (const project of projectList) {
        //draw project
        let projectElement = document.createElement('div');
        projectElement.classList.add('project');

        let nameElement = document.createElement('div');
        nameElement.innerHTML = project.name;
        nameElement.setAttribute('contenteditable', 'true');
        nameElement.addEventListener('input', (e) => project.name = e.target.textContent);
        projectElement.appendChild(nameElement);

        projectContainer.appendChild(projectElement);

        for (const todo of project.todoList) {
            // draw todo
            let todoElement = document.createElement('div');
            todoElement.classList.add('todo');
            todoElement.innerHTML = todo.name;
            projectElement.appendChild(todoElement);
        }
    }
    return;
}

/* tests */
projectList.push(createProject('goo'));
projectList[0].addTodo('gaa');
projectList.push(createProject('boo'));
projectList[1].addTodo('baa');
projectList[1].addTodo('baa');
projectList[1].addTodo('baa');
console.log(projectList);

domUpdate();