const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

const renderTasks = () => {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    if (task.completed) taskCard.classList.add('completed');

    taskCard.innerHTML = `
      <span>${task.text}</span>
      <small>Created at: ${task.createdAt}</small>
      <div>
        <button class="complete-btn" onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    taskList.appendChild(taskCard);
  });
};

const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = {
      text: taskText,
      completed: false,
      createdAt: new Date().toLocaleString()
    };
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
  }
};

const toggleComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  renderTasks();
};

addButton.addEventListener('click', addTask);

renderTasks();