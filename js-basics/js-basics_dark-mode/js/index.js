console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const toogleModeButton = document.querySelector('[data-js="toggle-button"]');

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toogleModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
