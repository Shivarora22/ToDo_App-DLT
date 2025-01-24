document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form submission
  
      const task = taskInput.value.trim();
      if (task) {
        // Creating a new task here
        const listItem = document.createElement("li");
        listItem.textContent = task;
        
        // Added the  delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "10px";
        deleteButton.addEventListener("click", () => {
          taskList.removeChild(listItem);
        });
  
  
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
  
        // Clearing the input field
        taskInput.value = "";
      }
    });
  });
  