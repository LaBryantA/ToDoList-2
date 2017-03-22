var itemCount = 0;
var listData = [];

document.getElementById("addButton").addEventListener("click", additem);

function additem(){
  //Get task name from task input
  var taskName = document.getElementById("task").value;
  if(taskName != ""){
    document.getElementById("task").value = "";

    //Create container to hold task and remove button
    var taskDiv = document.createElement('div');
    taskDiv.style.display = "flex";
    taskDiv.style.marginBottom = "20px";
    taskDiv.style.width = "100%";
    taskDiv.style.minHeight = "30px";
    taskDiv.className = "flex-horizFlow";
    taskDiv.innerHTML =
    "<div id=" + itemCount + " class='itemName' data-finished='false' onclick='toggleCompletion(this)'>"
      + taskName + "</div>\n";
    taskDiv.innerHTML += "<button class='remove-button' onclick='remove(this)'>Remove</button>";

    //Add item data into listData
    var taskItem = {
      item:taskName,
      completed:false,
    }
    listData.push(taskItem);

    //Append container containing task and button into the list and increment itemCount
    document.getElementById("taskContainer").appendChild(taskDiv);
    itemCount++;
  }
}

function toggleCompletion(task){
  //Get variables
  var completionStatus = task.getAttribute("data-finished");
  var taskNumber = task.getAttribute("id");

  if(completionStatus == "true"){
    //If task is completed, remove strikethrough and set incomplete
    task.style.textDecoration = "none";
    task.setAttribute("data-finished", false);
    listData[taskNumber].completed = false;
  }
  else {
    //If task is incomplete, add strikethrough and set complete
    if(document.getElementById("filterButton").innerHTML == "Show Completed"){
      document.getElementById(taskNumber).parentNode.style.display = "none";
    }
    task.style.textDecoration = "line-through";
    task.setAttribute("data-finished", true);
    listData[taskNumber].completed = true;
  }
}

function remove(removeButton){
  //Get id of task to be removed
  var tbRemovedID = removeButton.previousElementSibling.getAttribute("id");

  //Remove from array of tasks and decrements count
  listData.splice(tbRemovedID, 1);
  itemCount--;

  //Get current status of button
  var status = document.getElementById("filterButton").innerHTML;

  if(status == "Hide Completed"){
    //Clear and repopulate task container with only incomplete tasks
    document.getElementById("taskContainer").innerHTML = "";
    var index;
    for(index = 0; index < itemCount; index++){
      var taskName = listData[index].item;
      var taskStatus = listData[index].completed;
      var taskDiv = document.createElement('div');
      taskDiv.style.display = "flex";
      taskDiv.style.marginBottom = "20px";
      taskDiv.style.width = "100%";
      taskDiv.style.minHeight = "30px";
      taskDiv.className = "flex-horizFlow";
      if(taskStatus == true){
        console.log("1");
        taskDiv.innerHTML =
        "<div id=" + index + " class='itemName' style='text-decoration:line-through' data-finished='true' onclick='toggleCompletion(this)'>"
          + taskName + "</div>\n";
      }
      else{
        console.log("2");
        taskDiv.innerHTML =
        "<div id=" + index + " class='itemName' data-finished='false' onclick='toggleCompletion(this)'>"
          + taskName + "</div>\n";
      }
      taskDiv.innerHTML += "<button class='remove-button' onclick='remove(this)'>Remove</button>";
      document.getElementById("taskContainer").appendChild(taskDiv);
    }
  }
  else{
    //Clear and repopulate task container with only incomplete tasks
    document.getElementById("taskContainer").innerHTML = "";
    var index;
    for(index = 0; index < itemCount; index++){
      var taskName = listData[index].item;
      var taskStatus = listData[index].completed;
      if(taskStatus == false){
        var taskDiv = document.createElement('div');
        taskDiv.style.display = "flex";
        taskDiv.style.marginBottom = "20px";
        taskDiv.style.width = "100%";
        taskDiv.style.minHeight = "30px";
        taskDiv.className = "flex-horizFlow";
        taskDiv.innerHTML =
        "<div id=" + index + " class='itemName' data-finished='false' onclick='toggleCompletion(this)'>"
          + taskName + "</div>\n";
        taskDiv.innerHTML += "<button class='remove-button' onclick='remove(this)'>Remove</button>";
        document.getElementById("taskContainer").appendChild(taskDiv);
      }
    }
  }
}

function filterComplete(){
  //Get current status of button
  var status = document.getElementById("filterButton").innerHTML;

  if(status == "Hide Completed"){
    //Swap inner text of button
    document.getElementById("filterButton").innerHTML = "Show Completed";

    //Clear and repopulate task container with only incomplete tasks
    document.getElementById("taskContainer").innerHTML = "";
    var index;
    for(index = 0; index < itemCount; index++){
      if(listData[index].completed == false){
        var taskName = listData[index].item;
        var taskStatus = listData[index].completed;
        var taskDiv = document.createElement('div');
        taskDiv.style.display = "flex";
        taskDiv.style.marginBottom = "20px";
        taskDiv.style.width = "100%";
        taskDiv.style.minHeight = "30px";
        taskDiv.className = "flex-horizFlow";
        if(taskStatus == "true"){
          taskDiv.innerHTML =
          "<div id=" + index + " class='itemName' style='text-decoration:line-through' data-finished='true' onclick='toggleCompletion(this)'>"
            + taskName + "</div>\n";
        }
        else{
          taskDiv.innerHTML =
          "<div id=" + index + " class='itemName' data-finished='false' onclick='toggleCompletion(this)'>"
            + taskName + "</div>\n";
        }
        taskDiv.innerHTML += "<button class='remove-button' onclick='remove(this)'>Remove</button>";
        document.getElementById("taskContainer").appendChild(taskDiv);
      }
    }
  }
  else{
    //Swap inner text of button
    document.getElementById("filterButton").innerHTML = "Hide Completed";

    //Clear and repopulate task container with only incomplete tasks
    document.getElementById("taskContainer").innerHTML = "";
    var index;
    for(index = 0; index < itemCount; index++){
      var taskName = listData[index].item;
      var taskStatus = listData[index].completed;
      var taskDiv = document.createElement('div');
      taskDiv.style.display = "flex";
      taskDiv.style.marginBottom = "20px";
      taskDiv.style.width = "100%";
      taskDiv.style.minHeight = "30px";
      taskDiv.className = "flex-horizFlow";
      if(taskStatus == true){
        taskDiv.innerHTML =
        "<div id=" + index + " class='itemName' style='text-decoration:line-through' data-finished='true' onclick='toggleCompletion(this)'>"
          + taskName + "</div>\n";
      }
      else{
        taskDiv.innerHTML =
        "<div id=" + index + " class='itemName' data-finished='false' onclick='toggleCompletion(this)'>"
          + taskName + "</div>\n";
      }
      taskDiv.innerHTML += "<button class='remove-button' onclick='remove(this)'>Remove</button>";
      document.getElementById("taskContainer").appendChild(taskDiv);
    }
  }
}
//document.getElementById("b0").previousElementSibling.getAttribute("id")
