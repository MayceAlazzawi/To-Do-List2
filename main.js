let plus = document.getElementById('plus');
let newTask = document.getElementById('newTask');
let addButton = document.getElementById('plus');
let ul = document.getElementById('ul')
let tasksCountBlok = document.getElementById('tasks-count');
let complitedTasksCountBlok = document.getElementById('complited-tasks');
let tasksCount = 0;
let complitedTasksCount = 0;

window.onload = inputValue.focus();    

addButton.onclick= function getInputValue() {
  let inputValue = document.getElementById("inputValue").value;
  if (inputValue === '') {
    alert("You must write somdething!");
  }
  else {
    // create li element to put the text and the delete button in it
    let li = document.createElement('li');
    
    // create text element 
    let textElement = document.createElement('span');
    
    // put the input value into the text
    textElement.textContent = inputValue;
    
    // Add class name to text
    textElement.className = 'task';
    
    // Append the text element to li
    li.appendChild(textElement);
    
    // append all 'li's to ul
    ul.appendChild(li);
    
    // create delete element 
    let deleteElement = document.createElement("span");
    
    // Create text to delete button
    let deleteText = document.createTextNode("Delete");
    
    // Add delete Text To Delete Button
    deleteElement.appendChild(deleteText);
    
    // Add class name to delete button
    deleteElement.className = 'delete';
    
    // Append the delete element/button to li
    li.appendChild(deleteElement);
    
    // Tasks count increases when deleting
    tasksCount += 1;
    tasksCountBlok.innerHTML = tasksCount;
    
    // Clears the inputValue on click
    document.getElementById("inputValue").value ='';
  }
}

document.addEventListener('click', function (e){
  if (e.target.className == 'delete') {
    // Remove Current Task
    e.target.parentNode.remove();
    
    // Tasks count decreases when deleting
    tasksCount -= 1;
    tasksCountBlok.innerHTML = tasksCount;
  } 
  if(e.target.classList.contains('task')){
    e.target.classList.toggle('finished');
    // Tasks complited count
    complitedTasksCount += 1;  
    complitedTasksCountBlok.innerHTML = complitedTasksCount;
  }
})


