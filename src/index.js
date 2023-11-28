import './style.css';

/* definitions */
let projectList = [];

/* factories */
function createProject (name) {
    console.log('creating project');

    name = name;
    let todoList = [];

    const addTodo = (name) => {
        todoList.push(createTodo(name));
    };

    return {name, todoList, addTodo};
};

function createTodo (name) {
    console.log('creating todo');

    name =  name;

    return {name};
};

/* tests */
projectList.push(createProject('goo'));
projectList[0].addTodo('gaa');
console.log(projectList);