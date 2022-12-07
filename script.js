const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
    };
    
    items.push(item);
    this.reset();
}

function populatelList(plates =[], platesList) { platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" checked="false"/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
}).join('');    
}

addItems.addEventListener('submit', addItem);

populatelList(items, itemsList);
const checkBoxes = document.querySelectorAll('input');

checkBoxes.forEach(input => input.addEventListener('click', () => alert('hi')));

