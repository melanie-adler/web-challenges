console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  const toastMessage = document.createElement("li");
  toastContainer.append(toastMessage);
  toastMessage.textContent = "I'm a new toast message.";
  toastMessage.classList.add("toast-container__message");
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages

  toastContainer.innerHTML = "";
});
