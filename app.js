const addItemButton = document.getElementById("add-item-button");
const inputFields = document.getElementById("input-fields");
const itemFields = document.getElementById("item-fields");
const addPersonButton = document.getElementById("add-person-button");
let itemCount = 1;

addItemButton.addEventListener("click", function () {
    itemCount++;
    const newItem = document.createElement("input");
    newItem.setAttribute("type", "number");
    newItem.setAttribute("class", "check-inputs");
    newItem.setAttribute("name", `input-${itemCount}`);
    newItem.setAttribute("placeholder", `Cost of item ${itemCount}`);
    const whoseItem = document.createElement("input")
    whoseItem.setAttribute("type", "text");
    whoseItem.setAttribute("class", "name-inputs");
    whoseItem.setAttribute("placeholder", "Who")
    inputFields.appendChild(newItem);
    itemFields.appendChild(whoseItem);
})