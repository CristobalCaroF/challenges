import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  const foundCountry = countries.filter((country) => {
    return country.name.startsWith(searchString);
  });

  if (foundCountry) {
    for (let matchCountry of foundCountry) {
      const countryElement = Country(matchCountry);
      container.append(countryElement);
    }
  }
});
