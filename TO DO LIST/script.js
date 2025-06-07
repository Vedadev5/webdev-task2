// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (!name || !email || !message) {
      msg.textContent = "Please fill in all fields.";
      msg.style.color = "red";
    } else if (!email.match(emailPattern)) {
      msg.textContent = "Please enter a valid email.";
      msg.style.color = "red";
    } else {
      msg.textContent = "Message sent successfully!";
      msg.style.color = "green";
    }
  });
  
  // To-Do List Logic
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    const delBtn = document.createElement("button");
    delBtn.textContent = "Remove";
    delBtn.onclick = () => li.remove();
  
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
  