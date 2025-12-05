const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
let editIndex = -1;
let tasks = [];


addBtn.addEventListener("click", () => {
const value = input.value.trim();
if (value === "") return alert("Enter something ✨");


if (editIndex === -1) {
tasks.push(value);
} else {
tasks[editIndex] = value;
editIndex = -1;
addBtn.innerText = "+";
}


input.value = "";
render();
});


function render() {
list.innerHTML = "";
tasks.forEach((task, i) => {
list.innerHTML += `
<li>
<span>${task}</span>
<div class="btns">
<button class="edit" onclick="editTask(${i})">✎</button>
<button class="delete" onclick="deleteTask(${i})">🗑️</button>
</div>
</li>`;
});
}


function editTask(i) {
input.value = tasks[i];
editIndex = i;
addBtn.innerText = "✔";
}


function deleteTask(i) {
tasks.splice(i, 1);
render();
}