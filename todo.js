// Get references to HTML elements
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

// Add event listener to the add button
addButton.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  var taskText = taskInput.value;

  if (taskText) {
    var listItem = document.createElement("li");
    listItem.className = "task";
    listItem.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTask);

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}

// Function to delete a task
function deleteTask() {
  var listItem = this.parentNode;
  taskList.removeChild(listItem);
}
function addTodo() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === "") {
    alert("Please enter a task");
    return;
  }

  var todoItem = {
    task: inputValue,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  };

  todos.push(todoItem);
  renderTodoList();

  document.getElementById("myInput").value = "";
}
function renderTodoList() {
  var todoList = document.getElementById("myUL");
  todoList.innerHTML = "";

  todos.forEach(function(todoItem) {
    var listItem = document.createElement("li");
    var textNode = document.createTextNode(todoItem.task);
    var timeNode = document.createTextNode(todoItem.time);

    listItem.appendChild(textNode);
    listItem.appendChild(document.createElement("br"));
    listItem.appendChild(timeNode);

    todoList.appendChild(listItem);
  });
}
