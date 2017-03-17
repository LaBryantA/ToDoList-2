document.getElementById("addButton").addEventListener("click", additem);

function additem(){
  var task = document.getElementById("task").value;
  var taskDiv = document.createElement('div');
  taskDiv.innerHTML =
    "<span>hello</span>";
  document.getElementById("taskContainer").appendChild(taskDiv);
}
