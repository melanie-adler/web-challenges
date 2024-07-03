console.clear();

function generateEmail(param1, param2) {
  const generatedMailOutput = document.querySelector(
    '[data-js="generated-email"]'
  );
}

const form = document.querySelector('[data-js="mail-generator-form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data.firstName, data.lastName);

  generateEmail(data.firstName, data.lastName);
});
