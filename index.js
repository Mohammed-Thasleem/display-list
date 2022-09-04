const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const itemName = document.querySelector('.item-name');
const items = [];

function addItem(event) {
    event.preventDefault()
    let item = addItems.value;
    if (item === '') {
        return true;
    }
    items.push(item)
    displayItem()
}

function displayItem() {
    itemsList.innerHTML = `${itemName.value}`;
    for (var i = 0; i < items.length; i++) {
        let itemLi = itemsList.getElementsByTagName('li');
        itemLi.innerHTML = items[i];
        itemsList.appendChild(itemLi);
      }
}

addItems.addEventListener('submit', addItem);