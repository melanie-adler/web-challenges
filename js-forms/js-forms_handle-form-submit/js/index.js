console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  event.target.reset();
  event.target.elements.firstName.focus();

  console.log(formData);
  console.log(data);

  // const ageBadnessSum =
  // console.log(`"The age-badness sum of ${firstName} is ${ageBadnessSum}"`)
});
