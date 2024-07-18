console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  calculatePizzaGain();
  updatePizzaDisplay();
  updateOutputColor();
});

pizzaInput2.addEventListener("input", () => {
  calculatePizzaGain();
  updatePizzaDisplay();
  updateOutputColor();
});

// Task 1
function calculatePizzaGain() {
  const area1 = 2 * Math.PI * (pizzaInput1.value / 2);
  const area2 = 2 * Math.PI * (pizzaInput2.value / 2);

  const gain = ((area2 - area1) / area1) * 100;

  output.textContent = Math.round(gain);
}

// Task 2
function updatePizzaDisplay() {
  const newWidth1 = (pizzaInput1.value / 24) * 100 + "px";
  const newWidth2 = (pizzaInput2.value / 24) * 100 + "px";

  pizza1.style.width = newWidth1;
  pizza2.style.width = newWidth2;
}

// Task 3
function updateOutputColor() {
  if (pizzaInput2.value === pizzaInput1.value) {
    outputSection.classList.add("gray-background");
    outputSection.classList.remove("green-background", "red-background");
  } else if (pizzaInput2.value < pizzaInput1.value) {
    outputSection.classList.add("red-background");
    outputSection.classList.remove("green-background", "gray-background");
  } else {
    outputSection.classList.add("green-background");
    outputSection.classList.remove("red-background", "gray-background");
  }
}
