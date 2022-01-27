// Oppgave 1
const removeTheText = document.getElementById("remove");
const removeTheBtn = document.getElementById("remove-btn");

const removeText = () => {
  removeTheText.innerHTML = null;
};

removeTheBtn.addEventListener("click", removeText);
// Oppgave 2
const textTheChange = document.getElementById("change");
const changeTheBtn = document.getElementById("change-btn");

const changeText = () => {
  textTheChange.innerHTML = "Nå har jeg endret teksten";
};
changeTheBtn.addEventListener('click', changeText);

// Oppgave 3
const inputText = document.getElementById('input-text');
const input = document.getElementById('input');

const removeDefaultText = () => {
  inputText.innerHTML = null;
};

removeDefaultText();

const updateUi = (event) => {
  let letter = event.key;
  inputText.innerHTML += letter;
};

input.addEventListener('keyup', updateUi);

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const ul = document.getElementById('ul');
const writeBtn = document.getElementById('write-list');

const createLi = () => {
  const liElements = myList.map((listElement) => `<li>${listElement}</li>`);
  ul.innerHTML = liElements.join(''); }

  writeBtn.addEventListener('click', createLi);


// Oppgave 5
const text = document.getElementById('text');
const createBtn = document.getElementById('create');
const select = document.getElementById('select');
const htmlPlaceHolder = document.getElementById('placeholder');

const createElement = () => {
  const htmlEl = select.value;
  const message = text.value;
  htmlPlaceHolder.innerHTML += `<${htmlEl}>${message}</${htmlEl}>`;
};

createBtn.addEventListener('click', createElement);
// Oppgave 6

const parent = document.getElementById('list');
const remove = document.getElementById('remove-li');

const removeLi = () => {
  const lastElement = parent.lastElementChild;
  if (lastElement) {
    parent.removeChild(lastElement);
  }
};

remove.addEventListener('click', removeLi);
// Oppgave 7
const inputName = document.getElementById('name');
const theBtn = document.getElementById('order');

const handleKeyUp = () => {
  const name = inputName.value;
  if (name && name.length >= 4) {
    theBtn.disabled = true;
    theBtn.style = 'border: 1px solid red';
  } else {
    theBtn.disabled = false;
    theBtn.style = 'border: 1px solid black';
  }
};

inputName.addEventListener('keyup', handleKeyUp);

// Oppgave 8
const ulParent = document.querySelector('.children');
const ulParentChildren = ulParent.querySelectorAll('li');
const colorTheBtn = document.getElementById('color');

const addBorder = () => {
  Array.from(ulParentChildren).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = 'border: 1px solid purple; margin-bottom: 5px; padding: 5px;';
    } else {
      li.style = 'border: 1px solid blue; margin-bottom: 5px; padding: 5px;';
    }
  });
};

colorTheBtn.addEventListener('click', addBorder);
