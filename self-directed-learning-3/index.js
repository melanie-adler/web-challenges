console.clear();

const form = document.querySelector('[data-js="mail-generator-form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  generateEmail(data.firstName, data.lastName);
});

function generateEmail(param1, param2) {
  const generatedMailOutput = document.querySelector(
    '[data-js="generated-email"]'
  );

  generatedMailOutput.textContent =
    `${param1}.${param2}@example.com`.toLowerCase();
}
