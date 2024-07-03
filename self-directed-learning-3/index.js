console.clear();

const mailGeneratorForm = document.querySelector(
  '[data-js="mail-generator-form"]'
);

mailGeneratorForm.addEventListener("submit", (event) => {
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
    `Email: ${param1}.${param2}@example.com`.toLowerCase();
}

const fullNameGeneratorForm = document.querySelector(
  '[data-js="full-name-generator-form"]'
);

fullNameGeneratorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  getUserFromEmail(data.email);
});

function getUserFromEmail(email) {
  const generatedNameOutput = document.querySelector(
    '[data-js="generated-full-name"]'
  );

  if (email.includes("@")) {
    const fields = email.split("@");
    const fullName = fields[0];
    if (fullName.includes(".")) {
      const nameToSplit = fullName.split(".");
      const generatedFirstName = nameToSplit[0];
      const generatedLastName = nameToSplit[1];
      generatedNameOutput.textContent = `${generatedFirstName} ${generatedLastName}`;
    } else {
      console.log("Email doesn't include .");
      return 0;
    }
  } else {
    console.log("Email doesn't include @");
    return 0;
  }
}
