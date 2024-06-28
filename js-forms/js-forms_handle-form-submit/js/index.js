console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const ageBadnessSum = Number(data.badness) + Number(data.age);
  console.log(`The age-badness sum of ${data.firstName} is ${ageBadnessSum}.`);

  event.target.reset();
  event.target.elements.firstName.focus();
});
