let addButton = document.querySelector(".fa-plus");
let Tasks = [];
let task_input = document.querySelector("#task_input");

let tasks_div = document.querySelector(".tasks");
tasks_div.textContent = "Your Tasks will appear here";

task_input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    addButton.click();
  }
});

addButton.addEventListener("click", () => {
  if (task_input.value.trim() === "") {
    alert("Please enter your task to add");
    return;
  }
  Tasks.push({ text: task_input.value.trim(), completed: false });
  task_input.value = "";
  renderTasks();
});

function renderTasks() {
  if (Tasks.length === 0) {
    tasks_div.textContent = "Your Tasks will appear here";
  } else {
    tasks_div.innerHTML = "";
    Tasks.forEach((task, index) => {
      let task_div = document.createElement("div");
      task_div.setAttribute("class", "task");

      let task_number = document.createElement("div");
      let task_text = document.createElement("div");
      task_text.setAttribute("class", "task_text");

      let checkbox = document.createElement("div");
      checkbox.setAttribute("class", "checkbox");

      let remove_button = document.createElement("div");
      remove_button.setAttribute("class", "remove_button");

      task_number.textContent = `Task No ${index + 1}:`;
      task_text.textContent = task.text;
      checkbox.innerHTML = task.completed
        ? `<i class="fa-solid fa-circle-check"></i>`
        : `<i class="fa-regular fa-circle-check"></i>`;
      remove_button.innerHTML = `<i class="fa-solid fa-circle-minus"></i>`;

      task_div.appendChild(task_number);
      task_div.appendChild(task_text);
      task_div.appendChild(checkbox);
      task_div.appendChild(remove_button);

      tasks_div.appendChild(task_div);

      checkbox.addEventListener("click", () => {
        task.completed = !task.completed;
        checkbox.innerHTML = task.completed
          ? `<i class="fa-solid fa-circle-check"></i>`
          : `<i class="fa-regular fa-circle-check"></i>`;
      });

      remove_button.addEventListener("click", () => {
        Tasks.splice(index, 1);
        renderTasks();
      });
    });
  }
}
