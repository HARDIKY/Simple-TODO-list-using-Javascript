let TODOBUT = document.getElementById('todobut');
let TODOCONTAINER = document.getElementById('todocontainer');
let TASKFIELD = document.getElementById('task');

// let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer');
// let inputField = document.getElementById('inputField');

TODOBUT.addEventListener('click', function () {
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = TASKFIELD.value;
  TODOCONTAINER.appendChild(paragraph);
  TASKFIELD.value = '';
  paragraph.addEventListener('click', function () {
    paragraph.style.textDecoration = 'line-through';
  });
  paragraph.addEventListener('dblclick', function () {
    TODOCONTAINER.removeChild(paragraph);
  });
});
