const plus = document.getElementById('plus');
const newTask = document.getElementById('newTask');
const addButton = document.getElementById('plus');
const ul = document.getElementById('ul')

addButton.onclick= function getInputValue() {
  const inputValue = document.getElementById("inputValue").value;
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


  // Clears the inputValue on click
  document.getElementById("inputValue").value ='';
  }
}

document.addEventListener('click', function (e){
  if (e.target.className == 'delete') {
    // Remove Current Task
    e.target.parentNode.remove();
  } 
  if(e.target.classList.contains('task')){
    e.target.classList.toggle('finished');
  }
})









