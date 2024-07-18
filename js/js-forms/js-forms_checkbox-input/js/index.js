console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", () => {
  if (!tosCheckbox.checked) {
    showTosError();
  } else {
    hideTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const tosChecked = tosCheckbox.checked;

  if (!tosChecked) {
    showTosError();
    return;
  }

  hideTosError();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
  form.reset();
  showSuccessMessage();
});
