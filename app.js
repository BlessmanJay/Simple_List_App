const addButton = document.getElementById("add-button");
const inputText = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");

// Add Event Listener to Add Button
addButton.addEventListener("click", addItem);

// Defining the addItem function
function addItem() {
  const value = inputText.value.trim(); // get and trim the input value

  if (value !== "") {
    // create a new <li> element
    const listItem = document.createElement("li");
    listItem.textContent = value;

    // Append it to the list
    listContainer.appendChild(listItem);

    // clear the input field
    inputText.value = "";
  }
}
