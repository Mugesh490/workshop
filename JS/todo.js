function getTasks() {
    let tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function newTask() {
    let input = document.getElementById('todoInput');
    let tasks = getTasks();
    tasks.push({ task: input.value, completed: false });
    saveTasks(tasks);
    input.value = '';
    showTasks();
}

function deleteTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    showTasks();
}

function toggleComplete(index) {
    let tasks = getTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    showTasks();
}

function showTasks() {
    let tasks = getTasks();
    let adder = '';
    for(let i = 0; i < tasks.length; i++) {
        adder += '<li>';
        if(tasks[i].completed) {
            adder += '<s>' + tasks[i].task + '</s>';
        } else {
            adder += tasks[i].task;
        }
        adder += ' <button onclick="toggleComplete(' + i + ')">Toggle Complete</button>';
        adder += ' <button onclick="deleteTask(' + i + ')">Delete</button>';
        adder += '</li>';
    }
    document.getElementById('todoList').innerHTML = adder;
}

showTasks();