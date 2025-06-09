function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (!taskText) {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  const span = document.createElement('span');
  span.textContent = taskText;
  span.className = 'task-text';

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => li.remove();

  const controlsDiv = document.createElement('div');
  controlsDiv.className = 'task-controls';
  controlsDiv.appendChild(checkbox);
  controlsDiv.appendChild(deleteBtn);

  li.appendChild(controlsDiv);
  li.appendChild(span);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
