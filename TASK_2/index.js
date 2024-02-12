var taskList = document.getElementById("task_c");

function addTask(){
    var taskInput = document.getElementById("taskInput");

    if (taskInput.value.trim() !== " "){
        // <li><div><button></button></div><div>Do the task</div></li>
        var li = document.createElement("li");
        var div_checkbox = document.createElement("div");
        var div_content = document.createElement("div");
        var button = document.createElement("button");

        button.className = "delete";
        button.addEventListener("click", function(){
            taskList.removeChild(li);
        });
        div_checkbox.appendChild(button);
        li.appendChild(div_checkbox);

        div_content.textContent = taskInput.value;
        li.appendChild(div_content);

        taskList.appendChild(li);
        
        taskInput.value = "";
    }else{
        alert("Please enter a task!");
    }
}