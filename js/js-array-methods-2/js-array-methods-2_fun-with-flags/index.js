import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString =
    event.target.value[0].toUpperCase() +
    event.target.value.slice(1).toLowerCase();

  //   const foundCountry = countries.find((country) =>
  //     country.name.startsWith(searchString)
  //   );

  //   if (foundCountry) {
  //     const countryElement = Country(foundCountry);
  //     container.append(countryElement);
  //   }
  // });

  const foundCountries = countries.filter((country) => {
    return country.name.startsWith(searchString);
  });

  foundCountries.forEach((country) => {
    if (foundCountries) {
      const countryElement = Country(country);
      container.append(countryElement);
    }
  });
});
