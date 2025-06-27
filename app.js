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

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.padding = 0;
    deleteButton.style.border = "none";
    deleteButton.style.fontSize = "12px";

    // add click event to delete the item
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });

    // Append it to the list
    listItem.appendChild(deleteButton);
    listContainer.appendChild(listItem);

    // clear the input field
    inputText.value = "";
  }
  // Enter Button Added
  inputText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addItem();
    }
  });
}
